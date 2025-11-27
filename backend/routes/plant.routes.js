const express = require('express');
const router = express.Router();
const db = require('../config/db.config');

// GET /api/plants - list all plants
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM plants ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/plants/:id - get plant by id
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM plants WHERE id = ?', [req.params.id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Plant not found' });
    }
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
