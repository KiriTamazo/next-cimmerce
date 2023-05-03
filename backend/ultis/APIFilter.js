export function apiFilters(query, queryStr) {
  const search = () => {
    const searchParams = queryStr.search
      ? { name: { $regex: queryStr.search, $options: "i" } }
      : {};
    query = query.find({ ...searchParams });
    return apiFilters(query, queryStr); // return updated apiFilters object
  };
  const filter = () => {
    const queryClone = { ...queryStr };

    const filterFields = ["search", "page"];
    filterFields.forEach((filter) => delete queryClone[filter]);

    const filters = Object.entries(queryStr)
      .filter(([key, value]) => !filterFields.includes(key))
      .reduce((acc, [key, value]) => {
        const [prop, operator] = key.split(/[[\]]+/).filter(Boolean);
        acc[prop] = { ...acc[prop], [`$${operator}`]: value };
        return acc;
      }, {});

    console.log("output", filters);
    query = query.find(filters);
    return apiFilters(query, queryStr);
  };
  const pagination = (resPerPage) => {
    const currentPage = Number(queryStr.page) || 1;
    const skip = resPerPage * (currentPage - 1);
    query = query.limit(resPerPage).skip(skip);
    return apiFilters(query, queryStr);
  };

  return {
    search,
    filter,
    pagination: (val) => pagination(val),
    exec: () => query.exec(), // add an exec function to execute the query
  };
}
