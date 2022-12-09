import React from "react";

const President = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto">
        <div className="p-3">
          <h2 className="font-serif font-bold text-2xl capitalize mb-3 text-center">
            message from the president
          </h2>
          <img
            className="w-[35rem] mx-auto"
            src="https://association-webpage.sajannepali.repl.co/images/sandesh.jpg"
            alt=""
          />
          <h3 className="text-center font-semibold mt-4">
            Name: Sandesh Bardewa
          </h3>
        </div>
        <div className="p-4 mx-3 indent-8 leading-7 mt-16 md:mt-24">
          <h1 className="text-xl mb-3 font-bold indent-0">Introduction</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
            culpa reprehenderit. Odio numquam voluptas explicabo incidunt quo
            fugit et at ducimus. Porro nihil at cumque quaerat, perspiciatis
            modi totam. Numquam, ipsam? Necessitatibus sint modi iure, libero
            sit perspiciatis quod quis eaque rerum, aliquam aliquid!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
            culpa reprehenderit. Odio numquam voluptas explicabo incidunt quo
            fugit et at ducimus. Porro nihil at cumque quaerat, perspiciatis
            modi totam. Numquam, ipsam? Necessitatibus sint modi iure, libero
            sit perspiciatis quod quis eaque rerum, aliquam aliqui{" "}
            <span className="cursor-pointer text-blue-400">...read more</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default President;
