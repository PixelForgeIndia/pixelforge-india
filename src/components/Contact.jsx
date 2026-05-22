function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-8">
          Contact Us
        </h2>

        <p className="text-gray-300 mb-10">
          Let's build your business website.
        </p>

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
            className="p-4 rounded-xl bg-[#111827] border border-gray-700 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-4 rounded-xl bg-[#111827] border border-gray-700 outline-none"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="p-4 rounded-xl bg-[#111827] border border-gray-700 outline-none"
          ></textarea>

          <button className="bg-cyan-400 text-black py-4 rounded-xl font-bold hover:scale-105 transition">
            Send Message
          </button>

        </form>

      </div>
    </section>
  )
}

export default Contact