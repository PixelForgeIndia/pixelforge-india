import AnimatedSection from "./AnimatedSection"

const services = [
  "Gym Websites",
  "Hotel Websites",
  "Store Websites",
  "Restaurant Websites",
  "Portfolio Websites",
  "Business Landing Pages"
]

function Services() {
  return (
  <AnimatedSection>
    <section id="services" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-14">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#0f172a] p-8 rounded-2xl border border-gray-800 hover:border-cyan-400 transition"
          >
            <h3 className="text-2xl font-semibold text-cyan-400">
              {service}
            </h3>

            <p className="mt-4 text-gray-300">
              Modern responsive design with premium UI and fast performance.
            </p>
          </div>
        ))}
      </div>
    </section>
    </AnimatedSection>
  )
}

export default Services