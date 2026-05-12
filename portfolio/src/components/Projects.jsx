const projects = [
  {
    title: "Portfolio Website",
    description:
      "Modern responsive portfolio website built using React and Tailwind CSS.",
    tech: "React • Tailwind CSS",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Tracklet",
    description:
      "Micro-SaaS inventory management platform with clean dashboard UI.",
    tech: "React • Tailwind CSS",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Landing Page",
    description:
      "Responsive landing page with modern UI and smooth user experience.",
    tech: "HTML • CSS • JavaScript",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-950 rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                <p className="text-cyan-400 mb-6">
                  {project.tech}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">

                  <button className="bg-cyan-400 text-black px-5 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300">
                    Live Demo
                  </button>

                  <button className="border border-cyan-400 text-cyan-400 px-5 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition duration-300">
                    GitHub
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;