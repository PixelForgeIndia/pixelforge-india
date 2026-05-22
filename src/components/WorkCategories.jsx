import AnimatedSection from "./AnimatedSection"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const clientWorks = [
  {
  title: "Swarajya Fitness - Gym Website",
  subtitle: "Live Client Project Delivered Recently",
  image: "/gym-dashboard.png",
  link: "https://swarajya-fitness.vercel.app/",
  description:
    "Designed and developed a premium fitness website focused on user engagement and lead generation. The system is optimized for gym membership conversions, showcasing services, trainers, and pricing in a modern UI layout.",
  features: [
    "Conversion Optimized UI/UX",
    "Gym Membership Flow Design",
    "Trainer & Class Showcase",
    "Fast Performance (Vite + React)",
    "Fully Responsive Mobile Design",
  ],
},
  
]

function ClientWorkSlider() {
  return (
    <AnimatedSection>
      <section id="work-categories" className="py-28 px-6 bg-[#0a0f1f] text-white">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center mb-3">
          Recent Client Work
        </h2>

        <p className="text-center text-gray-400 mb-10">
          Real projects we delivered for clients
        </p>

        {/* SLIDER */}
        <div className="max-w-6xl mx-auto">

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            navigation
            loop={true}
          >

            {clientWorks.map((work, index) => (
              <SwiperSlide key={index}>

                <div className="grid md:grid-cols-2 gap-10 items-center bg-[#111827] p-8 rounded-2xl border border-gray-800 hover:border-cyan-400 transition">

                  {/* IMAGE */}
                  <div>
                    <img
                      src={work.image}
                      alt={work.title}
                      className="rounded-xl w-full h-[350px] object-cover border border-gray-700"
                    />
                  </div>

                  {/* CONTENT */}
                  <div>

                    <span className="text-cyan-400 text-sm font-semibold">
                      {work.subtitle}
                    </span>

                    <h3 className="text-3xl font-bold mt-2">
                      {work.title}
                    </h3>

                    <p className="text-gray-300 mt-4 leading-relaxed">
                      {work.description}
                    </p>

                    {/* FEATURES */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {work.features.map((f, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-gray-300"
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* LIVE LINK BUTTON */}
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-6 px-5 py-2 bg-cyan-400 text-black font-semibold rounded-lg hover:scale-105 transition"
                    >
                      Live Preview →
                    </a>

                  </div>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>
      </section>
    </AnimatedSection>
  )
}

export default ClientWorkSlider