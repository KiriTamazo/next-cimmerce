"use client";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";

const Pagination = ({ resPerPage, totalPage, filterProductsCount }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  let page = searchParams.get("page") || 1;
  page = Number(page) - 1;

  let queryParams;
  if (totalPage <= 1 || filterProductsCount <= 1) {
    return null;
  }

  const handlePageClick = (currentPage) => {
    const current = currentPage.selected;
    if (typeof window !== undefined) {
      queryParams = new URLSearchParams(window.location.search);

      if (queryParams.has("page")) {
        queryParams.set("page", current + 1);
      } else {
        // To Reset the ui and url not being match cuz Pagination currentPage 0 is equal to Ui 1
        queryParams.set("page", current === 0 ? current + 1 : current + 2);
      }
      // To remove ?search after searching and return to / path
      const query = queryParams.toString();
      const pagePath = query.slice(queryParams.toString().indexOf("page"));

      const path = window.location.pathname + "?" + pagePath;

      router.push(path);
    }
  };

  return (
    <div className="flex h-fit mt-10 justify-center">
      <ReactPaginate
        breakLabel="..."
        nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
        previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        initialPage={page}
        pageCount={totalPage}
        renderOnZeroPageCount={null}
        pageClassName="hover:bg-gray-200 "
        className="flex justify-center gap-2 h-fit"
        pageLinkClassName="inline-flex w-10 h-10 text-sm font-semibold border border-gray-300  items-center  justify-center rounded cursor-pointer"
        activeClassName=" hover:bg-indigo-500 bg-indigo-600 text-white  rounded z-10"
        nextClassName="pagination-list"
        previousClassName="pagination-list"
        previousLinkClassName="pagination-link"
        nextLinkClassName="pagination-link"
      />
    </div>
  );
};
export default Pagination;
