import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a product name"],
  },
  description: {
    type: String,
    required: [true, "Please enter a product description"],
  },
  price: {
    type: Number,
    required: [true, "Please enter a product price"],
  },
  images: [{ public_id: { type: String }, url: { type: String } }],
  category: {
    type: String,
    required: [true, "Please enter product category"],
    enum: {
      values: [
        "Electronics",
        "Cameras",
        "Laptops",
        "Accessories",
        "Headphones",
        "Sports",
      ],
      message: "Please select a valid category",
    },
  },
  seller: {
    type: String,
    required: [true, "Please enter a product seller"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter a product stock"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
productSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  console.log("object", object);
  return object;
});
export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
