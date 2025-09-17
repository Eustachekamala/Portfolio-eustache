"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip";
import { Navigation, Pagination } from "swiper/modules"; 
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import WorkSliderBtns from "../../components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "project 1",
    description: "FreshGo is a modern grocery shopping website designed to enhance your shopping experience. With features like recipe generation, a shopping cart, and item filtering, freshGo makes grocery shopping efficient and enjoyable. Additionally, users can discover drink recipes to complement their meals.",
    stack: [{ name: "React 5" }, { name: "Tailwin Css" }, { name: "Python(Flask)" }, {name : "sqlLite"}],
    image: "/assets/works/work1.png",
    live: "https://freshgo-app.vercel.app",
    github: "https://github.com/Eustachekamala/Fresh-go-app",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description: "The POS Restaurant App is a full-stack application designed to streamline restaurant operations. It provides features for order management, inventory tracking, and sales reporting.",
    stack: [{ name: "React.js" }, { name: "Tailwind.css" },{ name: "Express Js"}, { name: "MongoDB" },],
    image: "/assets/works/work3.png",
    live: "https://pos-restaurant-xi.vercel.app",
    github: "https://github.com/Eustachekamala/POS-Restaurant",
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    description: "The E-Commerce project is a full-stack application that allows users to browse and purchase products from a variety of online stores.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Express.js"}, {name : "MongoDB"}],
    image: "/assets/works/work2.png",
    live: "https://e-commerce-azure-five.vercel.app",
    github: "https://github.com/Eustachekamala/E-Commerce",
  },
];

const Works = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // Get current slide index
    const currentIndex = swiper.activeIndex;

    // Update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition : {
        delay : 0.15, duration : 0.4, ease : "easeIn"
      } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[4]">
          <div className="w-full xl:w-[45%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/** Outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/** Project category */}
              <h2 className="xl:text-[42px] text-3xl font-bold leading-none text-white group-hover:text-accent-500 transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              {/** Project description */}
              <p className="text-white/60">{project.description}</p>

              {/** Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent-500">
                      {item.name}
                      {/** Remove comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/** Border */}
              <div className="border border-white/20"></div>

              {/** Buttons */}
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/** Github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[55%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation 
              pagination={{ clickable: true }}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide className="w-full" key={index}>
                    <div className="h-[460px] relative group flex justify-center items-center rounded-lg bg-pink-50/10">
                    {/**overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                    {/** image*/}
                    <div className="relative w-full pt-[56.25%] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/**slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
              xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent-500 hover:bg-accent-600 text-primary
              text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Works;