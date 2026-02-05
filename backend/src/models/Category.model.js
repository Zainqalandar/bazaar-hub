const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    slug: { type: String, trim: true, lowercase: true, required: true, unique: true, index: true },

    // null => main category, otherwise subcategory
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", default: null, index: true },

    isActive: { type: Boolean, default: true, index: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
