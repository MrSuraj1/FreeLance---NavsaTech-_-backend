const express = require("express");
const shopSchme = require("../model/shopSchme");
const shop = express.Router();

// Get all products
shop.get("/", async (req, res) => {
  try {
    const response = await shopSchme.find().sort({ createdAt: -1 });
    res.json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get single product by ID
shop.get("/:id", async (req, res) => {
  try {
    const product = await shopSchme.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = shop;
