
import { GrGithub } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#eacda3] to-[#d6ae7b] text-white w-full p-[19px] flex items-center justify-between border-t-4 border-gradient-to-r from-[#eacda3] to-[#d6ae7b]">

      <p>Shoppy Globe</p>
      <p>Parth Rane &#169; &#8482;</p>
      <div className="flex gap-5">
        <a href="https://github.com/parth12638" target="_blank" rel="noopener noreferrer">
          <GrGithub className="text-xl hover:scale-110 cursor-pointer transition-all duration-200 ease-linear" />
        </a>
        <a
          href="https://www.linkedin.com/in/parth-rane-431888226/"
          target="_blank" rel="noopener noreferrer"
        >
          <IoLogoLinkedin className="text-xl hover:scale-110 cursor-pointer transition-all duration-200 ease-linear" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
