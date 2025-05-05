"use client";
import Image from "next/image";
import { Button } from "./ui/Button";
import Download from "./icons/Download";

export default function Hero() {
    return (
        <section className="mt-40 px-6 md:px-12 lg:px-24 max-w-screen-xl mx-auto">
            <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">

                <div className="text-center md:text-left w-full">
                    <h2 className="text-xl md:text-2xl text-white mb-2 z-30 relative">
                        Hi there, I am a...
                    </h2>


                    <div className="flex md:hidden justify-center">
                        <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent z-30 relative">
                            Fullstack Developer
                        </h1>
                    </div>


                    <div className="hidden md:flex flex-col items-start text-left">
                        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent z-30 relative">
                            Fullstack
                        </h1>
                        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent z-30 relative">
                            Developer
                        </h1>
                    </div>




                    <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl z-30 relative mb-6 mx-auto md:mx-0">
                        Writing clean code that works, reads well, and feels right. Simple, scalable, and always in dark mode.
                    </p>

                    <div className="flex justify-center md:justify-start items-center">
                        <a href="/CV.pdf" download>
                            <Button label="Download CV" alt="cv" icon={<Download />} />
                        </a>
                    </div>
                </div>


                <div className="flex justify-center items-center w-full">
                    <Image
                        src="/portfolio.png"
                        alt="Developer"
                        width={1000}
                        height={1000}
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg z-30"
                    />
                </div>
            </div>
        </section>
    );
}
