const express = require('express');
const router = express.Router();
const { pool } = require('../db/postgres');
const { authMiddleware } = require('../middleware/auth');
const {
  validate,
  leadValidators,
  leadIdValidator,
} = require('../middleware/validators');


const inMemoryLeads = new Map();

const isDbAvailable = async () => {
  try {
    await pool.query('SELECT 1');
    return true;
  } catch {
    return false;
  }
};


router.post('/', authMiddleware, leadValidators, validate, async (req, res) => {
  try {
    const {
      email,
      phone,
      institution_name,
      institution_type,
      city,
      loan_book_size,
    } = req.body;

    const dbAvailable = await isDbAvailable();

    if (dbAvailable) {
      const result = await pool.query(
        `INSERT INTO leads (email, phone, institution_name, institution_type, city, loan_book_size, status)
         VALUES ($1, $2, $3, $4, $5, $6, 'pending')
         RETURNING id, email, phone, institution_name, institution_type, city, loan_book_size, status, created_at`,
        [email || null, phone || null, institution_name, institution_type, city, loan_book_size || null]
      );

      const lead = result.rows[0];
      console.log(`[Lead] Created: ${lead.id} — ${lead.institution_name}`);

      return res.status(201).json({
        success: true,
        message: 'Registration successful. Our team will reach out within 24 hours.',
        id: lead.id,
        lead,
      });
    } else {
   
      const id = 'VIT-' + Math.random().toString(36).substr(2, 8).toUpperCase();
      const lead = {
        id,
        email: email || null,
        phone: phone || null,
        institution_name,
        institution_type,
        city,
        loan_book_size: loan_book_size || null,
        status: 'pending',
        created_at: new Date().toISOString(),
        _storage: 'in-memory (database unavailable)',
      };
      inMemoryLeads.set(id, lead);
      console.log(`[Lead] Created in-memory: ${id} — ${institution_name}`);

      return res.status(201).json({
        success: true,
        message: 'Registration successful. Our team will reach out within 24 hours.',
        id,
        lead,
      });
    }
  } catch (err) {
    console.error('POST /api/leads error:', err);
    res.status(500).json({ success: false, message: 'Failed to save registration. Please try again.' });
  }
});


router.get('/:id', authMiddleware, leadIdValidator, validate, async (req, res) => {
  try {
    const { id } = req.params;
    const dbAvailable = await isDbAvailable();

    if (dbAvailable) {
      const result = await pool.query(
        'SELECT id, email, phone, institution_name, institution_type, city, loan_book_size, status, created_at FROM leads WHERE id = $1',
        [id]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({ success: false, message: 'Lead not found' });
      }

      return res.status(200).json({ success: true, lead: result.rows[0] });
    } else {
  
      const lead = inMemoryLeads.get(id);
      if (!lead) {
        return res.status(404).json({ success: false, message: 'Lead not found' });
      }
      return res.status(200).json({ success: true, lead });
    }
  } catch (err) {
    console.error('GET /api/leads/:id error:', err);
    res.status(500).json({ success: false, message: 'Failed to retrieve lead.' });
  }
});


router.get('/', async (req, res) => {
  try {
    const dbAvailable = await isDbAvailable();
    if (dbAvailable) {
      const result = await pool.query(
        'SELECT id, email, institution_name, institution_type, city, status, created_at FROM leads ORDER BY created_at DESC LIMIT 100'
      );
      return res.status(200).json({ success: true, leads: result.rows, count: result.rows.length });
    } else {
      const leads = Array.from(inMemoryLeads.values());
      return res.status(200).json({ success: true, leads, count: leads.length, _note: 'In-memory storage' });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve leads.' });
  }
});

module.exports = router;
