import React from "react";
import PortfolioImage from "../assets/image_2_top_right(1).png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" w-full h-screen bg-gradient-to-r from-black to to-gray-700 lg:px-0 md:px-0 px-4 py-6 text-white"
    >
      <div className="mx-auto max-w-screen-lg flex flex-col items-center justify-between h-full px-2 md:flex-row">
        <div className=" flex flex-col justify-center h-full">
          <h2 className=" text-4xl sm:text-7xl font-bold font-Raleway">
            I'm a Software <br />
            <span className=" text-gradient-to-r from text-cyan-500 to-gray-700">
              Developer
            </span>
          </h2>

          <p className=" text-white py-2 max-w-md font-Raleway">
            Computer Science student and software developer passionate about
            building modern, responsive, and user-focused web applications. I
            specialize in frontend development with React.js, JavaScript, and
            TypeScript, while expanding my backend skills with Node.js, Express,
            and REST APIs. I enjoy turning ideas into practical digital
            solutions, solving problems, and continuously growing as a
            developer.
          </p>

          <div className=" font-Raleway">
            <Link
              to="portfolio"
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-b from-cyan-500 to-gray-700 cursor-pointer"
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

        <div className=""></div>
        <div className="  border-l-white border-2 rounded-none">
          <img
            src={PortfolioImage}
            alt="my profile"
            className=" mx-auto  lg:max-w-full md:w-[400px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
