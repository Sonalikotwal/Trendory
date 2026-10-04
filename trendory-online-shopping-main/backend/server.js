// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ==========================
// // ✅ MONGODB CONNECT
// // ==========================
// mongoose.connect("mongodb://127.0.0.1:27017/shopDB")
// .then(() => console.log("MongoDB Connected ✅"))
// .catch(err => console.log(err));
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/mydb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("Backend Running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
// ==========================
// ✅ USER MODEL
// ==========================
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

const User = mongoose.model("User", userSchema);

// ==========================
// ✅ ORDER MODEL
// ==========================
const orderSchema = new mongoose.Schema({
  product: Object,
  customerName: String,
  phone: String,
  address: String,
  status: String,
  paymentMethod: String
});

const Order = mongoose.model("Order", orderSchema);

// ==========================
// ✅ TEST ROUTE
// ==========================
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// ==========================
// ✅ SIGNUP
// ==========================
app.post("/api/auth/signup", async (req, res) => {
  const { username, email, password } = req.body;

  const existingUser = await User.findOne({ username });

  if (existingUser) {
    return res.json({ message: "User already exists ❌" });
  }

  const user = new User({ username, email, password });
  await user.save();

  res.json({ message: "Signup Successful 🎉" });
});

// ==========================
// ✅ LOGIN
// ==========================
app.post("/api/auth/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });

  if (!user) {
    return res.json({ message: "Invalid Credentials ❌" });
  }

  res.json({ message: "Login Successful ✅", user });
});

// ==========================
// ✅ CREATE ORDER
// ==========================
app.post("/api/order", async (req, res) => {
  const order = new Order({
    ...req.body,
    status: "Order Placed"
  });

  await order.save();

  res.json({ message: "Order created", order });
});

// ==========================
// ✅ GET ALL ORDERS (ADMIN)
// ==========================
app.get("/api/orders", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

// ==========================
// ✅ PAYMENT
// ==========================
app.post("/api/payment/:id", async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return res.json({ message: "Order not found" });
  }

  order.status = "Paid";
  order.paymentMethod = req.body.method;

  await order.save();

  res.json({ message: "Payment successful", order });
});

// ==========================
// ✅ RETURN
// ==========================
app.post("/api/return/:id", async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return res.json({ message: "Order not found" });
  }

  order.status = "Return Requested";
  await order.save();

  res.json({ message: "Return requested" });
});

// ==========================
// ✅ DELETE ORDER
// ==========================
app.delete("/api/order/:id", async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ message: "Order deleted" });
});

// ==========================
// ✅ START SERVER (ONLY ONCE)
// ==========================
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000 🚀");
});

app.put("/api/order/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = req.body.status;

    await order.save();

    res.json({ message: "Updated successfully", order });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// ==========================
// GET SINGLE ORDER (TRACKING)
// ==========================
app.get("/api/order/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});