import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },

    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },

    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="  flex py-6 justify-between lg:px-18 md:px-12 px-10 items-center text-white bg-gradient-to-bl from-black to-gray-800">
      <h1 className=" text-5xl font-GreatVibes ml-2">Ferotech</h1>

      <ul className=" hidden md:flex gap-4 list-none">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className=" cursor-pointer hover:bg-gradient-to-r hover:text-white text-pretty grid justify-center items-center from-cyan-500 to-blue-500 rounded-lg h-10 font-Raleway capitalize px-4 font-medium gap-4 text-gray-500 hover:scale-105 duration-200"
          >
            <Link
              to={link}
              duration={500}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className=" cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className=" flex hover:scale-105 duration-200 absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 flex-col justify-center items-center">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className=" cursor-pointer px-4 list-none capitalize py-6 text-3xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
