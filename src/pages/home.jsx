import gsap from 'gsap';
import { useRef, useLayoutEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import About from '../components/about';
import Projects from '../components/projects';

function Home() {
  const componentRef = useRef(null);

  useLayoutEffect(() => {
    const csx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from('#welcome', {
        opacity: 0,
        y: 20,
        duration: 1,
      });
    }, componentRef);

    return () => csx.revert();
  }, []);

  return (
    <div className="relative" ref={componentRef}>
      <Navbar />
      <div id="welcome" className="flex flex-col py-8 justify-center items-center bg-gray-950 text-center pt-36">
        <div className="h-44 w-44 mb-6 rounded-full overflow-hidden shadow-lg">
          <img
            className="h-full rounded-full w-full object-cover border-4 border-pink-500"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmh903RuvBCgjlWDeCFJehx7Xu6FJNu4ADCw&s"
            alt="portfolio_image"
          />
        </div>
        <p className="text-3xl text-white font-semibold py-4">I am a Full-Stack Engineer</p>
        <p className='text-lg sm:text-xl md:text-2xl p-4 mb-4 text-gray-100 font-spaceGrotesk'>
          As a full-stack engineer, I specialize in building seamless user experiences 
          and crafting scalable solutions with modern technologies. My agile approach 
          allows me to transform ideas into robust applications that empower businesses 
          with data-driven insights. I am passionate about code quality and continuous 
          learning, ensuring that I deliver exceptional results.
        </p>
         <a 
          href="./src/assets/Resume Eustache.docx"
          download
          className="bg-pink-500 hover:bg-pink-400 text-white font-semibold py-2 px-4 rounded transition duration-300 shadow-md hover:shadow-lg"
        >
          Download Resume
        </a>
      </div>
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
