import { FaGraduationCap } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";

function Education() {
  return (
    <section id="education" className="py-16  bg-gray-900">
    
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          <FaGraduationCap className="inline-block text-yellow-500 mr-2" /> Education
        </h2>
        <ul className="space-y-8">
          {/* B.Tech Education */}
          <li className="bg-white shadow-lg rounded-lg p-6 flex items-start gap-4">
            <FaGraduationCap className="text-yellow-500 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Bachelor of Technology in ECE
              </h3>
              <p className="text-gray-600">
                <span className="font-bold">Gurunanak Institute of Technology</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">2019 - 2023 | CGPA: 6.31</p>
            </div>
          </li>

          {/* Intermediate Education */}
          <li className="bg-white shadow-lg rounded-lg p-6 flex items-start gap-4">
            <MdSchool className="text-yellow-500 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Intermediate, MPC</h3>
              <p className="text-gray-600">
                <span className="font-bold">Narayana Junior College</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">2017 - 2019 | Percentage: 888/1000</p>
            </div>
          </li>

          {/* SSC Education */}
          <li className="bg-white shadow-lg rounded-lg p-6 flex items-start gap-4">
            <GiAchievement className="text-yellow-500 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Secondary School Certificate (SSC)</h3>
              <p className="text-gray-600">
                <span className="font-bold">Amaravathi Grammar High School</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">2017 | GPA: 9.5</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Education;
