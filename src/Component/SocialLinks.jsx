import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={24} className="text-blue-400" />
        </>
      ),
      href: "https://linkedin.com/in/oluwaferanmi-adegbola-694932245",
      style: "rounded-tr-xl",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={24} className="text-gray-200" />
        </>
      ),
      href: "https://github.com/fero-techist",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={24} className="text-cyan-400" />
        </>
      ),
      href: "mailto:oluwaferanmiadegbola657@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={24} className="text-emerald-400" />
        </>
      ),
      href: "/Oluwaferanmi_Adegbola_Joseph_FlowCV_Resume.pdf",
      style: "rounded-br-xl",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-40">
      <ul className="m-0 p-0 list-none">
        {links.map(({ id, style, href, download, child }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-12 px-4 ml-[-105px] hover:ml-0 duration-300 bg-slate-900/95 backdrop-blur-md border-y border-r border-slate-700/80 hover:border-cyan-500/50 text-gray-200 hover:text-white shadow-xl shadow-black/30 ${
              style || ""
            }`}
          >
            <a
              href={href}
              className="flex items-center text-sm font-semibold justify-between text-inherit no-underline w-full gap-2"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;