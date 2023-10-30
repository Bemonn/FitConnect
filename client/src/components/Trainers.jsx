import { trainers } from "../data";

export default function Trainers() {
  return (
    <section
      id="trainers"
      className="bg-gray-900 text-white py-20 flex flex-col justify-center items-center"
    >
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide text-center">
          Meet Our Trainers
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-center">
          🏋️‍♂️ Our trainers are certified experts in their respective fields,
          ensuring you receive top-notch guidance and support during your
          workouts.
        </p>
        <div className="flex flex-wrap -m-4 justify-center items-center">
          {trainers.map((trainer) => (
            <div key={trainer.image} className="sm:w-1/2 w-full p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded"
                  src={trainer.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-500 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {trainer.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {trainer.title}
                  </h1>
                  <p className="leading-relaxed">{trainer.description}</p>
                  <br />
                  <ul className="list-disc">
                    <li> {trainer.expertise}</li>
                    <li> {trainer.certificate}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}