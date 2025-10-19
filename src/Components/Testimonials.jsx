import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. K. Suresh",
    role: "Professor & Project Mentor, Sri Sivani College of Engineering",
    feedback:
      "Gurumurthy has shown exceptional problem-solving skills and a strong passion for technology. His commitment to learning and collaboration made him stand out in our project team.",
  },
  {
    name: "Anjali Sharma",
    role: "Frontend Developer, Virtusa",
    feedback:
      "Working with Gurumurthy was inspiring — his full-stack expertise and calm approach to challenges brought reliability and innovation to our team deliveries.",
  },
  {
    name: "Ravi Kumar",
    role: "DevOps Engineer, AWS Partner Network",
    feedback:
      "His understanding of CI/CD, containerization, and cloud workflows is impressive. Gurumurthy’s ability to automate and optimize infrastructure is a big asset for any team.",
  },
];

const Testimonials = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      id="testimonials"
      className={`relative py-20 px-6 sm:px-10 md:px-16 overflow-hidden transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-b from-[#130428] via-[#2C1250] to-[#190634] text-gray-100"
          : "bg-gradient-to-b from-[#f8f9ff] via-[#ebe3ff] to-[#f6f2ff] text-gray-900"
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
      <div className="relative z-10 text-center mb-14">
        <motion.h2
          className="text-3xl md:text-2xl sm:text-4xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Testimonials
        </motion.h2>
        <p
          className={`text-sm sm:text-base mt-2 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Words from mentors, colleagues, and collaborators.
        </p>
      </div>

      {/* Testimonials Cards */}
      <div className="relative z-10 grid gap-8 sm:gap-10 md:grid-cols-3">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-6 sm:p-7 backdrop-blur-sm transition-all duration-500 border
              ${
                isDark
                  ? "bg-[#1c0f3b]/50 border-[#38126D]/50 shadow-[0_0_12px_#693B9370] hover:shadow-[0_0_18px_#763CAC80]"
                  : "bg-white/80 border-[#d6c9ff]/60 shadow-[0_0_10px_#c9b2ff50] hover:shadow-[0_0_14px_#b697ff70]"
              }`}
          >
            <Quote
              className={`w-8 h-8 mb-4 opacity-80 ${
                isDark ? "text-purple-400" : "text-purple-600"
              }`}
            />
            <p
              className={`text-sm sm:text-base leading-relaxed mb-5 ${
                isDark ? "text-gray-300" : "text-gray-800"
              }`}
            >
              “{t.feedback}”
            </p>
            <div>
              <h4
                className={`font-semibold text-sm sm:text-base ${
                  isDark ? "text-purple-400" : "text-purple-700"
                }`}
              >
                {t.name}
              </h4>
              <p
                className={`text-[12px] sm:text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {t.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
