"use client"
import Github from "./icons/Github";
import LinkedIn from "./icons/LinkedIn";
import Twitter from "./icons/Twitter";
import CircleButton from "./ui/CircleButton";
import { motion } from "motion/react"

export const SocialMedia = () => {
    return (
        <motion.div
        initial={{
            x:-50,
            opacity:0
        }}
        animate={{
            x:0,
            opacity:1
        }}
        transition={{
            duration:0.5,
            ease: "easeOut",
        }}
         className="fixed z-30 flex-col gap-y-4 left-10 top-72 hidden xl:flex">
            <a href="https://twitter.com/RohitMehta1409" target="_blank" rel="noopener noreferrer">
                <CircleButton svg={<Twitter />} />
            </a>
            <a href="https://github.com/negativ14" target="_blank" rel="noopener noreferrer">
                <CircleButton svg={<Github />} />
            </a>
            <a href="https://linkedin.com/in/rohitmehta14" target="_blank" rel="noopener noreferrer">
                <CircleButton svg={<LinkedIn />} />
            </a>
        </motion.div>
    );
};
