"use client";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
        num: "01",
        title: "Frontend Development",
        description:
            "I create modern, responsive, and dynamic user interfaces with React. I prioritize performance, accessibility, and delivering intuitive user experiences.",
        href: "#frontend-development",
    },
    {
        num: "02",
        title: "Backend Development",
        description:
            "I build robust and scalable backend systems using Java and Spring Boot. My focus is on clean architecture, secure APIs, and seamless integration with databases and external services.",
        href: "#backend-development",
    },
    // {
    //     num: "03",
    //     title: "Mobile Development",
    //     description:
    //         "I develop cross-platform mobile applications using Flutter, ensuring smooth performance and consistent design across Android and iOS devices.",
    //     href: "#mobile-development",
    // },
    {
        num: "03",
        title: "UI/UX Design",
        description: "I design intuitive and engaging interfaces that prioritize user experience and aesthetics. Every detail is crafted to align with your vision and user needs.",
        href: "#ui-ux-design",
    },
    {
        num: "04",
        title: "DevOps & Cloud",
        description:
            "I implement CI/CD pipelines, containerization with Docker, and cloud deployment on AWS to deliver reliable, scalable, and production-ready applications.",
        href: "#devops-cloud",
    },
    // {
    //     num: "06",
    //     title: "Software Engineering & System Design",
    //     description: "I apply core software engineering principles, including clean architecture, object-oriented design, and system design patterns, to build maintainable and scalable solutions.",
    //     href: "#software-engineering"
    // }
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.15,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/** Top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold cursor-pointer text-outline text-transparent group-hover:text-accent-500 transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent-500 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/** Title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-500 transition-all duration-500">{service.title}</h2>
                {/** Description */}
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;