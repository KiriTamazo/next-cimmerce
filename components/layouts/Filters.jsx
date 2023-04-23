import dynamic from "next/dynamic";
const StarRatings = dynamic(() => import("react-star-ratings"), { ssr: false });
import { Rating } from "react-simple-star-rating";
const Filters = () => {
  let queryParams;

  const checkHandler = (checkBoxType, checkBoxValue) => {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);
    }

    if (typeof window !== "undefined") {
      const value = queryParams.get(checkBoxType);
      if (checkBoxValue === value) return true;
      return false;
    }
  };

  const Checkbox = ({ name, value, label }) => {
    return (
      <li>
        <label className="flex items-center">
          <input
            name={name}
            type="checkbox"
            value={value}
            className="h-4 w-4"
            defaultChecked={checkHandler(name, value)}
          />
          <span className="ml-2 text-gray-500">{label}</span>
        </label>
      </li>
    );
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
        <div className="grid md:grid-cols-3 gap-x-2">
          <div className="mb-4">
            <input
              name="min"
              className={`input-number`}
              // className=":[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border  bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="number"
              placeholder="Min"
            />
          </div>
          <div className="mb-4">
            <input
              name="max"
              className=":[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  border  bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="number"
              placeholder="Max"
            />
          </div>
          <div className="mb-4">
            <button className="px-1 py-2 text-center w-full inline-block text-white bg-blue-600 shadow-md rounded-md hover:bg-blue-700">
              Go
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block px-6 py-4  bg-white rounded shadow-sm">
        <h3 className="font-semibold mb-2">Category</h3>
        <ul className="space-y-1">
          <Checkbox name="category" value="Electronics" label="Electronics" />
          <Checkbox name="category" value="Laptops" label="Laptops" />
          <Checkbox name="category" value="Toys" label="Toys" />
          <Checkbox name="category" value="Office" label="Office" />
          <Checkbox name="category" value="Beauty" label="Beauty" />
        </ul>
        <hr className="my-4" />
        <h3 className="font-semibold mb-2">Ratings</h3>
        <ul className="space-y-1 items-center">
          {[5, 4, 3, 2, 1].map((rating) => (
            <Checkbox
              key={rating}
              name="ratings"
              value={`${rating}`}
              label={
                <span className="ml-2 text-gray-500">
                  <Rating emptyClassName="flex" size={24} />
                  {/* <StarRatings
                    rating={rating}
                    starRatedColor="#ffb829"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="2px"
                    name="rating"
                  /> */}
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
