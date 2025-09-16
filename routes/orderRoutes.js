const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

// Create new order
router.post("/", async (req, res) => {
  try {
    const { name, address, phone, product } = req.body;

    if (!name || !address || !phone || !product) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // ✅ Save order with product snapshot
    const newOrder = new Order({
      name,
      address,
      phone,
      product: {
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
      },
    });

    await newOrder.save();
    res.status(201).json({ message: "✅ Order placed successfully", order: newOrder });
  } catch (error) {
    console.error("❌ Order Save Error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Fetch all orders (Admin panel)
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

module.exports = router;
