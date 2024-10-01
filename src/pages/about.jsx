import { FaPython, FaJs,FaNodeJs, FaCss3Alt, FaHtml5, FaReact, FaCode } from 'react-icons/fa';

function About() {
  const skills = [
    { name: 'Python', icon: <FaPython className="text-4xl" /> },
    { name: 'JavaScript', icon: <FaJs className="text-4xl" /> },
    { name: 'Flask', icon: <FaCode className="text-4xl" /> },
    { name: 'Tailwind CSS', icon: <FaCss3Alt className="text-4xl" /> },
    { name: 'TypeScript', icon: <FaCode className="text-4xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-4xl" /> },
    { name: 'C++', icon: <FaCode className="text-4xl" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-4xl" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-4xl" /> },
    { name: 'React', icon: <FaReact className="text-4xl" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col py-6 items-center justify-center text-white bg-gray-950">
      <div className="h-44 w-44 mb-6">
        <img
          className="border-4 border-pink-500 rounded-full h-full w-full object-cover shadow-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmh903RuvBCgjlWDeCFJehx7Xu6FJNu4ADCw&s"
          alt="portfolio_image"
        />
      </div>
      <p className="text-3xl font-semibold py-4">I am a Full-Stack Engineer</p>
      
      <a 
        href="./src/assets/Resume Eustache.docx"
        download
        className="mt-6 bg-pink-500 hover:bg-pink-400 text-white font-semibold py-2 px-4 rounded transition duration-300 shadow-md hover:shadow-lg"
      >
        Download Resume
      </a>

      <div className="mt-10 w-full max-w-5xl">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center bg-gray-800 p-4 rounded-lg transition-transform transform hover:scale-105 shadow-md hover:shadow-lg">
              {skill.icon}
              <span className="ml-4 text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
