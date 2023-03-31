import productModel from "../models/product.model.js";

export const createProduct = async (req, res, next) => {
  const product = await productModel.create(req.body);
  res.status(201).json({ product });
};
export const getProducts = async (req, res, next) => {
  const product = await productModel.find();
  res.status(200).json({ product });
};
