import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="text-center mt-[10rem] capitalize">
        <p className=" font-bold text-3xl">opps! page is not found</p>
        <Link to="/">
          <button className="block capitalize bg-slate-400 p-4 mx-auto mt-6 mb-[17rem]">Home page</button>
        </Link>
      </div>
    </>
  );
};

export default Error;
