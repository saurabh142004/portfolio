function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/70 backdrop-blur-md border-b border-violet-500/20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-centern">

        <h1 className="text-2xl font-bold text-violet-400">
          Saurabh
        </h1>

        <ul className="flex gap-4 md:gap-8 text-sm md:text-base text-zinc-300">
          <li><a href="#home" className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-xl">Home</a></li>
          <li><a href="#about" className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-xl">About</a></li>
          <li><a href="#skills" className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-xl">Skills</a></li>
          <li><a href="#projects" className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-xl">Projects</a></li>
          <li><a href="#contact" className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-xl">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
