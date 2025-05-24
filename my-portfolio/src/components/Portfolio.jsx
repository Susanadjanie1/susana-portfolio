import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Briefcase, GraduationCap, User, Menu, X, Star, Calendar, Users, Database, Zap } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const skills = {
    frontend: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    tools: ['GitHub', 'VS Code', 'MongoDB', 'JWT', 'Vercel'],
    soft: ['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Adaptability']
  };

  const projects = [
    {
      title: 'Project Management SaaS',
      description: 'Full-stack application with role-based access control, real-time task comments, and time tracking. Built for 3 user roles with complete dashboards.',
      tech: ['Next.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
      features: ['Real-time Comments', 'Time Tracking', 'Role-based Access', 'Task Delegation'],
      type: 'Full-Stack'
    },
    {
      title: 'Advertising Platform',
      description: 'Dynamic advertising app with user authentication, vendor dashboards, and advanced category filtering system.',
      tech: ['React', 'JavaScript', 'React Router'],
      features: ['User Authentication', 'Vendor Dashboards', 'Category Filters', 'Dynamic Content'],
      type: 'Frontend'
    },
    {
      title: 'Library Management System',
      description: 'Complete CRUD application for book management with intuitive navigation and state management.',
      tech: ['React', 'React Router', 'State Management'],
      features: ['CRUD Operations', 'Book Search', 'User Management', 'Responsive Design'],
      type: 'Frontend'
    }
  ];

  const experience = [
    {
      company: 'Everything Technology',
      role: 'Frontend Developer Intern',
      period: 'April 2025 - May 2025',
      location: 'Tema, Ghana',
      achievements: [
        'Built and deployed full-stack project management application in 4 weeks',
        'Implemented role-based access control for 3 user types',
        'Achieved real-time collaboration features with time tracking'
      ]
    },
    {
      company: 'R. A Codjoe Law Offices',
      role: 'Administrator',
      period: 'Jan 2024 - Dec 2024',
      location: 'Accra, Ghana', 
      achievements: [
        'Streamlined data entry processes and office operations',
        'Enhanced communication systems and record management',
        'Demonstrated exceptional organizational and time management skills'
      ]
    }
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-amber-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              SD
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-amber-400 ${
                    activeSection === item ? 'text-amber-400 border-b-2 border-amber-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-amber-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-amber-500/20">
              <div className="flex flex-col space-y-4 mt-4">
                {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="capitalize text-left hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Susana Djanie
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-slate-300 mb-4">
              Frontend Developer & Problem Solver
            </div>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Crafting exceptional user experiences with React and Next.js, backed by strategic business thinking 
              and a passion for clean, performant code.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-amber-500 hover:bg-amber-500 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Let's Connect
            </button>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-amber-400 hover:text-amber-300 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-amber-500/20 shadow-xl">
                  <User className="text-amber-400 mb-4" size={32} />
                  <h3 className="text-2xl font-bold mb-4 text-amber-400">Professional Summary</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Frontend Developer with a unique blend of technical expertise and business acumen. 
                    My background in Business Administration enhances my problem-solving approach and 
                    strategic thinking in development projects.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    I specialize in building user-centered, performant web applications using modern 
                    technologies like React and Next.js, always focusing on clean code and exceptional user experiences.
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <div className="relative bg-gradient-to-r from-amber-400 to-orange-500 p-1 rounded-full">
                    <img
                      src="/images/Susana_portfolio.jpeg"
                      alt="Susana Djanie - Frontend Developer"
                      className="w-80 h-80 object-cover rounded-full border-4 border-slate-800"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-80 h-80 bg-gradient-to-br from-slate-700 to-slate-600 rounded-full border-4 border-slate-800 hidden items-center justify-center">
                      <User className="text-amber-400" size={120} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-amber-500/20">
                  <GraduationCap className="text-amber-400 mb-3" size={24} />
                  <h4 className="font-bold text-amber-400 mb-2">Education</h4>
                  <div className="space-y-2 text-slate-300">
                    <div>Bachelor of Business Administration</div>
                    <div className="text-sm text-slate-400">University of Professional Studies, Accra</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-amber-500/20">
                  <MapPin className="text-amber-400 mb-3" size={24} />
                  <h4 className="font-bold text-amber-400 mb-2">Location</h4>
                  <div className="text-slate-300">Accra, Ghana</div>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-amber-500/20">
                  <Zap className="text-amber-400 mb-3" size={24} />
                  <h4 className="font-bold text-amber-400 mb-2">Current Focus</h4>
                  <div className="text-slate-300">Building scalable React applications and expanding full-stack capabilities</div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-center mb-12 text-amber-400">Technical Skills</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-amber-500/20">
                    <h4 className="font-bold text-amber-400 mb-4 capitalize">
                      {category === 'frontend' ? 'Frontend Technologies' : category === 'tools' ? 'Tools & Technologies' : 'Soft Skills'}
                    </h4>
                    <div className="space-y-2">
                      {skillList.map((skill) => (
                        <div key={skill} className="flex items-center">
                          <Star className="text-amber-400 mr-2" size={16} />
                          <span className="text-slate-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-amber-500/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-amber-400 mb-2">{exp.role}</h3>
                      <div className="text-xl text-slate-300 mb-2">{exp.company}</div>
                      <div className="flex items-center text-slate-400 text-sm">
                        <Calendar className="mr-2" size={16} />
                        {exp.period}
                        <MapPin className="ml-4 mr-2" size={16} />
                        {exp.location}
                      </div>
                    </div>
                    <Briefcase className="text-amber-400 mt-4 md:mt-0" size={32} />
                  </div>
                  
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-slate-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border border-amber-500/20 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-gradient-to-r from-amber-500 to-orange-600 px-3 py-1 rounded-full text-xs font-semibold text-slate-900">
                        {project.type}
                      </span>
                      <Code className="text-amber-400" size={24} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-amber-400 mb-3">{project.title}</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-amber-400 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {project.features.map((feature, i) => (
                          <div key={i} className="text-xs text-slate-400">• {feature}</div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="bg-slate-700 text-amber-400 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                      <ExternalLink className="mr-2" size={16} />
                      View Project
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-slate-400 mb-6">Want to see more of my work?</p>
              <button className="border-2 border-amber-500 hover:bg-amber-500 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center mx-auto">
                <Github className="mr-2" size={20} />
                View GitHub Profile
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-amber-400 mb-6">Get In Touch</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                  or simply connect with fellow developers. Let's build something amazing together!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-amber-400 mr-4" size={24} />
                    <span className="text-slate-300">susanadjanie1@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-amber-400 mr-4" size={24} />
                    <span className="text-slate-300">+233208692395</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-amber-400 mr-4" size={24} />
                    <span className="text-slate-300">Accra, Ghana</span>
                  </div>
                </div>

                <div className="flex space-x-4 mt-8">
                  <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 p-3 rounded-lg transition-all duration-300 hover:scale-110">
                    <Linkedin size={24} />
                  </button>
                  <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 p-3 rounded-lg transition-all duration-300 hover:scale-110">
                    <Github size={24} />
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-amber-500/20">
                <h3 className="text-xl font-bold text-amber-400 mb-6">Ready to Collaborate?</h3>
                <div className="space-y-6">
                  <p className="text-slate-300">
                    I'm always open to discussing new opportunities and exciting projects. 
                    Feel free to reach out through any of the contact methods listed, or connect with me on social media.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-slate-700/50 p-4 rounded-lg border border-amber-500/10">
                      <div className="text-amber-400 font-semibold mb-2">Quick Response</div>
                      <div className="text-slate-300 text-sm">Email or LinkedIn for fastest response</div>
                    </div>
                    
                    <div className="bg-slate-700/50 p-4 rounded-lg border border-amber-500/10">
                      <div className="text-amber-400 font-semibold mb-2">Project Collaboration</div>
                      <div className="text-slate-300 text-sm">Open to freelance and full-time opportunities</div>
                    </div>
                    
                    <div className="bg-slate-700/50 p-4 rounded-lg border border-amber-500/10">
                      <div className="text-amber-400 font-semibold mb-2">Technical Discussion</div>
                      <div className="text-slate-300 text-sm">Love talking about React, Next.js, and web development</div>
                    </div>
                  </div>

                  <button
                    onClick={() => window.open('mailto:susanadjanie1@gmail.com', '_blank')}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Mail className="mr-2" size={20} />
                    Start a Conversation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-8 border-t border-amber-500/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2025 Susana Djanie. Crafted with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;