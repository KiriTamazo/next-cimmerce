import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const BreadCrumbs = ({ breadCrumbs }) => {
  const lastIndex = breadCrumbs.length - 1;
  return (
    <section className="py-5 sm:py-7 bg-indigo-100">
      <div className="container max-w-screen-xl mx-auto px-4">
        <ul className="inline-flex flex-wrap text-gray-600 space-x-1 md:space-x-3 items-center">
          {breadCrumbs?.map((breadCrumb, index) => (
            <li key={index} className="inline-flex items-center">
              {index !== lastIndex ? (
                <Link
                  href={breadCrumb.url}
                  className="text-gray-600 hover:text-indigo-600 "
                >
                  {breadCrumb.name}
                </Link>
              ) : (
                <p className="text-indigo-600">{breadCrumb.name}</p>
              )}
              {breadCrumbs?.length - 1 !== index && (
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="ml-3 text-gray-400 w-5 text-sm"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BreadCrumbs;
