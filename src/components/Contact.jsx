import AnimatedSection from "./AnimatedSection"

function Contact() {
  return (
    <AnimatedSection>
      <section id="contact" className="py-24 px-6 bg-[#0a0f1f] text-white">

        <h2 className="text-4xl font-bold text-center mb-4">
          Contact Us
        </h2>

        <p className="text-gray-400 text-center mb-12">
          Let’s build your business website together
        </p>

        {/* SPLIT CONTAINER */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE - FORM */}
          <div className="bg-[#111827] p-8 rounded-2xl border border-gray-800">

            <h3 className="text-2xl font-bold mb-6">
              Send Message
            </h3>

            <form
              action="https://formsubmit.co/pixelforgeindia24@gmail.com"
              method="POST"
              className="flex flex-col gap-4"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="p-4 rounded-xl bg-[#0a0f1f] border border-gray-700 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="p-4 rounded-xl bg-[#0a0f1f] border border-gray-700 outline-none"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="p-4 rounded-xl bg-[#0a0f1f] border border-gray-700 outline-none"
              ></textarea>

              <button className="bg-cyan-400 text-black py-3 rounded-xl font-bold hover:scale-105 transition">
                Send Message →
              </button>

            </form>

          </div>

          {/* RIGHT SIDE - WHATSAPP ONLY */}
          <div className="bg-[#111827] p-8 rounded-2xl border border-gray-800 flex flex-col justify-center items-center text-center">

            <h3 className="text-2xl font-bold mb-4 text-green-400">
              Chat on WhatsApp
            </h3>

            <p className="text-gray-400 mb-8">
              Get instant reply for your project requirement. We usually respond within minutes.
            </p>

            <a
              href="https://wa.me/919730119052"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition"
            >
              Open WhatsApp →
            </a>

          </div>

        </div>
      </section>
    </AnimatedSection>
  )
}

export default Contact