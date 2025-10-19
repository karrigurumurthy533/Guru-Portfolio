import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Frontend", percent: 85, colorFrom: "from-purple-500", colorTo: "to-blue-500" },
  { name: "Backend", percent: 70, colorFrom: "from-pink-500", colorTo: "to-red-500" },
  { name: "Database", percent: 75, colorFrom: "from-indigo-500", colorTo: "to-purple-500" },
  { name: "DevOps", percent: 50, colorFrom: "from-emerald-500", colorTo: "to-green-500" },
  { name: "AWS / Cloud", percent: 60, colorFrom: "from-yellow-500", colorTo: "to-orange-500" },
  { name: "Soft Skills", percent: 80, colorFrom: "from-cyan-500", colorTo: "to-blue-400" },
];

const Bar = ({ name, percent, colorFrom, colorTo }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="w-full"
  >
    <div className="flex items-center justify-between mb-1">
      <span className="text-xs font-medium">{name}</span>
      <span className="text-xs font-semibold">{percent}%</span>
    </div>

    <div
      className="w-full h-[4px] bg-gray-800/50 dark:bg-gray-300/40 rounded-full overflow-hidden shadow-inner"
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full bg-gradient-to-r ${colorFrom} ${colorTo} rounded-full shadow-[0_0_10px_#763CAC70]`}
      />
    </div>
  </motion.div>
);

export default function SkillsProgress({ theme }) {
  const isDark = theme === "dark";

  return (
    <section
      id="skills-progress"
      className={`relative py-16 px-6 sm:px-10 md:px-20 transition-colors duration-700 ${
        isDark
          ? "bg-gradient-to-b from-[#130428] via-[#2C1250] to-[#190634] text-gray-100"
          : "bg-gradient-to-b from-white via-gray-100 to-gray-300 text-gray-800"
      }`}
    >
      {/* Background Glow */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-radial from-[#763CAC]/20 via-transparent to-transparent"
            : "bg-gradient-radial from-purple-300/30 via-transparent to-transparent"
        } blur-3xl opacity-60`}
      ></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-3xl md:text-2xl sm:text-4xl font-semibold text-center mb-10"
      >
        <span
          className={`bg-gradient-to-r ${
            isDark ? "from-purple-400 to-blue-400" : "from-purple-600 to-blue-600"
          } bg-clip-text text-transparent`}
        >
          Skill Levels
        </span>
      </motion.h2>

      {/* Bars */}
      <div className="relative z-10 w-full max-w-3xl mx-auto space-y-4">
        {skills.map((skill) => (
          <Bar key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  );
}
