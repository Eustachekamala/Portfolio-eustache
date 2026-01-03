import Photo from "../components/Photo";
import Social from "../components/Social";
import Stats from "../components/Stats";
import DownloadButton from "../components/DownloadButton";

export default function Home() {
    return (
        <section className="h-full mt-6">
            <div className="container mx-auto flex items-center">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-6 p-2 ">
                    {/** Text */}
                    <div className="flex flex-col gap-6 mt-8 md:mt-4 text-center xl:text-left order-2 xl:order-none">
                        <div className="flex flex-col">
                            <span className="text-3xl">Software Engineer</span>
                            <h1 className="md:text-6xl text-4xl h1 mt-6">
                                Hello, I&apos;m <br />{" "}
                                <span className="text-accent-500">Eustache Kamala</span>
                            </h1>
                        </div>
                        <p className="text-base md:text-lg leading-relaxed text-white/80 max-w-xl mb-8">
                            I engineer scalable, high-performance web solutions using{" "}
                            <span className="font-semibold text-accent-500">Java, Spring Boot, and React</span>. 
                            Bridging robust backend architecture with intuitive frontends, I leverage{" "}
                            <span className="font-semibold text-accent-500">Docker</span> and{" "}
                            <span className="font-semibold text-accent-500">AWS</span> to deliver secure, 
                            production-ready deployments designed for growth.
                        </p>

                        {/** Button and socials */}
                        <div className="flex flex-col xl:flex-row items-center gap-8 mb-8">
                            <DownloadButton />
                            <div className="mb-2 xl:mb-0">
                                <Social
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border border-accent-600 rounded-full flex justify-center items-center text-accent-600 text-base hover:bg-accent-600 hover:text-primary hover:transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                    {/** Photo */}
                    <div className="order-1 xl:order-none bg-black/50 py-1 rounded-full xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    );
}
