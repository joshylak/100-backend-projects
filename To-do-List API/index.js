require("dotenv").config();
const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON
app.use('/todos', require('./routes/todos'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

