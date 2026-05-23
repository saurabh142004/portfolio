import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm(
        "service_dvl8cni",
        "template_l8yhik6",
        form.current,
        "qY8WUSmST-92rj7pn"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },

        () => {
          alert("Failed to send message.");
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 bg-gradient-to-b from-black via-zinc-950 to-black"
    >

      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="text-violet-400 mb-4">
            Contact Me
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Let’s Work Together
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project idea or want to collaborate?
            Feel free to send me a message.
          </p>

        </div>

        {/* Form Card */}

        <div className="bg-zinc-950/60 border border-violet-500/20 rounded-[40px] p-10 md:p-14 backdrop-blur-md shadow-[0_0_80px_rgba(139,92,246,0.08)]">

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-8"
          >

            {/* Name */}

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="bg-black/40 border border-violet-500/20 rounded-2xl p-5 outline-none focus:border-violet-400 transition duration-300"
            />

            {/* Email */}

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="bg-black/40 border border-violet-500/20 rounded-2xl p-5 outline-none focus:border-violet-400 transition duration-300"
            />

            {/* Message */}

            <textarea
              name="message"
              placeholder="Your Message"
              rows="7"
              required
              className="bg-black/40 border border-violet-500/20 rounded-2xl p-5 outline-none focus:border-violet-400 transition duration-300"
            ></textarea>

            {/* Button */}

            <button
              type="submit"
              className="bg-violet-500 hover:bg-violet-600 transition duration-300 rounded-2xl py-5 font-semibold text-lg shadow-lg hover:scale-[1.02]"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;