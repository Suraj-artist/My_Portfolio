import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between py-10 px-4 sm:py-12 sm:px-6 bg-gray-900 text-white"
    >
      {/* Top Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>

      {/* Content Section */}
      <div className="w-full sm:w-5/6 md:w-3/4 bg-white text-gray-800 rounded-lg shadow-xl p-6 sm:p-8 mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center text-indigo-900">
          About Me
        </h2>
        <p className="leading-relaxed text-base sm:text-lg text-center sm:text-left">
          I am a{" "}
          <span className="text-yellow-400 font-semibold">
            Full Stack Developer
          </span>{" "}
          and{" "}
          <span className="text-yellow-400 font-semibold">UI/UX Designer</span>{" "}
          with a background in{" "}
          <span className="text-yellow-400 font-semibold">
            Electronics and Communication Engineering
          </span>
          . Passionate about transforming ideas into impactful digital
          solutions, I specialize in building scalable, user-friendly web
          applications that merge functionality with aesthetics.
        </p>
        <p className="leading-relaxed text-base sm:text-lg mt-4 text-center sm:text-left">
          From developing robust back-end systems using{" "}
          <span className="text-yellow-400 font-semibold">Spring Boot</span> and{" "}
          <span className="text-yellow-400 font-semibold">REST APIs</span> to
          designing intuitive interfaces with{" "}
          <span className="text-yellow-400 font-semibold">React.js</span> and{" "}
          <span className="text-yellow-400 font-semibold">Figma</span>, I thrive
          on delivering high-quality solutions in collaborative and agile
          environments.
        </p>
        <p className="leading-relaxed text-base sm:text-lg mt-4 text-center sm:text-left">
          With a strong foundation in modern technologies, I am dedicated to
          driving digital innovation and crafting experiences that leave a
          lasting impact.
        </p>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"></div>
    </section>
  );
};

export default About;
