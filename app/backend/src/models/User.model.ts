import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: { type: String, trim: true, required: true },
    email: { type: String, lowercase: true, trim: true, unique: true, required: true, index: true },
    passwordHash: { type: String, required: true, select: false },
    role: { type: String, enum: ["CUSTOMER", "SELLER", "ADMIN"], default: "CUSTOMER", index: true },
    status: { type: String, enum: ["ACTIVE", "BLOCKED"], default: "ACTIVE", index: true },
    phone: { type: String, trim: true },
    lastLoginAt: { type: Date },
  },
  { timestamps: true }
);

UserSchema.index({ email: 1 }, { unique: true });

export const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);
