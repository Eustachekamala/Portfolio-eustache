function About() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-white bg-gray-950">
      <div className="h-44 w-44">
        <img
          className="border-2 border-pink-500 rounded-full h-full w-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmh903RuvBCgjlWDeCFJehx7Xu6FJNu4ADCw&s"
          alt="portfolio_image"
        />
      </div>
      <p className="text-3xl py-4">I am a web developer</p>
      
      <a 
        href="./src/assets/Resume Eustache.docx"
        download
        className="mt-6 bg-pink-500 hover:bg-pink-400 text-white font-semibold py-2 px-4 rounded transition duration-300"
      >
        Download Resume
      </a>
    </div>
  );
}

export default About;
