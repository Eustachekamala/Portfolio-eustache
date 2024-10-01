import { Link } from 'react-router-dom';
import NotFoundImage from '../assets/404.jpeg';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-950 text-white text-center p-4">
      <img 
        src={NotFoundImage} 
        alt="Not Found" 
        className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 mb-8 rounded-full"
      />
      <p className="text-xl sm:text-2xl mb-6">Page not found</p>
      <Link to="/" className="bg-pink-500 text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-pink-400">
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
