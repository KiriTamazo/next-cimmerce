"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { Rating } from "react-simple-star-rating";
import NoSsr from "@/ulti/NoSsr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ProductItems = ({ product }) => {
  return (
    <div className="group cursor-pointer  sm:max-w-[400px] h-fit rounded-lg ">
      <div className="relative bg-slate-200">
        <Image
          src={
            product.images && product.images[0]
              ? product.images[0].url
              : "/images/default_product.png"
          }
          alt="product anme"
          width={240}
          height={480}
          className="object-cover w-full rounded transition-all duration-300 ease-in-out aspect-square group-hover:scale-105 "
          style={{
            width: "100%",
            height: "100%",
            minHeight: "380px",
          }}
          loading="lazy"
        />
        <div className="absolute rounded-lg opacity-0 transition  duration-500 ease-in-out w-full h-full bottom-0 flex items-end px-4 group-hover:opacity-100">
          <Button
            color="primary"
            icon={
              <FontAwesomeIcon icon={faCartShopping} className="w-5 h-5 " />
            }
            title="Add To Cart"
            style="group-hover:-translate-y-8 transition duration-500 ease-in-out"
          />
        </div>
      </div>
      <div className=" rounded-bl-md flex gap-2 rounded-br-md justify-between  py-4 ">
        <div className="flex   flex-col ">
          <Link
            href={`/products/${product.id}`}
            className="text-sm hover:text-indigo-500 transition duration-300 ease-in-out text-slate-700 font-medium"
          >
            {product.name}
          </Link>
          <div className="flex flex-wrap ">
            <div className="ratings">
              <div className="my-1 flex items-center gap-1">
                <NoSsr>
                  <Rating
                    size={20}
                    className="m-0"
                    emptyStyle={{ display: "flex" }}
                    fillStyle={{ display: "-webkit-inline-box" }}
                    transition
                    allowHover={false}
                    initialValue={product.ratings}
                    readonly
                    allowFraction
                  />
                </NoSsr>
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
