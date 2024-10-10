// routes/cart.js
const express = require('express');
const Cart = require('../models/Cart');
const router = express.Router();

// Add product to cart
router.post('/cart', async (req, res) => {
  const { productId, userId, quantity } = req.body;
  try {
    const cartItem = new Cart({ productId, userId, quantity });
    await cartItem.save();
    res.json({ message: 'Product added to cart' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get user's cart items
router.get('/cart/:userId', async (req, res) => {
  try {
    const cartItems = await Cart.find({ userId: req.params.userId }).populate('productId');
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
