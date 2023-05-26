import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      // required: [true, "Please enter a product image url"],
    },
    name: {
      type: String,
      // required: [true, "Please enter a product name"],
    },
    price: {
      type: Number,
      // required: [true, "Please enter a product price"],
    },
    description: {
      type: String,
      // required: [true, "Please enter a product description"],
    },
    category: {
      type: String,
      // required: [true, "Please select a category"],
    },
    quantity: {
      type: Number,
      // required: [true, "Please enter a stock quantity"],
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", ProductSchema);

export default Product;
