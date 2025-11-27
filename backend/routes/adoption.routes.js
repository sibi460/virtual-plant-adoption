const express = require('express');
const router = express.Router();
const db = require('../config/db.config');

// POST /api/adoptions - create new adoption
router.post('/', async (req, res) => {
  try {
    const { user_id, plant_id, amount } = req.body;
    if (!user_id || !plant_id || !amount) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const [result] = await db.query(
      'INSERT INTO adoptions (user_id, plant_id, amount) VALUES (?, ?, ?)',
      [user_id, plant_id, amount]
    );
    res.status(201).json({ message: 'Plant adopted', adoption_id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/adoptions/user/:userId - get all plants adopted by a user
router.get('/user/:userId', async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT a.id, p.name AS plant_name, a.amount, a.adopted_at 
       FROM adoptions a 
       JOIN plants p ON a.plant_id = p.id 
       WHERE a.user_id = ?`, 
      [req.params.userId]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
