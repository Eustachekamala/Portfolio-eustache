import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          Eustache Kamala
        </div>
        <div className="flex space-x-6">
          <a href="#welcome" className="text-white hover:text-pink-500 transition duration-300 flex items-center">
            <FaHome className="w-5 h-5" />
            <span className="hidden md:inline ml-1">Home</span>
          </a>
          <a href="#about" className="text-white hover:text-pink-500 transition duration-300 flex items-center">
            <FaUser className="w-5 h-5" />
            <span className="hidden md:inline ml-1">About</span> 
          </a>
          <a href="#projects" className="text-white hover:text-pink-500 transition duration-300 flex items-center">
            <FaProjectDiagram className="w-5 h-5" />
            <span className="hidden md:inline ml-1">Projects</span> 
          </a>
          <a href="#contact" className="text-white hover:text-pink-500 transition duration-300 flex items-center">
            <FaEnvelope className="w-5 h-5" />
            <span className="hidden md:inline ml-1">Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
