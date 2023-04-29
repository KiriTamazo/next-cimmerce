import nc from "next-connect";
import { getProduct } from "@/backend/controller/product.controller";
import dbConnect from "@/backend/config/dbConnect";

const handler = nc();

dbConnect();

handler.get(getProduct);

export default handler;
