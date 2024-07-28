import React from "react";

const HeroSection = () => {
  return (
    <>
      <div
        id="home"
        className="flex flex-col items-center justify-start pt-36 w-full h-[80vh] font-bold gap-10"
      >
        <div className="w-[50%] flex flex-col items-center justify-center gap-10">
          <div>
            <h1 className="text-5xl md:text-7xl text-white text-center">
              Octotech Technologies
            </h1>
            <br />
            <p className="text-center text-white font-normal text-[15px] md:text-[20px]">
              Teachyst enables educators and instructors to host, sell and
              market courses
              <br />
              on your custom domain
            </p>
          </div>
          <div>
            <button className="bg-slate-800 text-white text-1xl font-medium px-8 py-3 rounded-md">
              Get in Touch &#x2B95;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
