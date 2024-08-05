import express from "express";
import mongoose from "mongoose";
import productRoutes from "./utils/routes/productroutes.js";
import products from "./utils/data.js";
import { Product } from "./utils/productsModel.js";
const app = express();
app.use(express.json());
app.use("/", productRoutes);
// DATABASE//
const port = process.env.PORT || 4000;
mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost:27017/products",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error"));
db.once("open", async () => {
  console.log("DATABASE CONNECTED");
  try {
    await Product.insertMany(products);
    // await Product.deleteMany({});
    console.log("Products added successfully");
  } catch (err) {
    console.log("Error adding products", err);
  }
  // mongoose.connection.close();
});

// EXPRESS SERVER//

app.listen(port, () => {
  console.log(`serving on port number ${port}`);
});
