import React from "react";
import ErrorDark from "../assets/img/ErrorDark.svg";
import ErorrLight from "../assets/img/ErrorLight.svg";

import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="container mx-auto mt-44 lg:mt-4">
      <div className=" flex flex-col justify-center items-center gap-y-10">
        <div>
          <img
            className=" w-[350px] max-w-[100%]  dark:hidden"
            src={ErorrLight}
            alt="Error"
          />
          <img
            className=" w-[350px]  hidden dark:block max-w-[100%]"
            src={ErrorDark}
            alt="Error"
          />
        </div>
        <h2 className="h2 text-center">Page Not Found</h2>
      </div>
      <Link to="/" className="btn btn-accent w-[250px] mx-auto my-5">
        Back To Home Page
      </Link>
    </div>
  );
};

export default NoPage;
