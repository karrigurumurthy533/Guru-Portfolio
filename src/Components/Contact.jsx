import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Contact = ({ theme, setTheme }) => {
  const isDark = theme === "dark";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const bgGradient = isDark
    ? "bg-gradient-to-b from-[#130428] via-[#2C1250] to-[#190634]"
    : "bg-gradient-to-b from-[#F8F6FF] via-[#E7E3FF] to-[#DCD6FF]";

  const textPrimary = isDark ? "text-gray-100" : "text-gray-800";
  const textSecondary = isDark ? "text-gray-400" : "text-gray-600";
  const cardBg = isDark
    ? "bg-[#1c0f3b]/50 border border-[#38126D]/60"
    : "bg-white/60 border border-[#D4C8FF]/60";
  const inputBg = isDark
    ? "bg-[#2C1250]/50 border border-[#4F228D]/60 text-gray-100 placeholder-gray-400"
    : "bg-[#F4F0FF]/70 border border-[#C4B5FD]/60 text-gray-800 placeholder-gray-500";

  // ✅ Web3Forms handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "e8c4c53c-0f51-4252-a5aa-31f1003ad1d2");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await res.json();

    if (data.success) {
      setResult("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setResult("❌ Failed to send. Try again!");
    }
  };

  return (
    <section
      id="contact"
      className={`relative py-20 px-6 sm:px-10 md:px-16 ${bgGradient} ${textPrimary} overflow-hidden transition-all duration-700`}
    >
      {/* Background Glow */}
      <div
        className={`absolute inset-0 bg-gradient-radial ${
          isDark
            ? "from-[#763CAC]/25 via-transparent to-transparent"
            : "from-[#B794F4]/30 via-transparent to-transparent"
        } blur-3xl opacity-60`}
      ></div>

      {/* Header */}
      <div className="relative z-10 text-center mb-14">
        <motion.h2
          className={`text-3xl md:text-2xl sm:text-4xl font-semibold bg-gradient-to-r ${
            isDark
              ? "from-purple-400 to-blue-400"
              : "from-purple-600 to-blue-500"
          } bg-clip-text text-transparent`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>
        <p className={`${textSecondary} text-sm sm:text-base mt-2`}>
          I’d love to connect with you. Feel free to drop a message or follow me online!
        </p>
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Web3Forms Form */}
        <motion.form
          onSubmit={handleSubmit}
          className={`${cardBg} backdrop-blur-sm rounded-2xl shadow-[0_0_12px_#693B9370] hover:shadow-[0_0_16px_#763CAC80] transition-all duration-500 p-8`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Name */}
          <div className="mb-4">
            <label className={`block text-sm font-medium mb-2 ${textSecondary}`}>
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className={`w-full p-3 rounded-lg ${inputBg} focus:outline-none focus:ring-2 focus:ring-[#763CAC]`}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className={`block text-sm font-medium mb-2 ${textSecondary}`}>
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className={`w-full p-3 rounded-lg ${inputBg} focus:outline-none focus:ring-2 focus:ring-[#763CAC]`}
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className={`block text-sm font-medium mb-2 ${textSecondary}`}>
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message..."
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className={`w-full p-3 rounded-lg ${inputBg} focus:outline-none focus:ring-2 focus:ring-[#763CAC]`}
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-[#763CAC] via-[#320F85] to-[#190634] text-white font-semibold shadow-[0_0_10px_#763CAC80] hover:shadow-[0_0_15px_#FFFFFF40] transition-all"
          >
            Send Message
          </motion.button>

          {/* Result message */}
          {result && (
            <p className="text-center text-sm mt-3 text-green-400">{result}</p>
          )}
        </motion.form>

        {/* Right Side */}
        <motion.div
          className="space-y-8 text-center md:text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3
            className={`text-2xl font-semibold ${
              isDark ? "text-purple-400" : "text-purple-700"
            }`}
          >
            Let’s Connect
          </h3>
          <p className={`${textSecondary} leading-relaxed max-w-md mx-auto md:mx-0`}>
            Feel free to reach out via email or connect on social platforms.
            I’m always open to new collaborations and ideas.
          </p>

          {/* Email */}
          <div
            className={`flex justify-center md:justify-start items-center gap-2 hover:text-purple-400 transition ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <Mail className="w-5 h-5" />
            <a href="mailto:gurumurthykarri0@gmail.com" className="text-sm sm:text-base">
              gurumurthykarri0@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div
            className={`flex justify-center md:justify-start gap-6 ${
              isDark ? "text-gray-400" : "text-gray-700"
            }`}
          >
            <a
              href="https://linkedin.com/in/gurumurthykarri"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/karrigurumurthy533"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
