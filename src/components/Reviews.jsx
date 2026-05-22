import AnimatedSection from "./AnimatedSection"

const reviews = [
  {
    name: "Rahul Fitness",
    review: "Amazing website design and fast delivery. Highly recommended."
  },
  {
    name: "Royal Hotel",
    review: "Professional work with premium UI design."
  },
  {
    name: "Foodie Restaurant",
    review: "Responsive website and excellent support service."
  }
]

function Reviews() {
  return (
     <AnimatedSection>

    <section id="reviews" className="py-24 px-6">

      <h2 className="text-4xl font-bold text-center mb-6">
        Client Reviews
      </h2>

      {/* Submit Review Button */}
      <div className="text-center mb-14">
        <a
          href="https://forms.gle/SS6D4TEUeVcFhy2W7"
          target="_blank"
          className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition inline-block"
          >
          Submit Review
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((item, index) => (
          <div
          key={index}
          className="bg-[#111827] p-8 rounded-2xl border border-gray-800 hover:border-cyan-400 transition"
          >
            <p className="text-gray-300 italic">
              “{item.review}”
            </p>

            <h3 className="mt-6 text-cyan-400 font-bold text-lg">
              — {item.name}
            </h3>
          </div>
        ))}
      </div>

    </section>
  </AnimatedSection>
  )
}

export default Reviews