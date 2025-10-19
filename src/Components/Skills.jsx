import React from "react";
import { motion } from "framer-motion";

const Skills = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      id="skills"
      className={`relative py-20 px-6 sm:px-10 md:px-20 overflow-hidden transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-b from-[#130428] via-[#2C1250] to-[#190634] text-gray-100"
          : "bg-gradient-to-b from-[#ffffff] via-[#e9e6ff] to-[#d8e4ff] text-gray-800"
      }`}
    >
      {/* Background Glow */}
      <div
        className={`absolute inset-0 blur-3xl opacity-70 ${
          isDark
            ? "bg-gradient-radial from-[#763CAC]/15 via-transparent to-transparent"
            : "bg-gradient-radial from-[#b39ddb]/20 via-transparent to-transparent"
        }`}
      ></div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-3xl  md:text-2xl sm:text-4xl font-semibold text-center mb-12"
      >
        <span
          className={`bg-clip-text text-transparent ${
            isDark
              ? "bg-gradient-to-r from-purple-400 to-blue-400"
              : "bg-gradient-to-r from-indigo-600 to-blue-500"
          }`}
        >
          Skills & Tech Stack
        </span>
      </motion.h2>

      {/* Skills Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "Frontend",
            icons: [
              "html",
              "css",
              "js",
              "react",
              "tailwind",
              "bootstrap",
              "nextjs",
              "materialui",
              "typescript",
            ],
          },
          {
            title: "Backend",
            icons: [
              "nodejs",
              "express",
              "mongodb",
              "spring",
              "django",
              "java",
              "python",
              "firebase",
              "mysql",
            ],
          },
          {
            title: "Tools",
            icons: [
              "git",
              "vscode",
              "figma",
              "postman",
              "aws",
              "docker",
              "kubernetes",
              "eclipse",
              "npm",
            ],
          },
          {
            title: "Soft Skills",
            custom: true,
            icons: [
              "assets/partners.png",
              "assets/analysis.png",
              "assets/communication-skills.png",
              "assets/time.png",
              "assets/help-desk.png",
              "assets/human.png",
            ],
          },
        ].map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`backdrop-blur-sm p-6 rounded-2xl border transition-all duration-500 ${
              isDark
                ? "bg-[#1c0f3b]/50 border-[#38126D]/50 shadow-[0_0_10px_#693B9370] hover:shadow-[0_0_14px_#763CAC70]"
                : "bg-[#f4f4ff]/60 border-[#c3c0f7]/60 shadow-[0_0_10px_#b39ddb60] hover:shadow-[0_0_14px_#b39ddb80]"
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-4 text-center ${
                isDark ? "text-purple-400" : "text-indigo-600"
              }`}
            >
              {group.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {group.custom
                ? group.icons.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={group.title}
                      className="w-7 h-7 sm:w-8 sm:h-8 opacity-90 hover:opacity-100 transition-all"
                    />
                  ))
                : group.icons.map((icon, i) => (
                    <img
                      key={i}
                      src={`https://skillicons.dev/icons?i=${icon}`}
                      alt={icon}
                      className="w-7 h-7 sm:w-8 sm:h-8 opacity-90 hover:opacity-100 transition-all"
                    />
                  ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
