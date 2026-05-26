import { motion } from "framer-motion"
import {
  Check,
  Info,
} from "lucide-react"

import AnimatedSection from "./AnimatedSection"

function Pricing() {
  const plans = [
    {
      name: "Starter",
      marketPrice: "₹6,999",
      price: "₹2,999",
      desc: "Perfect for personal brands & small businesses starting online",
      button: "Get Started",
      features: [
        "1 Professional Website Page",
        "Mobile Friendly Design",
        "WhatsApp Contact Button",
        "Business Details & Contact Section",
        "Website Live Online For 1 Year",
        "7 Days Free Support",
      ],
      highlight: false,
    },
    {
      name: "Business",
      marketPrice: "₹12,999",
      price: "₹5,999",
      desc: "Best for gyms, cafes & growing local businesses",
      button: "Start Business Plan",
      features: [
        "Up To 5 Website Pages",
        "Modern Business Website Design",
        "Services, Gallery & About Sections",
        "WhatsApp & Google Maps Integration",
        "Faster & Smoother User Experience",
        "1 Month Free Support",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      marketPrice: "₹24,999",
      price: "₹14,999",
      desc: "Built for businesses that want a more premium online presence",
      button: "Upgrade To Premium",
      features: [
        "Up To 10 Custom Website Pages",
        "Fully Customized Premium Design",
        "Premium Animations & Visual Effects",
        "Inquiry & Customer Contact Forms",
        "Custom Domain Setup (.com/.in)",
        "3 Months Priority Support",
      ],
      dark: true,
    },
  ]

  const importantDetails = [
    {
      title: "One-time development cost",
      text: "Pricing shown above is a one-time website development cost unless discussed otherwise.",
    },
    {
      title: "Hosting & domain",
      text: "Hosting is included free for 1 year. Domain purchase and renewal charges are paid separately by the client.",
    },
    {
      title: "Future modifications",
      text: "Additional features, future updates or major design changes may increase project pricing.",
    },
    {
      title: "Backend systems",
      text: "Backend systems, dashboards or advanced custom functionality are not included unless discussed separately.",
    },
    {
      title: "Project timeline",
      text: "Project delivery timeline may vary depending on project scope and revision requirements.",
    },
    {
      title: "Website renewal",
      text: "Website renewal, maintenance or hosting after 1 year may require additional charges.",
    },
  ]

  return (
    <AnimatedSection>

      <section
        id="pricing"
        className="relative py-32 px-6 overflow-hidden"
      >

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div
            className="
              absolute
              top-[10%]
              left-[-5%]
              w-[500px]
              h-[500px]
              rounded-full
              bg-cyan-500/10
              blur-[120px]
            "
          />

          <div
            className="
              absolute
              bottom-[0%]
              right-[-5%]
              w-[400px]
              h-[400px]
              rounded-full
              bg-purple-500/10
              blur-[120px]
            "
          />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16">

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-400/[0.05]
                text-cyan-300
                text-sm
                font-semibold
                tracking-wide
                mb-6
              "
            >

              <div className="w-2 h-2 rounded-full bg-cyan-400" />

              Transparent Pricing

            </div>

            <h2
              className="
                text-[44px]
                md:text-[66px]
                font-black
                tracking-[-0.05em]
                leading-[0.95]
                text-white
                mb-5
              "
            >

              Premium Websites Without

              <br className="hidden sm:block" />

              <span className="text-cyan-400">
                {" "}Premium Agency Pricing
              </span>

            </h2>

            <p
              className="
                text-[18px]
                text-slate-400
                max-w-3xl
                mx-auto
                leading-[1.8]
                font-medium
                mb-6
              "
            >
              Premium website solutions crafted for startups,
              businesses and brands that want modern design,
              smooth performance and strong online presence.
            </p>

            <div
              className="
                flex
                flex-wrap
                justify-center
                items-center
                gap-x-4
                gap-y-2
                text-sm
                font-medium
                text-slate-500
              "
            >

              {[
                "No hidden charges",
                "Mobile responsive",
                "Fast delivery",
                "WhatsApp support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >

                  <Check
                    size={15}
                    className="text-cyan-400"
                  />

                  <span>{item}</span>

                </div>
              ))}

            </div>

          </div>

          {/* CARDS */}
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-3
              gap-8
              items-start
            "
          >

            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className={`
                  relative
                  rounded-[32px]
                  p-8
                  border
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  ${
                    plan.highlight
                      ? "bg-[#081225] border-cyan-400 shadow-[0_20px_60px_rgba(34,211,238,0.12)] lg:-mt-4"
                      : plan.dark
                      ? "bg-[#071018] border-slate-800"
                      : "bg-white/[0.03] border-white/10"
                  }
                `}
              >

                {/* POPULAR */}
                {plan.highlight && (
                  <div
                    className="
                      absolute
                      top-0
                      left-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                    "
                  >

                    <span
                      className="
                        inline-flex
                        items-center
                        rounded-full
                        bg-cyan-400
                        px-4
                        py-1
                        text-[11px]
                        font-black
                        uppercase
                        tracking-wide
                        text-[#041018]
                      "
                    >
                      Most Popular
                    </span>

                  </div>
                )}

                {/* TITLE */}
                <h3 className="text-[22px] font-bold mb-2 text-white">
                  {plan.name}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-sm
                    font-medium
                    mb-6
                    min-h-[40px]
                    text-slate-400
                  "
                >
                  {plan.desc}
                </p>

                {/* PRICE */}
                <div className="mb-8 space-y-2">

                  <div
                    className="
                      flex
                      justify-between
                      items-center
                      text-sm
                    "
                  >

                    <span className="text-slate-500 font-medium">
                      Typical market pricing
                    </span>

                    <span
                      className="
                        text-slate-500
                        line-through
                      "
                    >
                      {plan.marketPrice}
                    </span>

                  </div>

                  <div
                    className="
                      flex
                      justify-between
                      items-end
                      border-t
                      border-white/10
                      pt-3
                    "
                  >

                    <span
                      className="
                        text-xs
                        font-bold
                        text-cyan-400
                        uppercase
                        tracking-wider
                        mb-1
                      "
                    >
                      Our pricing
                    </span>

                    <span
                      className="
                        text-4xl
                        font-extrabold
                        tracking-tight
                        text-white
                      "
                    >
                      {plan.price}
                    </span>

                  </div>

                </div>

                {/* BUTTON */}
                <a
                  href="#contact"
                  className={`
                    block
                    w-full
                    py-3.5
                    px-6
                    text-center
                    rounded-xl
                    font-semibold
                    transition-all
                    duration-300
                    mb-8
                    ${
                      plan.highlight
                        ? "bg-cyan-400 hover:bg-cyan-300 text-[#041018]"
                        : plan.dark
                        ? "bg-white hover:bg-slate-100 text-slate-900"
                        : "bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/10"
                    }
                  `}
                >
                  {plan.button}
                </a>

                {/* FEATURES */}
                <ul className="space-y-4">

                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="
                        flex
                        items-start
                      "
                    >

                      <Check
                        className="
                          h-5
                          w-5
                          text-cyan-400
                          shrink-0
                          mr-3
                          mt-0.5
                        "
                        strokeWidth={2.5}
                      />

                      <span
                        className="
                          text-sm
                          font-medium
                          leading-relaxed
                          text-slate-300
                        "
                      >
                        {feature}
                      </span>

                    </li>
                  ))}

                </ul>

              </motion.div>
            ))}

          </div>

          {/* IMPORTANT DETAILS */}
          <div className="max-w-5xl mx-auto mt-16 md:mt-24">

            <div
              className="
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-6
                sm:p-8
              "
            >

              <h4
                className="
                  text-[18px]
                  font-bold
                  text-white
                  mb-8
                  flex
                  items-center
                  gap-3
                "
              >

                <Info
                  size={18}
                  className="text-cyan-400"
                />

                Important Details

              </h4>

              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-x-8
                  gap-y-5
                "
              >

                {importantDetails.map((item, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >

                    <div
                      className="
                        mt-2
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-cyan-400
                        shrink-0
                      "
                    />

                    <p
                      className="
                        text-sm
                        text-slate-400
                        leading-relaxed
                      "
                    >

                      <span className="font-semibold text-white">
                        {item.title}.
                      </span>{" "}

                      {item.text}

                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

    </AnimatedSection>
  )
}

export default Pricing