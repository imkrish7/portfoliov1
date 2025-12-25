import Image from "next/image";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200">
            <Image
              src="https://res.cloudinary.com/drwgyfimi/image/upload/v1766687896/IMG_20190101_145020_dbee06.jpg"
              alt="Krishna"
              className="w-full h-full object-cover"
              width={32}
              height={32}
            />
          </div>
          <span className="font-bold text-slate-900 tracking-tight">
            Krishna.
          </span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
          <a
            href="#experience"
            className="hover:text-indigo-600 transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-indigo-600 transition-colors"
          >
            Works
          </a>
          <a href="#skills" className="hover:text-indigo-600 transition-colors">
            Stack
          </a>
          <a
            href="#contact"
            className="hover:text-indigo-600 transition-colors"
          >
            Contact
          </a>
        </div>

        <a
          href="https://drive.google.com/file/d/168Y4ifvD46g_sGBtCZQ22Dud5K7ZhBFq/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-900 text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-indigo-600 transition-all"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
