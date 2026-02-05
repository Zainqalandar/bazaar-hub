const mongoose = require("mongoose");

const OrderItemSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },

    qty: { type: Number, min: 1, required: true },
    price: { type: Number, min: 0, required: true },
    titleSnapshot: { type: String, trim: true, required: true },
  },
  { _id: false }
);

const ShippingAddressSchema = new mongoose.Schema(
  {
    fullName: { type: String, trim: true, required: true },
    phone: { type: String, trim: true, required: true },
    addressLine1: { type: String, trim: true, required: true },
    addressLine2: { type: String, trim: true },
    city: { type: String, trim: true, required: true },
    state: { type: String, trim: true },
    postalCode: { type: String, trim: true },
    country: { type: String, trim: true, default: "PK" },
  },
  { _id: false }
);

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    items: { type: [OrderItemSchema], required: true },

    totals: {
      subTotal: { type: Number, min: 0, required: true },
      shipping: { type: Number, min: 0, default: 0 },
      grandTotal: { type: Number, min: 0, required: true },
    },

    payment: {
      method: { type: String, enum: ["COD", "CARD", "WALLET"], default: "COD" },
      status: { type: String, enum: ["PENDING", "PAID", "FAILED", "REFUNDED"], default: "PENDING", index: true },
      transactionId: { type: String, trim: true },
    },

    shippingAddress: { type: ShippingAddressSchema, required: true },

    status: {
      type: String,
      enum: ["PLACED", "CONFIRMED", "SHIPPED", "DELIVERED", "CANCELLED", "RETURNED"],
      default: "PLACED",
      index: true,
    },

    // optional: seller-wise fulfillment tracking
    sellerFulfillment: [
      {
        sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        status: { type: String, enum: ["PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"], default: "PENDING" },
        updatedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

OrderSchema.index({ createdAt: -1 });

module.exports = mongoose.model("Order", OrderSchema);
