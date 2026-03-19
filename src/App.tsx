import { Github, Linkedin, Code2, Mail, ExternalLink, Database, Server, Layout, Braces, Terminal, Folder, Box, Cloud, Activity, Send, Layers, Brain, Cpu } from 'lucide-react';
import './index.css'; // Just in case, ensuring it's imported

function App() {
  const skills = [
    { name: 'MongoDB', category: 'Database', icon: <Database className="w-6 h-6" /> },
    { name: 'Express.js', category: 'Backend', icon: <Server className="w-6 h-6" /> },
    { name: 'React', category: 'Frontend', icon: <Layout className="w-6 h-6" /> },
    { name: 'Node.js', category: 'Backend', icon: <Terminal className="w-6 h-6" /> },
    { name: 'TypeScript', category: 'Language', icon: <Braces className="w-6 h-6" /> },
    { name: 'Docker', category: 'DevOps', icon: <Box className="w-6 h-6" /> },
    { name: 'AWS', category: 'Cloud', icon: <Cloud className="w-6 h-6" /> },
    { name: 'MySQL', category: 'Database', icon: <Database className="w-6 h-6" /> },
    { name: 'DSA', category: 'Fundamentals', icon: <Brain className="w-6 h-6" /> },
    { name: 'GitHub Actions', category: 'CI/CD', icon: <Activity className="w-6 h-6" /> },
    { name: 'Postman', category: 'Testing', icon: <Send className="w-6 h-6" /> },
    { name: 'InversifyJS', category: 'Dependency Injection', icon: <Layers className="w-6 h-6" /> },
    { name: 'Redux', category: 'State Management', icon: <Cpu className="w-6 h-6" /> },
    { name: 'Tailwind CSS', category: 'Frontend', icon: <Layout className="w-6 h-6" /> },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/sarath2308',
      icon: <Github className="w-6 h-6" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sarath-v-p-3348a7336/',
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/sarathvp2308/',
      icon: <Code2 className="w-6 h-6" />,
    },
  ];

  const projects = [
    {
      title: 'learnCircle (LMS)',
      description: 'A sophisticated learning platform connecting learners with mentors. Supports professional course exploration, Q&A sessions, and real-time communication through video calls and community forums.',
      tech: ['TypeScript', 'MongoDB', 'Express', 'React', 'Node.js', 'Socket.io', 'WebRTC'],
      github: 'https://github.com/sarath2308/learnCircle',
      live: '#',
    },
    {
      title: 'Inventory Management System',
      description: 'A comprehensive full-stack system for inventory tracking, customer management, and sales tracking. Features detailed reporting with data export capabilities.',
      tech: ['TypeScript', 'MongoDB', 'Express', 'React', 'Node.js', 'InversifyJS'],
      github: 'https://github.com/sarath2308/inventory-management-mt',
      live: '#',
    },
    {
      title: 'Task Management Platform',
      description: 'Full-stack task management application featuring secure authentication, real-time updates via Socket.io, and an analytics dashboard with interactive charts.',
      tech: ['TypeScript', 'MongoDB', 'Express', 'React', 'Node.js', 'Socket.io', 'Chart.js'],
      github: 'https://github.com/sarath2308/Task-Management-MT',
      live: '#',
    },
    {
      title: 'ZooCart',
      description: 'An e-commerce platform for mobile phones featuring Passport.js authentication (Local & Google), Razorpay integration, and automated PDF/Excel report generation.',
      tech: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Razorpay', 'Passport.js', 'Cloudinary'],
      github: 'https://github.com/sarath2308/ZooCart-project',
      live: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-sans selection:bg-[#39FF14] selection:text-black">
      {/* Navbar */}
      <nav className="fixed w-full top-0 border-b border-gray-800 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tighter text-white">
            sarath<span className="text-[#39FF14]">.dev</span>
          </span>
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#39FF14] transition-colors duration-300 transform hover:scale-110"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 min-h-[80vh] flex flex-col justify-center border-b border-gray-800/50">
          <div className="max-w-3xl">
            <h2 className="text-[#39FF14] font-medium tracking-wide mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#39FF14]"></span>
              Hey there, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
              Sarath V P.
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-500 tracking-tight mb-8">
              I love building cool things for the web.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
              I'm a <span className="text-white font-medium">MERN Stack Developer</span> who enjoys 
              creating smooth, high-performance web applications. I focus on making the backend solid 
              and the frontend feel alive.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:sarathvp1546@gmail.com?subject=Portfolio Inquiry"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-[#39FF14] text-[#39FF14] px-8 py-4 rounded-sm font-medium hover:bg-[#39FF14]/10 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                Let's Talk
              </a>
              <a
                href="https://github.com/sarath2308"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-sm font-medium hover:bg-[#2a2a2a] transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
                View GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-6xl mx-auto px-6 py-32" id="skills">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              01. <span className="text-[#39FF14] font-normal text-2xl md:text-3xl ml-2">My Arsenal</span>
            </h2>
            <div className="h-[1px] bg-gray-800 flex-grow max-w-sm"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="group relative p-6 bg-[#111] border border-gray-800 rounded-sm hover:border-[#39FF14] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-gray-500 group-hover:text-[#39FF14] transition-colors duration-300 mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-white font-medium text-lg mb-1">{skill.name}</h3>
                <p className="text-sm text-gray-500">{skill.category}</p>
                <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-sm"></div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Projects Section */}
        <section className="max-w-6xl mx-auto px-6 py-32" id="projects">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              02. <span className="text-[#39FF14] font-normal text-2xl md:text-3xl ml-2">Some Things I've Built</span>
            </h2>
            <div className="h-[1px] bg-gray-800 flex-grow max-w-sm"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative flex flex-col justify-between p-8 bg-[#111] border border-gray-800 rounded-sm hover:border-[#39FF14] hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <Folder className="w-10 h-10 text-[#39FF14] stroke-1" />
                    <div className="flex gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#39FF14] transition-colors duration-300">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#39FF14] transition-colors duration-300">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 group-hover:text-[#39FF14] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-3 text-xs font-mono text-gray-500">
                  {project.tech.map((techItem, techIndex) => (
                    <li key={techIndex}>{techItem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Connect Section */}
        <section className="max-w-4xl mx-auto px-6 py-32 text-center">
          <h2 className="text-[#39FF14] font-medium tracking-wide mb-4">03. What's Next?</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect!</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">
            I'm always down to chat about new projects, tech, or just to network. 
            If you have a question or just want to say hi, my inbox is always open!
          </p>
          <a
            href="mailto:sarathvp1546@gmail.com?subject=Hello from Portfolio"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-[#39FF14] text-[#39FF14] px-8 py-4 rounded-sm font-medium hover:bg-[#39FF14]/10 transition-colors duration-300"
          >
            Say Hello
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-800/50 mt-12 bg-[#0a0a0a]">
        <div className="flex justify-center gap-6 mb-4 md:hidden">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#39FF14] transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-gray-500 text-sm hover:text-[#39FF14] transition-colors inline-block cursor-default">
          Designed & Built by Sarath V P
        </p>
      </footer>
    </div>
  );
}

export default App;
