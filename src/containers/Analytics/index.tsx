import React from "react";
import Laptop from "../../assets/images/laptop.jpg";

const Analytics: React.FC = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="Laptop" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold">
            Data Analytics Dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analitycs Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            auctor, nisl eget ultricies tincidunt, nunc elit lacinia nisl, nec
            ultricies nisl lorem in ipsum. Sed auctor, nisl eget ultricies
            tincidunt, nunc elit lacinia nisl, nec ultricies nisl lorem in
            ipsum.
          </p>
          <button className="bg-black w-[200px] mx-auto md:mx-0 rounded-md py-3 my-6 font-medium text-[#00df9a] hover:bg-gray-800 ease-in duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
