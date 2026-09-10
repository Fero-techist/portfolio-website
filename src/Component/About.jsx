import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full lg:h-screen bg-gradient-to-bl from-black to-gray-700  py-6  text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h1 className="text-4xl font-bold font-Raleway inline border-b-4 border-gray-500">
            About
          </h1>
        </div>
        <p className="text-xl mt-20">
          I’m a Frontend Developer and Computer Science student who enjoys
          turning ideas into real, functional products. I primarily work with
          React.js, JavaScript, TypeScript, Tailwind CSS, and modern web
          technologies, building responsive and user-friendly experiences for
          both personal and real-world projects.
        </p>
        <br />
        <p className="text-xl">
          I’m constantly learning and expanding beyond frontend development,
          currently exploring backend development, AI, and data science. From
          building business websites and web applications to working on my
          final-year mineral resource information system, I enjoy using
          technology to solve practical problems. I’m passionate about growing
          as a developer, taking on new challenges, and building products that
          are useful, accessible, and impactful.
        </p>
      </div>
    </div>
  );
};

export default About;
