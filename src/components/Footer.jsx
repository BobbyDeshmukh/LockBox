import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-row items-center  w-full justify-between p-3">
      <div className="logo font-bold text-white text-2xl px-1">
        <span className="text-red-600"> &lt;</span>

        <span>Lock</span>
        <span className="text-red-600">Box/&gt;</span>
      </div>
      <div className="flex justify-center items-center font-bold text-white gap-1 px-1">
        {" "}
        Created with by <span className="text-red-500">
          Bobby Deshmukh
        </span>{" "}
      </div>
    </div>
  );
};

export default Footer;
