import AnimatedSection from "./AnimatedSection"

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹4,999",
      desc: "Best for personal or small landing pages",
      features: [
        "1 Page Website",
        "Responsive Design",
        "Basic SEO Setup",
        "Contact Form",
      ],
      highlight: false,
    },
    {
      name: "Business",
      price: "₹9,999",
      desc: "Perfect for small businesses & startups",
      features: [
        "Up to 5 Pages",
        "Modern UI Design",
        "WhatsApp Integration",
        "SEO Optimized",
        "Fast Loading Website",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      price: "₹19,999",
      desc: "Full professional website for brands",
      features: [
        "Full Website (10+ Pages)",
        "Admin-like UI Sections",
        "Advanced Animations",
        "Priority Support",
        "Custom Features",
      ],
      highlight: false,
    },
  ]

  return (
    <AnimatedSection>
      <section id="pricing" className="py-28 px-6 bg-[#0a0f1f] text-white">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Pricing Plans
        </h2>

        <p className="text-gray-400 text-center mb-12">
          Choose the plan that fits your business
        </p>

        {/* CARDS */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border transition hover:scale-105 duration-300
              ${
                plan.highlight
                  ? "border-cyan-400 bg-[#111827]"
                  : "border-gray-800 bg-[#111827]"
              }`}
            >

              {/* BADGE */}
              {plan.highlight && (
                <div className="text-cyan-400 text-sm font-bold mb-3">
                  ⭐ Most Popular
                </div>
              )}

              {/* NAME */}
              <h3 className="text-2xl font-bold">{plan.name}</h3>

              {/* PRICE */}
              <p className="text-3xl font-bold text-cyan-400 mt-3">
                {plan.price}
              </p>

              <p className="text-gray-400 mt-2 text-sm">
                {plan.desc}
              </p>

              {/* FEATURES */}
              <ul className="mt-6 space-y-2 text-gray-300 text-sm">
                {plan.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              {/* BUTTON */}
              <a
                href="#contact"
                className="block mt-6 text-center bg-cyan-400 text-black py-3 rounded-xl font-bold hover:scale-105 transition"
              >
                Get Started
              </a>

            </div>
          ))}

        </div>
      </section>
    </AnimatedSection>
  )
}

export default Pricing
