"use client";

import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";

const HERO_IMAGE = "/sandip.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#f28c4a]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <div>
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-[#f28c4a]">
            Hello! 👋
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            I&apos;m{" "}
            <span className="text-[#f28c4a]">Sandip Bhattacharya</span>,{" "}
            <br className="hidden sm:block" />
            UI/UX Designer
          </h1>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mb-10">
            I craft digital experiences that blend beautiful interfaces with
            solid development — from user research and Figma prototypes to
            production-ready apps with Next.js and React.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 btn-pill bg-[#f28c4a] text-black font-semibold px-7 py-3.5 hover:opacity-90 transition shadow-lg shadow-[#f28c4a]/25"
            >
              Portfolio
              <HiArrowUpRight className="text-lg" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 btn-pill border border-white/30 px-7 py-3.5 font-medium hover:border-[#f28c4a] hover:text-[#f28c4a] transition"
            >
              Hire me
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end relative">
          <div className="relative w-[min(100%,380px)] aspect-square">
            <div className="absolute inset-0 orbit-ring pointer-events-none">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <circle
                  cx="200"
                  cy="200"
                  r="185"
                  fill="none"
                  stroke="url(#ringGrad)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f28c4a" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="15" r="6" fill="#8b5cf6" />
                <circle cx="385" cy="200" r="5" fill="#3b82f6" />
                <circle cx="200" cy="385" r="6" fill="#f28c4a" />
              </svg>
            </div>

            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
              <Image
                src={HERO_IMAGE}
                alt="Sandip Bhattacharya"
                width={400}
                height={400}
                className="w-full h-full object-cover object-[center_25%]"
                priority
              />
            </div>

            <div className="absolute -top-2 right-4 md:right-8 float bg-[#14141f] border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
              <div className="flex gap-0.5 text-[#f28c4a] mb-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-xs" />
                ))}
              </div>
              <p className="text-xs font-semibold whitespace-nowrap">
                2 Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
