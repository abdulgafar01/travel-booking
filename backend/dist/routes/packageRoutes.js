import { Router } from "express";
import { getPackages, bookPackage, } from "../controllers/packageController.js";
const router = Router();
router.get("/", getPackages);
router.post("/:id/book", bookPackage);
export default router;
