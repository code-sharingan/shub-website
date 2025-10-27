import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, Database, Cloud, Layout, Cpu, Zap } from "lucide-react";
import cyberBg from "@/assets/cyber-bg.png";

const expertiseData = [
  {
    id: "fullstack",
    icon: Code2,
    title: "Full-Stack Development",
    color: "from-cyan-400 to-blue-400",
    bgGradient: "from-cyan-500/10 to-blue-500/10",
    borderColor: "border-cyan-500/30",
    glowColor: "hover:shadow-cyan-500/50",
    description: "Built production-ready applications using modern frameworks and best practices. I've developed FreedomLedger, a full-stack fintech application processing real-time financial data from 11,000+ institutions using Next.js 15/React 19 frontend and FastAPI backend. Implemented enterprise-grade security with Firebase Authentication and comprehensive RESTful API architecture with 45+ endpoints.",
  },
  {
    id: "backend",
    icon: Database,
    title: "Backend Architecture & APIs",
    color: "from-purple-400 to-pink-400",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/30",
    glowColor: "hover:shadow-purple-500/50",
    description: "Designed and implemented scalable backend systems with RESTful APIs. Created a real-time chat application backend using FastAPI with WebSocket support, managed user authentication flows, and optimized database interactions. Developed 45+ API endpoints for FreedomLedger with proper error handling, validation, and documentation.",
  },
  {
    id: "databases",
    icon: Database,
    title: "Database Design & Management",
    color: "from-green-400 to-emerald-400",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-500/30",
    glowColor: "hover:shadow-green-500/50",
    description: "Proficient in both SQL and NoSQL databases. Designed and optimized database schemas for FreedomLedger using PostgreSQL, handling complex financial transactions and user data. Implemented efficient queries, indexing strategies, and data relationships. Also experienced with MongoDB for flexible document-based storage and Firebase for real-time applications.",
  },
  {
    id: "frontend",
    icon: Layout,
    title: "Modern Frontend Development",
    color: "from-orange-400 to-red-400",
    bgGradient: "from-orange-500/10 to-red-500/10",
    borderColor: "border-orange-500/30",
    glowColor: "hover:shadow-orange-500/50",
    description: "Created responsive, accessible user interfaces with React, Next.js, and Vue.js. Built advanced data visualizations using D3.js for FreedomLedger's financial dashboards. Implemented real-time UI updates in chat applications with WebSocket integration. Mastered modern CSS frameworks like Tailwind CSS and created smooth animations with Framer Motion.",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "from-indigo-400 to-violet-400",
    bgGradient: "from-indigo-500/10 to-violet-500/10",
    borderColor: "border-indigo-500/30",
    glowColor: "hover:shadow-indigo-500/50",
    description: "Deployed and managed applications on AWS (EC2), Azure, and Firebase. Configured cloud infrastructure, implemented CI/CD pipelines, and managed environment variables for secure deployments. Integrated third-party services like Plaid API for real-time financial data processing across multiple cloud platforms.",
  },
  {
    id: "networking",
    icon: Cpu,
    title: "Real-Time Systems & Networking",
    color: "from-yellow-400 to-amber-400",
    bgGradient: "from-yellow-500/10 to-amber-500/10",
    borderColor: "border-yellow-500/30",
    glowColor: "hover:shadow-yellow-500/50",
    description: "Implemented real-time communication systems using WebSockets and TCP sockets. Developed a multiplayer Agario game client with consistent game state synchronization across clients using C# and TCP networking. Built real-time chat applications with instant message delivery and presence detection using FastAPI and WebSocket protocols.",
  },
];

const ExpertiseSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the array for seamless infinite loop
  const duplicatedData = [...expertiseData, ...expertiseData];

  return (
    <motion.section
      id="expertise"
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
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-purple-500/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Expertise
            </h2>
          </div>
          <p className="text-cyan-100/80 text-lg">
            Real-world experience across the full technology stack
          </p>
        </motion.div>

        {/* Infinite Scroll Carousel */}
        <div
          className="relative w-full overflow-hidden py-8 isolate"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 8rem, black calc(100% - 8rem), transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 8rem, black calc(100% - 8rem), transparent)',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Optional static blur layer */}
          <div className="absolute inset-0 pointer-events-none" style={{ backdropFilter: 'blur(4px)' }} />

          <motion.div
            className="flex gap-8 will-change-transform [transform:translateZ(0)]"
            animate={{
              x: isPaused ? undefined : [0, -100 * expertiseData.length + "%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 403,
                ease: "linear",
              },
            }}
            style={{ width: "max-content" }}
          >
            {duplicatedData.map((expertise, index) => (
              <ExpertiseCard key={`${expertise.id}-${index}`} data={expertise} />
            ))}
          </motion.div>
        </div>

        {/* Hint */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-cyan-100/60 italic">
            Hover to pause • Smoothly scrolling through all expertise areas
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Expertise Card Component
const ExpertiseCard = ({ data }: { data: typeof expertiseData[0] }) => {
  const Icon = data.icon;

  return (
    <motion.div
      className={`bg-white/5 border ${data.borderColor} rounded-xl p-6 transition-all duration-300 w-[400px] h-[480px] flex flex-col flex-shrink-0 hover:shadow-lg`}
      whileHover={{
        scale: 1.05,
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`rounded-xl bg-gradient-to-br ${data.bgGradient} h-full flex flex-col`}>
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            className={`bg-gradient-to-br ${data.bgGradient} p-4 rounded-lg border ${data.borderColor}`}
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
          <h3 className={`text-xl font-bold bg-gradient-to-r ${data.color} bg-clip-text text-transparent`}>
            {data.title}
          </h3>
        </div>

        <div className={`border-l-4 ${data.borderColor} pl-4 flex-1 overflow-y-auto scrollbar-hide`}>
          <p className="text-foreground/90 leading-relaxed text-sm">
            {data.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ExpertiseSection;
