const express = require('express');
const converRoute = require('./routes/convertRoute');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/convert', converRoute);

app.get('/', (req, res) => {
    res.send('Markdown to HTML API IS running.');
    });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});