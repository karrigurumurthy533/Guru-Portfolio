import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology (CSE)",
    college: "Sri Sivani College of Engineering, Chilakapalem, Srikakulam",
    university: "JNTUGV University",
    year: "2021 – 2025",
    cgpa: "8.26 CGPA",
  },
  {
    degree: "Intermediate (MPC)",
    college: "S.V.J. Junior College, Kaviti",
    university: "Board of Intermediate Education, AP",
    year: "2018 – 2020",
    cgpa: "9.88 CGPA",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    college: "Z.P.H. School, Donkuru",
    university: "Board of Secondary Education, AP",
    year: "2017 – 2018",
    cgpa: "10.00 CGPA",
  },
];

const Education = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      id="education"
      className={`relative py-20 px-5 sm:px-8 md:px-16 transition-all duration-500 overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-[#130428] via-[#2C1250] to-[#190634] text-gray-100"
          : "bg-gradient-to-b from-[#f8f9ff] via-[#e9e3ff] to-[#f5f0ff] text-gray-900"
      }`}
    >
      {/* Background Glow */}
      <div
        className={`absolute inset-0 blur-3xl opacity-60 transition-all duration-500 ${
          isDark
            ? "bg-gradient-radial from-[#763CAC]/25 via-transparent to-transparent"
            : "bg-gradient-radial from-[#c59bff]/30 via-transparent to-transparent"
        }`}
      ></div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-12">
        <motion.h2
          className="text-3xl md:text-2xl sm:text-4xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Education
        </motion.h2>
        <p
          className={`text-sm sm:text-base mt-2 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          My academic milestones and achievements
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto z-10">
        {/* Vertical Line */}
        <div
          className={`absolute top-0 left-[18px] w-[2px] h-full rounded-full md:left-1/2 md:-translate-x-1/2 ${
            isDark
              ? "bg-gradient-to-b from-purple-500 via-blue-500 to-purple-600 opacity-80"
              : "bg-gradient-to-b from-purple-400 via-blue-400 to-purple-500 opacity-70"
          }`}
        ></div>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col md:flex-row items-start md:items-center mb-14 md:mb-20 w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Dot */}
            <div
              className={`absolute left-[10px] w-4 h-4 rounded-full z-20 md:left-1/2 md:-translate-x-1/2 ${
                isDark
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_10px_#763CAC90]"
                  : "bg-gradient-to-r from-purple-400 to-blue-400 shadow-[0_0_8px_#b695ff90]"
              }`}
            ></div>

            {/* Card */}
            <div
              className={`relative rounded-lg p-4 sm:p-5 md:p-6 backdrop-blur-sm transition-all duration-500 w-[85%] sm:w-[80%] md:w-[45%] ml-10 md:ml-0 ${
                isDark
                  ? "bg-[#1c0f3b]/50 border border-[#38126D]/50 shadow-[0_0_10px_#693B9370] hover:shadow-[0_0_14px_#763CAC80]"
                  : "bg-white/80 border border-[#d6c9ff]/60 shadow-[0_0_10px_#c9b2ff50] hover:shadow-[0_0_14px_#b697ff70]"
              } ${
                index % 2 === 0
                  ? "md:ml-auto md:text-left"
                  : "md:mr-auto md:text-right"
              }`}
            >
              {/* Header */}
              <div
                className={`flex items-center gap-3 mb-2 ${
                  index === 1
                    ? "justify-start flex-row"
                    : index % 2 !== 0
                    ? "justify-end flex-row-reverse"
                    : ""
                }`}
              >
                <div
                  className={`p-1.5 rounded-full shadow-[0_0_8px_#763CAC90] ${
                    isDark
                      ? "bg-gradient-to-r from-purple-500 to-blue-500"
                      : "bg-gradient-to-r from-purple-400 to-blue-400"
                  }`}
                >
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <h3
                  className={`text-base sm:text-lg font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {edu.degree}
                </h3>
              </div>

              {/* Text Content */}
              <div
                className={`${
                  index === 1
                    ? "text-left"
                    : index % 2 !== 0
                    ? "text-right"
                    : "text-left"
                }`}
              >
                <p
                  className={`text-xs sm:text-sm font-medium leading-snug ${
                    isDark ? "text-purple-400" : "text-purple-700"
                  }`}
                >
                  {edu.college}
                </p>
                <p
                  className={`text-[11px] sm:text-xs ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {edu.university}
                </p>

                <div
                  className={`flex flex-wrap items-center gap-3 mt-2 text-xs sm:text-sm justify-between ${
                    isDark ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  <span>{edu.year}</span>
                  <span
                    className={`font-semibold ${
                      isDark ? "text-purple-400" : "text-purple-700"
                    }`}
                  >
                    {edu.cgpa}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
