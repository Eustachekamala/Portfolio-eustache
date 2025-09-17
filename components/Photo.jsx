"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="relative flex items-center justify-center w-full h-full">
            {/* Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                }}
                className="relative w-[296px] h-[296px] xl:w-[498px] xl:h-[498px] z-10"
            >
                <Image
                    src="/assets/eustache.png"
                    priority
                    quality={100}
                    fill
                    alt="Profile photo"
                    className="rounded-full opacity-80 object-cover"
                />
            </motion.div>

            {/* Circle */}
            <motion.svg
                className="absolute w-[305px] h-[305px] xl:w-[506px] xl:h-[506px] z-0"
                fill="transparent"
                viewBox="0 0 506 506"
            >
                <motion.g
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ originX: "50%", originY: "50%" }}
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#00ff99"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: [
                                "15 120 25 25",
                                "18 25 92 72",
                                "4 25 22 22",
                            ],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.g>
            </motion.svg>
        </div>
    );
};

export default Photo;
