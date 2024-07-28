import React from "react";
import Posts from "./Posts";

const Blogs = () => {
  const data = new Array(8).fill("undefined");
  return (
    <div
      id="blogs"
      className="flex flex-col items-center justify-center w-full font-bold pt-10 pb-10"
    >
      <div>
        <h2 className="text-5xl text-white text-center">Blogs</h2>
      </div>
      <br />
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10 ">
        {data.map((item, id) => (
          <Posts key={id} items={item} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
