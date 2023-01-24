import React from "react";
import Typed from "react-typed";

const Hero: React.FC = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col max-w-[800px] mt-[-96px] w-full h-screen text-center justify-center mx-auto">
        <p className="uppercase text-[#00df9a] font-bold p-2">
          Growing with data analytics
        </p>
        <h1 className="font-bold md:text-7xl sm:text-6xl text-4xl md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="text-xl md:text-5xl sm:text-4xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <Typed
            className="text-xl md:text-5xl sm:text-4xl font-bold md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase renevue for BTB, BTC & SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] mx-auto rounded-md py-3 my-6 font-medium text-black hover:bg-[#18976f] ease-in duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
