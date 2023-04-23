import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Button from "../Button";
const StarRatings = dynamic(() => import("react-star-ratings"), { ssr: false });

const ProductItems = ({ product }) => {
  return (
    <div className="group cursor-pointer  sm:max-w-[400px] h-fit rounded-lg ">
      <div className="relative">
        <Image
          src={
            product.images && product.images[0]
              ? product.images[0].url
              : "/images/default_product.png"
          }
          alt="product anme"
          width={240}
          height={480}
          className="rounded-lg object-cover"
          style={{ width: "100%", height: "100%", minHeight: "400px" }}
        />
        <div className="absolute rounded-lg opacity-0 transition  duration-500 ease-in-out w-full h-full bottom-0 flex items-end px-4 group-hover:opacity-100">
          <Button
            color="primary"
            icon={<ShoppingBagIcon className="w-5 h-5 " />}
            title="Add To Cart"
            style="group-hover:-translate-y-8    transition duration-500 ease-in-out"
          />
        </div>
      </div>
      <div className=" rounded-bl-md flex gap-2   rounded-br-md justify-between  py-4 ">
        <div className="flex   flex-col ">
          <Link
            href={`/product/${product._id}`}
            className="text-sm hover:text-indigo-500 transition duration-300 ease-in-out text-slate-900 font-medium"
          >
            {product.name}
          </Link>
          <div className="flex flex-wrap ">
            <div className="ratings">
              <div className="my-1 flex items-center gap-1">
                <StarRatings
                  id={product.id}
                  rating={product?.ratings}
                  starRatedColor="#ffb829"
                  numberOfStars={5}
                  starDimension="18px"
                  starSpacing="1px"
                  name="rating"
                />
                <b className="text-gray-300">•</b>
                <span className="ml-1 text-yellow-500">{product?.ratings}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold text-slate-900/70 block">
            ${product?.price}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProductItems;
