export const skills = [
  { id: 'java', label: 'Java', x: 200, y: 350, type: 'skill' as const },
  { id: 'csharp', label: 'C#', x: 350, y: 280, type: 'skill' as const },
  { id: 'cpp', label: 'C++', x: 500, y: 250, type: 'skill' as const },
  { id: 'python', label: 'Python', x: 650, y: 320, type: 'skill' as const },
  { id: 'javascript', label: 'JavaScript', x: 800, y: 200, type: 'skill' as const },
  { id: 'typescript', label: 'TypeScript', x: 950, y: 180, type: 'skill' as const },
  { id: 'react', label: 'React', x: 300, y: 150, type: 'power' as const },
  { id: 'nextjs', label: 'Next.js', x: 450, y: 120, type: 'power' as const },
  { id: 'vue', label: 'Vue.js', x: 600, y: 100, type: 'power' as const },
  { id: 'django', label: 'Django', x: 750, y: 140, type: 'power' as const },
  { id: 'spring', label: 'Spring Boot', x: 900, y: 380, type: 'power' as const },
  { id: 'fastapi', label: 'FastAPI', x: 1050, y: 320, type: 'power' as const },
  { id: 'postgresql', label: 'PostgreSQL', x: 250, y: 420, type: 'skill' as const },
  { id: 'mongodb', label: 'MongoDB', x: 400, y: 450, type: 'skill' as const },
  { id: 'aws', label: 'AWS', x: 700, y: 470, type: 'achievement' as const },
  { id: 'azure', label: 'Azure', x: 850, y: 450, type: 'achievement' as const },
  { id: 'd3js', label: 'D3.js', x: 1000, y: 220, type: 'skill' as const },
];

export const platforms = [
  // Ground platforms
  { x: 0, y: 520, width: 300, height: 30, label: 'Start', type: 'default' as const },
  { x: 350, y: 500, width: 200, height: 30, label: '', type: 'default' as const },
  { x: 600, y: 480, width: 200, height: 30, label: '', type: 'default' as const },
  { x: 850, y: 460, width: 200, height: 30, label: '', type: 'default' as const },

  // Mid-level platforms
  { x: 200, y: 400, width: 180, height: 30, label: 'Teaching Assistant', type: 'experience' as const },
  { x: 450, y: 350, width: 180, height: 30, label: 'Skills Level', type: 'default' as const },
  { x: 700, y: 370, width: 180, height: 30, label: 'Peer Mentor', type: 'experience' as const },
  { x: 950, y: 410, width: 180, height: 30, label: '', type: 'default' as const },

  // Upper platforms
  { x: 250, y: 250, width: 200, height: 30, label: 'FreedomLedger', type: 'project' as const },
  { x: 500, y: 200, width: 180, height: 30, label: 'Chat App', type: 'project' as const },
  { x: 750, y: 170, width: 200, height: 30, label: 'Agario Client', type: 'project' as const },

  // Top platform - Education
  { x: 400, y: 80, width: 250, height: 40, label: 'University of Utah 🎓', type: 'education' as const },

  // End platform
  { x: 1050, y: 280, width: 150, height: 30, label: 'Contact Me! 🏁', type: 'default' as const },
];

export const achievements = [
  { id: 'deans-list-1', label: "Dean's List Spring 2021", x: 420, y: 50, type: 'achievement' as const },
  { id: 'deans-list-2', label: "Dean's List Fall 2021", x: 600, y: 50, type: 'achievement' as const },
  { id: 'graduation', label: 'Graduating Dec 2025', x: 500, y: 30, type: 'achievement' as const },
];
