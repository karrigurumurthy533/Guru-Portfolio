import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero = ({ theme }) => {
  const [isDark, setIsDark] = useState(theme === "dark");

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  return (
    <section
      id="home"
      className={`relative pt-36 md:pt-32 lg:pt-28 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 transition-colors duration-700 ${
        isDark
          ? "bg-gradient-to-b from-[#11071f] to-[#1e1b4b] text-gray-100"
          : "bg-gradient-to-b from-white to-sky-100 text-gray-800"
      }`}
    >
      {/* Left Content */}
      <motion.div
        className="relative z-20 flex-1 text-center md:text-left space-y-5 mt-10 md:mt-0"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
          Hi, I'm{" "}
          <span
            className={`bg-gradient-to-r ${
              isDark
                ? "from-purple-400 to-blue-400"
                : "from-indigo-600 to-blue-500"
            } bg-clip-text text-transparent font-bold`}
          >
            Gurumurthy
          </span>
        </h1>

        <motion.div
          className="text-lg sm:text-xl lg:text-2xl font-semibold min-h-[40px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Java Developer",
              2000,
              "DevOps Engineer",
              2000,
              "AWS Engineer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className={`text-transparent bg-clip-text ${
              isDark
                ? "bg-gradient-to-r from-purple-400 to-blue-400"
                : "bg-gradient-to-r from-indigo-700 to-blue-600"
            }`}
          />
        </motion.div>

        <motion.p
          className={`max-w-md mx-auto md:mx-0 text-sm sm:text-base leading-relaxed ${
            isDark ? "text-gray-400" : "text-gray-700"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          I’m a passionate developer crafting full-stack, scalable web
          applications and automating cloud deployments using modern
          technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="relative z-30 flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          <a
            href="#contact"
            className={`relative inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-full overflow-hidden transition-all duration-500 ease-in-out ${
              isDark
                ? "text-white shadow-[0_0_6px_rgba(105,59,147,0.4)] hover:shadow-[0_0_10px_rgba(105,59,147,0.5)] bg-[linear-gradient(135deg,#130428_0%,#38126D_50%,#190634_90%)]"
                : "text-gray-900 shadow-[0_0_6px_rgba(79,34,141,0.2)] hover:shadow-[0_0_10px_rgba(79,34,141,0.3)] bg-[linear-gradient(135deg,#d9d9ff_0%,#a0a5ff_50%,#7f83ff_90%)]"
            }`}
          >
            Hire Me <ArrowRight className="ml-2 w-4 h-4" />
          </a>

          <a
            href="#projects"
            className={`relative inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-full overflow-hidden transition-all duration-500 ease-in-out ${
              isDark
                ? "text-white bg-[linear-gradient(145deg,#693B93_0%,#2C1250_70%)] hover:shadow-[0_0_10px_rgba(118,60,172,0.5)]"
                : "text-gray-900 bg-[linear-gradient(145deg,#c3b8ff_0%,#8d84ff_70%)] hover:shadow-[0_0_10px_rgba(79,34,141,0.3)]"
            }`}
          >
            View Projects
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center md:justify-start space-x-4 pt-3 relative z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <a
            href="https://github.com/karrigurumurthy533"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition ${
              isDark
                ? "text-gray-300 hover:text-purple-400"
                : "text-gray-700 hover:text-indigo-600"
            }`}
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/gurumurthykarri"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition ${
              isDark
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-evenly relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
      >
        {/* Background Glow - now safe */}
        <div
          className={`absolute inset-0 flex justify-center items-center pointer-events-none z-0 ${
            isDark ? "opacity-60" : "opacity-30"
          }`}
        >
          <div
            className="w-72 h-72 rounded-full blur-3xl"
            style={{
              background: isDark
                ? "radial-gradient(circle, #763CAC 0%, #320F85 70%, transparent 100%)"
                : "radial-gradient(circle, #b8aaff 0%, #9d94ff 70%, transparent 100%)",
            }}
          ></div>
        </div>

        {/* Profile Image */}
        <div
          className={`relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 transition-all duration-500 ${
            isDark ? "border-purple-500" : "border-indigo-400"
          }`}
        >
          <img
            src="assets/ggg.jpg"
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
