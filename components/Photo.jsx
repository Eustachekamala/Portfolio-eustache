"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
        {/**Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[296px] h-[296px] xl:w-[498px] xl:h-[498px]  absolute"
        >
          <Image
            src="/assets/eustache.png"
            priority
            quality={100}
            fill
            alt=""
            className="rounded-full opacity-56"
          />
        </motion.div>
      </motion.div>
      {/**Circle */}
      <motion.svg className="w-[305px] xl:w-[506px] h[305px] xl:h-[506px]" 
      fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
        <motion.circle cx="253" cy="253" r="250" stroke="#00ff99" 
        strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" 
        initial={{strokeDasharray: "24 10 0 0"}} animate={{
            strokeDasharray : ["15 120 25 25", "18 25 92 72", "4 25 22 22"],
            rotate: [120, 360],
        }} transition={{
            duration : 20,
            repeat : Infinity,
            repeatType : "reverse",
        }}/>
      </motion.svg>
    </div>
  );
};

export default Photo;
