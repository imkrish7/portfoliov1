import React, { startTransition, useState } from "react";

const ContactFooter: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    // Simulate high-end backend processing
    startTransition(async () => {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to send email");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    });
  };
  return (
    <footer
      id="contact"
      className="py-24 px-6 md:px-12 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-white/5 pb-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
              Let&apos;s build <br />
              something <span className="text-indigo-400">significant.</span>
            </h2>
            <p className="text-slate-400 text-xl max-w-md mb-8">
              Currently open to senior leadership opportunities or high-impact
              technical collaborations.
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
            {status !== "success" ? (
              <div
                className={`transition-all duration-500 ${status === "sending" ? "opacity-40 pointer-events-none blur-sm" : "opacity-100"}`}
              >
                <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
                  Send a quick message
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                </h4>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:border-indigo-400 focus:bg-white/10 transition-all placeholder:text-slate-600"
                      />
                    </div>
                    <div className="space-y-1">
                      <input
                        type="email"
                        required
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:border-indigo-400 focus:bg-white/10 transition-all placeholder:text-slate-600"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <textarea
                      required
                      placeholder="Describe the project or role"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:border-indigo-400 focus:bg-white/10 transition-all placeholder:text-slate-600 resize-none"
                    ></textarea>
                  </div>
                  <button
                    disabled={status === "sending"}
                    className="w-full bg-indigo-600 py-5 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20 active:scale-[0.98] flex items-center justify-center gap-2 group"
                  >
                    {status === "sending" ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Encrypting & Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg
                          className="group-hover:translate-x-1 transition-transform"
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center animate-slideUpFade p-4">
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-emerald-500/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-fade-in"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h4 className="text-3xl font-black mb-2 tracking-tight">
                  Message Received
                </h4>
                <p className="text-slate-400 font-medium">
                  I&apos;ve received your brief and will respond within 24
                  hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-indigo-400 hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            )}
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
