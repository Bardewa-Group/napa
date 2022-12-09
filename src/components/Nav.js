import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function Nav() {
  const [nav, set_nav] = useState(false);
  const value = "see more";

  const handle_nav = () => {
    set_nav(!nav);
  };
  return (
    <>
      <div className=" relative bg-gradient-to-r from-[#00437b] to-[#1598cb]">
        <div className="flex mx-auto w-[90%] py-2.5 cursor-pointer">
          <img
            className="rounded-[50%] w-20 md:w-28"
            src="https://association-webpage.sajannepali.repl.co/images/sajan3.jpg"
            alt="logo of NAPA"
          />
          <h2 className="leading-[1rem] md:leading-[1.8rem] my-auto ml-3 md:ml-8 text-white max-w-[38%] md:max-w-[15rem] text-[0.8rem] font-[1.6rem] md:text-[1.2rem]">
            NAPA - Neplease American Pariyar Association
          </h2>

          <div
            onClick={handle_nav}
            className="absolute md:hidden right-6 top-[35%] cursor-pointer"
          >
            {!nav ? <AiOutlineMenu size={40} /> : <AiOutlineClose size={40} />}
          </div>
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#D9D9D9] ease-in-out duration-500 z-40"
                : "fixed left-[-100%]"
            }
          >
            <h1 className="text-[#8fc1b1] font-bold text-4xl w-full m-4 cursor-pointer uppercase ml-7">
              napa
            </h1>
            <ul className="uppercase p-4 cursor-pointer">
              <li className="p-4 border-b border-gray-600">Home</li>
              <li className="p-4 border-b border-gray-600">Company</li>
              <li className="p-4 border-b border-gray-600">Resources</li>
              <li className="p-4 border-b border-gray-600">About</li>
              <li className="p-4">Contact</li>
            </ul>
          </div>
        </div>
        <Link to={'/contact'}>
          <button className="text-white absolute right-10 rounded-lg top-[3rem] px-8 py-2 bg-green-600 hidden md:block hover:font-semibold">
            SignIn
          </button>
        </Link>
      </div>
    </>
  );
}

export default Nav;
