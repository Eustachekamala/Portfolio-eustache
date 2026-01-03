"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import WorkSliderBtns from "../../components/WorkSliderBtns";

interface StackItem {
  name: string;
}

interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: StackItem[];
  image: string;
  live: string;
  github: string;
  status?: string;
}

const projects: Project[] = [
  // Backend Projects
  {
    num: "01",
    category: "Backend",
    title: "Job Application Management System",
    description: "A comprehensive backend system for managing applicants, jobs, and job applications. Built with clean relational architecture and RESTful APIs. Features include applicant tracking, job posting management, application workflow automation, and Redis caching for improved performance.",
    stack: [
      { name: "Spring Boot" },
      { name: "PostgreSQL" },
      { name: "Docker" },
      { name: "OpenAPI/Swagger" },
      { name: "Redis" }
    ],
    image: "/assets/works/job-app-swagger.png", // Screenshot of Swagger UI
    live: "https://job-application-management-system-latest-qvm4.onrender.com/swagger-ui/index.html",
    github: "https://github.com/Eustachekamala/JobApplicationManagement",
  },
  {
    num: "02",
    category: "Full-Stack",
    title: "Employee Management System",
    description: "Full-featured backend application for managing employees, departments, and attendance with role-based access control. Includes automated reporting, data analytics, and comprehensive HR operations management. Built with Spring Boot and containerized with Docker. Currently under development.",
    stack: [
      { name: "Spring Boot" },
      { name: "PostgreSQL" },
      { name: "Docker" },
      { name: "Swagger" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" }
    ],
    image: "/assets/works/work4.png",
    live: "https://ems-version-one.vercel.app",
    github: "https://github.com/Eustachekamala/EMS",
    // status: "under-development"
  },

  // Full-Stack Projects
  {
    num: "03",
    category: "Full-Stack",
    title: "FreshGo - Grocery Shopping Platform",
    description: "Modern grocery shopping website designed to enhance shopping experience. Features include AI-powered recipe generation, intelligent shopping cart, advanced item filtering, and drink recipe discovery. Built with React and Flask for seamless user experience.",
    stack: [
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Python (Flask)" },
      { name: "SQLite" }
    ],
    image: "/assets/works/work1.png",
    live: "https://freshgo-app.vercel.app",
    github: "https://github.com/Eustachekamala/Fresh-go-app",
  }
];

const Works = () => {
  const [project, setProject] = useState<Project>(projects[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    // Get current slide index
    const currentIndex = swiper.activeIndex;

    // Update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1, transition: {
          delay: 0.15, duration: 0.4, ease: "easeIn"
        }
      }}
      className="min-h-[80vh] flex flex-col justify-center xl:py-12 xl:px-0"
    >
      <div className="container mx-auto px-4 xl:px-0">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] gap-6">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-1 xl:order-none">
            <div className="flex flex-col gap-4 xl:gap-[30px]">
              {/** Outline num */}
              <div className="text-5xl sm:text-6xl xl:text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/** Project category */}
              <h2 className="text-2xl sm:text-3xl xl:text-[42px] font-bold leading-none text-white group-hover:text-accent-500 transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              {/** Project title */}
              <h3 className="text-xl sm:text-2xl xl:text-3xl font-semibold text-accent-500">
                {project.title}
              </h3>

              {/** Project description */}
              <p className="text-white/60 leading-relaxed text-sm sm:text-base xl:text-lg">{project.description}</p>

              {/** Stack */}
              <ul className="flex flex-wrap gap-2 xl:gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-sm sm:text-base xl:text-xl text-accent-500">
                      {item.name}
                      {/* Add a comma if it's not the last item */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/** Border */}
              <div className="border border-white/20"></div>

              {/** Buttons */}
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] xl:w-[70px] xl:h-[70px] rounded-full bg-white/5 flex justify-center items-center group transition-all duration-300 hover:bg-white/10">
                          <BsArrowUpRight className="text-white text-base sm:text-xl xl:text-3xl group-hover:text-accent-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/** Github project button */}
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] xl:w-[70px] xl:h-[70px] rounded-full bg-white/5 flex justify-center items-center group transition-all duration-300 hover:bg-white/10">
                          <BsGithub className="text-white text-base sm:text-xl xl:text-3xl group-hover:text-accent-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%] order-2 xl:order-none">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="h-[220px] sm:h-[300px] xl:h-[520px] mb-6 sm:mb-8 xl:mb-12 relative"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide className="w-full" key={index}>
                    <div className="h-full relative group flex justify-center items-center bg-pink-50/20 rounded-xl overflow-hidden">
                      {/**overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      {/** Live demo for backend projects with swagger, image for others, or coming soon */}
                      {project.status === "under-development" ? (
                        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-500/10 to-purple-500/10">
                          <div className="text-center z-20 p-4">
                            <h3 className="text-2xl xl:text-4xl font-bold text-white mb-2 xl:mb-4">Under Development</h3>
                            <p className="text-white/70 text-base xl:text-lg">Coming Soon</p>
                          </div>
                        </div>
                      ) : project.category === "Backend" && project.live ? (
                        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-500/10 to-purple-500/10">
                          <div className="absolute inset-0 bg-black/20 z-0"></div>
                          <div className="relative z-20 text-center px-4 py-6 xl:px-8 xl:py-12 max-w-md">
                            <h3 className="text-2xl xl:text-4xl font-bold text-white mb-2 xl:mb-4 leading-tight">
                              Live API Demo
                            </h3>
                            <p className="text-white/80 text-sm xl:text-lg mb-4 xl:mb-8 leading-relaxed">
                              Click the button below to explore the interactive Swagger UI documentation
                            </p>
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 xl:gap-3 bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 xl:px-8 xl:py-4 rounded-lg transition-all duration-300 font-semibold text-sm xl:text-lg shadow-lg hover:shadow-xl hover:scale-105"
                            >
                              <BsArrowUpRight className="text-lg xl:text-2xl" />
                              Open Swagger UI
                            </a>
                          </div>
                        </div>
                      ) : (
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-center"
                            priority
                          />
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                );
              })}
              {/**slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute mb-6 left-1/2 transform -translate-x-1/2 bottom-4 xl:bottom-0 xl:right-0 xl:left-auto xl:transform-none z-20 w-full xl:w-max justify-between xl:justify-none px-4 xl:px-0 pointer-events-none xl:pointer-events-auto"
                btnStyles="bg-accent-500 hover:bg-accent-hover text-primary text-[20px] sm:text-[22px] w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] flex justify-center items-center transition-all duration-500 pointer-events-auto rounded-lg"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Works;