import React from "react";
import { PROJECTS } from "../lib/constants";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4 italic serif">
            Selected Works.
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            A showcase of complex engineering solutions and creative
            developments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 flex flex-col h-full hover:shadow-2xl hover:shadow-indigo-100/30 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v8" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    <path d="M12 14v8" />
                  </svg>
                </div>
                <div className="flex gap-2">
                  {project.technologies.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-black text-indigo-500 bg-indigo-50 px-3 py-1.5 rounded-full uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-indigo-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-500 mb-10 grow leading-relaxed text-lg">
                {project.description}
              </p>

              <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  Case Study
                </span>
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
