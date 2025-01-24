import gsap from 'gsap';
import { useRef, useLayoutEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import About from '../components/about';
import Projects from '../components/projects';
import Blogs from '../components/blogs';

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
    <div className="relative bg-gray-950" ref={componentRef}>
      <Navbar />
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col  justify-center items-center bg-gray-950 text-center pt-20 md:pt-36 w-full md:w-2/5">
          <img
            src="eustache.jpg"
            alt="michel"
            className="w-56 h-56 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg"
          />
          <p className="text-2xl md:text-3xl text-white font-semibold py-8">
            Hi, I&apos;m Eustache Kamala
          </p>
        </div>

        <div
          id="welcome"
          className="flex flex-col py-8 justify-center items-center bg-gray-950 text-center pt-4 md:pt-36 w-full md:w-3/5"
        >
          <p className="text-base sm:text-lg md:text-2xl mb-4 text-gray-100 font-spaceGrotesk">
            A Full-Stack Engineer with a passion for building scalable and user-friendly applications.
            I&apos;m excited to bring my expertise to the tech industry and contribute to the growth of the industry.
          </p>
          <a
            href="./src/assets/Resume Eustache.pdf"
            download
            className="bg-pink-500 hover:bg-pink-400 text-white font-semibold py-2 px-4 rounded transition duration-300 shadow-md hover:shadow-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
      <About />
      <Projects />
      <Blogs />
      <Footer />
    </div>
  );
}

export default Home;
