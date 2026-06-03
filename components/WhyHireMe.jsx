import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";

const PROFILE_IMAGE = "/sandip.png";

const experience = { value: "2", label: "Years of Experience" };

export default function WhyHireMe() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
            Why <span className="text-[#f28c4a]">Hire me?</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-10 max-w-lg">
            I combine design thinking with hands-on development — so you get
            one partner who understands users, ships polished interfaces, and
            builds performant web apps without handoff friction.
          </p>

          <div className="mb-10">
            <p className="text-3xl md:text-4xl font-extrabold text-[#f28c4a]">
              {experience.value}
            </p>
            <p className="text-xs md:text-sm text-gray-500 mt-1">
              {experience.label}
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 btn-pill bg-[#f28c4a] text-black font-semibold px-8 py-3.5 hover:opacity-90 transition"
          >
            Hire Me
            <HiArrowUpRight />
          </a>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-[#f28c4a]/20 blur-sm" />
            <div className="absolute inset-4 rounded-full border-4 border-[#f28c4a]/60 overflow-hidden">
              <Image
                src={PROFILE_IMAGE}
                alt="Sandip Bhattacharya"
                width={320}
                height={320}
                className="w-full h-full object-cover object-[center_25%]"
              />
            </div>
            <div className="absolute bottom-8 -right-2 w-20 h-20 rounded-full bg-[#f28c4a]" />
          </div>
        </div>
      </div>
    </section>
  );
}
