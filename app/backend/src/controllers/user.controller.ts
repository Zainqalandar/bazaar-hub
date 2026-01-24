import type { Request, Response } from "express";
import { UserModel } from "../models/User.model";

export async function listUsers(_req: Request, res: Response): Promise<void> {
  try {
    const users = await UserModel.find().lean();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users." });
  }
}

export async function createUser(req: Request, res: Response): Promise<void> {
  const { name, email, passwordHash, role, status, phone, lastLoginAt } = req.body ?? {};

  if (!name || !email || !passwordHash) {
    res.status(400).json({ message: "name, email, and passwordHash are required." });
    return;
  }

  try {
    const user = await UserModel.create({ name, email, passwordHash, role, status, phone, lastLoginAt });
    const payload = user.toObject();
    delete payload.passwordHash;
    res.status(201).json(payload);
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && (error as { code: number }).code === 11000) {
      res.status(409).json({ message: "Email already exists." });
      return;
    }

    res.status(500).json({ message: "Failed to create user." });
  }
}
