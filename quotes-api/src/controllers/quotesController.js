class QuotesController {
    constructor(quotes) {
        this.quotes = quotes;
    }

    getAllQuotes(req, res) {
        res.json(this.quotes);
    }

    getQuoteById(req, res) {
        const quoteId = parseInt(req.params.id, 10);
        const quote = this.quotes.find(q => q.id === quoteId);
        if (quote) {
            res.json(quote);
        } else {
            res.status(404).json({ message: 'Quote not found' });
        }
    }

    createQuote(req, res) {
        const newQuote = {
            id: this.quotes.length + 1,
            author: req.body.author,
            text: req.body.text,
            category: req.body.category
        };
        this.quotes.push(newQuote);
        res.status(201).json(newQuote);
    }

    updateQuote(req, res) {
        const quoteId = parseInt(req.params.id, 10);
        const quoteIndex = this.quotes.findIndex(q => q.id === quoteId);
        if (quoteIndex !== -1) {
            const updatedQuote = {
                ...this.quotes[quoteIndex],
                ...req.body
            };
            this.quotes[quoteIndex] = updatedQuote;
            res.json(updatedQuote);
        } else {
            res.status(404).json({ message: 'Quote not found' });
        }
    }

    deleteQuote(req, res) {
        const quoteId = parseInt(req.params.id, 10);
        const quoteIndex = this.quotes.findIndex(q => q.id === quoteId);
        if (quoteIndex !== -1) {
            this.quotes.splice(quoteIndex, 1);
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Quote not found' });
        }
    }
}

export default QuotesController;