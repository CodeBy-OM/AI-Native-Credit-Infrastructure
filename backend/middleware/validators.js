const { body, param, validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map(e => ({ field: e.path, message: e.msg })),
    });
  }
  next();
};


const sendOtpValidators = [
  body('email')
    .optional()
    .isEmail().withMessage('Invalid email address')
    .normalizeEmail(),
  body('phone')
    .optional()
    .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)
    .withMessage('Invalid phone number'),
  body().custom((_, { req }) => {
    if (!req.body.email && !req.body.phone) {
      throw new Error('Either email or phone is required');
    }
    return true;
  }),
];


const verifyOtpValidators = [
  body('otp')
    .notEmpty().withMessage('OTP is required')
    .isLength({ min: 6, max: 6 }).withMessage('OTP must be 6 digits')
    .isNumeric().withMessage('OTP must be numeric'),
  body().custom((_, { req }) => {
    if (!req.body.email && !req.body.phone) {
      throw new Error('Either email or phone is required');
    }
    return true;
  }),
];


const leadValidators = [
  body('institution_name')
    .notEmpty().withMessage('Institution name is required')
    .trim()
    .isLength({ min: 2, max: 255 }).withMessage('Institution name must be between 2-255 characters'),
  body('institution_type')
    .notEmpty().withMessage('Institution type is required')
    .isIn(['Bank', 'NBFC', 'MFI', 'Housing Finance Company', 'Fintech NBFC'])
    .withMessage('Invalid institution type'),
  body('city')
    .notEmpty().withMessage('City is required')
    .trim()
    .isLength({ min: 2, max: 100 }).withMessage('City must be between 2-100 characters'),
  body('loan_book_size')
    .optional()
    .isIn(['< ₹50 Cr', '₹50–250 Cr', '₹250–1,000 Cr', '₹1,000–5,000 Cr', '> ₹5,000 Cr', ''])
    .withMessage('Invalid loan book size'),
  body('email')
    .optional()
    .isEmail().withMessage('Invalid email')
    .normalizeEmail(),
  body('phone')
    .optional()
    .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)
    .withMessage('Invalid phone number'),
];


const leadIdValidator = [
  param('id')
    .isUUID().withMessage('Invalid lead ID format'),
];


const contactValidators = [
  body('name').notEmpty().withMessage('Name is required').trim(),
  body('email').optional().isEmail().normalizeEmail(),
  body('institution').optional().trim(),
  body('message').optional().trim(),
];

module.exports = {
  validate,
  sendOtpValidators,
  verifyOtpValidators,
  leadValidators,
  leadIdValidator,
  contactValidators,
};
