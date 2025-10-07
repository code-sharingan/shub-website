import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import Navbar from "@/components/Navbar";
import { Mail, Github, Linkedin, ArrowDown, Code2, FileDown } from "lucide-react";
import cyberBg from "@/assets/cyber-bg.png";
import coderImage from "@/assets/coder.png";

const Index = () => {
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
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />

        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 animate-fade-in">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-75 blur-lg group-hover:opacity-100 transition duration-300"></div>
              <img
                src={coderImage}
                alt="Shubham coding in a coffee shop"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-background"
              />
            </div>

            {/* Text Section */}
            <div className="text-center md:text-left max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Shubham Singh
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Computer Science Graduate | Full-Stack Developer
              </p>
              <p className="text-lg text-muted-foreground/80 mb-12">
                Building scalable full-stack applications with expertise in modern web frameworks,
                cloud architectures, and real-time systems. Graduating December 2025.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-12">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 shadow-glow"
                  onClick={scrollToProjects}
                >
                  <Code2 className="mr-2 h-5 w-5" />
                  View Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10"
                  onClick={scrollToContact}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Button>
              </div>

              <div className="flex gap-6 justify-center md:justify-start">
                <a
                  href="https://github.com/code-sharingan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/shubhamanilsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 30, 0.95), rgba(10, 10, 30, 0.95)), url(${cyberBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-purple-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills & Technologies</h2>
          <p className="text-center text-cyan-100/80 mb-12 max-w-2xl mx-auto">
            Proficient in modern web technologies and frameworks
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            <SkillBadge name="Java" />
            <SkillBadge name="C#" />
            <SkillBadge name="C++" />
            <SkillBadge name="Python" />
            <SkillBadge name="JavaScript" />
            <SkillBadge name="TypeScript" />
            <SkillBadge name="React" />
            <SkillBadge name="Next.js" />
            <SkillBadge name="Vue.js" />
            <SkillBadge name="Django" />
            <SkillBadge name="Spring Boot" />
            <SkillBadge name="FastAPI" />
            <SkillBadge name="REST APIs" />
            <SkillBadge name="PostgreSQL" />
            <SkillBadge name="MySQL" />
            <SkillBadge name="MongoDB" />
            <SkillBadge name="AWS (EC2)" />
            <SkillBadge name="Azure" />
            <SkillBadge name="Firebase" />
            <SkillBadge name="D3.js" />
            <SkillBadge name="Tailwind CSS" />
            <SkillBadge name="Git/GitHub" />
            <SkillBadge name="Agile/Scrum" />
            <SkillBadge name="TDD" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 5, 20, 0.95), rgba(5, 5, 20, 0.95)), url(${cyberBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-pink-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Featured Projects</h2>
          <p className="text-center text-purple-100/80 mb-12 max-w-2xl mx-auto">
            A selection of my recent work and side projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ProjectCard
              title="FreedomLedger"
              description="Full-stack fintech application with Next.js 15/React 19 frontend and FastAPI backend, processing real-time financial data from Plaid API across 11,000+ institutions. Features advanced data visualization with D3.js, enterprise-grade security with Firebase Authentication, and comprehensive RESTful API architecture with 45+ endpoints."
              technologies={["Next.js", "React 19", "FastAPI", "PostgreSQL", "D3.js", "Firebase", "Plaid API"]}
              githubUrl="https://github.com/code-sharingan"
            />
            <ProjectCard
              title="Online Chat Application"
              description="Real-time chat application with React and Tailwind CSS frontend and FastAPI backend. Managed user authentication, real-time messaging, and database interactions efficiently with secure integration between frontend and backend through environment variables and CORS settings."
              technologies={["React", "Tailwind CSS", "FastAPI", "WebSockets"]}
              githubUrl="https://github.com/code-sharingan"
            />
            <ProjectCard
              title="Agario Multiplayer Client"
              description="Real-time multiplayer game client implementing network communication using TCP sockets for consistent game state synchronization across clients. Created a dynamic user interface that updates based on real-time game state data."
              technologies={["C#", "TCP Sockets", "Real-time Networking"]}
              githubUrl="https://github.com/code-sharingan"
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 30, 0.95), rgba(10, 10, 30, 0.95)), url(${cyberBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-emerald-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Education</h2>
            <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
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
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 5, 20, 0.95), rgba(5, 5, 20, 0.95)), url(${cyberBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-cyan-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experience</h2>
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
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
              </div>

              <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section
        id="resume"
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 30, 0.95), rgba(10, 10, 30, 0.95)), url(${cyberBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-amber-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Resume</h2>
            <p className="text-center text-orange-100/80 mb-8">
              View or download my resume to learn more about my experience and qualifications
            </p>

            <div className="flex justify-center mb-8">
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
            </div>

            {/* PDF Viewer */}
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="/shubhams_resume.pdf"
                className="w-full h-[800px]"
                title="Shubham Singh Resume"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 30, 0.95), rgba(10, 10, 30, 0.95)), url(${cyberBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-purple-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to discussing new opportunities, collaborations, or just chatting about tech.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
            </div>

            <p className="text-muted-foreground">
              Or find me on{" "}
              <a
                href="https://github.com/code-sharingan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </section>

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
