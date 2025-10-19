import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, ArrowUp, Sun, Moon } from "lucide-react";

const Footer = ({ name = "Gurumurthy", socials, theme, setTheme }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Theme-based styles
  const isDark = theme === "dark";

  const bgGradient = isDark
    ? "from-[#190634] via-[#2C1250] to-[#130428]"
    : "from-[#E7E3FF] via-[#DCD6FF] to-[#F8F6FF]";

  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-gray-400" : "text-gray-600";
  const borderColor = isDark ? "border-[#38126D]/50" : "border-[#C4B5FD]/50";
  const buttonBg = isDark
    ? "from-[#693B93] via-[#320F85] to-[#190634]"
    : "from-[#A78BFA] via-[#7C3AED] to-[#6D28D9]";

  return (
    <footer
      className={`relative bg-gradient-to-b ${bgGradient} ${textPrimary} py-10 px-6 sm:px-12 md:px-20 overflow-hidden transition-all duration-700`}
    >
      {/* Glow Background */}
      <div
        className={`absolute inset-0 bg-gradient-radial ${
          isDark
            ? "from-[#763CAC]/20 via-transparent to-transparent"
            : "from-[#B794F4]/30 via-transparent to-transparent"
        } blur-3xl opacity-60`}
      ></div>

      {/* Footer Content */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Section */}
        <div>
          <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
            © {new Date().getFullYear()} {name}
          </h3>
          <p className={`text-sm mt-1 ${textSecondary}`}>
            Built with <span className="text-purple-500">❤️</span> using React & Tailwind CSS
          </p>
        </div>

        {/* Socials */}
        <div className="flex gap-6 justify-center">
          {socials?.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {socials?.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {socials?.twitter && (
            <a
              href={socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Buttons Section */}
        <div className="flex items-center gap-4">
          {/* Back to Top */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className={`flex items-center gap-2 bg-gradient-to-r ${buttonBg} text-white px-4 py-2 rounded-full text-sm shadow-[0_0_10px_#763CAC70] hover:shadow-[0_0_14px_#FFFFFF40] transition-all`}
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </motion.button>
          
        </div>
      </motion.div>

      <div className={`relative z-10 mt-8 border-t ${borderColor}`}></div>

      <motion.p
        className={`relative z-10 mt-4 text-center text-xs ${textSecondary}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Designed with creativity & dedication © {name} Portfolio
      </motion.p>
    </footer>
  );
};

export default Footer;
