const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB, sequelize } = require('./config/db');
const userRoutes = require('./routes/users');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
const authRoutes = require('./routes/authRoutes');


// Auth routes
app.use('/api/auth', authRoutes);
const itemRoutes = require('./routes/itemRoutes');

// Add this below the user routes
app.use('/api/items', itemRoutes);


// Sync database and start server
connectDB();
sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
