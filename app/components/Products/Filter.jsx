"use client";
import NoSsr from "@/ulti/NoSsr";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { Rating } from "react-simple-star-rating";

const Checkbox = ({ name, value, label, handleClick, checkHandler }) => {
  return (
    <li>
      <label className="flex items-center">
        <input
          name={name}
          type="checkbox"
          value={value}
          className="h-4 w-4"
          onClick={(e) => handleClick(e.target)}
          defaultChecked={checkHandler && checkHandler(name, value)}
        />
        <span className="ml-2 text-gray-500">{label}</span>
      </label>
    </li>
  );
};

const Filters = () => {
  let queryParams;
  const router = useRouter();
  const handleClick = (checkbox) => {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);
    }
    const checkboxes = document.getElementsByName(checkbox.name);
    checkboxes.forEach((item) => {
      if (item !== checkbox) {
        item.checked = false;
      }
    });
    if (checkbox.checked === false) {
      // Delete filter from query
      queryParams.delete(checkbox.name);
    } else {
      // Set Filter in the query
      if (queryParams.has(checkbox.name)) {
        queryParams.set(checkbox.name, checkbox.value);
      } else {
        queryParams.append(checkbox.name, checkbox.value);
      }
    }

    const path = window.location.pathname + "?" + queryParams.toString();
    router.push(path);
  };

  const checkHandler = (checkBoxType, checkBoxValue) => {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);
      const value = queryParams.get(checkBoxType);
      if (checkBoxValue === value) return true;

      return false;
    }
  };

  return (
    <aside className="md:w-1/3 lg:w-1/4 px-4">
      <a
        className="md:hidden mb-5  w-full text-center px-4 py-2 inline-block text-lg text-gray-700 bg-white shadow-sm  rounded-md hover:bg-gray-100 hover:text-blue-600"
        href="#"
      >
        Filter by
      </a>
      <div className="hidden mb-4 md:block px-6 py-4  bg-white rounded shadow-sm">
        <h3 className="font-semibold mb-2">Price ($)</h3>
        <div
          className="grid 
        md:grid-row-2
        gap-x-2"
        >
          <div className="mb-4">
            <input
              name="min"
              className="min-max-input"
              type="number"
              placeholder="Min"
              min={0}
            />
          </div>
          <div className="mb-4">
            <input
              name="max"
              min={0}
              className="min-max-input"
              type="number"
              placeholder="Max"
            />
          </div>
          <div className="mb-4">
            <button className="px-1 py-2 text-center w-full inline-block text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700">
              Go
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block px-6 py-4 bg-white rounded shadow-sm">
        <h3 className="font-semibold mb-2">Category</h3>
        <ul className="space-y-1">
          <Checkbox
            name="category"
            value="Electronics"
            label="Electronics"
            handleClick={handleClick}
            checkHandler={checkHandler}
          />
          <Checkbox
            name="category"
            value="Laptops"
            label="Laptops"
            handleClick={handleClick}
            checkHandler={checkHandler}
          />
          <Checkbox
            name="category"
            value="Toys"
            label="Toys"
            handleClick={handleClick}
            checkHandler={checkHandler}
          />
          <Checkbox
            name="category"
            value="Office"
            label="Office"
            handleClick={handleClick}
            checkHandler={checkHandler}
          />
          <Checkbox
            name="category"
            value="Beauty"
            label="Beauty"
            handleClick={handleClick}
            checkHandler={checkHandler}
          />
        </ul>
        <hr className="my-4" />
        <h3 className="font-semibold mb-2">Ratings</h3>
        <ul className="space-y-1">
          {[5, 4, 3, 2, 1].map((rating) => (
            <Checkbox
              key={rating}
              name="ratings"
              value={`${rating}`}
              handleClick={handleClick}
              checkHandler={checkHandler}
              label={
                <span className=" text-gray-500">
                  <NoSsr>
                    <Rating
                      size={30}
                      className="m-0"
                      emptyStyle={{ display: "flex" }}
                      fillStyle={{ display: "-webkit-inline-box" }}
                      initialValue={rating}
                      allowHover={false}
                      readonly
                    />
                  </NoSsr>
                </span>
              }
            />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Filters;
