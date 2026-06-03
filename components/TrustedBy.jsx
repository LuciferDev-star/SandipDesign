const brands = ["Laravel", "Google", "Colorlib", "WooCommerce", "Pingdom"];

export default function TrustedBy() {
  return (
    <section className="bg-black py-10 border-y border-white/5">
      <div className="container-custom flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-70">
        {brands.map((name) => (
          <span
            key={name}
            className="text-sm md:text-base font-semibold tracking-widest uppercase text-gray-400"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
