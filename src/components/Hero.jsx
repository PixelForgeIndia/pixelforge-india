import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center">

      <div>

        {/* Small Badge */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-block px-5 py-2 rounded-full border border-cyan-400 text-cyan-400 mb-8"
        >
          Premium Website Agency
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-black leading-tight"
        >
          We Build
          <span className="text-cyan-400"> Premium </span>
          Websites
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="max-w-2xl mx-auto mt-8 text-gray-400 text-lg leading-8"
        >
          Modern websites for businesses, gyms, hotels, restaurants and startups
          with premium UI/UX and powerful performance.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex gap-5 justify-center mt-12 flex-wrap"
        >

          <a
            href="#portfolio"
            className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-700 px-8 py-4 rounded-2xl hover:border-cyan-400 transition"
          >
            Contact Us
          </a>

        </motion.div>

      </div>

    </section>
  )
}

export default Hero