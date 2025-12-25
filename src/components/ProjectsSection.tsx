import React, { useState } from "react";
import { PROJECTS } from "../lib/constants";
import { Project } from "@/types/expriences";
import CaseStudyModal from "./CaseStudy";

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "Live":
        return "bg-emerald-50 text-emerald-600 border-emerald-100";
      case "Completed":
        return "bg-blue-50 text-blue-600 border-blue-100";
      case "Academic":
        return "bg-purple-50 text-purple-600 border-purple-100";
      case "In Progress":
        return "bg-amber-50 text-amber-600 border-amber-100";
      default:
        return "bg-slate-50 text-slate-600 border-slate-100";
    }
  };

  const getStatusDot = (status?: string) => {
    switch (status) {
      case "Live":
        return "bg-emerald-500";
      case "Completed":
        return "bg-blue-500";
      case "Academic":
        return "bg-purple-500";
      case "In Progress":
        return "bg-amber-500";
      default:
        return "bg-slate-500";
    }
  };
  return (
    <section
      id="projects"
      className="py-32 bg-slate-50/30 -mx-6 md:-mx-12 px-6 md:px-12 rounded-[4rem] my-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4 italic serif">
            Selected Works.
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg font-medium">
            A showcase of complex engineering solutions and architectural
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white p-10 rounded-[3rem] border border-slate-100 flex flex-col h-full hover:shadow-2xl hover:shadow-indigo-100/40 transition-all duration-500 relative overflow-hidden"
            >
              {/* Status Badge */}
              <div className="absolute top-8 right-8">
                <div
                  className={`flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${getStatusColor(project.status)}`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${getStatusDot(project.status)} animate-pulse`}
                  ></span>
                  {project.status || "Archived"}
                </div>
              </div>

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
              </div>

              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-indigo-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-500 mb-10 flex-grow leading-relaxed text-lg font-medium">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-black text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl uppercase transition-colors group-hover:border-indigo-100 group-hover:text-indigo-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-50 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-sm font-bold text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors"
                  >
                    View Case Study
                  </button>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                      title="View Source on GitHub"
                    >
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
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all shadow-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
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
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;
