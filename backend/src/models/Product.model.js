const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true, index: true },

    title: { type: String, trim: true, required: true },
    slug: { type: String, trim: true, lowercase: true, required: true, index: true },

    description: { type: String, trim: true },

    price: { type: Number, min: 0, required: true, index: true },
    stock: { type: Number, min: 0, default: 0, index: true },

    images: [{ type: String, trim: true }],

    status: { type: String, enum: ["DRAFT", "PENDING", "APPROVED", "REJECTED"], default: "PENDING", index: true },
    isActive: { type: Boolean, default: true, index: true },

    moderation: {
      reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      reviewedAt: { type: Date },
      note: { type: String, trim: true },
    },

    // optional: quick stats (can be updated async)
    ratingAvg: { type: Number, default: 0, min: 0, max: 5 },
    ratingCount: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true }
);

// text search
ProductSchema.index({ title: "text", description: "text" });
// avoid duplicates per seller
ProductSchema.index({ sellerId: 1, slug: 1 }, { unique: true });

module.exports = mongoose.model("Product", ProductSchema);
