class QuotesController {
  constructor() {
    this.quotes = [
      { id: 1, author: "Albert Einstein", text: "Life is like riding a bicycle. To keep your balance you must keep moving." },
      { id: 2, author: "Oscar Wilde", text: "Be yourself; everyone else is already taken." }
    ];

    // Bind methods to the instance
    this.getAllQuotes = this.getAllQuotes.bind(this);
    this.getQuoteById = this.getQuoteById.bind(this);
    this.createQuote = this.createQuote.bind(this);
    this.updateQuote = this.updateQuote.bind(this);
    this.deleteQuote = this.deleteQuote.bind(this);
  }

  getAllQuotes(req, res) {
    res.json(this.quotes);
  }

  getQuoteById(req, res) {
    const id = parseInt(req.params.id);
    const quote = this.quotes.find(q => q.id === id);
    if (quote) {
      res.json(quote);
    } else {
      res.status(404).json({ message: "Quote not found" });
    }
  }

  createQuote(req, res) {
    const { author, text } = req.body;
    if (!author || !text) {
      return res.status(400).json({ message: "Author and text are required" });
    }
    const newQuote = {
      id: this.quotes.length ? this.quotes[this.quotes.length - 1].id + 1 : 1,
      author,
      text
    };
    this.quotes.push(newQuote);
    res.status(201).json(newQuote);
  }

  updateQuote(req, res) {
    const id = parseInt(req.params.id);
    const { author, text } = req.body;
    const quote = this.quotes.find(q => q.id === id);
    if (quote) {
      quote.author = author || quote.author;
      quote.text = text || quote.text;
      res.json(quote);
    } else {
      res.status(404).json({ message: "Quote not found" });
    }
  }

  deleteQuote(req, res) {
    const id = parseInt(req.params.id);
    const index = this.quotes.findIndex(q => q.id === id);
    if (index !== -1) {
      this.quotes.splice(index, 1);
      res.json({ message: "Quote deleted" });
    } else {
      res.status(404).json({ message: "Quote not found" });
    }
  }
}

module.exports = QuotesController;