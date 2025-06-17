import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaCode, FaExternalLinkAlt, FaGithub, FaLaptopCode, FaTerminal } from "react-icons/fa";
import { HiOutlineFolder } from "react-icons/hi";
import { MdRocketLaunch } from "react-icons/md";
import { SiExpress, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss } from "react-icons/si";

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      id: 1,
      name: "Perfecto",
      description: "A comprehensive e-commerce platform featuring secure payment processing, real-time inventory management, and an intuitive admin dashboard. Built with modern web technologies for optimal performance and scalability.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
      link: "https://perfectobd.com/",
      github: "#",
      tech: [
        { icon: <SiReact />, name: "React", color: "text-blue-400" },
        { icon: <SiNodedotjs />, name: "Node.js", color: "text-green-400" },
        { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" },
        { icon: <SiExpress />, name: "Express", color: "text-gray-400" }
      ],
      category: "E-commerce",
      featured: true,
      status: "Live"
    },
    {
      id: 2,
      name: "Anghorag",
      description: "Modern web application with responsive design, dynamic content management, and interactive user interfaces. Emphasizes performance optimization and seamless user experience across all devices.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
      link: "https://anghorag.vercel.app/",
      github: "#",
      tech: [
        { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
        { icon: <SiTailwindcss />, name: "Tailwind", color: "text-cyan-400" },
        { icon: <SiJavascript />, name: "JavaScript", color: "text-yellow-400" }
      ],
      category: "Web Application",
      featured: true,
      status: "Live"
    },
    {
      id: 3,
      name: "Wedding House",
      description: "Elegant wedding planning platform with advanced booking system, gallery management, and vendor coordination. Features real-time availability checking and automated notification systems.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&q=80",
      link: "https://yolooo2526-frontend.vercel.app/",
      github: "#",
      tech: [
        { icon: <SiReact />, name: "React", color: "text-blue-400" },
        { icon: <SiNodedotjs />, name: "Node.js", color: "text-green-400" },
        { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" }
      ],
      category: "Platform",
      featured: false,
      status: "Live"
    },
    {
      id: 4,
      name: "Primely Gaming",
      description: "Gaming community platform with user authentication, game library management, and social features. Includes leaderboards, achievement systems, and real-time chat functionality.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop&q=80",
      link: "https://primely-gaming-client.vercel.app/",
      github: "#",
      tech: [
        { icon: <SiReact />, name: "React", color: "text-blue-400" },
        { icon: <SiExpress />, name: "Express", color: "text-gray-400" },
        { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" }
      ],
      category: "Gaming Platform",
      featured: false,
      status: "Live"
    }
  ];

  // Professional animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <section 
      ref={ref}
      id="portfolio" 
      className="relative min-h-screen  overflow-hidden py-12 sm:py-16 lg:py-24"
    >
      {/* Professional Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute inset-0 bg-gradient-to-b " />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Professional Header */}
          <motion.div 
            variants={headerVariants}
            className="text-center mb-16 sm:mb-20 lg:mb-24"
          >
            {/* Terminal Window */}
            <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
              <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-t-xl p-3 sm:p-4 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <FaTerminal className="text-emerald-400 text-sm" />
                  <span className="text-slate-400 text-sm font-mono">~/portfolio/projects</span>
                </div>
              </div>
              <div className="bg-slate-950/95 backdrop-blur-xl border-x border-b border-slate-700/50 rounded-b-xl p-6 sm:p-8 text-left">
                <div className="font-mono text-sm sm:text-base">
                  <div className="text-slate-500 mb-2">// Portfolio initialization</div>
                  <div>
                    <span className="text-purple-400">const</span>
                    <span className="text-slate-200"> portfolio = </span>
                    <span className="text-cyan-400">new</span>
                    <span className="text-yellow-400"> ProjectShowcase</span>
                    <span className="text-slate-200">();</span>
                  </div>
                  <div>
                    <span className="text-slate-200">portfolio.</span>
                    <span className="text-green-400">displayFeaturedWork</span>
                    <span className="text-slate-200">();</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-3 bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-full py-3 px-6 mb-8 sm:mb-10"
            >
              <HiOutlineFolder className="text-xl text-emerald-400" />
              <span className="text-slate-200 font-medium tracking-wide">SELECTED WORKS</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-slate-100 mb-6"
            >
              Featured
              <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              A curated collection of my recent work, showcasing modern web applications 
              built with cutting-edge technologies and best practices.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-emerald-500/5 transition-shadow duration-500"
              >
                <motion.div variants={hoverVariants}>
                  {/* Status & Featured Badge */}
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-600/50 text-slate-300 text-xs px-3 py-1.5 rounded-full font-medium">
                      {project.category}
                    </div>
                    {project.featured && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs px-3 py-1.5 rounded-full font-medium flex items-center gap-1.5"
                      >
                        <MdRocketLaunch className="text-xs" />
                        Featured
                      </motion.div>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center gap-1.5 bg-slate-900/90 backdrop-blur-sm border border-slate-600/50 text-xs px-3 py-1.5 rounded-full">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-slate-300 font-medium">{project.status}</span>
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="relative overflow-hidden h-64 sm:h-72 lg:h-80">
                    <motion.img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                      variants={imageVariants}
                    />
                    
                    {/* Overlay */}
                    <motion.div
                      variants={overlayVariants}
                      initial="hidden"
                      whileHover="hover"
                      className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent flex items-center justify-center"
                    >
                      <div className="flex gap-4">
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-xl transition-colors duration-300"
                          aria-label={`View ${project.name} live`}
                        >
                          <FaExternalLinkAlt className="text-lg" />
                        </motion.a>
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          className="bg-slate-700 hover:bg-slate-600 text-white p-4 rounded-full shadow-xl transition-colors duration-300"
                          aria-label={`View ${project.name} source code`}
                        >
                          <FaGithub className="text-lg" />
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <motion.h3
                        className="text-2xl sm:text-3xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors duration-300"
                        animate={hoveredProject === project.id ? { scale: 1.02 } : { scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.name}
                      </motion.h3>
                      <motion.div
                        animate={hoveredProject === project.id ? { rotate: 15 } : { rotate: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-emerald-400 text-xl mt-1"
                      >
                        <FaCode />
                      </motion.div>
                    </div>

                    <p className="text-slate-400 leading-relaxed mb-6 text-base sm:text-lg">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium text-slate-300 uppercase tracking-wider">
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center gap-2 bg-slate-800/50 border border-slate-600/30 rounded-lg px-3 py-2 text-sm"
                          >
                            <span className={`${tech.color} text-base`}>
                              {tech.icon}
                            </span>
                            <span className="text-slate-300 font-medium">
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-700/50">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-300"
                      >
                        <span>View Project</span>
                        <FaExternalLinkAlt className="text-sm" />
                      </motion.a>
                      
                      <div className="text-slate-500 text-sm font-mono">
                        0{index + 1}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-20 sm:mt-24 lg:mt-32"
          >
            <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-5xl sm:text-6xl lg:text-7xl mb-6"
              >
                🚀
              </motion.div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 mb-4">
                Let's Build Something Great
              </h3>
              <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Have a project in mind? I'm always interested in discussing new opportunities 
                and bringing innovative ideas to life.
              </p>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-emerald-500/25 transition-shadow duration-300"
              >
                Start a Conversation
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;