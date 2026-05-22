import project1 from "./project1.png";
import project2 from "./project2.png";
import project3 from "./project3.png";
import project4 from "./project4.png";

const projects = [
  {
    title: "Self Portfolio",
    image: project1,
    link: "https://tejas-bhise.vercel.app/",
  },
  {
    title: "pararambh",
    image: project2,
    link: "https://pararambh-frontend.vercel.app/",
  },
  {
    title: "SQL WEB",
    image: project3,
    link: "https://clarifaisql.vercel.app/",
  },{
    title: "Blood Bank Management System",
    image: project4,
    link: "https://blood-bank-management-sy-a4f48.web.app/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-[#0a0f1f]">
      <h2 className="text-4xl font-bold text-center mb-14">
        Our Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111827] rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-400 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-cyan-400"
              >
                Live Preview →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;