import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please Add Name Of The Product"],
  },
  description: {
    type: String,
    required: [true, "Please Add Description Of The Product"],
  },
  price: {
    type: String,
    required: [true, "Please Add Price Of The Product"],
  },
  photoUrl: {
    type: String,
    required: [true, "Please Add Photo-url Of The Product"],
  },
  createdAt: {
    type: String,
  },
});

export default mongoose.model("Product", productSchema);
