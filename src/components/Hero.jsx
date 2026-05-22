function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          We Build <span className="text-cyan-400">Modern Websites</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
          We create modern websites for gyms, stores, hotels,
          restaurants, and businesses.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="#portfolio"
            className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
          >
            View Work
          </a>

          <a
            href="https://wa.me/919730119052"
            target="_blank"
            className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero