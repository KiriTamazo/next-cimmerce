"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const Search = () => {
  const searchRef = useRef();
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    if (searchRef.current.value) {
      router.push(`/?search=${searchRef.current.value}`);
    } else {
      router.push(`/`);
    }
  };
  return (
    <>
      <form className="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4">
        <input
          ref={searchRef}
          className="flex-grow appearance-none border-none bg-gray-100 rounded-md mr-2 py-2 px-3  focus:outline-none focus:border-gray-400"
          type="text"
          placeholder="Enter your keyword"
          required
        />
        <button
          type="submit"
          onClick={submitHandler}
          className="px-4 py-2 inline-block  border border-transparent bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
