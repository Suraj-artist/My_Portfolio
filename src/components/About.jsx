function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between py-16 px-6  bg-gray-900 text-white"
    >
      {/* Top Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>

      {/* Content Section */}
      <div className="md:w-3/4 bg-white text-gray-800 rounded-lg shadow-xl p-8 mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-6 text-center text-indigo-900">
          About Me
        </h2>
        <p className="leading-relaxed text-lg text-center md:text-left">
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
        <p className="leading-relaxed text-lg mt-4 text-center md:text-left">
          From developing robust back-end systems using{" "}
          <span className="text-yellow-400 font-semibold">Spring Boot</span> and{" "}
          <span className="text-yellow-400 font-semibold">REST APIs</span> to
          designing intuitive interfaces with{" "}
          <span className="text-yellow-400 font-semibold">React.js</span> and{" "}
          <span className="text-yellow-400 font-semibold">Figma</span>, I thrive
          on delivering high-quality solutions in collaborative and agile
          environments.
        </p>
        <p className="leading-relaxed text-lg mt-4 text-center md:text-left">
          With a strong foundation in modern technologies, I am dedicated to
          driving digital innovation and crafting experiences that leave a
          lasting impact.
        </p>
      </div>
      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"></div>
    </section>
  );
}

export default About;
