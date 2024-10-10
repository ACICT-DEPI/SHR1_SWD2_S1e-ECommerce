// models/Product.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  isOnSale: { type: Boolean, default: false },
  discount: { type: Number, default: 0 }
});

module.exports = mongoose.model('Product', ProductSchema);
