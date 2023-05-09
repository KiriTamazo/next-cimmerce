export function apiFilters(query, queryStr) {
  const search = () => {
    const searchParams = queryStr.search
      ? { name: { $regex: queryStr.search, $options: "i" } }
      : {};
    query = query.find({ ...searchParams });
    return apiFilters(query, queryStr);
  };
  const filter = () => {
    const queryClone = { ...queryStr };

    const filterFields = ["search", "page"];
    filterFields.forEach((filter) => delete queryClone[filter]);

    const filters = Object.entries(queryClone).reduce((acc, [key, value]) => {
      if (!key.match(/\b(gt|gte|lt|lte)/)) {
        acc[key] = value;
      } else {
        const prop = key.split("[")[0];
        const operator = key.match(/\[(.*)\]/)[1];

        if (!acc[prop]) {
          acc[prop] = {};
        }

        acc[prop][`$${operator}`] = value;
      }

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
  const count = async () => {
    const countQuery = query.model.countDocuments(query.getFilter());
    const count = await countQuery.exec();
    return count;
  };

  return {
    search,
    filter,
    pagination: (val) => pagination(val),
    count,
    exec: () => query.exec(),
  };
}
