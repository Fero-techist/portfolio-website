import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full lg:h-screen bg-gradient-to-bl from-black to-gray-800  py-6  text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <h1 className=" text-4xl font-bold font-Raleway inline border-b-4 border-gray-500">
            About
          </h1>
        </div>
        <p className=" text-xl mt-20">
          As a frontend developer, I specialize in building responsive,
          user-friendly web applications using React, Tailwind CSS, and
          Supabase. My portfolio includes projects like a dynamic crypto
          dashboard and a fully-functional banking application with transaction
          management. I focus on delivering clean, efficient code with attention
          to design, performance, and accessibility.
        </p>
        <br />

        <p className=" text-xl">
          I focus on creating user-friendly experiences with smooth interactions
          across devices. I enjoy turning complex ideas into simple, effective
          designs that look good and work well. Always learning and staying
          current with the latest tools and techniques, I strive to build
          solutions that not only meet client goals but also deliver a great
          experience for users.
        </p>
      </div>
    </div>
  );
};

export default About;
