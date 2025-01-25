import Photo from "../assets/my.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between py-16 px-6 bg-gray-900 text-white"
    >
      {/* Left Content */}
      <div className="md:w-1/2 text-left">
        <h2 className="text-6xl font-bold text-white mb-4">
          Hello, I'm <span className="text-yellow-400">Baksi Suraj</span>
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          A results-driven{" "}
          <span className="text-yellow-400 font-bold">
            Full Stack Developer
          </span>{" "}
          and <span className="text-yellow-400 font-bold">UI/UX Designer</span>,
          dedicated to delivering user-friendly applications with exceptional
          performance and intuitive design.
        </p>

        {/* social links */}
        <div className="flex gap-4 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-2xl hover:scale-110 transition-transform"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-2xl hover:scale-110 transition-transform"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-2xl hover:scale-110 transition-transform"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-2xl hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>
        </div>
        <a
          href="#"
          className="inline-block bg-yellow-400 text-gray-800 px-6 py-2 rounded shadow hover:bg-yellow-500"
        >
          Download CV
        </a>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center relative">
        <div className="absolute w-100 h-100 rounded-full border-4 border-transparent neon-ring animate-spin"></div>
        <img
          src={Photo}
          alt="Suraj"
          className="w-100 h-100 object-top rounded-full shadow-lg"
        />
      </div>
    </section>
  );
}

export default Home;
