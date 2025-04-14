"use client"
import Image from "next/image";
import { Button } from "./ui/Button";
import Download from "./icons/Download";

export default function Hero() {

    return (
        <section className="mt-56 px-6 md:px-12 lg:px-24 max-w-screen-xl mx-auto">
            <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">

                {/* Left Text Section */}
                <div className="text-center md:text-left">
                    <h2 className="text-xl md:text-2xl text-white mb-2 z-30 relative">
                        Hi there, I am a...
                    </h2>
                    <div className=" flex pl-10 md:block md:pl-0">
                        <h1 className="text-5xl  sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent z-30 relative">
                            Fullstack
                        </h1>
                        <span className="px-2 md:px-0"> </span>
                        <h1 className="text-5xl sm:text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent z-30 relative">
                            Developer
                        </h1>
                    </div>

                    {/* Tagline */}
                    <p className="mt-6 px-10 md:px-0 text-lg sm:text-xl text-gray-300 max-w-xl z-30 relative mb-6">
                        Writing clean code that works, reads well, and feels right. Simple, scalable, and always in dark mode.
                    </p>

                    <div className="flex justify-center md:justify-start items-center">
                        <a href="/CV.pdf" download>
                            <Button label="Download CV" alt="cv" icon={<Download />} />
                        </a>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="flex justify-center items-center">
                    <Image
                        src="/portfolio.png"
                        alt="Developer"
                        width={2000}
                        height={2000}
                        className="z-30"
                    />
                </div>
            </div>
        </section>
    );
}



