import { useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import contact from "../assets/contact.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_eelbajk", // Your EmailJS service ID
        "template_kxp154b", // Your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Message from Contact Form", // Custom subject
        },
        "yRQccPqBKNQdbATq0" // Your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="relative py-16 bg-gray-900 text-gray-900">
      {/* Top Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-20 text-center text-yellow-400">
          Contact Me
        </h2>

        {/* Form with Graphics */}
        <div className="relative max-w-lg mx-auto bg-white p-8 mb-20 rounded-lg shadow-lg">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <img
              src={contact}
              alt="Contact Graphic"
              className="w-24 h-24 object-cover rounded-full shadow-lg"
            />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4 mt-10">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-yellow-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-yellow-500"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-yellow-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-500"
            >
              Submit
            </button>
          </form>

          {status && (
            <p
              className={`text-center mt-4 ${
                status.includes("success") ? "text-green-400" : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </div>

        {/* Social Media Links */}
        
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"></div>
    </section>
  );
}

export default Contact;
