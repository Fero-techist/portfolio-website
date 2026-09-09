import React from "react";

import Ecommerce from "../assets/portfolio/Ecommerce.png";

import minescope from "../assets/portfolio/minescope.png";

import skillKonnect from "../assets/portfolio/skillkonect.png";

import Ceproam from "../assets/portfolio/Screenshot 2026-09-09 114935.png";

import BankApp from "../assets/portfolio/BankApp.png";

import BlockWebsite from "../assets/portfolio/image.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Unity Connect Block Website",
      src: BlockWebsite,
      livedemo: "https://unity-connect-block-industry-lovat.vercel.app/",
    },

    {
      id: 2,
      title: "MineScope Website",
      src: minescope,
      livedemo: "https://minescope-nine.vercel.app/",
    },
    {
      id: 3,
      title: "SkillKonnect360",
      src: skillKonnect,
      livedemo: "https://skill-konnect360-bk8k.vercel.app/",
    },

    {
      id: 4,
      title: "Cephas Property Management",
      src: Ceproam,
      livedemo: "https://ceproam-website.vercel.app/",
    },
    {
      id: 5,
      title: "A simple banking application",
      src: BankApp,
      livedemo: "",
    },
    {
      id: 6,
      title: "Ecommerce-website",
      src: Ecommerce,
      livedemo: "",
    },
  ];
  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-bl py-6  from-black to-[#2F1893] w-full text-white md:min-h-screen"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-Raleway font-[800] inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className=" py-6">Check out some of my work right here</p>
        </div>

        <div className=" grid  sm:grid-cols-2 md:grid-cols-3 gap-10 sm:px-0">
          {portfolios.map(({ id, src, title, livedemo }) => (
            <div
              key={id}
              className=" shadow-md shadow-gray-600 rounded-lg"
            >
              <h3 className="text-xl text-center font-Raleway capitalize py-4 font-semibold text-white">
                {title}
              </h3>

              <div className="relative w-full max-w-[400px] mx-auto">
                {/* <img
                  src={headerImg || "/placeholder.svg"}
                  alt={project.title || project.name}
                  className="w-full max-w-[400px] mx-auto object-cover mb-4"
                /> */}
                <img
                  src={src}
                  alt={title}
                  className="w-full object-cover mb-4 rounded-lg"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <a
                    href={livedemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold text-lg bg-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-800"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
              {/* <img
                className=" rounded-md duration-200 hover:scale-105"
                src={src}
                alt=""
              /> */}
              {/* <div className="flex items-center justify-center">
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div> */}

              {/* <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold text-lg bg-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-800"
                >
                  Visit Site
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
