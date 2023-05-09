import Filters from "../components/Products/Filter";
import ProductItems from "../components/Products/ProductItems";
import Pagination from "../components/Pagination";
import { Suspense } from "react";

const ProductsList = async ({ products, metadata }) => {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row -mx-4">
          <Filters />
          <main className="md:w-2/3 lg:w-3/4 px-3">
            {products.length < 1 && (
              <div className="text-center text-slate-900 w-full bg-indigo-200 rounded-md px-8 py-4">
                No Products To Show
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {products?.map((product, i) => (
                <Suspense key={product.id} fallback={<div>Loading...</div>}>
                  <ProductItems key={product.id} product={product} />
                </Suspense>
              ))}
            </div>
            <Pagination {...metadata} />
          </main>
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
