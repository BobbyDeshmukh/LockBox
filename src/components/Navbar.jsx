import React from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-1">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-red-600"> &lt;</span>

          <span>Lock</span>
          <span className="text-red-600">Box/&gt;</span>
        </div>
        <a href="https://github.com/BobbyDeshmukh">
          <button className="text-white bg-black my-2 mx-1 rounded-full flex  justify-between items-center ring-red-500 ring-1 p-2">
            <FaGithub className="h-6 w-6"></FaGithub>
            <span className="font-bold px-2 text-red-500">GitHub</span>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
