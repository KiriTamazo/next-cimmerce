import productModel from "../models/product.model.js";

export const createProduct = async (req, res, next) => {
  try {
    const product = await productModel.create(req.body);
    res.status(201).json({ product });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getProducts = async (req, res, next) => {
  try {
    const product = await productModel.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getProduct = async (req, res, next) => {
  try {
    const product = await productModel.findById(req.query.id);
    if (!product.id) {
      throw new Error("Product not found");
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: "Product not found" });
  }
};
