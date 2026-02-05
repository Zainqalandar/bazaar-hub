const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, trim: true, required: true },
    email: { type: String, trim: true, lowercase: true, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true, select: false },

    role: { type: String, enum: ["CUSTOMER", "SELLER", "ADMIN"], default: "CUSTOMER", index: true },
    isBlocked: { type: Boolean, default: false, index: true },

    phone: { type: String, trim: true },
    avatarUrl: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
