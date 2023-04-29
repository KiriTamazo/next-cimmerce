"use client";

import Image from "next/image";
import { useState } from "react";

const AsideProduct = ({ product }) => {
  const [img, setImg] = useState(product?.images[0]?.url);
  const setImageSrc = (url) => {
    setImg(url);
  };
  return (
    <aside>
      <div className=" flex items-center justify-center min-h-[500px] border-gray-200  p-3 text-center rounded mb-5">
        <Image
          className="object-cover inline-block rounded  w-auto h-auto "
          src={product?.images[0]?.url ? img : "/images/default_product.png"}
          alt="Product Title"
          width={300}
          height={300}
          loading="lazy"
        />
      </div>
      <div className="space-x-2 overflow-auto text-center whitespace-nowrao">
        {product?.images?.map((image, i) => (
          <a
            key={`image-${i}`}
            className={`inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500 cursor-pointer ${
              img === image.url ? "border-indigo-500 border-2" : ""
            }`}
            onClick={() => setImageSrc(image?.url)}
          >
            <Image
              className="w-14 h-14"
              src={image.url}
              alt="Product Title"
              width={500}
              height={500}
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </aside>
  );
};
export default AsideProduct;
