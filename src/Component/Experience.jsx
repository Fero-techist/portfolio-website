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
      src: REACTJS,
      title: "React.js",
      category: "Frontend Core",
      level: "Advanced",
      style: "hover:border-sky-500/50 hover:shadow-sky-500/20",
      accent: "text-sky-400",
    },
    {
      id: 2,
      src: Javascript,
      title: "JavaScript (ES6+)",
      category: "Frontend & Logic",
      level: "Proficient",
      style: "hover:border-yellow-500/50 hover:shadow-yellow-500/20",
      accent: "text-yellow-400",
    },
    {
      id: 3,
      src: NODE,
      title: "Node.js",
      category: "Backend Runtime",
      level: "Intermediate",
      style: "hover:border-green-500/50 hover:shadow-green-500/20",
      accent: "text-green-400",
    },
    {
      id: 4,
      src: EXPRESS,
      title: "Express.js",
      category: "Backend Framework",
      level: "Intermediate",
      style: "hover:border-gray-400/50 hover:shadow-white/20",
      accent: "text-gray-300",
    },
    {
      id: 5,
      src: TAILWIND,
      title: "Tailwind CSS",
      category: "Styling & UI",
      level: "Advanced",
      style: "hover:border-cyan-400/50 hover:shadow-cyan-400/20",
      accent: "text-cyan-400",
    },
    {
      id: 6,
      src: HTML,
      title: "HTML5",
      category: "Semantic Web",
      level: "Advanced",
      style: "hover:border-orange-500/50 hover:shadow-orange-500/20",
      accent: "text-orange-400",
    },
    {
      id: 7,
      src: CSS,
      title: "CSS3",
      category: "Layouts & Responsive",
      level: "Advanced",
      style: "hover:border-blue-500/50 hover:shadow-blue-500/20",
      accent: "text-blue-400",
    },
  ];

  return (
    <section
      name="experience"
      className="relative w-full min-h-screen py-24 px-6 sm:px-10 lg:px-16 bg-slate-950 text-white border-t border-slate-900"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Technologies &amp; Frameworks
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            The core programming languages, frameworks, and developer tools I utilize to craft production-ready applications.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {techs.map(({ id, src, title, category, level, style, accent }) => (
            <div
              key={id}
              className={`group p-6 rounded-2xl bg-slate-900/60 border border-slate-800 transition-all duration-300 shadow-md flex flex-col items-center text-center justify-between hover:-translate-y-1.5 ${style}`}
            >
              {/* Category chip */}
              <span className="text-[11px] font-medium text-gray-400 px-2 py-0.5 rounded-full bg-slate-800/80 mb-4 border border-white/5">
                {category}
              </span>

              {/* Icon Container */}
              <div className="w-20 h-20 mb-4 flex items-center justify-center p-2 rounded-xl bg-slate-950/80 border border-slate-800/80 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={src}
                  alt={title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Title & Level */}
              <div>
                <h3 className={`text-base font-bold text-white group-hover:${accent} transition-colors`}>
                  {title}
                </h3>
                <span className="text-xs text-gray-400 mt-1 block">
                  {level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;