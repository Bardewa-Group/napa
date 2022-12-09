import React from "react";

const Info = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1 w-[80%] mx-auto my-3">
        <div className="p-5 text-center">
          <img
            className="w-[15rem] mx-auto mb-3"
            src="https://association-webpage.sajannepali.repl.co/images/joinll.png"
            alt=""
          />
          <h1 className="font-semibold text-xl">Apply to join</h1>
          <p className="my-3 px-6">
            NAPA Is A Non-Profit Community Organization. It Is Formally
            Established On 2020 From The United States Of American. Aiming To
            Unified Scattered Brothers And Sisters Together, It Will Work For
            Community Upliftments.
          </p>
          <span className="block">"Together We'll Make A Change."</span>
          <button className="hover:underline font-extralight hover:font-medium">
            + Learn more
          </button>
        </div>

        <div className="p-5 text-center">
          <img
            className="w-[15rem] mx-auto mb-3"
            src="https://association-webpage.sajannepali.repl.co/images/donate2.png"
            alt=""
          />
          <h1 className="font-semibold text-xl">Apply to join</h1>
          <p className="my-3 px-6">
            NAPA Is A Non-Profit Community Organization. It Is Formally
            Established On 2020 From The United States Of American. Aiming To
            Unified Scattered Brothers And Sisters Together, It Will Work For
            Community Upliftments.
          </p>
          <span className="block">"Together We'll Make A Change."</span>
          <button className="hover:underline font-extralight hover:font-medium">
            {" "}
            + Learn more
          </button>
        </div>

        <div className="p-5 text-center">
          <img
            className="w-[15rem] mx-auto mb-3"
            src="https://association-webpage.sajannepali.repl.co/images/donate2.png"
            alt=""
          />
          <h1 className="font-semibold text-xl">Apply to join</h1>
          <p className="my-3 px-6">
            NAPA Is A Non-Profit Community Organization. It Is Formally
            Established On 2020 From The United States Of American. Aiming To
            Unified Scattered Brothers And Sisters Together, It Will Work For
            Community Upliftments.
          </p>
          <span className="block">"Together We'll Make A Change."</span>
          <button className="hover:underline font-extralight hover:font-medium">
            + Learn more
          </button>
        </div>
      </div>
    </>
  );
};

export default Info;
