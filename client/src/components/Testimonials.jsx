import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-5">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white text-center mb-12">
          Client Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-60 p-8 rounded">
                <p className="leading-relaxed mb-6 text-center">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-16 h-16 rounded-full object-cover object-center"
                  />
                  <div className="flex flex-col pl-4">
                    <span className="text-lg font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
