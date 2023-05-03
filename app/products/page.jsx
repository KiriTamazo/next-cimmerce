import Filters from "../components/Products/Filter";
import ProductItems from "../components/Products/ProductItems";
import Pagination from "../components/Pagination";

const ProductsList = async ({ products, metadata }) => {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row -mx-4">
          <Filters />
          <main className="md:w-2/3 lg:w-3/4 px-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {products?.map((product, i) => (
                <ProductItems key={product.id} product={product} />
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
