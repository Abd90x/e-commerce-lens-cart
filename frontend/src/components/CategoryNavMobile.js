import React from "react";

import { FiX } from "react-icons/fi";

import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const CategoryNavMobile = ({ setCatNavMobile }) => {
  const { data } = useFetch("/categories");

  return (
    <div className=" w-full h-full bg-gray-100 opacity-90 dark:bg-primary p-8">
      {/* Close icon */}
      <div
        onClick={() => setCatNavMobile(false)}
        className="flex justify-end mb8 cursor-pointer"
      >
        <FiX className="text-3xl" />
      </div>
      <div className=" flex flex-col gap-y-8">
        {data?.map((category) => {
          return (
            <Link
              to={`products/${category.id}`}
              className=" uppercase font-medium hover:text-accent"
              key={category.id}
              onClick={() => setCatNavMobile(false)}
            >
              {category.attributes.title} Cameras
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryNavMobile;
