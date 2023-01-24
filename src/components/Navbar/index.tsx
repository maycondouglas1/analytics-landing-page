import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<Boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="text-3xl font-bold w-full text-[#00df9a]">ANALYTICS.</h1>
      <ul className="hidden md:flex">
        <li className="text-xl p-4 cursor-pointer hover:text-gray-300">
          Home
        </li>
        <li className="text-xl p-4 cursor-pointer hover:text-gray-300">
          Company
        </li>
        <li className="text-xl p-4 cursor-pointer hover:text-gray-300">
          Resources
        </li>
        <li className="text-xl p-4 cursor-pointer hover:text-gray-300">
          About
        </li>
        <li className="text-xl p-4 cursor-pointer hover:text-gray-300">
          Contact
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed top-0 left-0 w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl font-bold w-full text-[#00df9a] m-4">
          ANALYTICS.
        </h1>
        <li className="p-4 border-b border-b-gray-600">Home</li>
        <li className="p-4 border-b border-b-gray-600">Company</li>
        <li className="p-4 border-b border-b-gray-600">Resources</li>
        <li className="p-4 border-b border-b-gray-600">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
