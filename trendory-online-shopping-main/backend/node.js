const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "YOUR_KEY",
  key_secret: "YOUR_SECRET"
});

app.post("/create-order", async (req, res) => {
  const options = {
    amount: 2000 * 100,
    currency: "INR"
  };

  const order = await razorpay.orders.create(options);
  res.json(order);
});

orderStatus: "Processing"

app.post("/return/:id", (req, res) => {
  const order = orders.find(o => o.id == req.params.id);
  order.status = "Return Requested";
  res.json({ message: "Return requested" });
});