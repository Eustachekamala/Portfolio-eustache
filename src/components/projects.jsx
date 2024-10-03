function Projects() {
    return (
        <div id="projects"  className="bg-gray-950 min-h-screen pt-10 text-white p-4 flex flex-col justify-center items-center pb-16">
            <h1  className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-10 mb-10">
                Projects
            </h1>
            <div className="grid grid-cols-1 w-11/12 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                {Array.from({ length: 6 }, (_, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-4 flex flex-col justify-center items-center">
                        <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold mb-4">
                            Project {index + 1}
                        </h2>
                        <img 
                            src={`https://picsum.photos/id/${1001 + index}/300/200`} 
                            alt={`Project ${index + 1}`} 
                            className="w-full h-auto rounded-lg mb-2"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x300'; }} // Fallback image
                        />
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-2 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Praesent eget risus sollicitudin, ullamcorper nunc eu, 
                            tincidunt ligula.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
