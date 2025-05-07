"use client"
import SectionHeading from "./ui/SectionHeading";
import { motion } from "motion/react"

export default function About() {
    return (
        <motion.section
            initial={{
                y: -50,
                opacity: 0
            }}
            // animate={{
            //     y: 0,
            //     opacity: 1,
            // }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.5,
                ease: "easeOut",
            }}
            id="about" className="py-20 px-4 md:px-12 lg:px-24 max-w-screen-xl mx-auto relative z-30 mt-16">

            <SectionHeading title="About me" />

            <p className="text-white text-lg leading-relaxed px-12 md:px-2">
                I’m currently pursuing my Bachelor of Computer Applications at <span className="font-semibold">Ballari Business College</span>, and I'm expected to graduate in <span className="font-semibold">June 2025</span> with a CGPA of <span className="font-semibold">8.5</span> out of 10.
                <br /><br />
                My coding journey began in the first semester with C++ and Data Structures. Since then, I’ve solved over <span className="font-semibold">250 questions on LeetCode</span>, gaining strong problem-solving skills.
                <br /><br />
                Later, I transitioned into full-stack web development and have accumulated over <span className="font-semibold">6 months</span> of hands-on experience. During this time, I built several full-stack projects including <span className="font-semibold">CodeIt</span> and <span className="font-semibold">QuickChat</span>, showcasing my skills in building scalable, functional apps.
                <br /><br />
                I’m passionate about clean, efficient code and constantly improving. As a <span className="font-semibold">fresher</span>, I’m actively seeking opportunities where I can contribute and grow.
            </p>
        </motion.section>
    );
}
