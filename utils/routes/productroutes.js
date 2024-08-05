import express from "express";
import { Product } from "../productsModel.js";
import mongoose from "mongoose";
const router = express.Router();

//ADD A NEW PRODUCT
router.post("/", async (req, res) => {
  try {
    const { name, description, price, images, stock, weight, category, id } =
      req.body;
    const newProduct = new Product({
      name,
      description,
      price,
      images,
      stock,
      weight,
      category,
      id,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
//GET ALL THE PRODUCTS
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
    console.log(products);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET A SINGLE PRODUCT BY ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//UPDATE A PRODUCT BY ID
router.put("/:id", async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, price },
      { new: true, runValidators: true }
    );
    if (!updateProduct) {
      return res.status(404).json({ error: "Product not fount" });
    }
    res.status(200).json(updateProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE A PRODUCT BY ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
