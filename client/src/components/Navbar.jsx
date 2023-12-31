import { Link } from "react-router-dom";

export default function Navbar() {
  // Simulated authentication check
  const isAuthenticated = !!localStorage.getItem('id_token');

  const handleDashboardClick = () => {
    if (!isAuthenticated) {
      window.location.href = "/login";
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('id_token');
    window.location.href = "/login";
  };

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="title-font text-purple-500 font-extrabold text-4xl text-white mb-4 md:mb-0 ml-3"
        >
          FitConnect
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="/#trainers" className="mr-5 hover:text-white">
            Trainers
          </a>
          <a href="/#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="/#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
          <a href="/#contact" className="mr-5 hover:text-white">
            Contact Us
          </a>
          <a href="/booking" className="mr-5 hover:text-white">
            Book Now
          </a>
          <Link 
            to={isAuthenticated ? "/dashboard" : "/login"} 
            onClick={handleDashboardClick}
            className="mr-5 hover:text-white"
          >
            Dashboard
          </Link>
        </nav>
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-white cursor-pointer"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover-bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            Log In / Sign Up
          </Link>
        )}
      </div>
    </header>
  );
}