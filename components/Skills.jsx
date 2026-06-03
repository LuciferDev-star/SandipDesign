export default function Skills() {
  const categories = [
    {
      label: "Design",
      skills: [
        { name: "UI Design", level: 88 },
        { name: "UX Research", level: 78 },
        { name: "Figma", level: 85 },
        { name: "Prototyping", level: 80 },
      ],
    },
    
    {
      label: "Frontend",
      skills: [
        { name: "React / Next.js", level: 92 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML / CSS", level: 95 },
      ],
    },
    {
      label: "Backend",
      skills: [
        { name: "Next.js", level: 50 },
        { name: "React", level: 82 },
        { name: "REST APIs", level: 88 },
        { name: "SQL / NoSQL", level: 75 },
      ],
    },
    
    
  ];

  return (
    <section
      id="skills"
      className="py-[120px] px-10 bg-[#0d0d0d] border-y border-white/5"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="mb-20">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#e8c547] mb-4">
            02 — Skills
          </div>

          <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-black tracking-[-0.02em]">
            My Expertise
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-[2px]">

          {categories.map((cat) => (
            <div
              key={cat.label}
              className="bg-[#111] p-12 border-t-2 border-transparent hover:border-[#e8c547] transition-colors"
            >
              {/* Category */}
              <h3 className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#e8c547] mb-8">
                {cat.label}
              </h3>

              <div className="flex flex-col gap-6">

                {cat.skills.map(({ name, level }) => (
                  <div key={name}>

                    {/* Skill label */}
                    <div className="flex justify-between mb-2">
                      <span className="text-[14px] text-[#f0ece4]">
                        {name}
                      </span>

                      <span className="font-mono text-[11px] text-[#3a3a3a]">
                        {level}%
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="h-[2px] bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#e8c547] to-[#e8c547]/40 transition-all duration-1000"
                        style={{ width: `${level}%` }}
                      />
                    </div>

                  </div>
                ))}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}