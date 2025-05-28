const express = require('express');
const app = express();
const postRoutes = require('./routes/posts');

app.use(express.json());
app.use('/api/posts', postRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});