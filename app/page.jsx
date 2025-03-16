import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import DownloadButton from "@/components/DownloadButton";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-6">
          {/**Text */}
          <div className="flex flex-col gap-4 mt-4 md:mt-0 text-center xl:text-left order-2 xl:order-none">
            <div className="flex flex-col">
              <span className="text-2xl">Software Developer</span>
              <h1 className="h1 mt-4">
                Hello I'm <br />{" "}
                <span className="text-accent-500">Eustache Kamala</span>
              </h1>
            </div>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at creating elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            {/**btn and socials */}
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
          {/**Photo */}
          <div className="order-1 xl:order-none bg-black/50 rounded-full xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}