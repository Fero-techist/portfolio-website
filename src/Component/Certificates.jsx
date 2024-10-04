import React from "react";
import certificateone from "../assets/certificate/Certificateone.png";
import certificateTwo from "../assets/certificate/certificatetwo.png";

const Certificates = () => {
  const certificate = [
    {
      id: 1,
      src: certificateone,
    },
    {
      id: 2,
      src: certificateTwo,
    },
  ];
  return (
    <div
      name="certificate"
      className=" bg-gradient-to-bl  py-6  from-black to-gray-800 w-full text-white md:min-h-screen"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl font-Raleway font-[800] inline border-b-4 border-gray-500">
            Certificates
          </p>
        </div>

        <div className=" grid lg:grid-cols-2 gap-8 px-12 sm:px-0">
          {certificate.map(({ id, src }) => (
            <div
              className=" shadow-md shadow-gray-600 rounded-lg"
              key={id}
            >
              <img
                className=" rounded-md duration-200 hover:scale-105"
                src={src}
                alt="Certificate"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
