import AnimatedSection from "./AnimatedSection"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

const reviews = [
  {
    name: "Rahul Sharma",
    business: "Fitness Hub",
    email: "rahul@gmail.com",
    rating: 5,
    review: "Amazing website design and fast delivery. Highly recommended."
  },
  {
    name: "Amit Verma",
    business: "Royal Hotel",
    email: "amit@hotel.com",
    rating: 4,
    review: "Professional work with premium UI design."
  },
  {
    name: "Sneha Patil",
    business: "Foodie Restaurant",
    email: "sneha@foodie.com",
    rating: 5,
    review: "Responsive website and excellent support service."
  }
]

// ⭐ Rating component
const Stars = ({ rating }) => {
  return (
    <div className="flex gap-1 text-yellow-400 text-lg mt-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  )
}

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

        {/* Carousel */}
        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            loop={true}
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#111827] p-10 rounded-2xl border border-gray-800 text-center">

                  <p className="text-gray-300 italic text-lg">
                    “{item.review}”
                  </p>

                  <Stars rating={item.rating} />

                  <h3 className="mt-6 text-cyan-400 font-bold text-xl">
                    {item.name}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {item.business}
                  </p>

                  <p className="text-gray-500 text-xs mt-1">
                    {item.email}
                  </p>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </section>
    </AnimatedSection>
  )
}

export default Reviews