function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-gradient-to-b from-black via-zinc-950 to-black"
    >

      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}

        <div className="text-center mb-20">

          <p className="text-violet-400 mb-4">
            About Me
          </p>

          <h2 className="text-5xl font-bold">
            Passionate Frontend Developer
          </h2>

        </div>

        {/* About Card */}

        <div className="grid md:grid-cols-2 gap-12 items-center bg-zinc-950/60 border border-violet-500/20 rounded-[40px] p-10 shadow-[0_0_80px_rgba(139,92,246,0.08)] backdrop-blur-md">

          {/* Left Side */}

          <div>

            <h3 className="text-3xl font-bold mb-6">
              Building clean and modern web experiences.
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              I am a frontend developer focused on creating
              responsive, user-friendly, and visually modern
              web applications using React and Tailwind CSS.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I enjoy building smooth UI experiences,
              improving design systems, and learning modern
              frontend technologies.
            </p>

          </div>

          {/* Right Side */}

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-black/40 border border-violet-500/20 rounded-3xl p-6 text-center">

              <h3 className="text-4xl font-bold text-violet-400 mb-2">
                5+
              </h3>

              <p className="text-gray-400">
                Projects
              </p>

            </div>

            <div className="bg-black/40 border border-violet-500/20 rounded-3xl p-6 text-center">

              <h3 className="text-4xl font-bold text-violet-400 mb-2">
                2+
              </h3>

              <p className="text-gray-400">
                Years Learning
              </p>

            </div>

            <div className="bg-black/40 border border-violet-500/20 rounded-3xl p-6 text-center">

              <h3 className="text-4xl font-bold text-violet-400 mb-2">
                100%
              </h3>

              <p className="text-gray-400">
                Responsive
              </p>

            </div>

            <div className="bg-black/40 border border-violet-500/20 rounded-3xl p-6 text-center">

              <h3 className="text-4xl font-bold text-violet-400 mb-2">
                UI/UX
              </h3>

              <p className="text-gray-400">
                Modern Design
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;