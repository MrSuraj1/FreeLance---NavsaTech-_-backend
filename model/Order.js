const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    product: {
      id: { type: Number, required: true },
      name: { type: String, required: true },
      price: { type: String, required: true },
      description: { type: String },
      image: { type: String }
    }
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
