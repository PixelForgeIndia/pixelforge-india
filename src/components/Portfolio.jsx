import project1 from "./project1.png"
import project2 from "./project2.png"
import project3 from "./project3.png"
import project4 from "./project4.png"
import AnimatedSection from "./AnimatedSection"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"

import { useState } from "react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const projects = [
  {
    title: "ClarifySQL",
    image: project1,
    link: "https://clarifaisql.vercel.app/",
    tag: "ClarifaiSQL",
  },
  {
    title: "Saarthi",
    image: project2,
    link: "https://saarthi-ai-iota.vercel.app/",
    tag: "Saarthi AI",
  },
  {
    title: "SQL WEB",
    image: project3,
    link: "https://operis-ai.vercel.app/",
    tag: "AI + SQL Tool",
  },
  {
    title: "Blood Bank Management System",
    image: project4,
    link: "https://blood-bank-management-sy-a4f48.web.app/",
    tag: "Full Stack App",
  },
]

function Portfolio() {
  const [current, setCurrent] = useState(1)

  return (
    <AnimatedSection>
      <section id="portfolio" className="py-28 px-6 bg-[#0a0f1f] text-white">

        {/* HEADER */}
        <h2 className="text-5xl font-bold text-center mb-3">
          Projects
        </h2>

        <p className="text-center text-gray-400 mb-6">
          We build modern, high-performance websites for businesses
        </p>

        {/* COUNTER */}
        <div className="text-center mb-10">
          <span className="px-5 py-2 bg-gray-900 border border-gray-700 rounded-full text-cyan-400 text-sm">
            Project {current} / {projects.length}
          </span>
        </div>

        {/* NAV BUTTONS */}
        <div className="flex justify-end gap-4 mb-6 max-w-6xl mx-auto">

          <button className="portfolio-prev w-11 h-11 bg-gray-900 border border-gray-700 rounded-full hover:bg-cyan-500 hover:text-black transition">
            ←
          </button>

          <button className="portfolio-next w-11 h-11 bg-gray-900 border border-gray-700 rounded-full hover:bg-cyan-500 hover:text-black transition">
            →
          </button>

        </div>

        {/* SLIDER */}
        <div className="max-w-6xl mx-auto">

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".portfolio-prev",
              nextEl: ".portfolio-next",
            }}
            loop={true}
            onSlideChange={(swiper) => {
              setCurrent(swiper.realIndex + 1)
            }}
          >

            {projects.map((project, index) => (
              <SwiperSlide key={index}>

                <div className="relative group rounded-2xl overflow-hidden border border-gray-800 shadow-lg hover:shadow-cyan-500/20 transition">

                  {/* IMAGE */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                  {/* TAG */}
                  <span className="absolute top-4 left-4 bg-cyan-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {project.tag}
                  </span>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 p-6 w-full">

                    <h3 className="text-3xl font-bold mb-2">
                      {project.title}
                    </h3>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-4 py-2 bg-cyan-400 text-black font-semibold rounded-lg hover:scale-105 transition"
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

export default Portfolio