// routes/product.js
const express = require('express');
const Product = require('../models/Product.js');
const router = express.Router();
import asyncHandler from 'express-async-handler';
import Joi from 'joi';




function validateCreateProduct(obj) {
  const schema = Joi.object({
    name: Joi.string().trim().min(5).max(50).required(),
    category: Joi.string().trim().min(5).max(50).required(),
    image: Joi.string().trim().min(5).max(200),
    old_price: Joi.number().required(),
    new_price: Joi.number().required(),
  });
  return schema.validate(obj);
}
function validateUpdateProduct(obj) {
  const schema = Joi.object({
    name: Joi.string().trim().min(5).max(50),
    category: Joi.string().trim().min(5).max(50),
    image: Joi.string().trim().min(5).max(200),
    old_price: Joi.number(),
    new_price: Joi.number(),
  });
  return schema.validate(obj);
}

// Get all products with pagination
router.get('/', async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const products = await Product.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Search for products
router.get('/search', async (req, res) => {
  const { query } = req.query;
  try {
    const products = await Product.find({ name: new RegExp(query, 'i') });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Add product
router.post('/', async (req, res) => {
  const { error } = validateCreateProduct(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  try {
    const product = new Products({
      name: req.body.name,
      category: req.body.category, // Fixed typo
      image: req.body.image,
      old_price: req.body.old_price,
      new_price: req.body.new_price,
    });
    const result = await product.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
// Update product
router.put('/:id', async (req, res) => {
  const { error } = validateUpdateProduct(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  try {
    const product = await Products.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name: req.body.name,
          category: req.body.category, // Fixed typo
          image: req.body.image,
          old_price: req.body.old_price,
          new_price: req.body.new_price,
        },
      },
      { new: true }
    );
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
// Delete product
router.delete('/:id', async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (product) {
      await Products.findByIdAndDelete(req.params.id);
      res.json({ message: 'Product is deleted' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
