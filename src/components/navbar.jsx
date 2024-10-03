import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Eustache Kamala</div>
        <div className="flex space-x-6">
          {/* Mobile Icons Only */}
          <Link to="/" className="flex items-center space-x-1 md:hidden">
            <FaHome />
          </Link>
          <Link to="/About" className="flex items-center space-x-1 md:hidden">
            <FaUser />
          </Link>
          <Link to="/Projects" className="flex items-center space-x-1 md:hidden">
            <FaProjectDiagram />
          </Link>
          <Link to="/Contacts" className="flex items-center space-x-1 md:hidden">
            <FaEnvelope />
          </Link>

          {/* Desktop Text and Icons */}
          <Link to="/" className="hidden md:flex items-center hover:text-pink-500">
            <FaHome className="mr-1" /> Home
          </Link>
          <Link to="/About" className="hidden md:flex items-center hover:text-pink-500">
            <FaUser className="mr-1" /> About
          </Link>
          <Link to="/Projects" className="hidden md:flex items-center hover:text-pink-500">
            <FaProjectDiagram className="mr-1" /> Projects
          </Link>
          <Link to="/Contacts" className="hidden md:flex items-center hover:text-pink-500">
            <FaEnvelope className="mr-1" /> Contacts
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
