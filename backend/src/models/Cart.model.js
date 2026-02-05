const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    qty: { type: Number, min: 1, required: true },

    // snapshot (price changes shouldn't affect cart unexpectedly)
    priceSnapshot: { type: Number, min: 0, required: true },
    titleSnapshot: { type: String, trim: true, required: true },
    sellerIdSnapshot: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { _id: false }
);

const CartSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true, index: true },
    items: { type: [CartItemSchema], default: [] },

    totals: {
      subTotal: { type: Number, min: 0, default: 0 },
    },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
