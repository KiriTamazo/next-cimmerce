const orderParams = (queryParams) => {
  const otherParams = Array.from(queryParams.entries())
    .filter(([key, value]) => key !== "page")
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  const params = queryParams.get("page");
  // to fix the situations where user not in page=1 and select filter, the user current page is showing in the url so this is to revert back to default page=1
  const triggerParams = ["category", "min", "max", "ratings"];
  const shouldResetPage = triggerParams.some((param) => queryParams.has(param));
  const pageParam = `page=${shouldResetPage ? 1 : params || 1}`;
  const query = otherParams ? `${otherParams}&${pageParam}` : pageParam;
  return query;
};
export default orderParams;
