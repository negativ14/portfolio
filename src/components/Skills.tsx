"use client"
import { backendSkills, database, devops, frontendSkills, tools } from "@/constants";
import { Button } from "./ui/Button";
import SectionHeading from "./ui/SectionHeading";
import { motion } from "motion/react"

export default function Skills() {
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
            id="skills" className="mt-2 px-6 sm:px-10 lg:px-20 flex flex-col z-30 relative">

            <SectionHeading title="Skills" />

            <div className="space-y-12 px-12 md:px-32">

                <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-purple-400 mb-4 hover:tracking-wider transition-all duration-300 ease-in-out">
                        Frontend
                    </h3>

                    <div className="flex flex-wrap gap-3 sm:gap-4">
                        {frontendSkills.map((skill, index) => (
                            <Button
                                key={index}
                                label={skill.name}
                                size={40}
                                alt={skill.name}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-purple-400 mb-4 hover:tracking-wider transition-all duration-300 ease-in-out">
                        Backend
                    </h3>

                    <div className="flex flex-wrap gap-3 sm:gap-4">
                        {backendSkills.map((skill, index) => (
                            <Button
                                key={index}
                                label={skill.name}
                                size={40}
                                alt={skill.name}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-purple-400 mb-4 hover:tracking-wider transition-all duration-300 ease-in-out">
                        Database & ORM
                    </h3>

                    <div className="flex flex-wrap gap-3 sm:gap-4">
                        {database.map((skill, index) => (
                            <Button
                                key={index}
                                label={skill.name}
                                size={40}
                                alt={skill.name}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-purple-400 mb-4 hover:tracking-wider transition-all duration-300 ease-in-out">
                        Devops
                    </h3>

                    <div className="flex flex-wrap gap-3 sm:gap-4">
                        {devops.map((skill, index) => (
                            <Button
                                key={index}
                                label={skill.name}
                                size={40}
                                alt={skill.name}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-purple-400 mb-4 hover:tracking-wider transition-all duration-300 ease-in-out">
                        Other Tools
                    </h3>

                    <div className="flex flex-wrap gap-3 sm:gap-4">
                        {tools.map((skill, index) => (
                            <Button
                                key={index}
                                label={skill.name}
                                size={40}
                                alt={skill.name}
                            />
                        ))}
                    </div>
                </div>


            </div>
        </motion.section>

    )
}