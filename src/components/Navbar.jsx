import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { id: "services", name: "SERVICES" },
  { id: "portfolio", name: "PROJECTS" },
  { id: "work-categories", name: "CLIENT WORK" },
  { id: "reviews", name: "REVIEWS" },
  { id: "pricing", name: "PRICING" },
  { id: "contact", name: "CONTACT" },
]

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("services")

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 40)

      const scrollPosition = window.scrollY + 120

      NAV_LINKS.forEach((link) => {

        const section = document.getElementById(link.id)

        if (!section) return

        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  return (

    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500
        ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10 py-0"
            : "bg-black/30 backdrop-blur-md py-0"
        }
      `}
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          h-[58px]
          flex
          items-center
          justify-between
        "
      >

        {/* LOGO */}
        <a
          href="/"
          className="flex items-center"
        >

          <img
            src="/logo/logo.png"
            alt="PixelForge India"
            className="
              w-28
              md:w-36
              object-contain
              hover:scale-105
              transition-all
              duration-300
            "
          />

        </a>

        {/* DESKTOP NAV */}
        <div
          className="
            hidden
            lg:flex
            items-center
            gap-7
          "
        >

          {NAV_LINKS.map((link) => (

            <a
              key={link.id}
              href={`#${link.id}`}
              className={`
                relative
                text-[13px]
                font-semibold
                tracking-[0.18em]
                transition-all
                duration-300
                ${
                  activeSection === link.id
                    ? "text-cyan-400"
                    : "text-white hover:text-cyan-400"
                }
              `}
            >

              {link.name}

              {activeSection === link.id && (

                <motion.div
                  layoutId="navbar-indicator"
                  className="
                    absolute
                    left-0
                    -bottom-2
                    h-[2px]
                    w-full
                    bg-cyan-400
                    rounded-full
                  "
                />

              )}

            </a>

          ))}

        </div>

        {/* BUTTON */}
        <a
          href="#contact"
          className="
            hidden
            lg:flex
            items-center
            justify-center
            px-5
            py-2.5
            rounded-full
            bg-cyan-400
            text-black
            font-semibold
            text-sm
            hover:scale-105
            transition-all
            duration-300
          "
        >

          Let's Talk

        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            lg:hidden
            text-white
          "
        >

          {isOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}

        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="
              lg:hidden
              mt-3
              mx-4
              rounded-3xl
              border
              border-white/10
              bg-black/90
              backdrop-blur-2xl
              p-6
            "
          >

            <div
              className="
                flex
                flex-col
                gap-5
              "
            >

              {NAV_LINKS.map((link) => (

                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`
                    text-sm
                    font-semibold
                    tracking-wider
                    transition
                    ${
                      activeSection === link.id
                        ? "text-cyan-400"
                        : "text-white"
                    }
                  `}
                >

                  {link.name}

                </a>

              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="
                  mt-4
                  bg-cyan-400
                  text-black
                  text-center
                  py-3
                  rounded-xl
                  font-bold
                "
              >

                Contact Us

              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  )
}

export default Navbar