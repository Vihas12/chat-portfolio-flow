
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Globe, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  category: "web" | "mobile" | "design";
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "mobile" | "design">("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store with product listings, cart functionality, and secure checkout process.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      imageUrl: "", // Placeholder
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      category: "web",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A professional portfolio website with animations and interactive elements.",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      imageUrl: "", // Placeholder
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      category: "web",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A responsive application for managing tasks and projects with team collaboration features.",
      technologies: ["TypeScript", "React", "Firebase"],
      imageUrl: "", // Placeholder
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      category: "web",
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "A secure and user-friendly mobile banking application with transaction history and budgeting tools.",
      technologies: ["React Native", "Redux", "Node.js"],
      imageUrl: "", // Placeholder
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      category: "mobile",
    },
    {
      id: 5,
      title: "Brand Identity Design",
      description: "Complete brand identity design including logo, color scheme, typography, and brand guidelines.",
      technologies: ["Figma", "Illustrator", "Photoshop"],
      imageUrl: "", // Placeholder
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      category: "design",
    },
    {
      id: 6,
      title: "Real-time Chat Application",
      description: "A chat platform with real-time messaging, user authentication, and file sharing capabilities.",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      imageUrl: "", // Placeholder
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      category: "web",
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="pt-28 pb-16 px-4">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-portfolio-light text-lg max-w-2xl mb-12"
        >
          A selection of my recent work, side projects, and open source contributions.
          Each project is a unique piece with its own challenges and solutions.
        </motion.p>

        <div className="flex flex-wrap gap-4 mb-10">
          <Button
            onClick={() => setActiveFilter("all")}
            variant={activeFilter === "all" ? "default" : "outline"}
            className={activeFilter === "all" ? "bg-portfolio-teal text-portfolio-blue" : "border-portfolio-teal/30 text-portfolio-light"}
          >
            All Projects
          </Button>
          <Button
            onClick={() => setActiveFilter("web")}
            variant={activeFilter === "web" ? "default" : "outline"}
            className={activeFilter === "web" ? "bg-portfolio-teal text-portfolio-blue" : "border-portfolio-teal/30 text-portfolio-light"}
          >
            Web
          </Button>
          <Button
            onClick={() => setActiveFilter("mobile")}
            variant={activeFilter === "mobile" ? "default" : "outline"}
            className={activeFilter === "mobile" ? "bg-portfolio-teal text-portfolio-blue" : "border-portfolio-teal/30 text-portfolio-light"}
          >
            Mobile
          </Button>
          <Button
            onClick={() => setActiveFilter("design")}
            variant={activeFilter === "design" ? "default" : "outline"}
            className={activeFilter === "design" ? "bg-portfolio-teal text-portfolio-blue" : "border-portfolio-teal/30 text-portfolio-light"}
          >
            Design
          </Button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className={`project-card ${project.featured ? "md:col-span-2" : ""}`}
                >
                  {project.featured && (
                    <div className="flex items-center mb-3 text-portfolio-teal">
                      <Star size={16} className="mr-1" />
                      <span className="text-sm">Featured Project</span>
                    </div>
                  )}

                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-portfolio-light mb-4">{project.description}</p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded bg-portfolio-teal/10 text-portfolio-teal"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3 mt-auto">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-light hover:text-portfolio-teal"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-light hover:text-portfolio-teal"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-portfolio-light mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center btn-primary"
          >
            <Github size={18} className="mr-2" />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
