"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Calendar } from "lucide-react";

interface ExperienceProps {
  company: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
}

export default function ExperienceCard({ company, role, dates, location, bullets }: ExperienceProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative mb-6 overflow-hidden transition-all duration-300 border rounded-2xl bg-slate-900/40 backdrop-blur-md border-white/10 hover:border-white/20"
    >
      <div 
        className="p-6 cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white md:text-2xl">{role}</h3>
            <h4 className="text-lg font-medium text-cyan-400">{company}</h4>
          </div>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="w-6 h-6 text-slate-400" />
          </motion.div>
        </div>
        <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-400">
          <div className="flex items-center gap-1"><Calendar className="w-4 h-4"/> {dates}</div>
          <div className="flex items-center gap-1"><MapPin className="w-4 h-4"/> {location}</div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 border-t border-white/5 pt-4">
              <ul className="space-y-3">
                {bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}