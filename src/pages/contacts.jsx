
import Navbar from '../components/navbar';

function Contacts() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-950 h-screen text-white p-4 flex flex-col justify-center items-center">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                    Contacts
                </h1>
                <p>You can find me on the following social media platforms:</p>
            </div>
        </>
    )
}

export default Contacts