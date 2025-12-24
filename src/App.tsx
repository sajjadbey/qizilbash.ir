import React, { useState, useEffect } from 'react';
import { IranFlagIcon, AzerbaijaniFlagIcon, TurkishFlagIcon, BritishFlagIcon, SaudiFlagIcon } from './flags/Flags';
import { 
  MapPin, 
  Calendar, 
  Languages, 
  Dna, 
  Code2, 
  Mail, 
  Send, 
  ChevronDown,
  ExternalLink,
  Terminal,
  Cpu,
  NotebookText,
  ScrollText,
  Snowflake,
  TreePine,
  Gift,
  Sparkles,
  Star,
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  // Generate snowflakes
  useEffect(() => {
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 20,
    }));
    setSnowflakes(flakes);
  }, []);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
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
    <div className="min-h-screen bg-gradient-to-b from-[#0A1929] via-[#0D1B2A] to-[#1A2332] text-slate-100 font-sans selection:bg-[#AFDBF5]/30 selection:text-white overflow-x-hidden">
      
      {/* Snowfall Animation */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {snowflakes.map((flake) => (
          <Snowflake
            key={flake.id}
            className="absolute text-white/30 animate-snowfall"
            size={12 + Math.random() * 8}
            style={{
              left: `${flake.left}%`,
              animationDelay: `${flake.delay}s`,
              animationDuration: `${flake.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Winter Background Decorations */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Frosted gradient orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#AFDBF5]/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#FFD700]/10 rounded-full blur-[100px] translate-x-1/3"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#A4DDED]/15 rounded-full blur-[140px]"></div>
        
        {/* Floating winter elements */}
        <div className="absolute top-20 right-20 opacity-10 animate-float">
          <Star size={40} className="text-[#FFD700]" />
        </div>
        <div className="absolute top-1/2 left-10 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
          <TreePine size={60} className="text-[#AFDBF5]" />
        </div>
        <div className="absolute bottom-40 right-40 opacity-10 animate-float" style={{ animationDelay: '4s' }}>
          <Gift size={50} className="text-[#FFD700]" />
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Snowflake className="text-[#AFDBF5] animate-sparkle" size={24} />
            <div className="text-2xl font-bold tracking-tight text-white">
              QIZILBASH<span className="text-[#FFD700]">.IR</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`hover:text-[#AFDBF5] transition-colors uppercase tracking-widest ${activeSection === item.toLowerCase() ? 'text-[#FFD700]' : 'text-slate-300'}`}
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
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full glass-effect text-[#AFDBF5] text-xs font-semibold tracking-widest uppercase">
            <Sparkles size={16} className="animate-sparkle" />
            <span>Web Developer & Patriot</span>
            <TreePine size={16} className="animate-sparkle" style={{ animationDelay: '1s' }} />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AFDBF5] via-[#A4DDED] to-[#FFD700] animate-glow">Sajjad</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Born in the heart of <span className="text-[#FFD700] font-semibold">Tabriz</span>. 
            Crafting modern digital experiences with the spirit of Azerbaijan.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollTo('contact')} 
              className="group relative px-8 py-4 bg-gradient-to-r from-[#AFDBF5] to-[#A4DDED] text-[#0A1929] font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(175,219,245,0.4)] hover:shadow-[0_0_50px_rgba(175,219,245,0.6)] hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Contact Me
                <Mail size={18} />
              </span>
            </button>
            <button 
              onClick={() => scrollTo('projects')} 
              className="px-8 py-4 glass-effect glass-hover text-slate-200 rounded-xl transition-all font-semibold"
            >
              <span className="flex items-center gap-2">
                View Projects
                <ExternalLink size={18} />
              </span>
            </button>
          </div>

          {/* Winter themed decorative elements */}
          <div className="flex justify-center gap-8 mb-16">
            <div className="glass-effect px-6 py-3 rounded-full animate-float">
              <Snowflake className="text-[#AFDBF5]" size={24} />
            </div>
            <div className="glass-effect px-6 py-3 rounded-full animate-float" style={{ animationDelay: '2s' }}>
              <Star className="text-[#FFD700]" size={24} />
            </div>
            <div className="glass-effect px-6 py-3 rounded-full animate-float" style={{ animationDelay: '4s' }}>
              <Gift className="text-[#AFDBF5]" size={24} />
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400">
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <TreePine className="text-[#AFDBF5]" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AFDBF5] to-[#FFD700]">Identity & Roots</span>
              </h2>
              <TreePine className="text-[#FFD700]" size={32} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Bio Card */}
            <div className="space-y-6">
              <div className="glass-effect glass-hover p-8 rounded-3xl transition-all hover:scale-105">
                <h3 className="text-2xl font-semibold text-[#AFDBF5] mb-6 flex items-center gap-2">
                  <MapPin className="text-[#FFD700]" /> Personal Details
                </h3>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-center gap-3">
                    <Calendar size={18} className="text-[#AFDBF5]" />
                    <span>20 Years Old (Born Oct 8, 2005)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <IranFlagIcon size={18} />
                    <span>East Azerbaijan, Tabriz, Iran</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <AzerbaijaniFlagIcon size={18} />
                    <span>Azerbaijani Turk</span>
                  </li>
                </ul>
              </div>

              {/* DNA Card */}
              <div className="glass-effect p-8 rounded-3xl relative overflow-hidden group hover:scale-105 transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Dna size={120} className="text-[#AFDBF5]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <Dna className="text-[#FFD700]" /> Genetic Heritage
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl border-l-4 border-[#AFDBF5]">
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Paternal (Y-DNA)</p>
                    <a href="https://discover.familytreedna.com/y-dna/Q-L245/story" target="_blank" rel="noopener noreferrer">
                      <p className="text-2xl font-mono font-bold text-[#AFDBF5]">Q-L245</p>
                    </a>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border-l-4 border-[#FFD700]">
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Maternal (mtDNA)</p>
                    <a href="https://discover.familytreedna.com/mtdna/J1b5/story" target="_blank" rel="noopener noreferrer">
                      <p className="text-2xl font-mono font-bold text-[#FFD700]">J1b5</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-8">
              <div className="glass-effect glass-hover p-8 rounded-3xl h-full transition-all hover:scale-105">
                <h3 className="text-2xl font-semibold text-[#AFDBF5] mb-6 flex items-center gap-2">
                  <Languages className="text-[#FFD700]" /> Languages
                </h3>
                <div className="space-y-6">
                  <LanguageBar lang="Azerbaijani" level="Native" percent={100} color="bg-[#AFDBF5]" FlagComponent={<AzerbaijaniFlagIcon size={20} />} />
                  <LanguageBar lang="Persian" level="Fluent" percent={95} color="bg-[#A4DDED]" FlagComponent={<IranFlagIcon size={20} />} />
                  <LanguageBar lang="Turkish" level="Fluent" percent={90} color="bg-[#FFD700]" FlagComponent={<TurkishFlagIcon size={20} />} />
                  <LanguageBar lang="English" level="Intermediate" percent={65} color="bg-[#C0C0C0]" FlagComponent={<BritishFlagIcon size={20} />} />
                  <LanguageBar lang="Arabic" level="Intermediate" percent={50} color="bg-[#DFFFFD]" FlagComponent={<SaudiFlagIcon size={20} />} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-3 mb-4">
              <Gift className="text-[#FFD700]" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#AFDBF5]">Technical Arsenal</span>
              </h2>
              <Gift className="text-[#AFDBF5]" size={32} />
            </div>
          </div>
          <p className="text-center text-slate-400 mb-16">Modern technologies for modern solutions</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SkillCard icon={<Code2 size={32} />} title="React JS" desc="Component Architecture" color="text-[#AFDBF5]" />
            <SkillCard icon={<Terminal size={32} />} title="TypeScript" desc="Type Safety" color="text-[#A4DDED]" />
            <SkillCard icon={<Cpu size={32} />} title="Vite" desc="Next Gen Bundling" color="text-[#FFD700]" />
            <SkillCard icon={<ExternalLink size={32} />} title="Tailwind CSS" desc="Utility First Design" color="text-[#AFDBF5]" />
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-3 mb-4">
              <Star className="text-[#AFDBF5]" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AFDBF5] to-[#FFD700]">Featured Works</span>
              </h2>
              <Star className="text-[#FFD700]" size={32} />
            </div>
          </div>
          <p className="text-center text-slate-400 mb-16">Bringing ideas to life with code and cultural passion</p>

          <div className="max-w-4xl mx-auto">
            <a 
              href="https://iranicdna.qizilbash.ir" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block glass-effect glass-hover p-10 rounded-3xl transition-all hover:scale-105 group"
            >
              <div className="flex flex-col items-center text-center gap-6">
                <div className="p-4 rounded-full bg-gradient-to-r from-[#AFDBF5]/20 to-[#FFD700]/20 group-hover:scale-110 transition-transform">
                  <Dna size={48} className="text-[#AFDBF5]" />
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-[#AFDBF5] mb-3 flex items-center justify-center gap-2">
                    Iranic DNA
                    <ExternalLink size={24} className="text-[#FFD700]" />
                  </h3>
                  <p className="text-lg text-slate-300 mb-4 leading-relaxed">
                    A community-driven initiative to visualize Y-DNA and mtDNA haplogroup distributions across Iranian provinces
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 w-full">
                  <div className="bg-white/5 p-4 rounded-xl">
                    <div className="text-[#AFDBF5] mb-2">
                      <Code2 size={24} className="mx-auto" />
                    </div>
                    <p className="text-sm text-slate-300">Haplogroup Data</p>
                    <p className="text-xs text-slate-500 mt-1">Interactive visualization</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl">
                    <div className="text-[#FFD700] mb-2">
                      <MapPin size={24} className="mx-auto" />
                    </div>
                    <p className="text-sm text-slate-300">Province Filter</p>
                    <p className="text-xs text-slate-500 mt-1">Genetic data by region</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl">
                    <div className="text-[#AFDBF5] mb-2">
                      <Sparkles size={24} className="mx-auto" />
                    </div>
                    <p className="text-sm text-slate-300">Community Driven</p>
                    <p className="text-xs text-slate-500 mt-1">Contribute your data</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[#FFD700] font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Visit Iranic DNA Platform</span>
                  <ExternalLink size={18} />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-12">
            <Snowflake className="text-[#AFDBF5]" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AFDBF5] to-[#FFD700]">Connect With Me</span>
            </h2>
            <Snowflake className="text-[#FFD700]" size={32} />
          </div>
          
          <div className="glass-effect p-8 rounded-3xl shadow-2xl">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              
              <a href="mailto:qizilbass@proton.me" className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 glass-effect glass-hover rounded-xl transition-all group">
                <Mail className="text-[#AFDBF5] group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-xs text-slate-400">Email Me</p>
                  <p className="font-semibold text-white">qizilbass@proton.me</p>
                </div>
              </a>

              <a href="https://t.me/eternal_qizilbash" target="_blank" rel="noreferrer" className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 glass-effect glass-hover rounded-xl transition-all group">
                <Send className="text-[#FFD700] group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-xs text-slate-400">Telegram</p>
                  <p className="font-semibold text-white">@eternal_qizilbash</p>
                </div>
              </a>

            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-slate-400 italic flex items-center justify-center gap-2">
                <Sparkles size={16} className="text-[#FFD700]" />
                "Open to collaborations and freelance opportunities."
                <Sparkles size={16} className="text-[#AFDBF5]" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 glass-effect border-t border-white/10 text-center relative z-10">
        <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
          © 2025 <span className="text-[#AFDBF5] font-semibold">Qizilbash.ir</span>
          <Snowflake size={16} className="text-[#FFD700] animate-sparkle" />
          All Rights Reserved.
        </p>
        <p className="text-slate-500 text-xs mt-2">Designed in Tabriz with festive spirit.</p>
      </footer>
    </div>
  );
};

// Helper Components

interface LanguageBarProps { 
    lang: string; 
    level: string; 
    percent: number; 
    color: string;
    FlagComponent?: React.ReactNode;
}

const LanguageBar = ({ lang, level, percent, color, FlagComponent }: LanguageBarProps) => (
  <div>
    <div className="flex justify-between mb-2 items-center">
      <div className="flex items-center gap-3">
          {FlagComponent}
          <span className="font-medium text-slate-200">{lang}</span>
      </div>
      <span className="text-xs text-slate-400 bg-white/5 px-2 py-1 rounded">{level}</span>
    </div>
    <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
      <div 
        className={`h-2.5 rounded-full ${color} transition-all duration-1000 ease-out shadow-[0_0_10px_currentColor]`} 
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  </div>
);

const SkillCard = ({ icon, title, desc, color }: { icon: React.ReactNode; title: string; desc: string; color: string }) => (
  <div className="glass-effect glass-hover p-6 rounded-2xl transition-all hover:-translate-y-2 hover:scale-105 group text-center flex flex-col items-center">
    <div className={`mb-4 p-3 rounded-full bg-white/5 ${color} group-hover:scale-110 transition-transform animate-float`}>
      {icon}
    </div>
    <h3 className="text-lg font-bold text-slate-200 mb-1">{title}</h3>
    <p className="text-sm text-slate-400">{desc}</p>
  </div>
);

interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tags: string[];
  link: string;
}

const ProjectCard = ({ icon, title, desc, tags, link }: ProjectCardProps) => (
  <div className="glass-effect glass-hover p-8 rounded-3xl transition-all shadow-xl flex flex-col justify-between hover:scale-105 group">
    <div className="flex items-start gap-4 mb-4">
      <div className="text-[#FFD700] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-[#AFDBF5] mb-2">{title}</h3>
        <p className="text-slate-300 leading-relaxed">{desc}</p>
      </div>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 my-4">
      {tags.map((tag) => (
        <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/5 text-[#AFDBF5] rounded-full border border-[#AFDBF5]/30">
          {tag}
        </span>
      ))}
    </div>

    {/* Link Button */}
    {link && link !== '#' && (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-4 self-start flex items-center gap-2 text-sm font-semibold text-[#FFD700] hover:text-[#AFDBF5] transition-colors group-hover:translate-x-2"
      >
        View Project
        <ExternalLink size={16} />
      </a>
    )}
  </div>
);

export default App;