const express = require('express');
const router = express.Router();
const { OtpStore } = require('../db/mongo');
const { generateToken } = require('../middleware/auth');
const {
  validate,
  sendOtpValidators,
  verifyOtpValidators,
} = require('../middleware/validators');

const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();


router.post('/send-otp', sendOtpValidators, validate, async (req, res) => {
  try {
    const { email, phone } = req.body;
    const identifier = email || phone;

   
    const otp = generateOtp();

    
    await OtpStore.save(identifier, otp);


    console.log(`[OTP] Identifier: ${identifier} | OTP: ${otp}`);


    const responsePayload = {
      success: true,
      message: `OTP sent to ${email ? 'email' : 'phone'}`,
      expiresIn: '10 minutes',
    };

    if (process.env.NODE_ENV !== 'production') {
      responsePayload.otp = otp; 
      responsePayload.note = 'OTP included in response for development testing only';
    }

    res.status(200).json(responsePayload);
  } catch (err) {
    console.error('send-otp error:', err);
    res.status(500).json({ success: false, message: 'Failed to send OTP. Please try again.' });
  }
});


router.post('/verify-otp', verifyOtpValidators, validate, async (req, res) => {
  try {
    const { email, phone, otp } = req.body;
    const identifier = email || phone;


    const session = await OtpStore.find(identifier);

    if (!session) {
      return res.status(400).json({
        success: false,
        message: 'OTP expired or not found. Please request a new one.',
      });
    }

    if (session.attempts >= 5) {
      await OtpStore.delete(identifier);
      return res.status(429).json({
        success: false,
        message: 'Too many failed attempts. Please request a new OTP.',
      });
    }

   
    const storedOtp = session.otp || session; // handles both mongoose doc and plain object
    if ((typeof storedOtp === 'object' ? storedOtp.otp : storedOtp) !== otp) {
      await OtpStore.incrementAttempts(identifier);
      return res.status(400).json({
        success: false,
        message: 'Invalid OTP. Please try again.',
      });
    }

    await OtpStore.delete(identifier);

    
    const token = generateToken({
      identifier,
      email: email || null,
      phone: phone || null,
      verified: true,
    });

    res.status(200).json({
      success: true,
      message: 'OTP verified successfully',
      token,
      expiresIn: '7 days',
    });
  } catch (err) {
    console.error('verify-otp error:', err);
    res.status(500).json({ success: false, message: 'Verification failed. Please try again.' });
  }
});

module.exports = router;
