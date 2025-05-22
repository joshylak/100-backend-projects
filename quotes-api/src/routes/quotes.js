const express = require('express');
const router = express.Router();
const QuotesController = require('../controllers/quotesController');
const quotesController = new QuotesController();

// GET all quotes
router.get('/', quotesController.getAllQuotes);

// GET a quote by ID
router.get('/:id', quotesController.getQuoteById);

// POST a new quote
router.post('/', quotesController.createQuote);

// PUT (update) a quote by ID
router.put('/:id', quotesController.updateQuote);

// DELETE a quote by ID
router.delete('/:id', quotesController.deleteQuote);

module.exports = router;