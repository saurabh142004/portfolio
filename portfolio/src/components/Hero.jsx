function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-cyan-400 text-lg mb-4">
            Frontend Developer
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            Building clean modern web experiences.
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            I create responsive websites using React and Tailwind CSS.
          </p>

          <div className="flex gap-4">
            <button className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300">
              View Projects
            </button>

            <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition duration-300">
              Contact Me
            </button>
          </div>
        </div>

        <div className="rounded-3xl shadow-2xl hover:scale-105 transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="developer"
            className="w-full max-w-md rounded-3xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;