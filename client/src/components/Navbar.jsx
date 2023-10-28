import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/about"
          className="title-font text-purple-500 font-extrabold text-4xl text-white mb-4 md:mb-0 ml-3"
        >
          FitConnect
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <Link to="/trainers" className="mr-5 hover:text-white">
            Trainers
          </Link>
          <Link to="/skills" className="mr-5 hover:text-white">
            Skills
          </Link>
          <Link to="/testimonials" className="mr-5 hover:text-white">
            Testimonials
          </Link>
          <Link to="/contact" className="mr-5 hover:text-white">
            Contact Us
          </Link>
        </nav>
        <Link
          to="/login"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Log In / Sign Up
        </Link>
      </div>
    </header>
  );
}
