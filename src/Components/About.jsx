import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const About = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      id="about"
      className={`relative min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-10 px-6 md:px-20 py-28 overflow-hidden transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-b from-[#130428] via-[#251043] to-[#190634] text-gray-100"
          : "bg-gradient-to-b from-[#ffffff] via-[#e9e6ff] to-[#d8e4ff] text-gray-800"
      }`}
    >
      {/* Background blur effect */}
      <div
        className={`absolute inset-0 blur-3xl opacity-60 ${
          isDark
            ? "bg-gradient-radial from-[#763CAC]/40 to-transparent"
            : "bg-gradient-radial from-[#b39ddb]/40 to-transparent"
        }`}
      ></div>

      {/* Profile Image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end z-10"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div
          className={`relative md:-mt-40 md:mr-30 w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 transition-all duration-500 ${
            isDark ? "border-purple-500" : "border-indigo-400"
          }`}
        >
          <img
            src="assets/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="flex-1 text-center md:text-left space-y-5 z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-2xl sm:text-4xl font-semibold">
          <span
            className={`bg-clip-text text-transparent ${
              isDark
                ? "bg-gradient-to-r from-purple-400 to-blue-400"
                : "bg-gradient-to-r from-indigo-600 to-blue-500"
            }`}
          >
            About Me
          </span>
        </h2>

        <p
          className={`text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          I’m <span className="font-semibold text-purple-400">Gurumurthy</span>, a
          <span className="font-semibold text-blue-400"> Full Stack Developer</span> and
          <span className="font-semibold text-blue-400"> DevOps Engineer</span> passionate
          about designing modern, scalable, and efficient web applications that blend
          creativity and functionality.
        </p>

        <p
          className={`text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          I specialize in the <span className="font-semibold">MERN stack</span>, cloud
          integration with <span className="font-semibold">AWS</span>, and automation
          through DevOps tools. I enjoy solving real-world problems and constantly learning
          new technologies to improve user experiences.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center md:justify-start gap-8 pt-3">
          <div className="text-center">
            <h3
              className={`text-xl font-bold ${
                isDark ? "text-purple-400" : "text-indigo-600"
              }`}
            >
              2+
            </h3>
            <p
              className={`text-xs uppercase ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Years Exp.
            </p>
          </div>
          <div className="text-center">
            <h3
              className={`text-xl font-bold ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            >
              15+
            </h3>
            <p
              className={`text-xs uppercase ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Projects
            </p>
          </div>
          <div className="text-center">
            <h3
              className={`text-xl font-bold ${
                isDark ? "text-purple-400" : "text-indigo-600"
              }`}
            >
              5+
            </h3>
            <p
              className={`text-xs uppercase ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Certifications
            </p>
          </div>
        </div>

        {/* Resume Button */}
        <div className="pt-5">
          <a
            href="assets/Gurumurthy_Karri_MERN_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-5 py-2 rounded-full text-white text-sm font-semibold transition-all duration-300 ${
              isDark
                ? "bg-gradient-to-r from-[#693B93] via-[#38126D] to-[#190634] shadow-[0_0_12px_#763CAC80] hover:shadow-[0_0_18px_#763CAC]"
                : "bg-gradient-to-r from-[#b39ddb] via-[#8ea8ff] to-[#7289da] text-gray-900 shadow-[0_0_12px_#b39ddb80] hover:shadow-[0_0_18px_#8ea8ff]"
            } hover:scale-105`}
          >
            <Download className="w-4 h-4 mr-2" /> Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

