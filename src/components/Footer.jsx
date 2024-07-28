import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Divider from "./Divider";
const Footer = () => {
  console.log("Footer Rendered");
  return (
    <>
      <div className="flex w-full h-[50vh] flex-col items-center justify-around">
        <div className=" w-1/4 mt-5 flex flex-col justify-center items-center">
          <h2 className="text-[#e2e8f0] text-4xl text-center mb-2">
            Octotech Technologies
          </h2>
          <Divider color={`bg-[#818387]`}/>
          <div className="social-icons text-[#e2e8f0] flex items-center justify-center mt-2 gap-4">
            <a
              href="https://www.instagram.com/octotechdotin"
              className="text-[25px] font-semibold"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/octotechdotin"
              className="text-[25px] font-semibold"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/octotech-technologies/about/"
              className="text-[25px] font-semibold"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:octotechbusiness@gmail.com"
              className="text-[25px] font-semibold"
              target="_blank"
            >
              <IoMdMail />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-[#e2e8f0] text-[20px] font-semibold">
            developed by
            <a href="https://github.com/codeguyakash"> @codeguyakash</a>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
