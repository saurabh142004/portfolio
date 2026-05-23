import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

function Skills() {

  const skills = [
    {
      icon: <FaHtml5 />,
      title: "HTML5",
    },

    {
      icon: <FaCss3Alt />,
      title: "CSS3",
    },

    {
      icon: <SiJavascript />,
      title: "JavaScript",
    },

    {
      icon: <FaReact />,
      title: "React",
    },

    {
      icon: <SiTailwindcss />,
      title: "Tailwind CSS",
    },

    {
      icon: <FaGithub />,
      title: "Git & GitHub",
    },
  ];

  return (
    <section
      id="skills"
      className="py-32 px-6 bg-gradient-to-b from-black via-zinc-950 to-black"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="text-violet-400 mb-4">
            My Skills
          </p>

          <h2 className="text-5xl font-bold">
            Technologies I Work With
          </h2>

        </div>

        {/* Skills Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="bg-zinc-950/60 border border-violet-500/20 rounded-3xl p-8 text-center backdrop-blur-md hover:-translate-y-2 hover:border-violet-400 transition duration-300 shadow-[0_0_40px_rgba(139,92,246,0.08)]"
            >

              <div className="text-5xl text-violet-400 mb-6 flex justify-center">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {skill.title}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;