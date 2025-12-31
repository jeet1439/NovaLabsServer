import Form from "../models/Form.js";

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
