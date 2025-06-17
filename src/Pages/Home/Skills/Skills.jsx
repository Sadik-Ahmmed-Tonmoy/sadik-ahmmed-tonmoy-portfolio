import { motion } from "framer-motion";
import { BsCodeSlash, BsGithub, BsStack } from "react-icons/bs";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiExpress, SiMongodb, SiFirebase, SiJavascript, SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

const Skills = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const skills = [
    { icon: <SiJavascript className="w-8 h-8" />, name: "JavaScript", level: 95, color: "from-yellow-400 to-yellow-600" },
    { icon: <FaReact className="w-8 h-8" />, name: "React", level: 90, color: "from-blue-400 to-cyan-500" },
    { icon: <SiNextdotjs className="w-8 h-8" />, name: "Next.js", level: 88, color: "from-gray-400 to-gray-600" },
    { icon: <SiTypescript className="w-8 h-8" />, name: "TypeScript", level: 85, color: "from-blue-500 to-blue-700" },
    { icon: <FaNodeJs className="w-8 h-8" />, name: "Node.js", level: 87, color: "from-green-500 to-green-700" },
    { icon: <SiExpress className="w-8 h-8" />, name: "Express", level: 85, color: "from-gray-300 to-gray-500" },
    { icon: <SiMongodb className="w-8 h-8" />, name: "MongoDB", level: 93, color: "from-green-400 to-green-600" },
    { icon: <SiTailwindcss className="w-8 h-8" />, name: "Tailwind CSS", level: 95, color: "from-cyan-400 to-blue-500" },
    { icon: <SiFirebase className="w-8 h-8" />, name: "Firebase", level: 89, color: "from-yellow-500 to-orange-500" },
    { icon: <FaFigma className="w-8 h-8" />, name: "Figma", level: 85, color: "from-purple-400 to-pink-500" },
    { icon: <BsGithub className="w-8 h-8" />, name: "Git/GitHub", level: 92, color: "from-gray-600 to-gray-800" },
    { icon: <BsStack className="w-8 h-8" />, name: "MERN Stack", level: 90, color: "from-emerald-400 to-teal-600" },
  ];

  return (
    <div id="skills" className="min-h-screen relative overflow-hidden  py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Code Symbols */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-emerald-500/10 text-2xl font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {["<>", "{}", "[]", "()", "/>", "&&", "||", "=>"][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-full py-3 px-6 mb-8 shadow-lg"
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
              <BsCodeSlash className="text-2xl text-emerald-400" />
            </motion.div>
            <span className="text-white font-semibold tracking-wider">TECH.SKILLS</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <motion.span
              className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              Technical
            </motion.span>
            <span className="text-white mx-4">Expertise</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-slate-300 max-w-3xl mx-auto">
            I've honed my skills across the full development stack, specializing in modern JavaScript technologies and frameworks.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300"
            >
              <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: `${index * 0.1}s` }}
                className={`bg-gradient-to-r ${skill.color} p-3 rounded-full w-14 h-14 flex items-center justify-center text-white mb-4`}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
              <div className="w-full bg-slate-700/50 rounded-full h-2 mb-2">
                <div
                  className={`bg-gradient-to-r ${skill.color} h-2 rounded-full`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-sm text-slate-400">{skill.level}% proficiency</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={itemVariants}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Frontend</h3>
            <ul className="space-y-2">
              {["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Redux", "RTK Query"].map((tech) => (
                <li key={tech} className="flex items-center gap-2 text-slate-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-emerald-400 mb-4">Backend</h3>
            <ul className="space-y-2">
              {["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma", "Mongoose", "RESTful APIs"].map((tech) => (
                <li key={tech} className="flex items-center gap-2 text-slate-300">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-4">Tools</h3>
            <ul className="space-y-2">
              {["Git", "GitHub", "Docker", "AWS", "Figma", "Postman", "VS Code"].map((tech) => (
                <li key={tech} className="flex items-center gap-2 text-slate-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-amber-400 mb-4">Soft Skills</h3>
            <ul className="space-y-2">
              {["Leadership", "Team Collaboration", "Problem Solving", "Communication", "Time Management", "Adaptability"].map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-slate-300">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;