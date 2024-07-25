import octotechlogo from "../assets/icons/octotech.png";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

import SkillCard from "./SkillCard";

const Technology = () => {
  const size = "text-6xl mx-auto text-white";
  const Skills = [
    { name: "JavaScript", icons: <IoLogoJavascript className={size} /> },
    { name: "Nodejs", icons: <FaNodeJs className={size} /> },
    { name: "ReactJs", icons: <FaReact className={size} /> },
    { name: "NextJs", icons: <RiNextjsLine className={size} /> },
    { name: "TailwindCSS", icons: <RiTailwindCssFill className={size} /> },
    { name: "ExpressJs", icons: <SiExpress className={size} /> },
    { name: "MongoDB", icons: <SiMongodb className={size} /> },
  ];

  return (
    <div
      id="technologies"
      className="flex flex-col items-center justify-center w-full font-bold pt-10 pb-10"
    >
      <div>
        <h2 className="text-5xl text-white text-center">Technologies</h2>
      </div>
      <div className="flex flex-col items-center justify-between my-10 cursor-pointer">
        <div className="border-[10px] border-gray-300 rounded-[50%] h-[150px] w-[150px] flex items-center justify-center">
          <img src={octotechlogo} alt="logo" width={150} />
        </div>
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-10 mt-20">
          {Skills.map((items, index) => (
            <SkillCard items={items} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
