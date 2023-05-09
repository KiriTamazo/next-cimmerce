import dynamic from "next/dynamic";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getProductsDetails } from "@/ulti/getProduct";
import BreadCrumbs from "@/app/components/BreadCrumbs";
import PageDetailLoading from "./loading";
const AsideProduct = dynamic(() =>
  import("@/app/components/Products/AsideProduct")
);
const MainProducts = dynamic(() =>
  import("@/app/components/Products/MainProduct")
);
export async function generateMetadata({ params }) {
  const product = await getProductsDetails(params.id);
  console.log(product, "product");
  if (!product)
    return {
      title: "Not Found",
      description: "Product not found",
    };
  return {
    title: product.name,
  };
}
const ProductDetailsPage = async ({ params }) => {
  const product = await getProductsDetails(params.id);
  if (!product) return notFound();
  const breadCrumbs = [
    { name: "Home", url: "/" },
    {
      name: `${product?.name?.substring(0, 100)} ...`,
      url: `/products/${product?._id}`,
    },
  ];
  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <section className="bg-white py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-5">
            <Suspense fallback={<div>Loading...</div>}>
              <AsideProduct product={product} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <MainProducts product={product} />
            </Suspense>
          </div>
          {/* <NewReview /> */}
          <hr />

          <div className="font-semibold">
            <h1 className="text-gray-500 review-title mb-6 mt-10 text-2xl">
              Other Customers Reviews
            </h1>
            {/* <Reviews /> */}
          </div>
        </div>
      </section>
    </>
  );
};
export async function generateStaticParams() {
  const res = await fetch(`${process.env.API_URL}/api/products`);
  const datas = await res.json();
  const trimData = datas?.products?.slice(0, 20);
  return trimData.map((data) => ({
    id: data.id.toString(),
  }));
}
export default ProductDetailsPage;
