import nc from "next-connect";
import {
  createProduct,
  getProducts,
} from "@/backend/controller/product.controller";
import dbConnect from "@/backend/config/dbConnect";

const handler = nc();

dbConnect();

handler.get(getProducts);
handler.post(createProduct);

export default handler;
