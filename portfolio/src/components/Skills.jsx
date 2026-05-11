const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Git",
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-2xl text-center hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-400">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;