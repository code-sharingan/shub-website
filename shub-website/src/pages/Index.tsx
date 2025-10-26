import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import Navbar from "@/components/Navbar";
import { Mail, Github, Linkedin, ArrowDown, Code2, FileDown, Sparkles, Zap, Rocket } from "lucide-react";
import cyberBg from "@/assets/cyber-bg.png";
import coderImage from "@/assets/coder.png";
import vibeImage from "@/assets/vibe.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 30, 0.85), rgba(10, 10, 30, 0.85)), url(${cyberBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Apple-style glassmorphism overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backdropFilter: 'saturate(180%) blur(2px)',
            WebkitBackdropFilter: 'saturate(180%) blur(2px)',
            background: 'rgba(255, 255, 255, 0.01)',
          }}
        />

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"
          animate={{
            background: [
              'linear-gradient(to bottom right, rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))',
              'linear-gradient(to bottom right, rgba(236, 72, 153, 0.1), rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1))',
              'linear-gradient(to bottom right, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1), rgba(6, 182, 212, 0.1))',
              'linear-gradient(to bottom right, rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
            {/* Image Section */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-75 blur-lg group-hover:opacity-100 transition duration-300"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.img
                src={coderImage}
                alt="Shubham coding in a coffee shop"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-background"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>

            {/* Text Section */}
            <div className="text-center md:text-left max-w-2xl">
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Shubham Singh
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Computer Science Graduate | Full-Stack Developer
              </motion.p>
              <motion.p
                className="text-lg text-muted-foreground/80 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Building scalable full-stack applications with expertise in modern web frameworks,
                cloud architectures, and real-time systems. Graduating December 2025.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 justify-center md:justify-start mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 shadow-glow"
                    onClick={scrollToProjects}
                  >
                    <Code2 className="mr-2 h-5 w-5" />
                    View Projects
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10"
                    onClick={scrollToContact}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Get in Touch
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex gap-6 justify-center md:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <motion.a
                  href="https://github.com/code-sharingan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/shubhamanilsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 30, 0.95), rgba(10, 10, 30, 0.95)), url(${cyberBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-purple-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            className="text-center text-cyan-100/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Proficient in modern web technologies and frameworks
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {["Java", "C#", "C++", "Python", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Django", "Spring Boot", "FastAPI", "REST APIs", "PostgreSQL", "MySQL", "MongoDB", "AWS (EC2)", "Azure", "Firebase", "D3.js", "Tailwind CSS", "Git/GitHub", "Agile/Scrum", "TDD"].map((skill, index) => (
              <motion.div
                key={skill}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <SkillBadge name={skill} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Vibe Coding Section */}
      <motion.section
        id="vibe-coding"
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 5, 25, 0.95), rgba(10, 5, 25, 0.95)), url(${cyberBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-violet-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-indigo-400" />
              </motion.div>
              <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                Vibe Coding with AI
              </h2>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-8 h-8 text-violet-400" />
              </motion.div>
            </div>

            <motion.p
              className="text-center text-indigo-100/90 text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The software development landscape is undergoing a revolutionary transformation.
              AI isn't just changing how we code—it's redefining what's possible.
            </motion.p>

            <motion.div
              className="grid md:grid-cols-2 gap-6 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.div
                className="bg-gradient-to-br from-indigo-900/40 to-violet-900/40 border border-indigo-500/30 rounded-lg p-6 backdrop-blur-sm"
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 40px rgba(99, 102, 241, 0.4)",
                  borderColor: "rgba(99, 102, 241, 0.6)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-indigo-500/20 p-2 rounded-lg">
                    <Rocket className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-300">AI-Powered Development</h3>
                </div>
                <p className="text-indigo-100/80 leading-relaxed">
                  Artificial intelligence is reshaping the development industry at an unprecedented pace.
                  From intelligent code completion to automated testing and bug detection, AI tools are
                  becoming essential co-pilots in every developer's workflow.
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-violet-900/40 to-purple-900/40 border border-violet-500/30 rounded-lg p-6 backdrop-blur-sm"
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 40px rgba(139, 92, 246, 0.4)",
                  borderColor: "rgba(139, 92, 246, 0.6)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-violet-500/20 p-2 rounded-lg">
                    <Zap className="w-6 h-6 text-violet-400" />
                  </div>
                  <h3 className="text-xl font-bold text-violet-300">15x Faster Delivery</h3>
                </div>
                <p className="text-violet-100/80 leading-relaxed">
                  By leveraging AI agents and advanced automation tools, I can deliver projects at 15 times
                  the traditional speed—without compromising on quality. This means rapid prototyping, faster
                  iterations, and getting products to market in record time.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-indigo-900/30 via-violet-900/30 to-purple-900/30 border border-violet-500/20 rounded-lg p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{
                boxShadow: "0 0 50px rgba(124, 58, 237, 0.3)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-300 via-violet-300 to-purple-300 bg-clip-text">
                  My AI-Enhanced Workflow
                </h3>
              </div>
              <p className="text-purple-100/80 leading-relaxed mb-4">
                I harness the power of AI agents to streamline every aspect of development—from architecture
                design and code generation to testing and deployment. This synergy between human creativity
                and machine efficiency allows me to tackle complex problems faster and deliver robust solutions
                that scale.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-semibold border border-indigo-500/30">
                  AI Code Assistants
                </span>
                <span className="px-4 py-2 bg-violet-500/20 text-violet-300 rounded-full text-sm font-semibold border border-violet-500/30">
                  Automated Testing
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold border border-purple-500/30">
                  Smart Debugging
                </span>
                <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-semibold border border-indigo-500/30">
                  Rapid Prototyping
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 5, 20, 0.95), rgba(5, 5, 20, 0.95)), url(${cyberBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-pink-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-center text-purple-100/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A selection of my recent work and side projects
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ProjectCard
              title="FreedomLedger"
              description="Full-stack fintech application with Next.js 15/React 19 frontend and FastAPI backend, processing real-time financial data from Plaid API across 11,000+ institutions. Features advanced data visualization with D3.js, enterprise-grade security with Firebase Authentication, and comprehensive RESTful API architecture with 45+ endpoints."
              technologies={["Next.js", "React 19", "FastAPI", "PostgreSQL", "D3.js", "Firebase", "Plaid API"]}
              githubUrl="https://github.com/code-sharingan/Freedomledger"
            />
            <ProjectCard
              title="Online Chat Application"
              description="Real-time chat application with React and Tailwind CSS frontend and FastAPI backend. Managed user authentication, real-time messaging, and database interactions efficiently with secure integration between frontend and backend through environment variables and CORS settings."
              technologies={["React", "Tailwind CSS", "FastAPI", "WebSockets"]}
              githubUrl="https://github.com/code-sharingan/Chat"
            />
            <ProjectCard
              title="Agario Multiplayer Client"
              description="Real-time multiplayer game client implementing network communication using TCP sockets for consistent game state synchronization across clients. Created a dynamic user interface that updates based on real-time game state data."
              technologies={["C#", "TCP Sockets", "Real-time Networking"]}
              githubUrl="https://github.com/code-sharingan"
            />
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education"
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 30, 0.95), rgba(10, 10, 30, 0.95)), url(${cyberBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-emerald-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Education
            </motion.h2>
            <motion.div
              className="bg-card border border-border rounded-lg p-8 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(52, 211, 153, 0.3)" }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">University of Utah</h3>
                  <p className="text-xl text-primary mb-2">Bachelor of Science in Computer Science</p>
                  <p className="text-muted-foreground">Salt Lake City, Utah</p>
                </div>
                <div className="text-muted-foreground mt-2 md:mt-0">
                  <p className="text-lg font-semibold">December 2025</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-foreground font-semibold mb-2">Dean's List: Spring 2021 & Fall 2021</p>
                <p className="text-muted-foreground mb-3">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Algorithms</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Software Practices</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Web Software Architecture</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Database Systems</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Operating Systems</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Computer Networks</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Computer Security</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Artificial Intelligence</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Human Computer Interaction</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 5, 20, 0.95), rgba(5, 5, 20, 0.95)), url(${cyberBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-cyan-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Experience
            </motion.h2>
            <div className="space-y-8">
              <motion.div
                className="bg-card border border-border rounded-lg p-8 shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(56, 189, 248, 0.3)" }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">Peer Mentor</h3>
                    <p className="text-lg text-primary mb-2">Kahlert School of Computing</p>
                    <p className="text-muted-foreground">Salt Lake City, UT</p>
                  </div>
                  <div className="text-muted-foreground mt-2 md:mt-0">
                    <p className="text-lg font-semibold">May 2023 - Present</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Assisted over 100 students with course selection, scheduling, and registration</li>
                  <li>Guided students on major selection and career paths within the computing field</li>
                  <li>Collaborated with the mentorship program coordinator to revamp the program structure, resulting in significant increase in mentee engagement</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-card border border-border rounded-lg p-8 shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(56, 189, 248, 0.3)" }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">Teaching Assistant</h3>
                    <p className="text-lg text-primary mb-2">Kahlert School of Computing</p>
                    <p className="text-muted-foreground">Salt Lake City, UT</p>
                  </div>
                  <div className="text-muted-foreground mt-2 md:mt-0">
                    <p className="text-lg font-semibold">January 2022 - May 2023</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Assisted professors with classroom management and document coordination to maintain a positive learning environment</li>
                  <li>Collaborated with teachers to plan and implement lessons following the school's curriculum and objectives that contributed to a 15% retention rate</li>
                  <li>Provided group tutoring to a group of 20 students to reinforce learning concepts like object-oriented programming and help them follow good software practices</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Resume Section */}
      <motion.section
        id="resume"
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 30, 0.95), rgba(10, 10, 30, 0.95)), url(${cyberBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-amber-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Resume
            </motion.h2>
            <motion.p
              className="text-center text-orange-100/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              View or download my resume to learn more about my experience and qualifications
            </motion.p>

            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-glow"
                  asChild
                >
                  <a href="/shubhams_resume.pdf" download="Shubham_Singh_Resume.pdf">
                    <FileDown className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* PDF Viewer */}
            <motion.div
              className="bg-card border border-border rounded-lg overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <iframe
                src="/shubhams_resume.pdf"
                className="w-full h-[800px]"
                title="Shubham Singh Resume"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 30, 0.95), rgba(10, 10, 30, 0.95)), url(${cyberBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-purple-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Let's Connect
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm always open to discussing new opportunities, collaborations, or just chatting about tech.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 shadow-glow"
                  asChild
                >
                  <a href="mailto:shub.ss@outlook.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Me
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <a href="https://linkedin.com/in/shubhamanilsingh" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Or find me on{" "}
              <motion.a
                href="https://github.com/code-sharingan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
                whileHover={{ scale: 1.05 }}
                style={{ display: 'inline-block' }}
              >
                GitHub
              </motion.a>
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer
        className="py-8 border-t border-cyan-500/20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 5, 15, 0.98), rgba(5, 5, 15, 0.98)), url(${cyberBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center text-cyan-200/60 relative z-10">
          <p>© 2025 Shubham Anil Singh. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
