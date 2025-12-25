import React from "react";

const ContactFooter: React.FC = () => {
  return (
    <footer
      id="contact"
      className="py-24 px-6 md:px-12 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-white/5 pb-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
              Start a <span className="text-indigo-400">conversation.</span>
            </h2>
            <p className="text-slate-400 text-xl max-w-md mb-8">
              Available for full-time senior roles or strategic consulting.
              Let`${"'"}`s make it happen.
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Direct Mail
              </span>
              <a
                href="mailto:singhkrishk07@gmail.com"
                className="text-2xl font-bold hover:text-indigo-400 transition-colors"
              >
                singhkrishk07@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm">
            <h4 className="text-xl font-bold mb-6">Send a quick message</h4>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-indigo-400"
              />
              <textarea
                placeholder="Tell me about your project"
                rows={4}
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-indigo-400"
              ></textarea>
              <button className="w-full bg-indigo-600 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20">
                Send Message
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-black text-xs">
              KKSP.
            </div>
            <p className="text-sm font-medium text-slate-400">
              © {new Date().getFullYear()} Krishna Kamal Singh Patel
            </p>
          </div>
          <div className="flex gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
            <a
              href="https://github.com/imkrish7"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/krishnakamalsingh"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
