"use client"
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

    // const form = useRef<HTMLFormElement | string>()
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        // console.log(process.env.SERVICE_ID!, process.env.TEMPLATE_ID!)

        emailjs
            .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID!, process.env.NEXT_PUBLIC_TEMPLATE_ID!, form.current as HTMLFormElement, {
                publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
            })
            .then(
                () => {
                    toast.success("Mail sent successfully")
                },
                (error) => {
                    toast.error("Failed to send Mail!")
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <section id="contact" className="mt-20 mb-12 md:mb-2 px-6 sm:px-10 lg:px-20 relative z-30">
            <div className="w-full max-w-5xl mx-auto">

                <SectionHeading title="Contact me" />

                {/* Contact Content */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mt-6 md:mt-24">
                    {/* Left Part */}
                    <div className="flex-1 space-y-6 text-lg text-white px-10 md:px-0">

                        <div className="flex items-center gap-3 mr-18 md:mr-0  mt-4 md:mt-8 justify-center md:justify-start">
                            <Image src="/mail.png" alt="email" width={30} height={30} />
                            <span>email.rohitmehta@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-3 mr-8 md:mr-0 justify-center md:justify-start">
                            <Image src="/location.png" alt="location" width={30} height={30} />
                            <span>S.H.Town, Ballari, Karnataka, India</span>
                        </div>

                        <div className="hidden md:flex justify-center md:mr-60">
                            <Image src="/hire-me-click.png" alt="Hire me" width={250} height={250} className="rounded-xl" />
                        </div>

                        <div className="flex gap-3 md:hidden pt-2 justify-start">
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

                    {/* Right Part - Contact Form */}
                    <div >

                        <form ref={form} onSubmit={sendEmail} className="flex-1 w-full md:w-96 space-y-4 px-10 md:px-0">
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Name"
                                className="w-full border-2 border-purple-500 rounded-lg py-2 px-4 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                required
                            />

                            {/* Replace SafeEmailInput with a regular input if it doesn't support 'name' prop */}
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



// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
//         publicKey: 'YOUR_PUBLIC_KEY',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };