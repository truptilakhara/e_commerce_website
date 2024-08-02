import mongoose from "mongoose";
import { Schema } from "mongoose";

//SCHEMA FOR PRODUCT REVIEW
const reviewSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
  },
});

//SCHEMA FOR PRODUCT SPECIFICATIONS

const specificationsSchema = new Schema({
  dimensions: {
    type: String,
  },
  weight: {
    type: String,
  },
});

// SCHEMA FOR PRODUCTS

const productSchema = new Schema({
  id: { type: Number, required: true },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  images: [String],
  stock: {
    type: Number,
    required: true,
  },
  specifications: specificationsSchema,
  category: { type: String, required: true },
  reviews: [reviewSchema],
});

// Schema for user address
const addressSchema = new Schema({
  street: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
  country: { type: String },
});

// Order Schema
const orderSchema = new Schema({
  orderId: { type: Number, required: true },
  userId: { type: Number, required: true },
  date: { type: Date, required: true },
  status: { type: String, required: true },
  items: [
    {
      productId: { type: Number, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  shippingAddress: addressSchema,
  paymentMethod: { type: String },
});

//user Schema
const userSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: addressSchema,
  orderHistory: [{ type: Number }],
});

export const Product = mongoose.model("Product", productSchema);
export const User = mongoose.model("User", userSchema);
export const Order = mongoose.model("Order", orderSchema);
