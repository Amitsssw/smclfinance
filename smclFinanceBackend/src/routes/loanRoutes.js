const express = require('express');
const router = express.Router();
const { createLoanApplication, getLoanApplication } = require('../controllers/loanController');

// Create a new loan application
router.post('/apply', createLoanApplication);

// Get loan application by ID
router.get('/:id', getLoanApplication);

module.exports = router;
