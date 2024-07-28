import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Posts = () => {
  return (
    <div className="w-80 bg-[#282e36] p-6 rounded-lg border-b-4 border-slate-700">
      <div className="my-3"></div>
      <div className="my-3">
        <h3 className="text-[#e2e8f0] text-[20px] font-semibold">
          Lorem, ipsum dolor.
        </h3>
        <p className="text-[#64748b] font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore nihil
          perferendis adipisci. Mollitia earum veritatis ipsa suscipit ea quasi?
          Sequi animi saepe repudiandae possimus totam, labore eaque debitis
          alias aperiam vero repellat nisi ut aliquid facere ipsum sapiente
          cumque distinctio?
        </p>
        <p className="text-gray-500 flex items-center gap-1 cursor-pointer">
          Read More <FaArrowRight />
        </p>
      </div>
    </div>
  );
};

export default Posts;
