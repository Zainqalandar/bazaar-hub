import { Router } from "express";
import { createSellerProfile, listSellerProfiles } from "../controllers/sellerProfile.controller";

const router = Router();

router.get("/", listSellerProfiles);
router.post("/", createSellerProfile);

export default router;
