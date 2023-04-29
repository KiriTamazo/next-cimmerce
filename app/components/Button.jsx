"use client";

import { useMemo } from "react";

const Button = ({ color, icon, title, style }) => {
  const buttonColor = useMemo(() => {
    if (color === "primary") {
      return "bg-indigo-600 hover:bg-indigo-700";
    }
    if (color === "secondary") {
      return "bg-red-600 hover:bg-red-700";
    } else {
      return color;
    }
  }, [color]);
  return (
    <button
      type="button"
      className={`py-2 px-4 gap-2 flex justify-center items-center ${buttonColor}   text-white w-full transition ease-in duration-200 text-center text-base shadow-md  rounded-md ${style} `}
    >
      {icon}
      {title}
    </button>
  );
};
export default Button;
