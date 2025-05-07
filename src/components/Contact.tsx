"use client";
import Image from "next/image";
import CircleButton from "./ui/CircleButton";
import Twitter from "./icons/Twitter";
import Github from "./icons/Github";
import LinkedIn from "./icons/LinkedIn";
import SafeEmailInput from "./ui/SafeEmailInput";
import SectionHeading from "./ui/SectionHeading";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import toast from "react-hot-toast";

export default function Contact() {
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID!,
                process.env.NEXT_PUBLIC_TEMPLATE_ID!,
                form.current as HTMLFormElement,
                {
                    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    toast.success("Mail sent successfully");
                },
                (error) => {
                    toast.error("Failed to send Mail!");
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <section id="contact" className="mt-20 mb-12 md:mb-2 px-6 sm:px-10 lg:px-20 relative z-30">
            <div className="w-full max-w-5xl mx-auto">
                <SectionHeading title="Contact me" />

                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mt-6 md:mt-24">

                    <div className="flex-1 space-y-6 text-lg text-white px-4 sm:px-10 md:px-0 text-center md:text-left">
                        <div className="flex flex-row items-center justify-center md:justify-start gap-3 mt-4 md:mt-8">
                            <div className="flex justify-center items-center w-8 h-8">
                                <Image src="/mail.png" alt="email" width={30} height={30} />
                            </div>
                            <span>email.rohitmehta@gmail.com</span>
                        </div>

                        <div className="flex flex-row items-center justify-center md:justify-start gap-3">
                            <div className="flex justify-center items-center w-8 h-8">
                                <Image src="/location.png" alt="location" width={30} height={30} />
                            </div>
                            <span>S.H.T, Ballari, Karnataka, India</span>
                        </div>

                        <div className="hidden md:flex justify-center md:justify-start">
                            <Image src="/hire-me-click.png" alt="Hire me" width={250} height={250} className="rounded-xl" />
                        </div>

                        <div className="flex gap-4 md:hidden pt-2 justify-center">
                            <a href="https://twitter.com/RohitMehta1409" target="_blank" rel="noopener noreferrer">
                                <CircleButton svg={<Twitter />} />
                            </a>
                            <a href="https://github.com/negativ14" target="_blank" rel="noopener noreferrer">
                                <CircleButton svg={<Github />} />
                            </a>
                            <a href="https://linkedin.com/in/rohitmehta14" target="_blank" rel="noopener noreferrer">
                                <CircleButton svg={<LinkedIn />} />
                            </a>
                        </div>
                    </div>


                    <div className="flex-1 w-full">
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="w-full md:w-96 space-y-4 px-4 sm:px-10 md:px-0"
                        >
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Name"
                                className="w-full border-2 border-purple-500 rounded-lg py-2 px-4 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                required
                            />


                            <SafeEmailInput />

                            <textarea
                                name="message"
                                placeholder="Type a message..."
                                rows={4}
                                className="w-full border-2 border-purple-500 rounded-lg py-2 px-4 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                                required
                            />

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="border-2 border-purple-500 rounded-lg py-2 px-4 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}