const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },        // ✅ Capital S
    price: { type: String, required: true },       // ✅ Capital S
    description: { type: String },                 // ✅ Object format
    image: { type: String },                       // ✅ Object format
  },
  {
    timestamps: true,
  }
);

productSchema.index({ name: 1 });

module.exports = mongoose.model("Product", productSchema);
