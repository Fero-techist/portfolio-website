import React, { useState } from "react";
import { FaAward, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import certificateone from "../assets/certificate/Certificateone.png";
import certificateTwo from "../assets/certificate/certificatetwo.png";
import certificatethree from "../assets/certificate/certificate3.png";
import certificateFour from "../assets/certificate/certificate4.png"
import certificateFive from "../assets/certificate/certificate5.jpg"

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Generative Artificial Intelligence",
      issuer: "LinkedIn || Microsoft",
      src: certificateone,
      description: "Certified qualification covering modern Generative AI principles, prompt engineering, and AI model integration.",
    },
    {
      id: 2,
      title: "Software Engineering & Web Development",
      issuer: "LinkedIn || Microsoft",
      src: certificateTwo,
      description: "Certified completion in full-stack software development principles, modern frontend frameworks, and clean code practices.",
    },
    {
      id: 3,
      title: "Web Designing & Development ",
      issuer: "FreeCodeCamp",
      src: certificatethree,
      pdf: "/game_development_certificate.pdf",
      description: "Certification in Web Designing and Development from FreeCodeCamp.",
    },
    {
      id: 4,
      title: "Claude with API",
      issuer: "Anthropic",
      src: certificateFour,
      pdf: "/full_stack_web_development_certificate.pdf",
      description: "Certification in Claude with API from Anthropic.",
    },
    {
      id: 5,
      title: "Backend AI Engineering",
      issuer: "Anthropic",
      src: certificateFive,
      pdf: "/javascript_programming_certificate.pdf",
      description: "Certification in Backend AI Engineering from Anthropic.",
    },



  ];

  return (
    <section
      name="certificate"
      className="relative w-full min-h-screen py-24 px-6 sm:px-10 lg:px-16 bg-slate-950 text-white border-t border-slate-900"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
            Credentials
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Certifications &amp; Achievements
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Validated qualifications demonstrating dedication to continuous learning and technical mastery.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map(({ id, title, issuer, src, pdf, description }) => (
            <div
              key={id}
              className="group flex flex-col justify-between rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden shadow-xl shadow-black/20 hover:-translate-y-1"
            >
              <div>
                {/* Certificate Thumbnail */}
                <div
                  onClick={() => setSelectedImage(src)}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950 cursor-pointer"
                >
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-lg bg-cyan-500 text-white text-xs font-semibold shadow-lg">
                      Click to Expand
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-medium mb-2">
                    <FaAward size={14} />
                    <span>{issuer}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold">
                <button
                  onClick={() => setSelectedImage(src)}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  View Full Screen
                </button>

                {pdf && (
                  <a
                    href={pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
                  >
                    <span>Download PDF</span>
                    <FaExternalLinkAlt size={11} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal for Expanded Certificate View */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer animate-fadeIn"
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-cyan-400 transition-colors"
              aria-label="Close Preview"
            >
              <FaTimes size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Certificate Preview"
              className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;