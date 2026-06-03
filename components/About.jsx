import Image from "next/image";
import {
  FaFigma,
  FaWordpress,
  FaHtml5,
  FaWix,
  FaPenNib,
  FaPaintbrush,
  FaLayerGroup,
} from "react-icons/fa6";

const PROFILE_IMAGE = "/sandip.png";

const skills = [
  { icon: FaWordpress, color: "#21759b", label: "WordPress" },
  { icon: FaLayerGroup, color: "#ff61f6", label: "Adobe XD" },
  { icon: FaFigma, color: "#f24e1e", label: "Figma" },
  { icon: FaHtml5, color: "#e34f26", label: "HTML5" },
  { icon: FaWix, color: "#0c6efc", label: "Wix" },
  { icon: FaPenNib, color: "#ff9a00", label: "Illustrator" },
  { icon: FaPaintbrush, color: "#31a8ff", label: "Photoshop" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full border-[6px] border-[#f28c4a] p-2">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src={PROFILE_IMAGE}
                  alt="Sandip Bhattacharya"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover object-[center_25%]"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-[#f28c4a] border-4 border-[#0c0c12]" />
          </div>
        </div>

        <div>
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#f28c4a]/40 text-[#f28c4a] text-sm font-medium">
            About Me
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold leading-snug mb-6">
            Get a website that will make a lasting impression on your audience!!!
          </h2>

          <p className="text-gray-400 leading-relaxed mb-10">
            I&apos;m Sandip Bhattacharya, a UI/UX Designer who codes. From empathy
            maps and wireframes in Figma and Adobe XD to shipped products with
            Next.js and React — I own the full journey so your users get
            experiences that feel intentional, fast, and memorable.
          </p>

          <h3 className="text-lg font-bold mb-5">My Skills</h3>
          <div className="flex flex-wrap gap-4">
            {skills.map(({ icon: Icon, color, label }) => (
              <div
                key={label}
                title={label}
                className="w-12 h-12 rounded-xl bg-[#14141f] border border-white/10 flex items-center justify-center hover:scale-110 transition"
              >
                <Icon style={{ color }} className="text-2xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
