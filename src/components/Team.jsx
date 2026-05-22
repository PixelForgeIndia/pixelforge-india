const teamMembers = [
  {
    name: "Amit Nagore",
    role: "Frontend Developer & System Programmer",
    image: "/team/amit.jpg",
    color: "cyan",
    description: [
      "Skilled in C++, Operating Systems, OOP, DSA, Firebase and modern frontend development.",
      "Built advanced projects like a Memory Management Simulator and Blood Bank Management System with real-time features and modern UI.",
      "Solved 400+ DSA problems across GeeksforGeeks and LeetCode with strong debugging and problem-solving skills.",
    ],
    skills: ["React", "Firebase", "C++", "DSA", "OS"],
  },
  {
    name: "Tejas Bhise",
    role: "AI & Backend Developer",
    image: "/team/tejas.jpg",
    color: "purple",
    description: [
      "Specialized in AI-powered applications, FastAPI, WebSockets, real-time systems and scalable backend architectures.",
      "Built advanced AI platforms using LLM APIs, Redis, PostgreSQL and structured AI workflows for production-ready systems.",
      "Experienced in building intelligent automation systems and real-time backend infrastructures for modern applications.",
    ],
    skills: ["Python", "FastAPI", "AI/ML", "LLM APIs", "WebSockets"],
  },
];

function Team() {
  return (
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
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`bg-[#111827] border border-gray-800 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-${member.color}-500 hover:shadow-2xl`}
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={member.image}
                alt={member.name}
                className={`w-40 h-40 rounded-full object-cover border-4 border-${member.color}-500 shadow-lg hover:scale-105 transition duration-300`}
              />

              <h3
                className={`text-3xl font-bold mt-6 text-${member.color}-400`}
              >
                {member.name}
              </h3>

              <p className="text-gray-400 mt-2 text-lg">
                {member.role}
              </p>
            </div>

            <div className="mt-8 space-y-4 text-gray-300 leading-7">
              {member.description.map((text, i) => (
                <p key={i}>{text}</p>
              ))}

              <div className="pt-4">
                <h4
                  className={`text-${member.color}-400 font-bold mb-3 text-xl`}
                >
                  Expertise
                </h4>

                <div className="flex flex-wrap gap-3">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`bg-${member.color}-500/10 text-${member.color}-400 px-4 py-2 rounded-full`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;