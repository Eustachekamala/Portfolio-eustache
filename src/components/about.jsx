import { useSpring, animated } from 'react-spring';
function About() {
  const skills = [
    { name: 'Python', icon: 'https://img.icons8.com/color/48/000000/python--v1.png', level: 80 },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/000000/javascript--v1.png', level: 90 },
    { name: 'Flask', icon: 'https://img.icons8.com/ios-filled/50/FFFFFF/flask.png', level: 70 },
    { name: 'Tailwind', icon: 'https://img.icons8.com/color/48/000000/tailwindcss.png', level: 85 },
    { name: 'TypeScript', icon: 'https://img.icons8.com/color/48/000000/typescript.png', level: 75 },
    { name: 'Node.js', icon: 'https://img.icons8.com/color/48/000000/nodejs.png', level: 80 },
    { name: 'C++', icon: 'https://img.icons8.com/color/48/000000/c-plus-plus-logo.png', level: 60 },
    { name: 'HTML', icon: 'https://img.icons8.com/color/48/000000/html-5.png', level: 90 },
    { name: 'CSS', icon: 'https://img.icons8.com/color/48/000000/css3.png', level: 85 },
    { name: 'React', icon: 'https://img.icons8.com/color/48/000000/react-native.png', level: 85 },
    { name: 'Docker', icon: 'https://img.icons8.com/color/48/000000/docker.png', level: 75 },
    { name: 'Next.js', icon: 'https://img.icons8.com/color/48/000000/nextjs.png', level: 70 },
    { name: 'Java', icon: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png', level: 80 },
  ];

  const getColor = (level) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const animatedSkills = skills.map(skill => ({
    ...skill,
    // eslint-disable-next-line react-hooks/rules-of-hooks
    props: useSpring({ width: `${skill.level}%`, from: { width: '0%' } }),
  }));

  return (
    <>
      <div id="about"  className="flex flex-col pt-10 items-center justify-center text-white bg-gray-950">
        <h1  className='text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-10 mb-10'>
          About
        </h1>
        <div className="mt-10 w-11/12 pt-24 pb-24 border border-gray-600 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {animatedSkills.map((skill, index) => (
              <div key={index} className="flex items-center justify-center flex-col sm:flex-row">
                <label htmlFor={skill.name} className="flex items-center mb-2 sm:mb-0 w-full sm:w-1/3">
                  <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                  <span className=" ml-1 text-md">{skill.name}</span>
                </label>
                <div className="grow left-2 bg-gray-800 w-full h-3 rounded-full relative">
                  <div className="bg-gray-600 h-3 rounded-full" style={{ width: '100%' }} />
                  <animated.div
                    className={`${getColor(skill.level)} h-3 rounded-full transition-transform duration-300 absolute top-0 left-0`}
                    style={skill.props}
                    onMouseEnter={(e) => {
                      const percentage = e.currentTarget.querySelector('.percentage');
                      percentage.classList.remove('opacity-0');
                    }}
                    onMouseLeave={(e) => {
                      const percentage = e.currentTarget.querySelector('.percentage');
                      percentage.classList.add('opacity-0');
                    }}
                  />
                  <span className="absolute right-0 text-xs text-white pr-2 percentage opacity-0 transition-opacity duration-300">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
