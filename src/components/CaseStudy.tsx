import React, { useEffect } from "react";
import { Project } from "../types/expriences";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-60 flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative w-full max-w-2xl bg-white h-full shadow-2xl overflow-y-auto animate-slide-in-right">
        <div className="sticky top-0 bg-white/90 backdrop-blur-md z-10 p-6 border-b border-slate-100 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
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
                <path d="M12 2v8" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                <path d="M12 14v8" />
              </svg>
            </div>
            <div>
              <h3 className="font-black text-slate-900 leading-tight">
                {project.title}
              </h3>
              <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest">
                Technical Case Study
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="p-10 space-y-16">
          <section>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 block">
              The Context
            </span>
            <p className="text-2xl text-slate-900 font-medium leading-relaxed tracking-tight italic">
              {project.description}
            </p>
          </section>

          {project.caseStudy && (
            <>
              <section className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                  <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter">
                    The Challenge
                  </h4>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed pl-6 border-l-2 border-slate-50">
                  {project.caseStudy.problem}
                </p>
              </section>

              <section className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                  <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter">
                    The Solution
                  </h4>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed pl-6 border-l-2 border-slate-50">
                  {project.caseStudy.solution}
                </p>
              </section>

              {project.caseStudy.architecture && (
                <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4">
                  <h4 className="text-xs font-black text-indigo-600 uppercase tracking-widest">
                    Engineering Architecture
                  </h4>
                  <p className="text-slate-700 font-medium leading-relaxed">
                    {project.caseStudy.architecture}
                  </p>
                </section>
              )}

              <section className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter">
                    Impact & Results
                  </h4>
                </div>
                <div className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100">
                  <p className="text-emerald-900 text-lg font-bold leading-relaxed">
                    {project.caseStudy.impact}
                  </p>
                </div>
              </section>
            </>
          )}

          <section className="pt-10 border-t border-slate-100">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">
              Technologies Leveraged
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          <div className="flex gap-4 pt-8">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                className="flex-1 bg-slate-100 text-slate-900 py-4 rounded-2xl font-bold text-center hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
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
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                View Codebase
              </a>
            )}
            <button className="flex-1 bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
              Live Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
