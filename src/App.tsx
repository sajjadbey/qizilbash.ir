import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Calendar, 
  Languages, 
  Dna, 
  Code2, 
  Mail, 
  Send, 
  Globe, 
  ChevronDown,
  ExternalLink,
  Terminal,
  Cpu,
  NotebookText, // New Icon for Projects
  ScrollText, // New Icon for Project Detail
} from 'lucide-react';

const App = () => {
  // Added 'projects' to the state
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Updated sections list to include 'projects'
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          // Check if the section is visible in the top part of the viewport
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-teal-500 selection:text-white overflow-x-hidden">
      
      {/* Background Decorative Elements - Geometric patterns inspired by Tabriz architecture */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-600 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-700 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>
        <svg className="absolute w-full h-full opacity-20" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="seljuk-star" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <rect x="18" y="18" width="4" height="4" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#seljuk-star)" className="text-teal-800"/>
        </svg>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-teal-900/50 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter text-teal-400">
            QIZILBASH<span className="text-red-500">.IR</span>
          </div>
          {/* Updated Navigation Links */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`hover:text-teal-400 transition-colors uppercase tracking-widest ${activeSection === item.toLowerCase() ? 'text-teal-400' : 'text-slate-400'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-semibold tracking-widest uppercase animate-fade-in-up">
            Web Developer & Patriot
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-200">Sajjad</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Born in the heart of <span className="text-red-400 font-semibold">Tabriz</span>. 
            Crafting modern digital experiences with the spirit of Azerbaijan.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button onClick={() => scrollTo('contact')} className="group relative px-8 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]">
              Contact Me
            </button>
            <button onClick={() => scrollTo('projects')} className="px-8 py-3 border border-slate-600 hover:border-teal-500/50 text-slate-300 hover:text-teal-400 rounded-lg transition-all bg-slate-800/50 hover:bg-slate-800">
              View Projects
            </button>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-24 bg-slate-800/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="border-b-4 border-red-500 pb-2">Identity & Roots</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Bio Card */}
            <div className="space-y-6">
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-teal-900/30 hover:border-teal-500/30 transition-colors">
                <h3 className="text-2xl font-semibold text-teal-400 mb-6 flex items-center gap-2">
                  <MapPin className="text-red-500" /> Personal Details
                </h3>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-center gap-3">
                    <Calendar size={18} className="text-teal-600" />
                    <span>20 Years Old (Born Oct 8, 2005)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Globe size={18} className="text-teal-600" />
                    <span>East Azerbaijan, Tabriz, Iran</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-teal-500 to-red-500"></div>
                    <span>Azerbaijani Turk</span>
                  </li>
                </ul>
              </div>

              {/* DNA Card - Special Request */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-teal-500/20 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Dna size={120} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <Dna className="text-teal-400" /> Genetic Heritage
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-950/50 p-4 rounded-lg border-l-4 border-teal-500">
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Paternal (Y-DNA)</p>
                    <a href="https://discover.familytreedna.com/y-dna/Q-L245/story" target="_blank" rel="noopener noreferrer">
                      <p className="text-2xl font-mono font-bold text-teal-300">Q-L245</p>
                    </a>
                  </div>
                  <div className="bg-slate-950/50 p-4 rounded-lg border-l-4 border-red-500">
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Maternal (mtDNA)</p>
                    <a href="https://discover.familytreedna.com/mtdna/J1b5/story" target="_blank" rel="noopener noreferrer">
                      <p className="text-2xl font-mono font-bold text-red-300">J1b5</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-8">
               <div className="bg-slate-900/50 p-8 rounded-2xl border border-teal-900/30 h-full">
                <h3 className="text-2xl font-semibold text-teal-400 mb-6 flex items-center gap-2">
                  <Languages className="text-red-500" /> Languages
                </h3>
                <div className="space-y-6">
                  <LanguageBar lang="Azerbaijani" level="Native" percent={100} color="bg-teal-500" />
                  <LanguageBar lang="Persian" level="Fluent" percent={95} color="bg-teal-600" />
                  <LanguageBar lang="Turkish" level="Fluent" percent={90} color="bg-red-500" />
                  <LanguageBar lang="English" level="Fluent" percent={85} color="bg-blue-500" />
                  <LanguageBar lang="Arabic" level="Intermediate" percent={50} color="bg-yellow-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="relative z-10 py-24 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-6">
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Technical Arsenal
          </h2>
          <p className="text-center text-slate-400 mb-16">Modern technologies for modern solutions</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SkillCard icon={<Code2 size={32} />} title="React JS" desc="Component Architecture" color="text-cyan-400" />
            <SkillCard icon={<Terminal size={32} />} title="TypeScript" desc="Type Safety" color="text-blue-500" />
            <SkillCard icon={<Cpu size={32} />} title="Vite" desc="Next Gen Bundling" color="text-purple-400" />
            <SkillCard icon={<ExternalLink size={32} />} title="Tailwind CSS" desc="Utility First Design" color="text-teal-400" />
          </div>
        </div>
      </section>
      
      {/* Projects Section - NEW */}
      <section id="projects" className="relative z-10 py-24 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="border-b-4 border-teal-500 pb-2">Featured Works</span>
          </h2>
          <p className="text-center text-slate-400 mb-16">Bringing ideas to life with code and cultural passion.</p>

          <div className="grid md:grid-cols-2 gap-10">
            <ProjectCard
              icon={<NotebookText size={32} />}
              title="Azerbaijani Language Tools"
              desc="A suite of tools for Azerbaijani language, including a Latin-to-Arabic script converter and an Old Turkic alphabet generator."
              tags={['Next.js', 'TypeScript', 'Tailwind CSS', 'i18n']}
              link="https://qizilbash.ir/tools/"
            />
            <ProjectCard
              icon={<ScrollText size={32} />}
              title="E-Book Generation Platform"
              desc="A proprietary platform for converting raw text into clean, multi-format (EPUB/PDF) e-books, focused on speed and quality."
              tags={['Node.js', 'API', 'Docker', 'React']}
              link="#" // Placeholder for no external link
            />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 bg-gradient-to-t from-slate-900 via-slate-800/40 to-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Connect With Me
          </h2>
          
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-teal-500/20 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              
              <a href="mailto:qizilbass@proton.me" className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-xl transition-all group">
                <Mail className="text-teal-400 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-xs text-slate-400">Email Me</p>
                  <p className="font-semibold text-white">qizilbass@proton.me</p>
                </div>
              </a>

              <a href="https://t.me/eternal_qizilbash" target="_blank" rel="noreferrer" className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#229ED9]/10 hover:bg-[#229ED9]/20 border border-[#229ED9]/30 rounded-xl transition-all group">
                <Send className="text-[#229ED9] group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-xs text-slate-400">Telegram</p>
                  <p className="font-semibold text-white">@eternal_qizilbash</p>
                </div>
              </a>

            </div>

            <div className="mt-12 pt-8 border-t border-slate-700">
              <p className="text-slate-400 italic">
                "Open to collaborations and freelance opportunities."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/40 border-t border-slate-800 text-center">
        <p className="text-slate-500 text-sm">
          © 2025 <span className="text-teal-500 font-semibold">Qizilbash.ir</span>. All Rights Reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2">Designed in Tabriz.</p>
      </footer>
    </div>
  );
};

// Helper Components (Original)

const LanguageBar = ({ lang, level, percent, color }: { lang: string; level: string; percent: number; color: string }) => (
  <div>
    <div className="flex justify-between mb-2">
      <span className="font-medium text-slate-200">{lang}</span>
      <span className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded">{level}</span>
    </div>
    <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
      <div 
        className={`h-2.5 rounded-full ${color} transition-all duration-1000 ease-out`} 
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  </div>
);

const SkillCard = ({ icon, title, desc, color }: { icon: React.ReactNode; title: string; desc: string; color: string }) => (
  <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-all hover:-translate-y-1 group text-center flex flex-col items-center">
    <div className={`mb-4 p-3 rounded-full bg-slate-900 ${color} group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-lg font-bold text-slate-200 mb-1">{title}</h3>
    <p className="text-sm text-slate-500">{desc}</p>
  </div>
);

// Helper Components (NEW ProjectCard)

interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tags: string[];
  link: string;
}

const ProjectCard = ({ icon, title, desc, tags, link }: ProjectCardProps) => (
  <div className="bg-slate-900/60 p-8 rounded-2xl border border-red-500/20 hover:border-teal-500/50 transition-all shadow-xl flex flex-col justify-between">
    <div className="flex items-start gap-4 mb-4">
      <div className="text-red-500 flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-teal-300 mb-2">{title}</h3>
        <p className="text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 my-4">
      {tags.map((tag) => (
        <span key={tag} className="px-3 py-1 text-xs font-medium bg-slate-800 text-teal-400 rounded-full border border-teal-500/30">
          {tag}
        </span>
      ))}
    </div>

    {/* Link Button */}
    {link && (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-4 self-start flex items-center gap-2 text-sm font-semibold text-red-400 hover:text-red-300 transition-colors"
      >
        View Project
        <ExternalLink size={16} />
      </a>
    )}
  </div>
);


export default App;