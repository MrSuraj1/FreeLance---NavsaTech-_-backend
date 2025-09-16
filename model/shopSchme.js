const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },   // Changed to Number ✅
    description: { type: String },
    image: { type: String },
  },
  {
    timestamps: true, // createdAt & updatedAt auto
  }
);

// Index for faster sorting & search
productSchema.index({ createdAt: -1 });
productSchema.index({ name: 1 });

module.exports = mongoose.model("Product", productSchema);


// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: String, required: true },
//   description: { type: String },
//   image: { type: String },
// }, { timestamps: true });

// productSchema.index({ name: 1 });

// module.exports = mongoose.model("Product", productSchema);