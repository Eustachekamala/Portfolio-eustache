"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNode,
  FaReact,
  FaFigma,
  FaPython,
  FaFlask,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
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
const data = {
  title: "About me",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
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
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Nationanlity",
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
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  items: [
    {
      company: "Tech Solutions Inc.",
      postion: "Full Stack Developer Freelance",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      postion: "Front-End Developer Intern",
      duration: "2021 - 2022",
    },
    {
      company: "E-commerce Startup",
      postion: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Degital Agency",
      postion: "UX/UI Designer",
      duration: "2019 - 2020",
    },
  ],
};

// education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Experience",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  items: [
    {
      institution: "Moringa School",
      degree: "Diploma in Software Engineering",
      duration: "2024",
    },
    {
      institution: "Online Course",
      degree: "Programing Course",
      duration: "2023",
    },
    {
      institution: "Beni Future",
      degree: "Front-End Track",
      duration: "2022",
    },
    {
      institution: "Official University Of Ruwenzori",
      degree: "Associate Degree In Computer Engineering",
      duration: "2018 - 2021",
    },
  ],
};

//Skills data
const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eaque numquam soluta ullam blanditiis",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaNode />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaFlask />,
      name: "flask",
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
      }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
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
            {/**exprerience */}
            <TabsContent className="w-full" value="experience">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px] w-full">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    { experience.items.map((item, index) => {
                      return <li key={index} className="p-4 bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1
                      ">
                        <span className="text-sm text-accent-500">{item.duration}</span>
                        <h3 className="text-xl font-bold max-[260px] min-[60px] text-center lg:text-left">{item.postion}</h3>
                        {/**dot */}
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] bg-accent-500 rounded-full"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
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
                    { education.items.map((item, index) => {
                      return <li key={index} className="p-4 bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1
                      ">
                        <span className="text-sm text-accent-500">{item.institution}</span>
                        <h3 className="text-xl font-bold max-[260px] min-[60px] text-center lg:text-left">{item.degree}</h3>
                        {/**dot */}
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] bg-accent-500 rounded-full"></span>
                          <p className="text-white/60">{item.duration}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/**Skils */}
            <TabsContent className="w-full" value="skills">
              <div className="flex flex-col gap-[30px]">
                <div>
                  <h3>{skills.title}</h3>
                  <p>{skills.description}</p>
                </div>
                <ul>
                  { skills.skillList.map((skill, index) => {
                    return <li className="flex items-center gap-2" key={index}>
                      {skill.icon}
                      {skill.name}
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
            {/**About me */}
            <TabsContent className="w-full" value="about">About me</TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
