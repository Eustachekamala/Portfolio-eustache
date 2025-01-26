function Projects() {
    return (
        <div id="projects"  className="bg-gray-950 text-white p-4 flex flex-col justify-center items-center">
            <h1  className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
                Projects
            </h1>
            <div className="grid grid-cols-1 w-11/12 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                <div className="bg-gray-800 rounded-lg p-4 flex flex-col justify-center items-center">
                    <h2 className="text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold mb-4">FreshGo App</h2>
                    <img className="w-full h-auto rounded-lg mb-2" src="FreshGo.png" alt="" />
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-2 text-center">FreshGo is a modern grocery shopping website 
                        designed to enhance your shopping 
                        experience. With features like recipe 
                        generation, a shopping cart, and item filtering, 
                        FreshGo makes grocery shopping efficient and enjoyable. 
                        Additionally, users can discover drink recipes to complement 
                        their meals.
                    </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 flex flex-col justify-center items-center">
                    <h2 className="text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold mb-4">FreshGo App</h2>
                    <img className="w-full h-auto rounded-lg mb-2" src="FreshGo.png" alt="" />
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-2 text-center">FreshGo is a modern grocery shopping website 
                        designed to enhance your shopping 
                        experience. With features like recipe 
                        generation, a shopping cart, and item filtering, 
                        FreshGo makes grocery shopping efficient and enjoyable. 
                        Additionally, users can discover drink recipes to complement 
                        their meals.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Projects;
