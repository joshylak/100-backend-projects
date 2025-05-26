const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Helper function to check palindrome
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

// POST /check endpoint
app.post('/check', (req, res) => {
  const { text } = req.body;

  if (typeof text !== 'string') {
    return res.status(400).json({ error: 'Invalid input. Please send a string.' });
  }

  const result = isPalindrome(text);
  res.json({ text, isPalindrome: result });
});

app.listen(port, () => {
  console.log(`Palindrome checker API running at http://localhost:${port}`);
});
