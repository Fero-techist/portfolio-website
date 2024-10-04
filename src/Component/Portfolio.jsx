import React from "react";
import Ecommerce from "../assets/portfolio/Ecommerce.png";
import Dashboard from "../assets/portfolio/Dashboard.png";
import elderlyImagewebsite from "../assets/portfolio/elderlyImagewebsite .png";
import TicTacToe from "../assets/portfolio/Tic-Tac-Toe.png";
import BankApp from "../assets/portfolio/BankApp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Ecommerce,
    },
    {
      id: 2,
      src: Dashboard,
    },
    {
      id: 3,
      src: elderlyImagewebsite,
    },
    {
      id: 4,
      src: TicTacToe,
    },
    {
      id: 5,
      src: BankApp,
    },
  ];
  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-bl  py-6  from-black to-gray-800 w-full text-white md:min-h-screen"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-Raleway font-[800] inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className=" py-6">Check out some of my work right here</p>
        </div>

        <div className=" grid  sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div
              key={id}
              className=" shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                className=" rounded-md duration-200 hover:scale-105"
                src={src}
                alt=""
              />
              <div className="flex items-center justify-center">
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
