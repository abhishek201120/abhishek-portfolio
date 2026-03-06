"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import {
  Download, ChevronRight, Server, Database, Map, Bot, Film,
  MapPin, ExternalLink, Calendar, MonitorSmartphone, Radio, Globe, GraduationCap, Library
} from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import SplashScreen from "@/components/SplashScreen";
import ExperienceCard from "@/components/ExperienceCard";
import SpotlightCard from "@/components/SpotlightCard";
import MagneticButton from "@/components/MagneticButton";
import CustomCursor from "@/components/CustomCursor";
import { portfolioData } from "./data";

// Dynamic Icon Renderer
const ProjectIcon = ({ name, className }: { name: string, className: string }) => {
  switch (name) {
    case "film": return <Film className={className} />;
    case "bot": return <Bot className={className} />;
    case "map": return <Map className={className} />;
    case "university": return <GraduationCap className={className} />;
    case "school": return <Library className={className} />;
    default: return <Server className={className} />;
  }
};

// Advanced 3D Tilt Card for Skills
const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className="p-8 border rounded-2xl bg-slate-900/40 backdrop-blur-md border-white/5 shadow-2xl relative"
    >
      <div style={{ transform: "translateZ(30px)" }}>{children}</div>
    </motion.div>
  );
};

// Live Data Core Animation (Unchanged)
const APICoreAnimation = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square lg:max-w-lg select-none pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-500/10 blur-[100px] rounded-full" />
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <defs>
          <linearGradient id="lineGrad1" x1="50%" y1="50%" x2="15%" y2="20%"><stop offset="0%" stopColor="#22d3ee" stopOpacity="1" /><stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" /></linearGradient>
          <linearGradient id="lineGrad2" x1="50%" y1="50%" x2="85%" y2="20%"><stop offset="0%" stopColor="#22d3ee" stopOpacity="1" /><stop offset="100%" stopColor="#10b981" stopOpacity="0.8" /></linearGradient>
          <linearGradient id="lineGrad3" x1="50%" y1="50%" x2="50%" y2="85%"><stop offset="0%" stopColor="#22d3ee" stopOpacity="1" /><stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" /></linearGradient>
        </defs>
        <motion.line x1="50%" y1="50%" x2="15%" y2="20%" stroke="url(#lineGrad1)" strokeWidth="3" strokeDasharray="6 12" animate={{ strokeDashoffset: [0, -36] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} />
        <motion.line x1="50%" y1="50%" x2="85%" y2="20%" stroke="url(#lineGrad2)" strokeWidth="3" strokeDasharray="6 12" animate={{ strokeDashoffset: [0, -36] }} transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }} />
        <motion.line x1="50%" y1="50%" x2="50%" y2="85%" stroke="url(#lineGrad3)" strokeWidth="3" strokeDasharray="6 12" animate={{ strokeDashoffset: [0, -36] }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />
      </svg>
      <motion.div animate={{ y: [0, -10, 0], boxShadow: ["0 0 20px rgba(34,211,238,0.2)", "0 0 50px rgba(34,211,238,0.6)", "0 0 20px rgba(34,211,238,0.2)"] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-slate-900 border-2 border-cyan-400/60 rounded-full flex flex-col items-center justify-center z-10 shadow-xl"><Server className="w-10 h-10 text-cyan-400 mb-1" /><span className="text-xs font-bold text-cyan-300 tracking-widest">NODE.JS</span></motion.div>
      <motion.div animate={{ y: [0, -15, 0], x: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} className="absolute top-[20%] left-[15%] -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-slate-900 border-2 border-blue-500/50 rounded-2xl flex flex-col items-center justify-center z-10 shadow-xl"><MonitorSmartphone className="w-7 h-7 text-blue-400 mb-1" /><span className="text-[10px] font-bold text-blue-300">CLIENT</span></motion.div>
      <motion.div animate={{ y: [0, 15, 0], x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }} className="absolute top-[20%] left-[85%] -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-slate-900 border-2 border-emerald-500/50 rounded-2xl flex flex-col items-center justify-center z-10 shadow-xl"><Database className="w-7 h-7 text-emerald-400 mb-1" /><span className="text-[10px] font-bold text-emerald-300">MONGO</span></motion.div>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 2 }} className="absolute top-[85%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-slate-900 border-2 border-purple-500/50 rounded-2xl flex flex-col items-center justify-center z-10 shadow-xl"><Radio className="w-7 h-7 text-purple-400 mb-1" /><span className="text-[10px] font-bold text-purple-300">WSS://</span></motion.div>
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute top-[10%] left-[10%] w-[80%] h-[80%] rounded-full border border-dashed border-cyan-500/30" />
    </div>
  );
};

export default function Portfolio() {
  const [showSplash, setShowSplash] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  if (showSplash) return <SplashScreen onComplete={() => setShowSplash(false)} />;

  return (

    <div className="relative min-h-screen text-slate-200 bg-slate-950 selection:bg-cyan-500/30 font-sans">
      <CustomCursor />
      <AnimatedBackground />

      {/* Global Scroll Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 origin-left z-50 shadow-[0_0_15px_rgba(34,211,238,0.5)]" style={{ scaleX: scrollYProgress }} />

      <main className="relative z-10 max-w-6xl px-6 mx-auto">

        {/* HERO SECTION */}
        <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen pt-24 pb-10 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="w-full lg:w-1/2">

            {/* Scramble Title */}
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest rounded-full text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.2)] animate-decode">
              {portfolioData.personal.title}
            </span>

            {/* Flowing Aurora Name */}
            <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl drop-shadow-lg">
              {portfolioData.personal.firstName} <br />
              <span className="text-transparent animate-text-shimmer bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400">
                {portfolioData.personal.lastName}
              </span>
            </h1>

            <p className="max-w-xl mt-6 text-lg leading-relaxed md:text-xl text-slate-400">
              {portfolioData.personal.summary}
            </p>

            {/* Magnetic Buttons */}
            <div className="flex flex-col gap-4 mt-10 sm:flex-row z-20 relative">
              <MagneticButton onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })} className="gap-2 px-8 py-4 font-bold text-white transition-all rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                View Architecture <ChevronRight className="w-5 h-5" />
              </MagneticButton>
              <MagneticButton href={portfolioData.personal.resumeFile} download="Abhishek_Chauhan_Resume.pdf  " className="gap-2 px-8 py-4 font-bold transition-all border rounded-lg text-slate-200 border-slate-600 bg-slate-900/50 hover:bg-slate-800 hover:text-white">
                <Download className="w-5 h-5" /> Download Resume
              </MagneticButton>
            </div>

            <div className="flex gap-8 mt-10 ml-2">
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors font-medium tracking-wide">
                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" /> LinkedIn
              </a>
              <a href={`mailto:${portfolioData.personal.email}`} className="group flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors font-medium tracking-wide">
                <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" /> Email Me
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <APICoreAnimation />
          </motion.div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-32 border-t border-white/5">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="mb-16 text-4xl font-extrabold text-white md:text-5xl tracking-tight">Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span></h2>
            <div className="space-y-6">
              {portfolioData.experience.map((exp, idx) => (
                <ExperienceCard key={idx} company={exp.company} role={exp.role} dates={exp.dates} location={exp.location} bullets={exp.bullets} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* PROJECTS (Spotlight Cards + Dynamic Icons) */}
        <section className="py-32 border-t border-white/5">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="mb-16 text-4xl font-extrabold text-white md:text-5xl tracking-tight">System <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Architecture</span></h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {portfolioData.projects.map((project, idx) => (
                <SpotlightCard key={idx} delay={idx * 0.2}>
                  <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                    <ProjectIcon name={project.icon} className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mb-5 text-sm font-bold tracking-wider text-blue-400 uppercase">{project.tech}</p>
                  <p className="text-slate-400 text-base leading-relaxed flex-grow">{project.desc}</p>
                </SpotlightCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SKILLS & GLOWING EDUCATION TIMELINE */}
        <section className="py-32 border-t border-white/5">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">

            {/* Left Column: 3D Tilt Skills */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}>
              <h2 className="mb-12 text-4xl font-extrabold text-white tracking-tight">Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Arsenal</span></h2>
              <TiltCard>
                <div className="space-y-10">
                  {portfolioData.skills.map((group, i) => (
                    <motion.div key={i} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                      <h4 className="mb-4 text-sm font-bold tracking-widest text-slate-500 uppercase">{group.group}</h4>
                      <div className="flex flex-wrap gap-3">
                        {group.items.map((skill, j) => (
                          <motion.div key={skill} whileHover={{ scale: 1.1, y: -5 }} className="px-5 py-2.5 text-sm font-bold transition-all border cursor-none rounded-xl bg-slate-800/80 text-cyan-50 border-slate-700 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TiltCard>
            </motion.div>

            {/* Right Column: Glowing Timeline Education */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="mb-12 text-4xl font-extrabold text-white tracking-tight">Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Roots</span></h2>

              <div className="relative pl-8 space-y-12 before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-cyan-500 before:via-blue-500 before:to-transparent">
                {portfolioData.education.map((edu, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: idx * 0.2 }} className="relative">

                    {/* Timeline Node */}
                    <div className="absolute -left-[45px] top-2 h-8 w-8 rounded-full bg-slate-950 border-4 border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.6)] flex items-center justify-center z-10">
                      <ProjectIcon name={edu.icon} className="w-3 h-3 text-cyan-400" />
                    </div>

                    <div className="p-8 transition-all border group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(34,211,238,0.1)] rounded-2xl bg-slate-900/40 backdrop-blur-md border-white/5 hover:border-cyan-500/30">
                      <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{edu.degree}</h3>
                      <p className="text-lg text-slate-400 font-medium mb-4">{edu.school}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4 font-mono">
                        <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-cyan-500" /> {edu.dates}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-500" /> {edu.location}</span>
                      </div>
                      <span className="text-cyan-300 font-bold text-sm bg-cyan-950/50 border border-cyan-500/20 inline-block px-4 py-2 rounded-lg">
                        {edu.grade}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* FULL WIDTH CONTACT BANNER */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-32 p-10 lg:p-16 border rounded-[2rem] bg-gradient-to-br from-cyan-950/40 to-blue-950/20 border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_50px_rgba(34,211,238,0.05)] relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="text-center md:text-left relative z-10">
              <h3 className="mb-3 text-3xl font-extrabold text-white">Let's Build the Future.</h3>
              <p className="text-slate-400 text-lg max-w-lg">Whether it's a high-performance backend or a scalable full-stack platform, I'm ready for the challenge.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 items-center w-full md:w-auto relative z-10">
              <span className="text-slate-300 text-base font-mono bg-slate-950/50 px-6 py-4 rounded-xl border border-white/10 shadow-inner">
                {portfolioData.personal.phone}
              </span>
              <MagneticButton href={`mailto:${portfolioData.personal.email}`} className="px-10 py-4 text-base font-bold text-slate-950 bg-cyan-400 rounded-xl hover:bg-cyan-300 transition-colors w-full sm:w-auto text-center shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                Initialize Contact
              </MagneticButton>
            </div>
          </motion.div>
        </section>

      </main>
    </div>
  );
}