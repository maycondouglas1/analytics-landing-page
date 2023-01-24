import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="text-3xl font-bold w-full text-[#00df9a]">ANALYTICS.</h1>
      <ul className="flex">
        <li className="text-xl p-4">Home</li>
        <li className="text-xl p-4">Company</li>
        <li className="text-xl p-4">Resources</li>
        <li className="text-xl p-4">About</li>
        <li className="text-xl p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
