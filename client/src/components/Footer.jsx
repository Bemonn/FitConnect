import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/icon.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <Link to="/" className="text-3xl font-bold mb-4 flex items-center">
          <img src={logo} alt="FitConnect Logo" className="w-8 h-8 mr-2" />
          FitConnect
        </Link>
        <div className="md:ml-auto flex items-center space-x-4">
          <p className="text-gray-400">Phone: 123 456 7890</p>
          <p className="text-gray-400">Email: info@fitconnect.com</p>
          <p className="text-gray-400">Address: 123 Fitness Street, Gymtown</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
