function Footer() {
    return (
        <footer  className="bg-gray-900 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <h2 className="text-xl font-bold">Eustache Kamala</h2>
                    <p className="text-sm">&copy; {new Date().getFullYear()} Copyright Eustache Kamala</p>
                </div>
                <div id="contact" className="flex space-x-4 mt-4 md:mt-0">
                    <a href="https://github.com/eustachekamala" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
                        <img src="https://img.icons8.com/ios-filled/50/FFFFFF/github.png" alt="GitHub" className="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com/in/eustache-kamala-katembo" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
                        <img src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
                    </a>
                    <a href="https://twitter.com/eustachekamal" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
                        <img src="https://img.icons8.com/ios-filled/50/FFFFFF/twitter.png" alt="Twitter" className="w-6 h-6" />
                    </a>
                    <a href="https://www.instagram.com/eustachekams/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
                        <img src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram.png" alt="Instagram" className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
