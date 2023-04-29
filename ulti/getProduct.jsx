export const getProductsDetails = async (id) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/products/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};