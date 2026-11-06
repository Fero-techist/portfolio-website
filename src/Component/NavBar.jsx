import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: 1, link: "home", label: "Home" },
    { id: 2, link: "about", label: "About" },
    { id: 3, link: "portfolio", label: "Projects" },
    { id: 4, link: "experience", label: "Skills" },
    { id: 5, link: "certificate", label: "Certificates" },
    { id: 6, link: "contact", label: "Contact" },
  ];

  const resumeHref = "/Oluwaferanmi_Adegbola_Joseph_FlowCV_Resume.pdf";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-slate-950/85 backdrop-blur-md  shadow-lg shadow-black/40 py-4"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 flex justify-between items-center">
        {/* Brand / Logo */}
        <Link
          to="home"
          smooth
          duration={500}
          className="cursor-pointer group flex items-center gap-1.5"
        >
          <span className="font-mono text-cyan-400 text-xl font-bold group-hover:-translate-x-0.5 transition-transform">
            &lt;
          </span>
          <span className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
            Ferotech
          </span>
          <span className="font-mono text-cyan-400 text-xl font-bold group-hover:translate-x-0.5 transition-transform">
            /&gt;
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-1" title="Available for work" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <ul className="flex items-center gap-1 list-none p-0 m-0">
            {links.map(({ id, link, label }) => (
              <li key={id}>
                <Link
                  to={link}
                  smooth
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="text-cyan-400 font-semibold bg-white/5"
                  className="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Resume Download CTA Button */}
          <a
            href={resumeHref}
            download
            target="_blank"
            rel="noreferrer"
            className="ml-4 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <FaFileDownload size={14} />
            <span>Resume</span>
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setNav(!nav)}
          aria-label="Toggle navigation menu"
          className="p-2 text-gray-300 hover:text-white md:hidden focus:outline-none cursor-pointer"
        >
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {nav && (
        <div className="fixed inset-0 top-[70px] bg-slate-950/95 backdrop-blur-xl md:hidden flex flex-col justify-between p-8 border-t border-white/10 animate-fadeIn">
          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            {links.map(({ id, link, label }) => (
              <li key={id}>
                <Link
                  onClick={() => setNav(false)}
                  to={link}
                  smooth
                  duration={500}
                  offset={-70}
                  className="px-4 py-3 rounded-xl text-lg font-medium text-gray-200 hover:text-cyan-400 hover:bg-white/5 transition-all block cursor-pointer"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <a
              href={resumeHref}
              download
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25"
            >
              <FaFileDownload size={16} />
              <span>Download Resume</span>
            </a>

            <div className="flex justify-center items-center gap-6 pt-2 text-gray-400">
              <a
                href="https://github.com/fero-techist"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/oluwaferanmi-adegbola-694932245"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:oluwaferanmiadegbola657@gmail.com"
                className="hover:text-cyan-400 transition-colors"
                aria-label="Email"
              >
                <HiOutlineMail size={26} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;