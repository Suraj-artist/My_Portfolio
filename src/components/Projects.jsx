import tuition from '../assets/tuition.png'
import ecommerce from  '../assets/ecommerce.png'
import realestate from '../assets/realestate.png'
function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">
          Latest Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
            <img
              src={tuition}
              alt="Gruhapandit Tuition Platform"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Gruhapandit Tuition Platform
              </h3>
              <p className="text-gray-600 mb-4">
                A tuition platform connecting students and tutors with
                responsive UI and real-time matching.
              </p>
              <a
                href="https://gruhapandittuitions.com/"
                src=""
                className="block text-yellow-500 font-medium hover:underline"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
            <img
              src={realestate}
              alt="Real Estate Management System"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Real Estate Management System
              </h3>
              <p className="text-gray-600 mb-4">
                A professional platform showcasing real estate projects with
                detailed service overviews.
              </p>
              <a
                href="#"
                className="block text-yellow-500 font-medium hover:underline"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
            <img
              src={ecommerce}
              alt="E-Commerce Platform"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
              <p className="text-gray-600 mb-4">
                Designed user-friendly wireframes for an eCommerce website using
                Figma.
              </p>
              <a
                href="#"
                className="block text-yellow-500 font-medium hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
