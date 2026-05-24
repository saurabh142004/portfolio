import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-violet-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-violet-400">
          Saurabh
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-white font-medium">
          <li>
            <a href="#home" className="hover:text-violet-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-violet-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-violet-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-violet-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-violet-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Download CV Button */}
        <a
          href="/cv.pdf"
          className="hidden md:block border border-violet-500 px-5 py-2 rounded-xl text-white hover:bg-violet-600 transition"
        >
          Download CV
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-violet-900 px-6 py-6">
          <ul className="flex flex-col gap-6 text-white text-lg">

            <li>
              <a href="#home" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#skills" onClick={() => setIsOpen(false)}>
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" onClick={() => setIsOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>

            <a
              href="/cv.pdf"
              className="bg-violet-600 text-center py-3 rounded-xl"
            >
              Download CV
            </a>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;