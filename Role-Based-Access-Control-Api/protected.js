const express = require('express');
const auth = require('./middlewares/auth');
const role = require('./middlewares/role');

const router = express.Router();

router.get('/admin', auth, role('admin'), (req, res) => {
    res.json({ message: 'Welcome Admin ${req.user.username}' });
    });

router.get('/user', auth, role('user', 'admin'), (req, res) => {
    res.json({ message: 'Welcome User ${req.user.username}' });
});

module.exports = router;