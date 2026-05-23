import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-violet-500/10 bg-black">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left */}

        <div>

          <h2 className="text-2xl font-bold text-violet-400 mb-2">
            Saurabh Uniyal
          </h2>

          <p className="text-gray-400">
            Frontend Developer
          </p>

        </div>

        {/* Socials */}

        <div className="flex gap-6 text-2xl text-gray-400">

          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-violet-400 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="hover:text-violet-400 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            className="hover:text-violet-400 transition duration-300"
          >
            <FaInstagram />
          </a>

        </div>

      </div>

      {/* Bottom */}

      <div className="text-center text-gray-500 mt-10 text-sm">
        © 2026 Saurabh Uniyal. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;