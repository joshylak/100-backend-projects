const express = require('express');
const bmiRoutes = require('./routes/bmiRoutes');

const app = express();
const PORT = 3000;

app.use(express.json()); 

app.use('/api/bmi', bmiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});