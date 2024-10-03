import gsap from 'gsap';
import { useRef, useLayoutEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

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
      <div className="h-screen flex flex-col justify-center items-center bg-gray-950 text-center pt-16">
        <h1 
          id="welcome" 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-100 font-spaceGrotesk"
        >
          Welcome. I am <span className="text-pink-500">Eustache</span>
        </h1>
        <p className='text-lg sm:text-xl md:text-2xl p-4 text-gray-100 font-spaceGrotesk'>
          As a full-stack engineer, I specialize in building seamless user experiences 
          and crafting scalable solutions with modern technologies. My agile approach 
          allows me to transform ideas into robust applications that empower businesses 
          with data-driven insights. I am passionate about code quality and continuous 
          learning, ensuring that I deliver exceptional results.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;