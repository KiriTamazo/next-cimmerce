import productModel from "../models/product.model.js";
import { apiFilters } from "../ultis/APIFilter.js";

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
    const query = req.query;
    const resPerPage = 3;
    // Filter/Sorting Products
    const filters = apiFilters(productModel.find(), query);
    const results = await filters
      .search()
      .filter()
      .pagination(resPerPage)
      .exec();
    // For Pagination
    const productCount = await filters.count(); //total products in the DB (before filter or after filter)
    const totalPage = Math.ceil(productCount / resPerPage);

    const metadata = {
      resPerPage,
      totalPage,
      productCount,
    };
    res.status(200).json({ products: results, metadata });
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
