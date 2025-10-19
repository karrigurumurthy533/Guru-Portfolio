import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "BrainoVision Solutions Pvt Ltd",
    role: " Java Full Stack Developer Intern",
    duration: "July 2023 – August 2023",
    achievements: [
      "Built responsive front-end components using React and Tailwind CSS.",
      "Integrated REST APIs for real-time data interaction and analytics dashboards.",
      "Collaborated in an Agile team using Git and Jira for project tracking.",
    ],
    tools: ["React", "Springboot", "Java", "Mysql", "Tailwind", "Git"],
    logo: "assets/braino.png",
  },
  {
    company: "DataPro Solutions Pvt Ltd",
    role:"Web Developer Intern",
    duration: "July 2024 – Dec 2024",
    achievements: [
      "Developed end-to-end web applications with authentication and CRUD operations.",
      "Optimized RESTful APIs and improved backend performance by 25%.",
      "Worked with team members to deploy projects on AWS and Netlify.",
    ],
    tools: ["JavaScript", "MongoDB", "Express", "React", "Node.js", "AWS"],
    logo: "assets/datapro.png",
  },
  {
    company: "Shamgar Softaware Solutions",
    role: "Full Stack & DevOps Developer",
    duration: "2024 – 2025",
    achievements: [
      "Delivered multiple client web apps with authentication, dashboards, and API integration.",
      "Automated CI/CD pipelines using GitHub Actions and Docker.",
      "Deployed scalable apps on AWS EC2 and managed DNS via Route 53.",
    ],
    tools: ["Docker", "GitHub Actions", "AWS", "CI/CD", "JavaScript"],
    logo: "assets/shamgar.png",
  },
];

const Experience = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      id="experience"
      className={`relative py-24 px-6 md:px-16 overflow-hidden transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-b from-[#130428] via-[#251043] to-[#190634] text-gray-100"
          : "bg-gradient-to-b from-[#f8f9ff] via-[#ece8ff] to-[#f5f0ff] text-gray-900"
      }`}
    >
      <div
        className={`absolute inset-0 blur-3xl opacity-60 transition-all duration-500 ${
          isDark
            ? "bg-gradient-radial from-[#763CAC]/30 to-transparent"
            : "bg-gradient-radial from-[#c59bff]/30 to-transparent"
        }`}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl md:text-2xl sm:text-4xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Experience / Work History
        </motion.h2>
        <p
          className={`text-sm sm:text-base mt-3 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          A look into my professional journey and the tools that shaped it.
        </p>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center md:items-start gap-6 p-5 rounded-2xl shadow-md transition-all duration-500 border ${
              isDark
                ? "bg-[#1c0f3b]/40 border-[#38126D]/40 shadow-[0_0_12px_#693B9380]"
                : "bg-white border-[#d6c9ff]/60 shadow-[0_0_10px_#c9b2ff50]"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex-shrink-0">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain bg-white/10 p-2 rounded-full"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-semibold">{exp.role}</h3>
              <p
                className={`text-sm font-medium ${
                  isDark ? "text-purple-400" : "text-purple-700"
                }`}
              >
                {exp.company}
              </p>
              <p
                className={`text-xs mb-2 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {exp.duration}
              </p>

              <ul
                className={`text-sm list-disc list-inside space-y-1 ${
                  isDark ? "text-gray-300" : "text-gray-800"
                }`}
              >
                {exp.achievements.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
                {exp.tools.map((tool, i) => (
                  <span
                    key={i}
                    className={`text-xs px-2.5 py-1 rounded-full border ${
                      isDark
                        ? "bg-[#38126D]/50 border-[#763CAC]/40 text-gray-200"
                        : "bg-[#ede9ff] border-[#b59aff]/40 text-gray-800"
                    }`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
