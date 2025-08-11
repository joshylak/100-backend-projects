import express from 'express';
const router = express.Router();

/**
 * @route GET /users
 * @desc Get all users
 * @access Public
 */
router.get('/users', (req, res) => {
  res.json([{ id: 1, name: "John Doe" }]);
});

/**
 * @route POST /users
 * @desc Create a new user
 * @access Private
 */
router.post('/users', (req, res) => {
  res.json({ message: "User created" });
});

export default router;
