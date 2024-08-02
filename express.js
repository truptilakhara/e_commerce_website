import express from "express";
import mongoose from "mongoose";

// DATABASE//
const port = process.env.PORT || 4000;
mongoose.connect("mongodb://localhost:/27017/product", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error"));
db.once("open", () => {
  console.log("DATABASE CONNECTED");
});

// EXPRESS SERVER//
const app = express();
app.get("/", (req, res) => {
  res.send("Hello from the backend");
});

app.listen(port, () => {
  console.log(`serving on port number ${port}`);
});
