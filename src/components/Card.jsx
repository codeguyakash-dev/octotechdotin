import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Card = ({ items }) => {
  return (
    <div className="w-80 bg-[#282e36] p-6 rounded-lg">
      <div className="my-3">
        <img src={items.logo} alt="logo" width={45} />
      </div>
      <div className="my-3">
        <h3 className="text-[#e2e8f0] text-[20px] font-semibold">
          {items.title}
        </h3>
        <p className="text-[#64748b] font-semibold">{items.description}</p>
        <br />
        <p className="text-gray-500 cursor-pointer  flex items-center gap-1">
          Learn More <FaArrowRight />
        </p>
      </div>
    </div>
  );
};

export default Card;
