import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full lg:h-screen bg-gradient-to-bl from-black to-gray-700  py-6  text-white"
    >
      {/* <div className=" max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full">
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
      </div> */}

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h1 className="text-4xl font-bold font-Raleway inline border-b-4 border-gray-500">
            About
          </h1>
        </div>

        <p className="text-xl mt-10 leading-relaxed">
          I'm a Software Developer and Computer Science student passionate about
          building practical digital solutions that solve real-world problems.
          My strongest area is frontend development, where I work with React.js,
          JavaScript, TypeScript, and Tailwind CSS to create responsive,
          intuitive, and user-focused web applications. I enjoy transforming
          ideas into functional products with clean interfaces and meaningful
          user experiences.
        </p>

        <br />

        <p className="text-xl leading-relaxed">
          Beyond frontend development, I'm expanding my skills in backend
          engineering with Node.js, Express, and REST APIs, while exploring AI
          integration and data-driven applications. Through projects such as
          MineScope, FunMeal, CEPROAM, and Unity Connect, I've had opportunities
          to work on different kinds of software solutions, strengthen my
          development skills, and understand how technology can address
          practical needs.
        </p>

        <br />

        <p className="text-xl leading-relaxed">
          I'm always open to learning, collaborating with other developers, and
          taking on challenging opportunities that help me grow. My goal is to
          become a well-rounded software engineer, building scalable,
          maintainable, and impactful applications.
        </p>
      </div>
    </div>
  );
};

export default About;
