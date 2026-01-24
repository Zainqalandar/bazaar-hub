import mongoose from "mongoose";

const { Schema } = mongoose;

const SellerProfileSchema = new Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true, index: true },
    storeName: { type: String, trim: true, required: true },
    storeSlug: { type: String, trim: true, lowercase: true, unique: true, index: true },
    businessInfo: {
      legalName: { type: String, trim: true },
      ntn: { type: String, trim: true },
      address: { type: String, trim: true },
    },
    approvalStatus: { type: String, enum: ["PENDING", "APPROVED", "REJECTED"], default: "PENDING", index: true },
    appliedAt: { type: Date, default: Date.now },
    approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    approvedAt: { type: Date },
    rejectionReason: { type: String, trim: true },
  },
  { timestamps: true }
);

export const SellerProfileModel =
  mongoose.models.SellerProfile || mongoose.model("SellerProfile", SellerProfileSchema);
