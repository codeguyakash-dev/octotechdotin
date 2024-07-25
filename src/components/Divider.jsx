import React from "react";

const Divider = ({ color }) => {
  color = `${[color]}` || "bg-[#1e293b]";

  return <div className={`h-[1px] ${color} w-[80%] mx-auto my-4`}></div>;
};

export default Divider;
