import { FaLightbulb, FaPenFancy, FaCode } from "react-icons/fa6";

const steps = [
  {
    num: "01",
    title: "Concept",
    desc: "Research users, define goals, and map journeys that align with your business vision.",
    icon: FaLightbulb,
    color: "#a855f7",
    bg: "rgba(168, 85, 247, 0.15)",
  },
  {
    num: "02",
    title: "Design",
    desc: "Wireframes, high-fidelity UI in Figma, prototypes, and design systems ready for dev.",
    icon: FaPenFancy,
    color: "#22c55e",
    bg: "rgba(34, 197, 94, 0.15)",
  },
  {
    num: "03",
    title: "Development",
    desc: "Build responsive, accessible frontends with Next.js, React, and modern best practices.",
    icon: FaCode,
    color: "#3b82f6",
    bg: "rgba(59, 130, 246, 0.15)",
  },
];

export default function WorkProcess() {
  return (
    <section className="py-24 md:py-32 wavy-bg">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
          Our Work <span className="text-[#f28c4a]">Process</span>
        </h2>

        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex gap-6 items-start p-6 md:p-8 rounded-2xl bg-[#14141f]/80 border border-white/5 hover:border-white/10 transition"
            >
              <div
                className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
                style={{ backgroundColor: step.bg }}
              >
                <step.icon className="text-xl" style={{ color: step.color }} />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-500 tracking-widest">
                  {step.num}
                </span>
                <h3 className="text-xl font-bold mt-1 mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
