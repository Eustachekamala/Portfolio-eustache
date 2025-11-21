"use client";
import { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiLinux,
  SiPostgresql,
  SiPostman,
  SiTypescript,
  SiJenkins,
  SiSpringboot,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "../../components/ui/scroll-area";
import { motion } from "framer-motion";
import VideoModal from "../../components/VideoModal";

// 🔹 Modal for "Coming Soon"
const ComingSoonModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1e1e23] p-6 rounded-2xl shadow-lg text-center max-w-sm w-full border border-white/10"
      >
        <h3 className="text-2xl font-semibold text-accent-500 mb-2">🚧 Coming Soon</h3>
        <p className="text-white/70 text-sm mb-6">
          This certificate is not yet available. Please check back later!
        </p>
        <button
          onClick={onClose}
          className="bg-accent-500 hover:bg-accent-400 text-white px-4 py-2 rounded-lg transition"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

// 🔹 About data
const about = {
  title: "About Me",
  description:
    "As a dedicated Software Engineer, I specialize in creating robust and user-focused web applications that align technology with business goals. My toolkit includes Java and Spring Boot for backend systems, React and Tailwind CSS for dynamic frontends, and Docker with AWS for efficient deployments. I’m deeply passionate about clean code, maintainable architecture, and lifelong learning — always striving to deliver value through simplicity, precision, and innovation.",
  info: [
    { fieldName: "Name", fieldValue: "Eustache Katembo" },
    { fieldName: "Phone", fieldValue: "(+254) 719 405 934" },
    { fieldName: "Nationality", fieldValue: "Congolese" },
    { fieldName: "Email", fieldValue: "eustachekamala.dev@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, French, Swahili" },
    { fieldName: "Location", fieldValue: "Nairobi, Kenya" },
  ],
};


// 🔹 Education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I hold a Bachelor's degree in Computer Engineering and have completed several professional certifications in software development, UX/UI design, and cloud computing. My education reflects a strong foundation in full-stack engineering, backend development, and cloud technologies.",
  items: [
    {
      institution: "ALX Africa",
      degree: "AWS Cloud Computing Certificate",
      duration: "2025 (Ongoing)",
      certificateLink: "",
    },
    {
      institution: "Moringa School & Flatiron School",
      degree: "UX/UI Design Program",
      duration: "Oct 2025",
      certificateLink: "/assets/certificates/Eustache_Katembo-Moringa-Certificate_UI&UX.jpg",
    },
    {
      institution: "ALX Africa",
      degree: "Professional Foundations Certificate",
      duration: "Sept 2025",
      certificateLink: "/assets/certificates/alx-professional-foundations.png",
    },
    {
      institution: "Moringa School & Flatiron School",
      degree: "Software Engineering Program",
      duration: "Oct 2024",
      certificateLink: "/assets/certificates/Eustache_Katembo-Moringa-Certificate_SDE.jpg",
    },
    {
      institution: "Official University Of Ruwenzori (UOR)",
      degree: "Bachelor of Science in Computer Engineering",
      duration: "2018 - 2022",
      certificateLink: "",
    },
  ],
};

// 🔹 Skills data - Updated to match resume
const skills = {
  title: "My Skills",
  description:
    "I specialize in a comprehensive range of technologies for full-stack development. From backend systems with Java and Spring Boot to modern frontend frameworks like React, along with DevOps tools for deployment and cloud infrastructure.",
  skillList: [
    // Languages
    { icon: <FaJava />, name: "Java", category: "Languages" },
    { icon: <FaJs />, name: "JavaScript", category: "Languages" },
    { icon: <SiTypescript />, name: "TypeScript", category: "Languages" },
    { icon: <FaDatabase />, name: "SQL", category: "Languages" },
    
    // Backend
    { icon: <SiSpringboot />, name: "Spring Boot", category: "Backend" },
    
    // Frontend
    { icon: <FaReact />, name: "React", category: "Frontend" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", category: "Frontend" },
    { icon: <FaHtml5 />, name: "HTML5", category: "Frontend" },
    { icon: <FaCss3 />, name: "CSS3", category: "Frontend" },
    
    // State Management
    { icon: <span className="text-4xl">🐻</span>, name: "Zustand", category: "State Management" },
    
    // Databases
    { icon: <SiPostgresql />, name: "PostgreSQL", category: "Databases" },
    
    // DevOps & Cloud
    { icon: <FaDocker />, name: "Docker", category: "DevOps" },
    { icon: <FaAws />, name: "AWS", category: "Cloud" },
    { icon: <FaGitAlt />, name: "Git", category: "Version Control" },
    { icon: <FaGithub />, name: "GitHub", category: "Version Control" },
    { icon: <SiJenkins />, name: "Jenkins", category: "CI/CD" },
    { icon: <SiLinux />, name: "Linux", category: "Operating Systems" },
    
    // Tools
    { icon: <FaFigma />, name: "Figma", category: "Design" },
    { icon: <SiPostman />, name: "Postman", category: "API Testing" },
  ],
};

const videoUrl = "";

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.15, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center md:py-12 xl:py-0"
    >
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="container mx-auto px-4">
        <Tabs
          defaultValue="education"
          className="flex flex-col justify-between xl:flex-row md:gap-[60px]"
        >
          {/* Sidebar */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Technical Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Main content */}
          <div className="min-h-[70vh] w-full">
            {/* Education Section */}
            <TabsContent className="w-full" value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="text-center xl:text-left space-y-4"> 
                  <h3 className="text-4xl font-bold">{education.title}</h3> 
                  <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0 leading-relaxed">
                      {education.description}
                  </p> 
                </div>

                <ScrollArea className="h-[400px] w-full pr-4">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="p-5 bg-[#1e1e23] hover:bg-[#2a2a32] transition-all h-auto min-h-[200px] rounded-2xl flex flex-col justify-center items-center lg:items-start gap-2 shadow-lg shadow-black/20"
                      >
                        <span className="text-sm text-accent-500 tracking-wide uppercase">
                          {item.institution}
                        </span>
                        <h3 className="text-lg font-semibold text-white text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3 text-white/60">
                          <span className="w-[6px] h-[6px] bg-accent-500 rounded-full"></span>
                          <p>{item.duration}</p>
                        </div>

                        {/* 🔹 Certificate or Coming Soon */}
                        {item.certificateLink ? (
                          <a
                            href={item.certificateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 text-sm text-accent-500 hover:text-accent-400 underline-offset-2 hover:underline transition"
                          >
                            📜 View Certificate
                          </a>
                        ) : (
                          <button
                            onClick={() => setIsModalOpen(true)}
                            className="mt-2 text-sm text-accent-500 hover:text-accent-400 underline-offset-2 hover:underline transition"
                          >
                            📜 View Certificate
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            
            {/* Skills Section */}
            <TabsContent className="w-full" value="skills"> 
              <div className="flex flex-col gap-[30px]"> 
                <div className="text-center xl:text-left space-y-4"> 
                  <h3 className="text-4xl font-bold">{skills.title}</h3> 
                  <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0 leading-relaxed">
                    {skills.description}
                  </p> 
                </div> 
                <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index} className="flex justify-center"> 
                      <TooltipProvider delayDuration={100}> 
                        <Tooltip> 
                          <TooltipTrigger className="w-[80px] h-[80px] bg-[#232329] hover:bg-[#2c2c33] rounded-xl flex justify-center items-center group transition-all shadow-md shadow-black/20"> 
                            <div className="text-4xl group-hover:text-accent-500 transition-all duration-300">
                              {skill.icon}
                            </div> 
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-primary uppercase bg-white/90 text-black text-xs px-3 py-1 rounded-lg font-medium">
                              {skill.name}
                            </p> 
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul> 
              </div> 
            </TabsContent>
            
            {/* About Me Section */}
            <TabsContent className="w-full text-center xl:text-left" value="about">
              <div className="flex flex-col gap-[30px]">
                <div className="text-center xl:text-left space-y-4"> 
                  <h3 className="text-4xl font-bold">{about.title}</h3> 
                  <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0 leading-relaxed">
                      {about.description}
                  </p> 
                </div>

                {/* Elevator Pitch Video */}
                <div className="max-w-2xl mx-auto">
                  {videoUrl ? (
                    <VideoModal
                      videoUrl={videoUrl}
                      trigger={
                        <div className="w-full aspect-video bg-black/20 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-black/40 transition">
                          <span className="text-white font-semibold p-4">
                            ▶ Play Elevator Pitch
                          </span>
                        </div>
                      }
                    />
                  ) : (
                    <div className="w-full aspect-video bg-black/10 rounded-2xl flex items-center justify-center text-white/60 border border-dashed border-white/30 p-4">
                      🎥 Elevator Pitch Coming Soon
                    </div>
                  )}
                </div>

                {/* Personal Info */}
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[700px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-2"
                    >
                      <span className="text-white/60">{item.fieldName}:</span>
                      <span className="text-md text-white">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;