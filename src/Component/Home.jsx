import React from "react";
import PortfolioImage from "../assets/image_2_top_right(1).png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import ThreeHeroAnimation from "./ThreeHeroAnimation";

const Home = () => {
  const resumeHref = "/Oluwaferanmi_Adegbola_Joseph_FlowCV_Resume.pdf";

  return (
    <section
      name="home"
      className="relative w-full min-h-screen flex items-center justify-center pt-28 pb-16 px-6 sm:px-10 lg:px-16 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >

      <ThreeHeroAnimation />


      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 pointer-events-none max-w-screen-xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left items-center lg:items-start pointer-events-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium backdrop-blur-md mb-6 shadow-md shadow-emerald-500/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for full-time roles &amp; contracts
          </div>


          <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Oluwaferanmi
            </span>
            <br />
            <span className="text-gray-200 text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold">
              Software Developer
            </span>
          </h1>


          <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
            Computer Science Graduate passionate about engineering modern, responsive, and user-centric digital experiences. Specializing in frontend architecture with <strong className="text-white font-semibold">React.js</strong>, <strong className="text-white font-semibold">TypeScript</strong>, and <strong className="text-white font-semibold">Tailwind CSS</strong>, with solid backend skills in <strong className="text-white font-semibold">Node.js</strong> and <strong className="text-white font-semibold">Express</strong>.
          </p>


          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
            <Link
              to="portfolio"
              smooth
              duration={500}
              offset={-80}
              className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Explore My Work</span>
              <MdOutlineKeyboardArrowRight
                size={22}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <a
              href={resumeHref}
              download
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-gray-200 hover:text-white bg-slate-900/80 hover:bg-slate-850 border border-slate-700/80 hover:border-slate-600 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FaFileDownload size={16} className="text-cyan-400" />
              <span>Download CV</span>
            </a>

            <Link
              to="contact"
              smooth
              duration={500}
              offset={-80}
              className="px-6 py-3.5 rounded-xl font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all cursor-pointer"
            >
              Get In Touch
            </Link>
          </div>

          {/* Quick Social Links Bar */}
          <div className="flex items-center gap-4 text-gray-400">
            <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">Connect:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/fero-techist"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                aria-label="GitHub Profile"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/oluwaferanmi-adegbola-694932245"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="mailto:oluwaferanmiadegbola657@gmail.com"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                aria-label="Send an email"
              >
                <HiOutlineMail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center items-center pointer-events-auto">
          <div className="relative group max-w-[340px] sm:max-w-[380px] w-full">

            <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />


            <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-white/10 p-2 shadow-2xl">
              <img
                src={PortfolioImage}
                alt="Oluwaferanmi Adegbola"
                className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.02] transition duration-500"
              />


              <div className="absolute bottom-5 left-5 right-5 bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center justify-between text-xs">
                <div>
                  <p className="text-white font-semibold">Oluwaferanmi Adegbola</p>
                  <p className="text-cyan-400">Full-Stack &amp; Frontend Engineer</p>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Online
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Home;