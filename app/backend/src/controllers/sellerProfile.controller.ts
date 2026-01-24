import type { Request, Response } from "express";
import { SellerProfileModel } from "../models/SellerProfile.model";

export async function listSellerProfiles(_req: Request, res: Response): Promise<void> {
  try {
    const profiles = await SellerProfileModel.find().lean();
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch seller profiles." });
  }
}

export async function createSellerProfile(req: Request, res: Response): Promise<void> {
  const { userId, storeName, storeSlug, businessInfo } = req.body ?? {};

  if (!userId || !storeName) {
    res.status(400).json({ message: "userId and storeName are required." });
    return;
  }

  try {
    const profile = await SellerProfileModel.create({ userId, storeName, storeSlug, businessInfo });
    res.status(201).json(profile);
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && (error as { code: number }).code === 11000) {
      res.status(409).json({ message: "Seller profile already exists or storeSlug is taken." });
      return;
    }

    res.status(500).json({ message: "Failed to create seller profile." });
  }
}
