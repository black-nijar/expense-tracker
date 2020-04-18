const express = require('express');
const app = express();
const connectDB = require('./config/db');

// Connect DB
connectDB();

app.use('/api/transaction', require('./routes/transaction'))

const PORT = process.env.PORT || 5000;

// Listening port
app.listen(PORT, () => console.log(`Server running port ${PORT}`))