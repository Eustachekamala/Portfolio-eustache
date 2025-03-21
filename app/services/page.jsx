"use client";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I create modern, responsive websites that are both functional and visually appealing. From personal blogs to dynamic web apps, I focus on clean code and seamless performance.",
    href: "#web-development",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I design intuitive and engaging interfaces that prioritize user experience and aesthetics. Every detail is crafted to align with your vision and user needs.",
    href: "#ui-ux-design",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "I craft unique and memorable logos that capture the essence of your brand. My designs are simple, versatile, and tailored to make a lasting impression.",
    href: "#logo-design",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "I optimize websites to improve search engine rankings and drive organic traffic. Using proven strategies, I ensure your site is discoverable and performs well.",
    href: "#seo",
  },
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
              delay: 2.4,
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