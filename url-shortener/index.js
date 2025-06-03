const express = require('express');
const { nanoid } = require('nanoid');

const app = express();
const PORT = 3000;

// In-memory store: { shortCode: longURL }
const urlDatabase = {};

app.use(express.json());

// Route to shorten a URL
app.post('/shorten', (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl || !/^https?:\/\/.+\..+/.test(originalUrl)) {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  const shortCode = nanoid(6); // generate short id of length 6
  urlDatabase[shortCode] = originalUrl;

  const shortUrl = `${req.protocol}://${req.get('host')}/${shortCode}`;
  res.json({ shortUrl, originalUrl });
});

// Redirect to original URL
app.get('/:shortCode', (req, res) => {
  const { shortCode } = req.params;
  const originalUrl = urlDatabase[shortCode];

  if (originalUrl) {
    res.redirect(originalUrl);
  } else {
    res.status(404).json({ error: 'Short URL not found' });
  }
});

// View all shortened URLs (for testing/demo)
app.get('/all', (req, res) => {
  res.json(urlDatabase);
});

app.listen(PORT, () => {
  console.log(`🚀 URL Shortener running at http://localhost:${PORT}`);
});
