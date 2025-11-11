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
    category: "Backend",
    title: "Employee Management System",
    description: "Full-featured backend application for managing employees, departments, and attendance with role-based access control. Includes automated reporting, data analytics, and comprehensive HR operations management. Built with Spring Boot and containerized with Docker. Currently under development.",
    stack: [
      { name: "Spring Boot" }, 
      { name: "PostgreSQL" }, 
      { name: "Docker" }, 
      { name: "Swagger" }
    ],
    image: "/assets/works/coming-soon.png", // Placeholder for under development
    live: "",
    github: "https://github.com/Eustachekamala/EMS",
    status: "under-development"
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
  },
  {
    num: "04",
    category: "Full-Stack",
    title: "POS Restaurant Application",
    description: "Full-stack point-of-sale system designed to streamline restaurant operations. Features order management, real-time inventory tracking, sales reporting, and table management. Built with modern web technologies for optimal performance.",
    stack: [
      { name: "React.js" }, 
      { name: "Tailwind CSS" },
      { name: "Express.js" }, 
      { name: "MongoDB" }
    ],
    image: "/assets/works/work3.png",
    live: "https://pos-restaurant-xi.vercel.app",
    github: "https://github.com/Eustachekamala/POS-Restaurant",
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

              {/** Project title */}
              <h3 className="text-2xl font-semibold text-accent-500">
                {project.title}
              </h3>

              {/** Project description */}
              <p className="text-white/60 leading-relaxed">{project.description}</p>

              {/** Stack */}
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-sm px-3 py-1 bg-accent-500/10 text-accent-500 rounded-full">
                      {item.name}
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
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent-500" />
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
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent-500" />
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

                    {/** Live demo for backend projects with swagger, image for others, or coming soon */}
                    {project.status === "under-development" ? (
                      <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-500/20 to-purple-500/20">
                        <div className="text-center z-20">
                          <h3 className="text-4xl font-bold text-white mb-4">🚧 Under Development</h3>
                          <p className="text-white/70 text-lg">Coming Soon</p>
                        </div>
                      </div>
                    ) : project.category === "Backend" && project.live ? (
                      <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-500/10 to-purple-500/10 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-black/20 z-0"></div>
                        <div className="relative z-20 text-center px-8 py-12 max-w-md">
                          <div className="text-7xl mb-6 animate-pulse">📡</div>
                          <h3 className="text-4xl font-bold text-white mb-4 leading-tight">
                            Live API Demo
                          </h3>
                          <p className="text-white/80 text-lg mb-8 leading-relaxed">
                            Click the button below to explore the interactive Swagger UI documentation
                          </p>
                          <a 
                            href={project.live} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
                          >
                            <BsArrowUpRight className="text-2xl" />
                            Open Swagger UI
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full pt-[56.25%] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                      </div>
                    )}
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