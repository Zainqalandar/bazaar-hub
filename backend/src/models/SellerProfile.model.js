const mongoose = require("mongoose");

const SellerProfileSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true, index: true },
    storeName: { type: String, trim: true, required: true },
    storeSlug: { type: String, trim: true, lowercase: true, required: true, unique: true, index: true },

    status: { type: String, enum: ["PENDING", "APPROVED", "REJECTED"], default: "PENDING", index: true },

    approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    approvedAt: { type: Date },
    note: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SellerProfile", SellerProfileSchema);
