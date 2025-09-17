"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const Photo = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // trigger animations only after client mount
    }, []);

    return (
        <div className="relative flex items-center justify-center w-full h-full">
            {/* Profile Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 2, duration: 0.4, ease: "easeInOut" }}
                className="relative w-[296px] h-[296px] xl:w-[498px] xl:h-[498px] z-10"
            >
                <Image
                    src="/assets/eustache.png"
                    fill
                    alt="Profile photo"
                    className="rounded-full opacity-80 object-cover"
                />
            </motion.div>

            {/* Animated Circle */}
            <motion.svg
                className="absolute w-[305px] h-[305px] xl:w-[506px] xl:h-[506px] z-0"
                fill="transparent"
                viewBox="0 0 506 506"
            >
                <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
                        animate={
                            mounted
                                ? { strokeDasharray: ["15 120 25 25", "18 25 92 72", "4 25 22 22"] }
                                : { strokeDasharray: "24 10 0 0" }
                        }
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
