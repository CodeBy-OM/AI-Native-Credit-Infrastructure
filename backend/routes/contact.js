const express = require('express');
const router = express.Router();
const { pool } = require('../db/postgres');
const { validate, contactValidators } = require('../middleware/validators');


const inMemoryContacts = [];

router.post('/', contactValidators, validate, async (req, res) => {
  try {
    const { name, email, phone, institution, role, message } = req.body;

    let dbAvailable = false;
    try {
      await pool.query('SELECT 1');
      dbAvailable = true;
    } catch {}

    if (dbAvailable) {
      await pool.query(
        `INSERT INTO contacts (name, email, phone, institution, role, message)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [name, email || null, phone || null, institution || null, role || null, message || null]
      );
    } else {
      inMemoryContacts.push({ name, email, phone, institution, role, message, createdAt: new Date().toISOString() });
    }

    console.log(`[Contact] New demo request from ${name} at ${institution}`);

    res.status(201).json({
      success: true,
      message: 'Demo request received. Our team will reach out within 4 business hours.',
    });
  } catch (err) {
    console.error('POST /api/contact error:', err);
    res.status(500).json({ success: false, message: 'Failed to submit request. Please try again.' });
  }
});

module.exports = router;
