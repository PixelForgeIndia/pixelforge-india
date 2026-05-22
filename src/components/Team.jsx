import AnimatedSection from "./AnimatedSection"

function Team() {
  return (
     <AnimatedSection>

    <section
      id="team"
      className="py-24 px-6 bg-gradient-to-b from-black to-[#0f172a]"
      >
      <h2 className="text-5xl font-bold text-center mb-5">
        Meet The Team
      </h2>

      <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
        The developers behind PixelForge India — focused on building modern,
        scalable and premium business websites with powerful backend systems
        and clean user experiences.
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">

        {/* Amit */}
        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300">

          <div className="flex flex-col items-center text-center">

            <img
              src="/team/amit.jpg"
              alt="Amit Nagore"
              className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 shadow-lg shadow-cyan-500/20"
              />

            <h3 className="text-3xl font-bold mt-6 text-cyan-400">
              Amit Nagore
            </h3>

            <p className="text-gray-400 mt-2 text-lg">
              Frontend Developer & System Programmer
            </p>

          </div>

          <div className="mt-8 space-y-4 text-gray-300 leading-7">

            <p>
              Skilled in C++, Operating Systems, OOP, DSA, Firebase and modern
              frontend development.
            </p>

            <p>
              Built advanced projects like a Memory Management Simulator and
              Blood Bank Management System with real-time features and modern UI.
            </p>

            <p>
              Solved 400+ DSA problems across GeeksforGeeks and LeetCode with
              strong debugging and problem-solving skills.
            </p>

            <div className="pt-4">
              <h4 className="text-cyan-400 font-bold mb-3 text-xl">
                Expertise
              </h4>
              <a
                  href="/resume/amit-resume.pdf"
                  target="_blank"
                  className="inline-block mt-8 bg-cyan-400 text-black px-6 py-3 my-3 rounded-xl font-bold hover:scale-105 transition">
                  View Resume
                </a>

              <div className="flex flex-wrap gap-3">

                <span className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full">
                  React
                </span>

                <span className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full">
                  Firebase
                </span>

                <span className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full">
                  C++
                </span>

                <span className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full">
                  DSA
                </span>

                <span className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full">
                  OS
                </span>

              </div>
            </div>

          </div>

        </div>

        {/* Tejas */}
        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 hover:border-purple-500 transition duration-300">

          <div className="flex flex-col items-center text-center">

            <img
              src="/team/tejas.jpg"
              alt="Tejas Bhise"
              className="w-40 h-40 rounded-full object-cover border-4 border-purple-500 shadow-lg shadow-purple-500/20"
              />

            <h3 className="text-3xl font-bold mt-6 text-purple-400">
              Tejas Bhise
            </h3>

            <p className="text-gray-400 mt-2 text-lg">
              AI & Backend Developer
            </p>

          </div>

          <div className="mt-8 space-y-4 text-gray-300 leading-7">

            <p>
              Specialized in AI-powered applications, FastAPI, WebSockets,
              real-time systems and scalable backend architectures.
            </p>

            <p>
              Built advanced AI platforms using LLM APIs, Redis,
              PostgreSQL and structured AI workflows for production-ready systems.
            </p>

            <p>
              Experienced in building intelligent automation systems and
              real-time backend infrastructures for modern applications.
            </p>

            <div className="pt-4">
              <h4 className="text-purple-400 font-bold mb-3 text-xl">
                Expertise
              </h4>
                <div className="pt-6">
                  <a
                    href="/resume/tejas-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-purple-500 my-3 hover:bg-purple-400 text-black font-semibold px-6 py-3 rounded-xl transition duration-300">
                    View Resume
                  </a>
                </div>
              

              <div className="flex flex-wrap gap-3">

                <span className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full">
                  Python
                </span>

                <span className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full">
                  FastAPI
                </span>

                <span className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full">
                  AI/ML
                </span>

                <span className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full">
                  LLM APIs
                </span>

                <span className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full">
                  WebSockets
                </span>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
    </AnimatedSection>
  )
}

export default Team