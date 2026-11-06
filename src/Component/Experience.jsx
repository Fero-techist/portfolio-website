import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/CSS.jpg";
import TAILWIND from "../assets/TAILWIND.jpg";
import REACTJS from "../assets/react.jpg";
import Javascript from "../assets/Javascript.png";
import NODE from "../assets/node.png";
import EXPRESS from "../assets/express.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: Javascript,
      title: "Javascript",
      style: "shadow-yellow-600",
    },
    {
      id: 4,
      src: REACTJS,
      title: "ReactJs",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: TAILWIND,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: NODE,
      title: "Node JS",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: EXPRESS,
      title: "Express JS",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="experience"
      className=" bg-gradient-to-bl from-gray-700  py-6 to-black w-full min-h-screen"
    >
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className=" text-4xl font-bold font-Raleway border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className=" py-6">These are the technologies I have worked with</p>
        </div>

        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img
                className=" w-20 mx-auto"
                src={src}
                alt={title}
              />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
