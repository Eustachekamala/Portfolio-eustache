"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={pathname}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.15, ease: "easeOut" } }}
                exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.15, ease: "easeIn" } }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;
