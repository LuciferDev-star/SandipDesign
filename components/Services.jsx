import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";

const services = [
  {
    title: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=280&fit=crop",
  },
  {
    title: "Web Design and Development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=280&fit=crop",
  },
  {
    title: "Landing Page Design",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=280&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 wavy-bg relative">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            My <span className="text-[#f28c4a]">Services</span>
          </h2>
          <p className="text-gray-400">
            End-to-end design and development services tailored to help your
            brand stand out and convert visitors into loyal users.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-2xl overflow-hidden bg-[#14141f] border border-white/5 hover:border-[#f28c4a]/30 transition"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14141f] via-transparent to-transparent" />
              </div>
              <div className="p-6 flex items-center justify-between">
                <h3 className="font-bold text-lg">{s.title}</h3>
                <a
                  href="#contact"
                  className="w-10 h-10 rounded-full bg-[#f28c4a] text-black flex items-center justify-center hover:scale-110 transition"
                  aria-label={`Learn more about ${s.title}`}
                >
                  <HiArrowUpRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
