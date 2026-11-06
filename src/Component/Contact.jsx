import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaPaperPlane, FaCheck, FaCopy, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "oluwaferanmiadegbola657@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      name="contact"
      className="relative w-full min-h-screen py-24 px-6 sm:px-10 lg:px-16 bg-slate-950 text-white border-t border-slate-900"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Let's Collaborate &amp; Build Something Great
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Have a software engineering opportunity, a client project, or simply want to say hello? I'd love to connect.
          </p>
        </div>

        {/* 2-Column Contact Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
              Direct Channels
            </h3>

            {/* Email Card with 1-click Copy */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-lg shadow-black/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <HiOutlineMail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Email Address</h4>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-white hover:text-cyan-400 transition-colors font-medium break-all text-sm sm:text-base"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="mt-2 flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-750 text-gray-300 hover:text-white border border-slate-700 transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <FaCheck size={12} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <FaCopy size={12} />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Social & Professional Presence */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://linkedin.com/in/oluwaferanmi-adegbola-694932245"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase">LinkedIn</h4>
                  <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Connect Profile
                  </span>
                </div>
              </a>

              <a
                href="https://github.com/fero-techist"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-slate-800 text-gray-200 border border-white/10 group-hover:scale-110 transition-transform">
                  <FaGithub size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase">GitHub</h4>
                  <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                    @fero-techist
                  </span>
                </div>
              </a>
            </div>

            {/* Location & Availability Note */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-slate-800 text-emerald-400">
                <FaMapMarkerAlt size={18} />
              </div>
              <div className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                <p className="text-white font-medium mb-0.5">Location &amp; Availability</p>
                <p>Based in Nigeria. Available for remote software development roles and contract collaborations globally.</p>
                <p className="text-emerald-400 font-medium mt-1">⚡ Typical response: Within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl p-8 sm:p-10 shadow-xl shadow-black/20">
            <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-gray-400 mb-8">
              Fill in your details below and your message will land straight in my inbox.
            </p>

            <form
              action="https://getform.io/f/bvreodkb"
              method="POST"
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Opportunity / Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, timeline, or open role..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer mt-2"
              >
                <FaPaperPlane size={15} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;