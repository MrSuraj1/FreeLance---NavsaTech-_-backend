const express = require('express');
const mongoose = require("mongoose");
const shop = require("./routes/shop");
const home = require('./routes/home');
const orders = require('./routes/orderRoutes');
const cors = require('cors');

const app = express();  // <-- initialize first
const PORT = process.env.PORT || 5000;

// CORS setup
app.use(cors({
 origin: [
    "https://68c5c43758c598000849b4c7--navsatech.netlify.app/", // preview build
    "https://navsatech.netlify.app/",                          // final domain
     /\.netlify\.app$/ ,   
    "http://localhost:5173"                                   // local dev
  ],
  credentials: true,
}));

app.use(express.json());

// Routes
app.use('/', home);
app.use('/api/shop', shop);
app.use('/api/orders', orders);

// MongoDB connection
mongoose.connect("mongodb+srv://surajyadavsy039:Suraj123@cluster0.yassbgc.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
