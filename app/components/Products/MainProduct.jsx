"use client";

import { Rating } from "react-simple-star-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import NoSsr from "@/ulti/NoSsr";

const MainProducts = ({ product }) => {
  const inStock = product?.stock > 0;
  return (
    <main>
      <h2 className="font-semibold text-2xl mb-4">{product?.name}</h2>
      <div className="flex flex-wrap items-center space-x-2 mb-2">
        <div className="ratings">
          <NoSsr>
            <Rating
              size={25}
              className="m-0"
              emptyStyle={{ display: "flex" }}
              fillStyle={{ display: "-webkit-inline-box" }}
              transition
              allowHover={false}
              readonly
              allowFraction={true}
              initialValue={product?.ratings}
            />
          </NoSsr>
        </div>
        <span className="text-yellow-500">{product?.ratings}</span>
        {/* icon */}
        <svg
          width="6px"
          height="6px"
          viewBox="0 0 6 6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="3" cy="3" r="3" fill="#DBDBDB" />
        </svg>
        <span className="text-green-500">Verified</span>
      </div>
      <p className="mb-4 font-semibold text-xl">${product?.price}</p>
      <p className="mb-4 text-gray-500">{product?.description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        <button className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
          <FontAwesomeIcon icon={faCartShopping} className="text-md mr-2" />
          Add to Cart
        </button>
      </div>

      <ul className="mb-5">
        <li className="mb-1">
          <b className="font-medium w-36 inline-block">Stock</b>
          {inStock ? (
            <span className="text-green-500">In Stock</span>
          ) : (
            <span className="text-red-500">Out of Stock</span>
          )}
        </li>
        <li className="mb-1">
          {" "}
          <b className="font-medium w-36 inline-block">Category:</b>
          <span className="text-gray-500">{product?.category}</span>
        </li>
        <li className="mb-1">
          {" "}
          <b className="font-medium w-36 inline-block">Seller / Brand:</b>
          <span className="text-gray-500">{product?.seller}</span>
        </li>
      </ul>
    </main>
  );
};
export default MainProducts;
