import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-5">
        <div className="text-center mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Why Choose FitConnect 💪✨
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            We understand that every fitness journey is different. Our trainers
            take the time to understand your goals, preferences, and limitations
            to create a customized fitness plan just for you.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill, index) => (
            <div key={index} className="p-2 sm:w-1/2 w-full">
              <div className="bg-purple-700 rounded p-6 h-full text-center">
                <span className="text-xl font-medium">{skill} 💪</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
