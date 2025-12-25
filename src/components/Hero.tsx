import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden px-6 md:px-12 bg-[#FDFDFD]">
      {/* Decorative Geometry */}
      <div className="absolute top-[20%] right-[45%] w-8 h-1 bg-indigo-500/20 rotate-45 rounded-full"></div>
      <div className="absolute top-[50%] left-10 w-6 h-1 bg-indigo-500/20 -rotate-12 rounded-full"></div>
      <div className="absolute bottom-[20%] right-20 w-12 h-1 bg-indigo-500/20 rotate-90 rounded-full"></div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10 order-2 lg:order-1">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.05] tracking-tighter mb-8">
            Building digital <br />
            products, brands <br />
            <span className="flex items-center gap-4">
              <span className="bg-indigo-600 text-white rounded-full p-2.5 shadow-xl shadow-indigo-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v8" />
                  <path d="m4.93 10.93 1.41 1.41" />
                  <path d="M2 18h2" />
                  <path d="M20 18h2" />
                  <path d="m19.07 10.93-1.41 1.41" />
                  <path d="M22 22H2" />
                  <path d="m8 22 4-10 4 10" />
                </svg>
              </span>
              <span className="text-indigo-600 italic font-medium">
                experience.
              </span>
            </span>
          </h1>

          <div className="max-w-md mb-10">
            <p className="text-xl text-slate-600 mb-6">
              A{" "}
              <span className="text-slate-900 font-bold decoration-indigo-200 decoration-4 underline underline-offset-4">
                Senior Software Engineer
              </span>{" "}
              and{" "}
              <span className="text-slate-900 font-bold decoration-indigo-200 decoration-4 underline underline-offset-4">
                Visual Developer
              </span>{" "}
              based in India.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Specializing in high-performance React architectures, Web3/KYC
              platforms, and intuitive data dashboards.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
            <input
              type="email"
              placeholder="Email address"
              className="grow px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-50 transition-all shadow-sm"
            />
            <button className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-1 transition-all">
              Connect With Me
            </button>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="relative w-full aspect-4/5 max-w-125 mx-auto overflow-hidden rounded-[3rem] bg-slate-100 shadow-2xl shadow-indigo-50 group">
            <Image
              src="https://res.cloudinary.com/drwgyfimi/image/upload/v1766687896/IMG_20190101_145020_dbee06.jpg"
              alt="Krishna Kamal Singh Patel"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              width={500}
              height={500}
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-40"></div>
          </div>

          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl hidden md:block border border-slate-50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
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
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Availability
                </p>
                <p className="text-lg font-black text-slate-900 tracking-tight">
                  Open for Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
