import Photo from "../components/Photo";
import Social from "../components/Social";
import Stats from "../components/Stats";
import DownloadButton from "../components/DownloadButton";

export default function Home() {
    return (
        <section className="h-full">
            <div className="container mx-auto flex items-center">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-6 overflow-hidden ">
                    {/** Text */}
                    <div className="flex flex-col gap-4 mt-8 md:mt-4 text-center xl:text-left order-2 xl:order-none">
                        <div className="flex flex-col">
                            <span className="text-3xl">Software Engineer</span>
                            <h1 className="h1 mt-8">
                                Hello, I&apos;m <br />{" "}
                                <span className="text-accent-500">Eustache Kamala</span>
                            </h1>
                        </div>
                        <p className="max-w-[500px] mb-8 text-white/80">
                            Building ideas into code. I design and develop scalable, elegant web
                            solutions using{" "}
                            <span className="text-accent-500">Java, Spring Boot, React, and Tailwind CSS</span>{" "}
                            — blending solid backend logic with engaging user experiences. With{" "}
                            <span className="text-accent-500">Docker</span> and{" "}
                            <span className="text-accent-500">AWS</span>, I ensure every app I deploy is fast,
                            secure, and ready to grow. I believe in code that lasts, designs that connect,
                            and teamwork that drives progress.
                        </p>

                        {/** Button and socials */}
                        <div className="flex flex-col xl:flex-row items-center gap-8">
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
