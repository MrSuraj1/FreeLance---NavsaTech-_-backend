const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const shop = require("./routes/shop");
const home = require('./routes/home');
const orders = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS setup
app.use(cors({
  origin: ["https://68c560db9db0af95c70d3430--navsatech.netlify.app/", "http://localhost:5173"], // frontend URLs
  credentials: true,
}));

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
