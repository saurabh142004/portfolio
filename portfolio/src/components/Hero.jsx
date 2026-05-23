import profile from "../assets/developer.png";

function Hero() {
  return (

    <section
      id="home"
      className="min-h-screen py-32 px-6 bg-gradient-to-b from-black via-zinc-950 to-black flex items-center"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Left Side */}

        <div className="text-center md:text-left">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 mb-8">

            <div className="w-2 h-2 rounded-full bg-violet-400"></div>

            Frontend Developer

          </div>

          {/* Heading */}

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-8">

            Hi, I'm
            <br />

            <span className="text-violet-400">
              Saurabh Uniyal
            </span>

          </h1>

          {/* Paragraph */}

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto md:mx-0">

            I build responsive and modern web applications
            with clean UI, smooth interactions, and premium
            user experiences using React and Tailwind CSS.

          </p>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">

            <a href="#projects">

              <button className="bg-violet-500 hover:bg-violet-600 transition duration-300 px-7 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105">

                View Projects

              </button>

            </a>

            <a href="#contact">

              <button className="border border-violet-500/30 hover:border-violet-400 hover:bg-violet-500/10 transition duration-300 px-7 py-4 rounded-2xl font-semibold">

                Contact Me

              </button>

            </a>

            <a href="/resume.pdf" download>

              <button className="border border-white/10 hover:border-violet-400 hover:bg-violet-500/10 transition duration-300 px-7 py-4 rounded-2xl font-semibold">

                Download CV

              </button>

            </a>

          </div>

        </div>

        {/* Right Side */}

        <div className="relative flex justify-center">

          {/* Glow */}

          <div className="absolute w-[350px] h-[350px] bg-violet-500/20 blur-[120px] rounded-full"></div>

          {/* Image */}

          <img
            src={profile}
            alt="Developer"
            className="relative w-full max-w-md rounded-[40px] border border-violet-500/20 shadow-[0_0_80px_rgba(139,92,246,0.2)]"
          />

        </div>

      </div>

    </section>

  );
}

export default Hero;