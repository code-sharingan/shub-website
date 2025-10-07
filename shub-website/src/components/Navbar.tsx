import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-cyan-500/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-purple-300 transition-all"
            >
              Shubham Singh
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-cyan-100 hover:text-cyan-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-cyan-100 hover:text-cyan-400 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-cyan-100 hover:text-cyan-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-cyan-100 hover:text-cyan-400 transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-cyan-100 hover:text-cyan-400 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('resume')}
              className="text-cyan-100 hover:text-cyan-400 transition-colors"
            >
              Resume
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-cyan-100 hover:text-cyan-400 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/code-sharingan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-100 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/shubhamanilsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-100 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:shub.ss@outlook.com"
              className="text-cyan-100 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-cyan-100 hover:text-cyan-400 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-cyan-500/20 py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="text-cyan-100 hover:text-cyan-400 transition-colors text-left px-4"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-cyan-100 hover:text-cyan-400 transition-colors text-left px-4"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-cyan-100 hover:text-cyan-400 transition-colors text-left px-4"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-cyan-100 hover:text-cyan-400 transition-colors text-left px-4"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-cyan-100 hover:text-cyan-400 transition-colors text-left px-4"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('resume')}
                className="text-cyan-100 hover:text-cyan-400 transition-colors text-left px-4"
              >
                Resume
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-cyan-100 hover:text-cyan-400 transition-colors text-left px-4"
              >
                Contact
              </button>

              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 px-4 pt-2 border-t border-cyan-500/20">
                <a
                  href="https://github.com/code-sharingan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-100 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/shubhamanilsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-100 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:shub.ss@outlook.com"
                  className="text-cyan-100 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
