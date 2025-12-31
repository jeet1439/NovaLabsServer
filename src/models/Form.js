import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    business: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true
    },
    message: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Form = mongoose.model("Form", formSchema);

export default Form;
