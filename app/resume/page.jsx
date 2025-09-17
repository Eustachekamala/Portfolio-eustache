"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNode,
  FaReact,
  FaFigma,
  FaPython,
  FaJava,
  FaGitAlt,
  FaLeaf,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiFlask,
  SiLinux,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

//about data
const about = {
  title: "About me",
  description:
    "I am a passionate and detail-oriented software engineer with expertise in full-stack development, specializing in Java (Spring Boot) for backend and JavaScript (React) for frontend. With over 2 years of experience, I focus on building scalable, secure, and user-centric applications. Currently, I am expanding my skills in DevOps (Docker, CI/CD, AWS) and mobile development with Flutter to strengthen my full-stack and cloud expertise. I am fluent in English, French, and Swahili, and I am always eager to learn and adapt to new technologies.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Eustache Kamala",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+254) 719 405 934",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Congolese",
    },
    {
      fieldName: "Email",
      fieldValue: "eustachekamala.dev@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, French, Swahili",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have worked on a variety of projects, from freelance web development to full-stack roles, delivering high-quality solutions for clients. My experience spans frontend and backend development, database optimization, and team collaboration.",
  items: [
    {
      company: "Self Employed",
      position: "Full-stack Developer Freelance",
      duration: "2022 - present",
    },
    {
      company: "Tech Solutions Inc.",
      position: "Frontend Developer Freelance",
      duration: "2021 - 2022",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer",
      duration: "2020 - 2021",
    },
    {
      company: "BEET Agency",
      position: "Electronic Technician",
      duration: "2019 - 2020",
    },
  ],
};

// education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I hold a Bachelor's degree in Computer Engineering and have completed various certifications in software development, including a Full Stack Web Development program at Moringa School.",
  items: [
    {
      institution: "Moringa School",
      degree: "Certificate in Software Engineering",
      duration: "2024",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2023",
    },
    {
      institution: "Beni Future",
      degree: "Front-End Track",
      duration: "2022",
    },
    {
      institution: "Official University Of Ruwenzori",
      degree: "Bachelor's Degree in Computer Engineering",
      duration: "2018 - 2021",
    },
  ],
};

//Skills data
const skills = {
  title: "My Skills",
  description:
    "I specialize in a wide range of technologies, including frontend and backend development, database management, and design tools. My skills enable me to build robust, scalable, and user-friendly applications.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNode />,
      name: "Node.js",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiFlask />,
      name: "Flask",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaLeaf />,
      name: "Spring Boot",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
    {
      icon: <SiLinux />,
      name: "Linux",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col justify-between xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/**content */}
          <div className="min-h[70vh] w-full">
            {/**experience */}
            <TabsContent className="w-full" value="experience">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px] w-full">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="p-4 bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-sm text-accent-500">{item.duration}</span>
                          <h3 className="text-xl font-bold max-[260px] min-[60px] text-center lg:text-left">{item.position}</h3>
                          {/**dot */}
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] bg-accent-500 rounded-full"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/**education */}
            <TabsContent className="w-full" value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px] w-full">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="p-4 bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-sm text-accent-500">{item.institution}</span>
                          <h3 className="text-xl font-bold max-[260px] min-[60px] text-center lg:text-left">{item.degree}</h3>
                          {/**dot */}
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] bg-accent-500 rounded-full"></span>
                            <p className="text-white/60">{item.duration}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/**Skills */}
            <TabsContent className="w-full" value="skills">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li className="flex items-center gap-4" key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[80px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-4xl group-hover:text-accent-500 transition-all duration-500">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-primary uppercase bg-white px-4 rounded-lg">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/**About me */}
            <TabsContent className="w-full text-center xl:text-left" value="about">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[700px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-2">
                        <span className="text-white/60">{item.fieldName}:</span>
                        <span className="text-md">{item.fieldValue}</span>
                      </li>
                    );
                  })}
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