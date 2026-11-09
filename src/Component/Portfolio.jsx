import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Peanut from "../assets/portfolio/peanut.png"
import Ecommerce from "../assets/portfolio/Ecommerce.png";
import minescope from "../assets/portfolio/minescope.png";
import skillKonnect from "../assets/portfolio/skillkonect.png";
import Ceproam from "../assets/portfolio/Screenshot 2026-09-09 114935.png";
import BankApp from "../assets/portfolio/BankApp.png";
import BlockWebsite from "../assets/portfolio/image.png";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Unity Connect Block Industry",
      category: "web",
      description: "A commercial platform engineered for an industrial concrete and block manufacturing firm, featuring product catalogs, inquiry routing, and mobile-optimized ordering workflows.",
      src: BlockWebsite,
      tags: ["React.js", "Tailwind CSS", "Responsive UI", "Vercel"],
      livedemo: "https://unity-connect-block-industry-lovat.vercel.app/",
      github: "https://github.com/fero-techist",
    },
    {
      id: 2,
      title: "MineScope Information System",
      category: "system",
      description: "A comprehensive mineral resource exploration and data intelligence system built to organize, visualize, and query mineral deposit records and geospatial insights.",
      src: minescope,
      tags: ["React.js", "REST APIs", "Data Visualization", "Tailwind"],
      livedemo: "https://minescope-nine.vercel.app/",
      github: "https://github.com/fero-techist",
    },
    {
      id: 3,
      title: "CEPROAM Property Management",
      category: "web",
      description: "An end-to-end real estate and property management website offering property listings, agent contact pipelines, service breakdowns, and dynamic search filters.",
      src: Ceproam,
      tags: ["React.js", "Tailwind CSS", "Vercel", "Component UI"],
      livedemo: "https://ceproam-website.vercel.app/",
      github: "https://github.com/fero-techist",
    },


    {
      id: 4,
      title: "Kings Peanut",
      category: "web",
      description: "  A peanut wholesale and distributor website for improving business visibility and customer reach. It is a responsive website that can be accessed from any device. ",
      src: Peanut,
      tags: ["React.js", "Tailwind CSS", "Vercel", "Component UI"],
      livedemo: "https://kings-peanuts.vercel.app/",
      github: "https://github.com/fero-techist",
    },

    {
      id: 5,
      title: "SkillKonnect360 Platform",
      category: "web",
      description: "A talent and skills discovery platform designed to connect skilled professionals with clients, featuring clean service profiles and booking workflows.",
      src: skillKonnect,
      tags: ["React.js", "Tailwind CSS", "Modern Web", "Vercel"],
      livedemo: "https://skill-konnect360-bk8k.vercel.app/",
      github: "https://github.com/fero-techist",
    },
    {
      id: 6,
      title: "Modern Banking Application",
      category: "app",
      description: "A financial dashboard prototype with balance analytics, simulated money transfers, transaction history records, and account management views.",
      src: BankApp,
      tags: ["React.js", "JavaScript", "State Management", "CSS3"],
      livedemo: "",
      github: "https://github.com/fero-techist",
    },
    {
      id: 7,
      title: "Full E-Commerce Platform",
      category: "app",
      description: "A digital storefront interface featuring product catalogs, categorized browsing, cart management, and streamlined checkout interfaces.",
      src: Ecommerce,
      tags: ["React.js", "Tailwind CSS", "REST APIs", "E-Commerce"],
      livedemo: "",
      github: "https://github.com/fero-techist",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((item) => item.category === filter);

  return (
    <section
      name="portfolio"
      className="relative w-full min-h-screen py-24 px-6 sm:px-10 lg:px-16 bg-slate-950 text-white border-t border-slate-900"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
              Featured Work
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Selected Projects &amp; Case Studies
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mt-3 max-w-2xl">
              A collection of live commercial websites, client solutions, and web applications engineered with precision.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
            {[
              { key: "all", label: "All Projects" },
              { key: "web", label: "Client Sites" },
              { key: "system", label: "Systems" },
              { key: "app", label: "Web Apps" },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${filter === key
                  ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/20"
                  : "text-gray-400 hover:text-white"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(({ id, title, description, src, tags, livedemo, github }) => (
            <div
              key={id}
              className="group flex flex-col justify-between rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden shadow-xl shadow-black/20 hover:-translate-y-1"
            >
              <div>

                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                    {livedemo ? (
                      <a
                        href={livedemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-white text-sm font-semibold hover:bg-cyan-400 shadow-lg shadow-cyan-500/30 transition-all"
                      >
                        <FaExternalLinkAlt size={12} />
                        <span>Visit Site</span>
                      </a>
                    ) : (
                      <span className="px-3.5 py-1.5 rounded-lg bg-slate-900/90 text-gray-300 text-xs font-medium border border-white/10">
                        Demo on GitHub
                      </span>
                    )}
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-slate-900/90 text-white hover:text-cyan-400 border border-white/10 transition-all"
                        aria-label="GitHub Repository"
                      >
                        <FaGithub size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-800/80 text-cyan-300 border border-cyan-500/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold">
                {livedemo ? (
                  <a
                    href={livedemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Live Demo</span>
                    <FaExternalLinkAlt size={11} />
                  </a>
                ) : (
                  <span className="text-gray-400">Prototype / Showcase</span>
                )}

                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub size={13} />
                  <span>Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;