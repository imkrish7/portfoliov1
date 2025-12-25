import React from "react";
import { EXPERIENCES } from "../lib/constants";

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-b border-slate-100">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4 uppercase">
            Career Path
          </h2>
          <p className="text-slate-500 leading-relaxed">
            6+ years of building technical infrastructure for high-growth
            startups and financial platforms.
          </p>
        </div>
        <div className="md:w-2/3 space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="group relative">
              <div className="flex flex-col sm:flex-row justify-between items-baseline mb-4">
                <h4 className="text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {exp.company}
                </h4>
                <span className="text-sm font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full uppercase tracking-tighter">
                  {exp.period}
                </span>
              </div>
              <p className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-6">
                {exp.role}
              </p>
              <ul className="space-y-4 mb-8">
                {exp.description.map((desc, i) => (
                  <li
                    key={i}
                    className="text-slate-500 leading-relaxed font-medium flex gap-3"
                  >
                    <span className="text-indigo-300">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] uppercase font-bold text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
