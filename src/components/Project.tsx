'use client'
import { projects } from "@/constants";
import { Card } from "./ui/Card";
import SectionHeading from "./ui/SectionHeading";
import { motion } from "motion/react"

export default function Project() {
    return (
        <motion.section
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
            id="project" className="mt-16 mb-10 px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Projects" />
            <div className="max-w-screen-xl mx-auto">
                <motion.div
                    initial={{
                        y: -50,
                        opacity: 0
                    }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-items-center">
                    {projects.slice(0, 3).map((pro, index) => (
                        <Card key={index} title={pro.title} link={pro.link} image={pro.image} />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
