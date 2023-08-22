const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    customerId: { type: String, required: true },
    productId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Product" },
    quantity: { type: Number, required: true },
    subTotal: { type: Number, required: true },
    total: { type: Number, required: true },
    deliverStatus: { type: String, default: "pending" },
    paymentStatus: { type: String, required: true },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
