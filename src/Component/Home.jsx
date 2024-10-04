import React from "react";
import PortfolioImage from "../assets/PortfolioImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" w-full h-screen bg-gradient-to-r from-black to to-gray-800 lg:px-0 md:px-0 px-8 py-6 text-white"
    >
      <div className="mx-auto max-w-screen-lg flex flex-col items-center justify-between h-full px-4 md:flex-row">
        <div className=" flex flex-col justify-center h-full">
          <h2 className=" text-4xl sm:text-7xl font-bold font-Raleway">
            I'm a Frontend <br />
            <span className=" text-gradient-to-r from text-cyan-500 to-blue-500">
              Developer
            </span>
          </h2>

          <p className=" text-gray-500 py-2 max-w-md font-Raleway">
            I have a year of experience building dynamic frontend pages and
            designing software. Currently I love to work on project and also
            collaborae with other developers. I work on technologies like React,
            Javascript, Tailwind and Many more to come.
          </p>

          <div className=" font-Raleway">
            <Link
              to="portfolio"
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 cursor-pointer"
            >
              portfolio
              <span className=" group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight
                  size={25}
                  className="ml-1"
                />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={PortfolioImage}
            alt="my profile"
            className=" mx-auto bg-cyan-500 rounded-lg lg:max-w-full md:w-[400px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
