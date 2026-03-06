const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db'); // Database import
const cors = require('cors'); // Sabse upar
// 1. Load config
dotenv.config();

// 2. Database Connect (Ye line add ki hai)
connectDB(); 

const app = express();
app.use(cors());              // app = express() ke neeche

// 3. Middleware (Data lene ke liye)
app.use(express.json());

// 4. Routes Import
const transaction = require('./routes/transaction');

// 5. Routes ko jodo
app.use('/api/transactions', transaction);

// 6. Home Route
app.get('/', (req, res) => {
    res.send('<h1>FinTrack API by Abhishek Yadav is Running!</h1>');
});

// 7. Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Bhai, Server chal gaya port ${PORT} par!`.green.bold);
});


