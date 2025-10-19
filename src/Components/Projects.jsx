import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    category: "Frontend",
    description:
      "Responsive personal portfolio showcasing my projects, skills, and achievements with smooth animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    demo: "https://your-demo-link.com",
    github: "https://github.com/karrigurumurthy533",
    image: "/assets/Portfolio.png",
  },
  {
    title: "E-Commerce Web App",
    category: "Web Development",
    description:
      "Built a complete e-commerce solution with cart, authentication, and admin dashboard functionalities.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    demo: "https://demo-ecommerce.com",
    github: "https://github.com/karrigurumurthy533",
    image: "assets/Ecommerce.png",
  },
  {
    title: "Task Manager API",
    category: "Backend",
    description:
      "Developed REST API for task management supporting JWT authentication and CRUD operations.",
    tech: ["Node.js", "Express", "MongoDB"],
    demo: "https://your-demo-link.com",
    github: "https://github.com/karrigurumurthy533",
    image: "/assets/Task_manager.png",
  },
  {
    title: "CI/CD Pipeline Setup",
    category: "DevOps",
    description:
      "Configured automated deployment pipelines using Jenkins, Docker, and GitHub Actions for continuous integration.",
    tech: ["Jenkins", "Docker", "GitHub Actions"],
    demo: "https://your-demo-link.com",
    github: "https://github.com/karrigurumurthy533",
    image: "/assets/cicd.png",
  },
  {
    title: "AWS Cloud Deployment",
    category: "AWS",
    description:
      "Deployed full-stack applications on AWS using EC2, S3, and CloudFront ensuring high availability.",
    tech: ["AWS EC2", "S3", "CloudFront"],
    demo: "https://your-demo-link.com",
    github: "https://github.com/karrigurumurthy533",
    image: "/assets/cloud.png",
  },
  {
    title: "Weather App",
    category: "Frontend",
    description:
      "A simple weather forecasting web app fetching live API data with interactive UI components.",
    tech: ["React", "OpenWeather API"],
    demo: "https://your-demo-link.com",
    github: "https://github.com/karrigurumurthy533",
    image: "/assets/weather.png",
  },
  {
    title: "Library Management System",
    category: "Java",
    description:
      "Java-based desktop app for managing books, users, and transactions with JDBC database integration.",
    tech: ["Java", "JDBC", "MySQL"],
    demo: "https://your-demo-link.com",
    github: "https://github.com/karrigurumurthy533",
    image: "/assets/library.png",
  },
  {
    title: "Chat Application",
    category: "Web Development",
    description:
      "Real-time chat app with WebSocket integration and authentication for secure communication.",
    tech: ["React", "Node.js", "Socket.io"],
    demo: "https://your-demo-link.com",
    github: "https://github.com/karrigurumurthy533",
    image: "/assets/chat.png",
  },
  {
    title: "DevOps Monitoring Dashboard",
    category: "DevOps",
    description:
      "Built a monitoring dashboard to visualize container and deployment health using Grafana and Prometheus.",
    tech: ["Grafana", "Prometheus", "Docker"],
    demo: "https://your-demo-link.com",
    github: "https://github.com/karrigurumurthy533",
    image: "/assets/moniter.png",
  },
];

const ProjectCard = ({ project, theme }) => {
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`border rounded-2xl overflow-hidden flex flex-col backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 
        ${
          isDark
            ? "bg-gray-900/80 border-gray-800 hover:shadow-[0_0_20px_#763CAC60]"
            : "bg-white/80 border-gray-200 hover:shadow-[0_0_20px_#9b5de560]"
        }`}
    >
      {/* Image */}
      <div className="w-full h-44 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3
          className={`text-lg font-semibold ${
            isDark ? "text-gray-100" : "text-gray-900"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`text-sm mt-1 line-clamp-3 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`text-[11px] px-2 py-0.5 rounded-md border shadow-sm ${
                isDark
                  ? "bg-purple-900/40 border-purple-700/30 text-purple-200"
                  : "bg-purple-100 border-purple-200 text-purple-800"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 text-xs px-3 py-1.5 rounded-md 
              bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white font-medium
              hover:opacity-90 shadow-md hover:shadow-lg transition"
          >
            <ExternalLink size={14} /> Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 text-xs px-3 py-1.5 rounded-md 
              bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white font-medium
              hover:opacity-90 shadow-md hover:shadow-lg transition"
          >
            <Github size={14} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects({ theme }) {
  const isDark = theme === "dark";

  return (
    <section
      id="projects"
      className={`min-h-screen flex flex-col items-center justify-center px-4 md:px-12 lg:px-20 py-20 border-t transition-all duration-700
        ${
          isDark
            ? "bg-gradient-to-b from-[#130428] via-[#2C1250] to-[#190634] text-gray-200 border-gray-800"
            : "bg-gradient-to-b from-white via-gray-100 to-gray-200 text-gray-800 border-gray-200"
        }`}
    >
      {/* Glow background */}
      <div
        className={`absolute inset-0 blur-3xl ${
          isDark
            ? "bg-gradient-radial from-[#763CAC]/20 via-transparent to-transparent opacity-70"
            : "bg-gradient-radial from-purple-300/30 via-transparent to-transparent opacity-70"
        }`}
      ></div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl md:text-2xl font-semibold mb-12 text-center relative z-10"
      >
        <span
          className={`bg-gradient-to-r ${
            isDark ? "from-purple-400 to-blue-400" : "from-purple-600 to-blue-600"
          } bg-clip-text text-transparent`}
        >
          Projects / Portfolio
        </span>
      </motion.h2>

      {/* Project Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {projects.map((p, index) => (
          <ProjectCard key={index} project={p} theme={theme} />
        ))}
      </div>
    </section>
  );
}
