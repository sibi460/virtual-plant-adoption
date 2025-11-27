const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/db.config');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/test-db', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT NOW() as now');
    res.json({ message: "DB connected", time: rows[0].now });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to Virtual Plant Adoption Backend API');
});

const plantRoutes = require('./routes/plant.routes');
app.use('/api/plants', plantRoutes);

const adoptionRoutes = require('./routes/adoption.routes');
app.use('/api/adoptions', adoptionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
