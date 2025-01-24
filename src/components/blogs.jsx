function Blogs() {
    return (
        <>
            <div id="blogs" className="bg-gray-950 text-white p-4 flex flex-col justify-center items-center">
                <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
                    Blogs
                </h1>
                <div className="grid grid-cols-1 w-11/12 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-2 text-center border border-gray-400 p-8 rounded-lg">
                        <h3 className="font-bold mb-2">How to Maximize Your Grocery Shopping Experience</h3>
                        <p>
                            Learn how to shop smarter and save time with FreshGo’s intuitive features, from creating your shopping lists to filtering products based on your needs. We'll also cover some tips on how to avoid common shopping mistakes.
                        </p>
                    </div>
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-2 text-center border border-gray-400 p-8 rounded-lg">
                        <h3 className="font-bold mb-2">FreshGo’s Recipe Generator: The Ultimate Meal Planning Tool</h3>
                        <p>
                            Discover how FreshGo’s Recipe Generator helps you find new and exciting meals based on what ingredients you already have. Whether you’re cooking for one or feeding a family, FreshGo makes meal planning a breeze.
                        </p>
                    </div>
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-2 text-center border border-gray-400 p-8 rounded-lg">
                        <h3 className="font-bold mb-2">Exploring the Best Drink Recipes for Your Meals</h3>
                        <p>
                            Looking for the perfect drink to complement your meals? FreshGo offers a variety of drink recipes that are easy to make and pair perfectly with the dishes in your shopping cart. Get inspired for your next meal and drink pairing!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blogs;
