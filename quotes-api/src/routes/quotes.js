const express = require('express');
const router = express.Router();
const QuotesController = require('../controllers/quotesController');
const quotesController = new QuotesController();

// GET all quotes
router.get('/', (req, res) => quotesController.getAllQuotes(req, res));

// GET a quote by ID
router.get('/:id', (req, res) => quotesController.getQuoteById(req, res));

// POST a new quote
router.post('/', (req, res) => quotesController.createQuote(req, res));

// PUT (update) a quote by ID
router.put('/:id', (req, res) => quotesController.updateQuote(req, res));

// DELETE a quote by ID
router.delete('/:id', (req, res) => quotesController.deleteQuote(req, res));

module.exports = router;