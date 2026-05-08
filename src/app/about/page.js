"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const team = [
  {
    name: "Vince",
    role: "The Boss",
    image: "/vince.jpg",
  },
  {
    name: "Vince",
    role: "OG, Senior",
    image: "/vince-senior.jpg",
  },
  {
    name: "Franco",
    role: "Barber",
    image: "/franco.jpg",
  },
  {
    name: "Dave",
    role: "Barber",
    image: "/dave.jpg",
  },
  {
    name: "Adam",
    role: "Barber",
    image: "/adam.jpg",
  },
  {
    name: "Christian",
    role: "Castro",
    image: "/castro.jpg",
  },
  {
    name: "Chenzo",
    role: "Barber",
    image: "/chenzo.jpg",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0b1f3a] text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 flex justify-center items-center px-6 py-4 bg-white border-b border-[#14253a]/10">
        <div className="flex gap-8 text-sm md:text-base font-semibold text-[#14253a]">
          <a href="/" className="hover:text-[#c1121f] transition">
            Home
          </a>
          <a href="/#services" className="hover:text-[#c1121f] transition">
            Services
          </a>
          <a href="/about" className="hover:text-[#c1121f] transition">
            About
          </a>
          <a href="/#contact" className="hover:text-[#c1121f] transition">
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative px-6 py-28 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/storefront.jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-[#0b1f3a]/80" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#c1121f] tracking-wide">
            About Punch
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            A classic Glen Ellyn barbershop built on precision, consistency,
            and a sharp modern standard.
          </p>
        </motion.div>
      </section>

      {/* STORY */}
      <section className="bg-white text-[#0b1f3a] py-24 px-6 border-t border-[#0b1f3a]/5">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Classic Barbering. Modern Finish.
            </h2>

            <p className="leading-relaxed mb-5">
              Located in the heart of Glen Ellyn, Punch Barber Shop is built on
              the idea that a great cut should be consistent, precise, and worth
              coming back for. This isn’t a high-turnover chain or a rushed
              experience — it’s a shop focused on quality, detail, and making
              sure every client leaves looking sharp.
            </p>

            <p className="leading-relaxed mb-5">
              From classic men’s cuts to detailed beard work and clean lineups,
              every service is approached with intention. Whether it’s your
              weekly cut or a first-time visit, the goal stays the same: clean
              work, no shortcuts, and a finish that holds up.
            </p>

            <p className="leading-relaxed">
              Punch is a neighborhood shop at its core — built for regulars,
              families, and anyone who values a dependable barber they can
              trust.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/storefront.jpg"
              alt="Punch Barber Shop storefront"
              className="w-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* MEET THE TEAM */}
      <section className="bg-[#0b1f3a] py-24 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Meet the Team
          </h2>

          <div className="flex flex-wrap justify-center gap-10">
            {team.map((member) => (
              <div key={`${member.name}-${member.role}`} className="group text-center w-full max-w-sm">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-[420px] object-cover transition duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#ede3da]">
                  {member.name}
                </h3>

                <p className="text-sm text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

     {/* CTA */}
<section className="bg-white text-[#0b1f3a] py-20 px-6 text-center">

  <h2 className="text-3xl md:text-4xl font-bold mb-6">
    Ready for a Fresh Cut?
  </h2>

  <p className="max-w-xl mx-auto mb-8">
    Book your next appointment or stop by the shop in Glen Ellyn.
  </p>

  <a
    href="https://booksy.com"
    target="_blank"
    className="inline-block bg-[#c1121f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a10f1a] transition"
  >
    Book Appointment
  </a>

  <a href="/">
    <img
      src="/logotype.png"
      alt="Punch Barber Shop"
      className="w-56 md:w-72 mx-auto mt-14 object-contain hover:opacity-80 transition duration-200"
    />
  </a>

</section>
    </main>
  );
}