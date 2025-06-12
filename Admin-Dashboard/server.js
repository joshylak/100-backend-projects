const app = require('./app');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Dashboard API listening on port ${PORT}`));
