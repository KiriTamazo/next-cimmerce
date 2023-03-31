"use client";
import Filters from "./layouts/Filters";
import ProductItems from "./ProductItems";

const ProductsList = ({ data }) => {
  console.log(data.product);
  return (
    <section className="py-12">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row -mx-4">
          <Filters />
          <main className="md:w-2/3 lg:w-3/4 px-3">
            {data?.product?.map((product, i) => (
              <ProductItems key={product.id} product={product} />
            ))}
          </main>
        </div>
      </div>
    </section>
  );
};
export default ProductsList;
