import dbConnect from "@/backend/config/dbConnect";
import {
  createProduct,
  getProducts,
} from "@/backend/controller/product.controller";
import nc from "next-connect";

const handler = nc();
dbConnect();

handler.get(getProducts);
handler.post(createProduct);

export default handler;
