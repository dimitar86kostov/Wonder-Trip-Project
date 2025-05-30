require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
app.use('/users', authRoutes);


// Basic test route
app.get('/', (req, res) => {
  res.json({ message: 'WonderTrip API is live 🎿' });
});

// Start server after DB is connected
connectDB().then(() => {
  const PORT = process.env.PORT || 3030;
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
});

