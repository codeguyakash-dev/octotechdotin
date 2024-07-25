import React from "react";

const SkillCard = ({ items }) => {
  return (
    <div className="bg-[#282e36] h-44 w-44 flex items-center justify-center rounded-lg border-[2px] border-[#9d9d9d11]">
      <div>
        <div className="m-2 block rounded-full shadow-sm">{items.icons}</div>

        <h4 className="text-center text-gray-200">{items.name}</h4>
      </div>
    </div>
  );
};

export default SkillCard;
