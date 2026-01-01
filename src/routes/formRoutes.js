import express from "express";
import { GetTestimonials, submitForm, submitTestimonials } from "../controllers/formController.js";

const router = express.Router();

router.post("/submit", submitForm);
router.post("/testimonial/submit", submitTestimonials );
router.get("/active", GetTestimonials);

export default router;
