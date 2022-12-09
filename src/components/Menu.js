import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  const [active, setActive] = React.useState("home");

  const handle_active = (e) => {
    setActive(e);
  };

  return (
    <>
      <div className="bg-[#D9D9D9] font-mono">
        <div className="w-[90%] mx-auto flex py-3 h-[3.3rem]">
          <Link to={"/"}>
            <span
              onClick={() => handle_active("home")}
              className={
                active == "home"
                  ? "mr-5 md:mr-8 md:text-[1rem] border-blue-600 hover:border-b-4 transition ease-in-out delay-1000 border-b-4"
                  : "mr-5 md:mr-8 md:text-[1rem] border-blue-600 hover:border-b-4 transition ease-in-out delay-1000"
              }
            >
              Home
            </span>
          </Link>
          <Link to={"/about"}>
            <span
              onClick={() => handle_active("about")}
              className={
                active == "about"
                  ? "mr-5 md:mr-8 md:text-[1rem] border-blue-600 hover:border-b-4 transition ease-in-out delay-1000 border-b-4"
                  : "mr-5 md:mr-8 md:text-[1rem] border-blue-600 hover:border-b-4 transition ease-in-out  "
              }
            >
              About
            </span>
          </Link>
          <Link to={"/contact"}>
            <span
              onClick={() => handle_active("contact")}
              className={
                active == "contact"
                  ? "mr-5 md:mr-8 md:text-[1rem] border-blue-600 hover:border-b-4 transition ease-in-out border-b-4"
                  : "mr-5 md:mr-8 md:text-[1rem] border-blue-600 hover:border-b-4 transition ease-in-out  "
              }
            >
              contact
            </span>
          </Link>
          <Link to={"/news"}>
            <span
              onClick={() => handle_active("news")}
              className={
                active == "news"
                  ? "mr-5 md:mr-8 md:text-[1rem] border-blue-600 hover:border-b-4 transition ease-in-out border-b-4"
                  : "mr-5 md:mr-8 md:text-[1rem] border-blue-600 hover:border-b-4 transition ease-in-out  "
              }
            >
              News
            </span>
          </Link>
          <Link to={"/president"}>
            <span
              onClick={() => handle_active("others")}
              className={
                active == "others"
                  ? "mr-5 md:mr-8 md:text-[1rem] border-blue-600 hover:border-b-4 transition ease-in-out border-b-4"
                  : "mr-5 md:mr-8 md:text-[1rem] border-blue-600 hover:border-b-4 transition ease-in-out delay-1000"
              }
            >
              others
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
