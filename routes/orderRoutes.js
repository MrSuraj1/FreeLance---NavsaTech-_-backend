const express = require("express");
const Order = require("../model/Order");

const router = express.Router();

// Create new order
router.post("/", async (req, res) => {
  try {
    const { name, address, phone, product } = req.body;

    if (!name || !address || !phone || !product) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newOrder = new Order({ name, address, phone, product });
    await newOrder.save();

    res.status(201).json({ message: "✅ Order placed successfully", order: newOrder });
  } catch (error) {
    console.error("❌ Order Error:", error);
    res.status(500).json({ error: "Server error while placing order" });
  }
});

// Fetch all orders (Admin use)
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

module.exports = router;
