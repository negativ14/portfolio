"use client"
import { motion } from "motion/react"

export const Footer = () => {
    return (
        <motion.footer
            initial={{
                y: -50,
                opacity: 0
            }}
            
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.5,
                ease: "easeOut",
            }}
            className="mt-8 my-6 px-4">
            {/* Gradient divider line */}
            <div
                className="h-[2px] w-full mb-6"
                style={{
                    background: "linear-gradient(to right, transparent 0%, white 50%, transparent 100%)"
                }}
            ></div>


            <div className="text-center text-gray-300 text-lg">
                <h1>Thanks for visiting...</h1>
            </div>
        </motion.footer>
    );
};
