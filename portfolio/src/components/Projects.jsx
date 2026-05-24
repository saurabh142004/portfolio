function Projects() {

  const projects = [

    {
      title: "Portfolio Website",

      description:
        "A modern responsive portfolio website built using React and Tailwind CSS.",

      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

      tech1: "React",
      tech2: "Tailwind",
    },

    {
      title: "Tracklet Inventory",

      description:
        "A micro SaaS inventory management application for tracking products and stock.",

      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4",

      tech1: "React",
      tech2: "Firebase",
    },

    {
      title: "Task Manager",

      description:
        "A clean productivity web app for managing daily tasks and workflow.",

      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",

      tech1: "React",
      tech2: "Tailwind",
    },

  ];

  return (
    <section
      id="projects"
      className="py-32 px-6 bg-gradient-to-b from-black via-zinc-950 to-black"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="text-violet-400 mb-4">
            My Work
          </p>

          <h2 className="text-5xl font-bold">
            Featured Projects
          </h2>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-zinc-950/60 border border-violet-500/20 rounded-[35px] overflow-hidden backdrop-blur-md hover:-translate-y-3 hover:border-violet-400 transition duration-300 shadow-[0_0_40px_rgba(139,92,246,0.08)]"
            >

              {/* Image */}

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              {/* Content */}

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Tags */}

                <div className="flex gap-4 mb-8">

                  <span className="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm">
                    {project.tech1}
                  </span>

                  <span className="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm">
                    {project.tech2}
                  </span>

                </div>

                {/* Buttons */}

                <div className="flex gap-4">

                  <button className="bg-violet-500 hover:bg-violet-600 transition duration-300 px-5 py-3 rounded-xl font-semibold">
                    Live Demo
                  </button>

                  <button className="border border-violet-500/30 hover:border-violet-400 hover:bg-violet-500/10 transition duration-300 px-5 py-3 rounded-xl">
                    GitHub
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    
    <p className="text-sm text-violet-300/70 mt-6 text-center">
      Note: Some live project demos are temporarily unavailable and will be restored soon. Thank you.
    </p>
    </section>
  );
}

export default Projects;