const express = require('express');
const mongoose = require("mongoose");
const shop = require("./routes/shop");
const home = require('./routes/home');
const orders = require('./routes/orderRoutes');



const cors = require('cors');

app.use(cors({
  origin: [
    "https://68c5664b58c59800083e93bb--navsatech.netlify.app", // your deployed frontend
    "http://localhost:5173" // local dev frontend
  ],
  credentials: true, // if you use cookies or auth headers
}));


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.use('/', home);
app.use('/api/shop', shop);
app.use('/api/orders', orders);

// Connect MongoDB
mongoose.connect("mongodb+srv://surajyadavsy039:Suraj123@cluster0.yassbgc.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log(" MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error(" MongoDB connection error:", err));
