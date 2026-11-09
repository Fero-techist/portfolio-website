import React from "react";
import { FaGraduationCap, FaLaptopCode, FaRocket } from "react-icons/fa";
import {
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineSparkles,
} from "react-icons/hi";

const About = () => {
  const highlights = [
    {
      id: 1,
      icon: (
        <FaGraduationCap
          size={24}
          className="text-cyan-400"
        />
      ),
      title: "B.Sc. Computer Science",
      subtitle:
        "Graduate with strong software engineering & algorithmic foundations.",
    },
    {
      id: 2,
      icon: (
        <FaLaptopCode
          size={24}
          className="text-blue-400"
        />
      ),
      title: "Full-Stack Development",
      subtitle:
        "Frontend mastery in React & TypeScript with Node.js & Express backends.",
    },
    {
      id: 3,
      icon: (
        <FaRocket
          size={24}
          className="text-indigo-400"
        />
      ),
      title: "6+ Deployed Solutions",
      subtitle:
        "Real-world web apps from mineral resource systems to commercial portals.",
    },
  ];

  const focusAreas = [
    {
      icon: (
        <HiOutlineCode
          size={22}
          className="text-cyan-400"
        />
      ),
      title: "Frontend Architecture",
      desc: "Crafting scalable, responsive, and accessible interfaces with React, modern JavaScript/TypeScript, and Tailwind CSS.",
    },
    {
      icon: (
        <HiOutlineServer
          size={22}
          className="text-blue-400"
        />
      ),
      title: "Backend & REST APIs",
      desc: "Building clean server-side logic, routing, middleware, and API endpoints using Node.js, Express, and modern database tools.",
    },
    {
      icon: (
        <HiOutlineSparkles
          size={22}
          className="text-purple-400"
        />
      ),
      title: "User-Centric Innovation",
      desc: "Translating complex operational requirements into intuitive workflows, whether for enterprise property management or industrial portals.",
    },
  ];

  return (
    <section
      name="about"
      className="relative w-full min-h-screen py-24 px-6 sm:px-10 lg:px-16 bg-slate-950 text-white"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
            About Me
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Passionate About Building Practical Digital Solutions
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            A developer who bridges technical foundations with modern web
            craftsmanship to deliver impactful software.
          </p>
        </div>

        {/* 3 Metric / Credential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {highlights.map(({ id, icon, title, subtitle }) => (
            <div
              key={id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-lg shadow-black/20 hover:-translate-y-1"
            >
              <div className="p-3 w-fit rounded-xl bg-slate-800/80 border border-white/5 mb-4">
                {icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-1.5">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Narrative & Focus Areas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Detailed Narrative */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 sm:p-10 space-y-6 text-gray-300 leading-relaxed text-base sm:text-lg">
            <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              Who I Am &amp; What Drives Me
            </h3>
            <p>
              I'm a{" "}
              <strong className="text-white font-semibold">
                Software Developer
              </strong>{" "}
              and{" "}
              <strong className="text-white font-semibold">
                Computer Science graduate
              </strong>{" "}
              focused on turning ideas into functional, scalable products with
              clean interfaces and robust code.
            </p>
            <p>
              My core strength is in modern frontend engineering, using{" "}
              <strong className="text-cyan-300 font-semibold">React.js</strong>,{" "}
              <strong className="text-cyan-300 font-semibold">
                JavaScript
              </strong>
              ,{" "}
              <strong className="text-cyan-300 font-semibold">
                TypeScript
              </strong>
              , and{" "}
              <strong className="text-cyan-300 font-semibold">
                Tailwind CSS
              </strong>{" "}
              to build responsive, intuitive, and user-focused web applications.
            </p>
            <p>
              Beyond the client-side, I engineer backend systems with{" "}
              <strong className="text-blue-300 font-semibold">Node.js</strong>,{" "}
              <strong className="text-blue-300 font-semibold">
                Express.js
              </strong>
              , and{" "}
              <strong className="text-blue-300 font-semibold">REST APIs</strong>
              , while exploring AI integration and data-driven systems. Through
              projects like{" "}
              <strong className="text-white font-semibold">MineScope</strong>,{" "}
              <strong className="text-white font-semibold">CEPROAM</strong>, and{" "}
              <strong className="text-white font-semibold">
                Unity Connect
              </strong>
              , I solve real operational challenges through code.
            </p>
          </div>

          {/* Core Focus Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-white tracking-tight mb-2 px-1">
              Core Competencies
            </h3>
            {focusAreas.map(({ icon, title, desc }, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-slate-800 border border-white/5">
                    {icon}
                  </div>
                  <h4 className="text-base font-semibold text-white">
                    {title}
                  </h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
