"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

const VideoModal: React.FC<{ videoUrl: string; trigger: React.ReactNode }> = ({ videoUrl, trigger }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Trigger button */}
            <div onClick={() => setIsOpen(true)} className="inline-block cursor-pointer">
                {trigger}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative bg-black rounded-2xl shadow-xl max-w-3xl w-full aspect-video"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute -top-10 right-0 text-white text-2xl hover:text-red-500"
                            >
                                <X />
                            </button>

                            {/* Video Embed */}
                            <iframe
                                className="w-full h-full rounded-2xl"
                                src={videoUrl}
                                title="Elevator Pitch"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default VideoModal;
