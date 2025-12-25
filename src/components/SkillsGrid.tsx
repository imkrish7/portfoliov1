import React from "react";
import { SKILL_CATEGORIES } from "../lib//constants";

const SkillsGrid: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">
            Technical Stack
          </h2>
          <div className="h-px grow bg-slate-100"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.name}>
              <h3 className="text-xs uppercase tracking-[0.2em] font-black text-indigo-600 mb-8">
                {cat.name}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill} className="group flex items-center gap-3">
                    <div className="w-1 h-1 bg-indigo-200 group-hover:bg-indigo-600 transition-colors"></div>
                    <span className="text-lg font-medium text-slate-600 group-hover:text-slate-900 transition-colors cursor-default tracking-tight">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
