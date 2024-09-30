import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { useRef, useLayoutEffect } from 'react';

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
    <div className='relative' ref={componentRef}>
        <div className='h-screen flex flex-col justify-center items-center bg-gray-950'>
          <h1 id='welcome' className='text-5xl sm:text-7xl lg:text-9xl font-bold text-gray-100 font-spaceGrotesk'>
            Welcome. I am <span className='text-pink-500'>Eustache</span>
          </h1>
          <button className='mt-10 bg-pink-500 text-white px-8 py-2 rounded-lg'>
            <Link to='/About'>
              <span className='text-xl sm:text-2xl lg:text-3xl font-bold'>
                About Me
              </span>
            </Link>
          </button>
        </div>
      </div>
      )
}

export default Home;