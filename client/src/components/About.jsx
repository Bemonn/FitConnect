export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Welcome to FitConnect! 🏋️‍♂️ 🤝
          </h1>
          <p className="mb-8 leading-relaxed">
            At FitConnect, we believe in the power of personalized fitness
            journeys. We understand that finding the right personal trainer who
            resonates with your fitness goals and aspirations is crucial. Thats
            why weve created a seamless platform that connects fitness
            enthusiasts like you with experienced and certified personal
            trainers.
            <br></br>
            Our platform is designed to make fitness accessible and tailored to
            your unique needs. Whether youre a beginner looking to kick-start
            your fitness journey, an athlete striving for peak performance, or
            someone in between, we have a diverse team of dedicated personal
            trainers ready to guide you.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contact us
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Check out our trainers
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="about"
            src="/about.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
