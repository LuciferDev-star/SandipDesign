import { HiArrowUpRight } from "react-icons/hi2";

const projects = [
  {
    title: "Lumiere Clothing",
    categories: ["UI/UX Design", "Web Design and Development"],
    stack: "UI/UX Design · Web Development · Vercel",
    link: "https://lumiere-clothing-beand.vercel.app/",
  },
  {
    title: "Student Productivity System",
    category: "UI/UX Design",
    stack: "Figma · User Research · Prototyping",
    link: "https://www.figma.com/proto/XqYMtYpST3z2ckPTdKRO1G/College?page-id=0%3A1&node-id=284-1325&viewport=-6906%2C-4846%2C0.66&t=YGdpSc8wrLjTEOOw-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=284%3A1325",
  },
  {
    title: "Splunk Calculator",
    category: "Web Design and Development",
    stack: "React.js · Tailwind · Logic",
    link: "https://magical-longma-5d1d3b.netlify.app/",
  },
  {
    title: "preva.care UI Design",
    category: "Product Design",
    stack: "Figma · User Research · Prototyping",
    link: "https://www.figma.com/proto/91sTWwHBFaOaYPqImsVETV/ANT-Design-System?node-id=17659-2525&viewport=14169%2C33348%2C0.64&t=ybMjj0Mi1ll3s8Pq-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=17659%3A2525&show-proto-sidebar=1&page-id=1225%3A29332",
  },
  {
    title: "PLANTED UI Design",
    category: "UI/UX Design",
    stack: "Figma · User Research · Prototyping",
    link: "https://www.figma.com/proto/91sTWwHBFaOaYPqImsVETV/ANT-Design-System?node-id=17595-2069&viewport=18517%2C23748%2C0.46&t=8gVEdZ4vhjmtRzlI-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=17595%3A2069&show-proto-sidebar=1&page-id=1225%3A29332",
  },
];

const projectCategories = (p) => p.categories ?? [p.category];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 pb-32">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14">
          Look at my <span className="text-[#f28c4a]">Portfolio</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 md:p-8 rounded-2xl bg-[#14141f] border border-white/5 hover:border-[#f28c4a]/40 transition"
            >
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-[#f28c4a] transition">
                  {p.title}
                </h3>
                <p className="text-sm text-[#f28c4a]/80">{p.stack}</p>
                <span className="text-xs text-gray-500 mt-2 inline-block">
                  {projectCategories(p).join(" · ")}
                </span>
              </div>
              <span className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#f28c4a] group-hover:text-black group-hover:border-[#f28c4a] transition">
                <HiArrowUpRight />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
