import Form from "../models/Form.js";
import Testimonial from "../models/Testimonial.js";

export const submitForm = async (req, res) => {
  try {
    const { name, email, message, business } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const newForm = new Form({
      name,
      email,
      message,
      business
    });

    await newForm.save();

    res.status(201).json({
      success: true,
      message: "Form submitted and saved successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};

export const submitTestimonials = async (req, res) => {
   try {
    const { name, role, content, rating } = req.body;

    if (!name || !role || !content || !rating) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const testimonial = new Testimonial({
      name,
      role,
      content,
      rating,
    });

    await testimonial.save();

    return res.status(201).json({
      message: "Testimonial submitted successfully",
      testimonial,
    });
  } catch (error) {
    console.error("Testimonial Error:", error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};


export const GetTestimonials = async(req, res) => {
  try {
    const testimonials = await Testimonial.find({ isActive: true }).sort({
      createdAt: -1,
    });

    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};