import Filters from "../components/Products/Filter";
import ProductItems from "../components/Products/ProductItems";
const getProducts = async () => {
  const res = await fetch(`${process.env.API_URL}/api/products`);
  const data = res.json();
  return data;
};
const ProductsList = async () => {
  const data = await getProducts();
  return (
    <section className="py-12 bg-slate-50">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row -mx-4">
          <Filters />
          <main className="md:w-2/3 lg:w-3/4 px-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {data?.map((product, i) => (
              <ProductItems key={product.id} product={product} />
            ))}
          </main>
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
