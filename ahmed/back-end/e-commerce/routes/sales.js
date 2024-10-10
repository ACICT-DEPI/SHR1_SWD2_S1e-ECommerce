// routes/sales.js
const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Get products on sale
router.get('/', async (req, res) => {
  try {
    const salesProducts = await Product.find({ isOnSale: true });
    res.json(salesProducts);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
