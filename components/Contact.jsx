import { HiArrowUpRight } from "react-icons/hi2";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#f28c4a]/40 text-[#f28c4a] text-sm font-medium">
              Contact
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Let&apos;s work <span className="text-[#f28c4a]">together</span>
            </h2>
            <p className="text-gray-400 max-w-md mb-10">
              Have a project in mind or want to collaborate? I&apos;m open to new
              opportunities and interesting design challenges.
            </p>

            <div className="space-y-4 text-sm">
              <p>
                <span className="text-gray-500 w-24 inline-block">Email</span>
                <a
                  href="mailto:sandip1080p@gmail.com"
                  className="text-gray-200 hover:text-[#f28c4a]"
                >
                  sandip1080p@gmail.com
                </a>
              </p>
              <p>
                <span className="text-gray-500 w-24 inline-block">Location</span>
                Bengaluru, India
              </p>
              <p>
                <span className="text-gray-500 w-24 inline-block">Status</span>
                Open to work
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#14141f] border border-white/10 p-10 md:p-12">
            <h3 className="text-2xl font-bold mb-3">Start a project</h3>
            <p className="text-gray-400 text-sm mb-8">
              Tell me about your idea and I&apos;ll get back to you within 24 hours.
            </p>
            <a
              href="mailto:sandip1080p@gmail.com"
              className="inline-flex items-center justify-center gap-2 w-full btn-pill bg-[#f28c4a] text-black font-semibold py-4 hover:opacity-90 transition"
            >
              Send a Message
              <HiArrowUpRight />
            </a>
            <a
              href="https://www.linkedin.com/in/sandip-bhattacharya-baa7611a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-[#f28c4a] hover:underline text-sm"
            >
              LinkedIn →
            </a>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-white/5 flex flex-wrap justify-between gap-4 text-sm text-gray-500">
          <span>© {new Date().getFullYear()} Sandip Bhattacharya</span>
          <span>UI/UX Designer Portfolio</span>
        </footer>
      </div>
    </section>
  );
}
