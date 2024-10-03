import Navbar from '../components/navbar';
import Footer from '../components/footer';
function Projects() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-950 min-h-screen pt-20 text-white p-4 flex flex-col justify-center items-center">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                    Projects
                </h1>
                <p className="mt-2">Here are some of my projects:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                    {Array.from({ length: 3 }, (_, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-4 flex flex-col justify-center items-center">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                                Project {index + 1}
                            </h2>
                            <img 
                                src={`https://picsum.photos/id/${1003 + index}/400/300`} 
                                alt={`project${index + 1}`} 
                                className="w-full h-auto rounded-lg mb-2"
                            />
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Praesent eget risus sollicitudin, ullamcorper nunc eu, 
                                tincidunt ligula. Sed euismod, nisl eget consectetur 
                                posuere, nisi diam posuere libero, eget consequat leo 
                                velit vel velit. Sed euismod, nisl eget consectetur 
                                posuere, nisi diam posuere libero, eget consequat leo 
                                velit vel velit.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Projects;
