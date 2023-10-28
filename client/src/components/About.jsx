
export default function About() {
  return (
    <section id="about" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-16 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
            Welcome to <span className="text-purple-500">FitConnect</span>! 🏋️‍♂️ 🤝
          </h1>
          <p className="mb-8 text-lg leading-relaxed">
            At FitConnect, we believe in the power of personalized fitness
            journeys. We understand that finding the right personal trainer who
            resonates with your fitness goals and aspirations is crucial. That's
            why we've created a seamless platform that connects fitness
            enthusiasts like you with experienced and certified personal
            trainers.
            <br />
            <br />
            Our platform is designed to make fitness accessible and tailored to
            your unique needs. Whether you're a beginner looking to kick-start
            your fitness journey, an athlete striving for peak performance, or
            someone in between, we have a diverse team of dedicated personal
            trainers ready to guide you.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="/contact"
              className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded transition duration-300"
            >
              Contact us
            </a>
            <a
              href="/trainers"
              className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded transition duration-300"
            >
              Explore Trainers
            </a>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <img
            className="object-cover object-center rounded shadow-lg"
            alt="about"
            src="/about.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
