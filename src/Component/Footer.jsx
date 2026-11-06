import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 text-gray-400 py-10 px-6 sm:px-10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-1.5 text-xl font-bold text-white tracking-tight">
            <span className="font-mono text-cyan-400">&lt;</span>
            <span>Ferotech</span>
            <span className="font-mono text-cyan-400">/&gt;</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Built by <span className="text-gray-200 font-medium">Oluwaferanmi Adegbola</span>. Crafting modern digital experiences.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex items-center gap-6 text-sm">
          <Link
            to="home"
            smooth
            duration={500}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth
            duration={500}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            About
          </Link>
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="experience"
            smooth
            duration={500}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Contact
          </Link>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/fero-techist"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 text-gray-400 transition-all"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/oluwaferanmi-adegbola-694932245"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 text-gray-400 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="mailto:oluwaferanmiadegbola657@gmail.com"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 text-gray-400 transition-all"
              aria-label="Email"
            >
              <HiOutlineMail size={18} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 text-gray-400 transition-all cursor-pointer"
          >
            <FaArrowUp size={16} />
          </button>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
        <p>© {currentYear} Oluwaferanmi Adegbola. All rights reserved.</p>
        <p>Built with React.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
