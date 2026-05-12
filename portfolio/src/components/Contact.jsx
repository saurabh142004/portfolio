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
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-12">
          Let’s work together and build something amazing.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-6"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="bg-slate-900 p-4 rounded-xl outline-none"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="bg-slate-900 p-4 rounded-xl outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
            className="bg-slate-900 p-4 rounded-xl outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-cyan-400 text-black py-4 rounded-xl font-semibold hover:scale-105 transition duration-300"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contact;