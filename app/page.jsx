import ProductsList from "./products/page";
import ProgressBar from "./components/Navbar/ProgressBar";
import queryString from "query-string";

const getProducts = async (searchParams) => {
  const urlParams = {
    search: searchParams.search,
    page: searchParams.page,
  };
  const searchQuery = queryString.stringify(urlParams);
  console.log(searchQuery, "params");
  const res = await fetch(`${process.env.API_URL}/api/products?${searchQuery}`, {
    cache: "no-cache",
  });
  const data = await res.json();
  console.log(data, "------home data---------");
  return data;
};

const Home = async ({ searchParams }) => {
  const { products, metadata } = await getProducts(searchParams);

  return (
    <>
      <ProgressBar />
      <ProductsList products={products} metadata={metadata} />
    </>
  );
};
export default Home;
