function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="about"
              className="rounded-3xl shadow-2xl hover:scale-105 transition duration-300"
            />
          </div>

          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I am a frontend developer passionate about creating
              modern, responsive and user-friendly websites using
              React and Tailwind CSS.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I enjoy building clean UI designs, improving user
              experience and continuously learning modern web
              technologies.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;