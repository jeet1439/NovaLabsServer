import express from "express";
import { GetTestimonials, submitTestimonials } from "../controllers/formController.js";

const router = express.Router();

router.post("/submit", submitTestimonials );
router.get("/active", GetTestimonials);

export default router;
