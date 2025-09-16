const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },

    // Store product snapshot
    product: {
      name: { type: String, required: true },
      description: { type: String },
      price: { type: Number, required: true },
      image: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
