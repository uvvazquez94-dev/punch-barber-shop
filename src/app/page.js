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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1f3a] text-white">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 flex justify-center items-center px-6 py-4 bg-white border-b border-[#14253a]/10">
        <div className="flex gap-8 text-sm md:text-base font-semibold text-[#14253a]">
          <a href="/" className="hover:text-[#c1121f] transition">Home</a>
          <a href="#services" className="hover:text-[#c1121f] transition">Services</a>
          <a href="/about" className="hover:text-[#c1121f] transition">About</a>
          <a href="#contact" className="hover:text-[#c1121f] transition">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/storefront.jpg')] bg-cover bg-center opacity-35" />
        <div className="absolute inset-0 bg-[#0b1f3a]/75" />

        <div className="relative z-10">
          <motion.img
            src="/logo.png"
            alt="Punch Barber Shop logo"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto w-72 md:w-[420px] lg:w-[520px] mb-8"
          />

          <h2 className="text-2xl md:text-4xl font-medium tracking-wide leading-tight text-white">
            CLASSIC CUTS. MODERN STANDARDS.
          </h2>


          <div className="mt-10 flex justify-center gap-4">
            <a
              href="https://booksy.com"
              target="_blank"
              className="bg-[#c1121f] px-6 py-3 rounded-lg font-semibold hover:bg-[#a10f1a] transition duration-200"
            >
              Book Appointment
            </a>

            <a
              href="#services"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#0b1f3a] transition duration-200"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES TITLE */}
      <div id="services" className="bg-white py-16 px-6 text-center">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#0b1f3a]"
        >
          Services
        </motion.h3>
      </div>

      {/* GALLERY */}
      <div className="bg-white pb-24 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center mb-10">

            <div className="group w-full max-w-sm">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img src="/mens-cut.jpg" className="w-full object-cover transition duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
              </div>
            </div>

            <div className="group w-full max-w-sm">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img src="/kids-cut.jpg" className="w-full object-cover transition duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
              </div>
            </div>

            <div className="group w-full max-w-sm">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img src="/beard-cut.jpg" className="w-full object-cover transition duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
              </div>
            </div>

          </div>

          <div className="flex justify-center gap-8">

            <div className="group w-full max-w-sm">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img src="/lineup.jpg" className="w-full object-cover transition duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
              </div>
            </div>

            <div className="group w-full max-w-sm">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img src="/beard-only.jpg" className="w-full object-cover transition duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* PRICING */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-[#0b1f3a] py-16 px-6"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-6 text-white text-lg">

          <div className="flex items-end gap-3">
            <span>Men's Cut</span>
            <span className="flex-1 border-b border-dotted border-white/40"></span>
            <span>$30</span>
          </div>

          <div className="flex items-end gap-3">
            <span>Kids Cut - 12 & Under</span>
            <span className="flex-1 border-b border-dotted border-white/40"></span>
            <span>$26</span>
          </div>

          <div className="flex items-end gap-3">
            <span>Beard & Cut</span>
            <span className="flex-1 border-b border-dotted border-white/40"></span>
            <span>$37</span>
          </div>

          <div className="flex items-end gap-3">
            <span>Clean Up / Lining</span>
            <span className="flex-1 border-b border-dotted border-white/40"></span>
            <span>$15</span>
          </div>

          <div className="flex items-end gap-3 md:col-span-2 md:max-w-xl md:mx-auto md:w-full">
            <span>Beard Only</span>
            <span className="flex-1 border-b border-dotted border-white/40"></span>
            <span>$15</span>
          </div>

        </div>
      </motion.div>

      {/* DIVIDER */}
      <div className="bg-[#0b1f3a] py-12">
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="w-2/3 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>
        </div>
      </div>

      {/* ABOUT + CONTACT */}
      <section id="about" className="bg-[#0b1f3a] text-white py-24 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >

          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              About Punch
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              Punch Barber Shop of Glen Ellyn blends classic barbering with a clean,
              modern finish. Built for sharp cuts, reliable service, and a neighborhood
              shop experience.
            </p>
<a
  href="/about"
  className="inline-flex items-center gap-2 text-white font-medium hover:text-[#c1121f] transition mb-8"
>
  More About Punch
  <span className="text-lg">→</span>
</a>
            <div className="flex gap-4 mt-6">
              <a
                href="https://booksy.com"
                target="_blank"
                className="bg-[#c1121f] px-6 py-3 rounded-lg font-semibold hover:bg-[#a10f1a] transition"
              >
                Book Appointment
              </a>

              <a
                href="tel:16301890727"
                className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#0b1f3a] transition"
              >
                Call Now
              </a>
            </div>
          </div>

          <div
            id="contact"
            className="bg-white text-[#0b1f3a] rounded-2xl p-6 md:p-8 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <h4 className="text-2xl font-bold mb-6">Visit Us</h4>

                <p className="mb-4">
                  <a href="#" className="underline">
                    491 Pennsylvania Ave.<br />
                    Glen Ellyn, IL 60137
                  </a>
                </p>

                <p className="mb-4">
                  <span className="font-bold">Hours:</span><br />
                  Tues–Fri: 6 AM – 5 PM<br />
                  Saturday: 6 AM – 2 PM<br />
                  Sun–Mon: Closed
                </p>

                <p>
                  <span className="font-bold">Phone:</span><br />
                  (630) 189-0727
                </p>
              </div>

              <div className="w-full h-[250px] md:h-full rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=491+Pennsylvania+Ave+Glen+Ellyn&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>

            </div>
          </div>

        </motion.div>
      </section>

      {/* FOOTER LOGO */}
      <section className="bg-white py-12 px-6 text-center">
        <a href="#">
  <img
    src="/logotype.png"
    alt="Punch Barber Shop"
    className="w-56 md:w-72 mx-auto mb-4 hover:opacity-80 transition duration-200"
  />
</a>
        <p className="text-[#14253a]/70 text-xs tracking-wide">
          © 2024 Punch Barber Shop of Glen Ellyn. All Rights Reserved.
        </p>
      </section>

    </main>
  );
}