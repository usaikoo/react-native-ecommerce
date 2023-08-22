const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();


const productRouter = require("./routes/products");
const authRouter = require("./routes/auth")
const userRouter = require("./routes/user")
const cartRouter = require("./routes/cart")
const orderRouter = require("./routes/order")


const port = 3000;
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("MongoDB connected successfully");
});

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/products", productRouter);
app.use("/api/", authRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.use((err, req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
  // console.error(err.stack);
  // res.status(500).json("Something went wrong on our end.");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${process.env.PORT || port}!`);
});
