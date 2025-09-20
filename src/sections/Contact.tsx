"use client";
import MailIcon from "@/assets/icons/MailIcon";
import XIcon from "@/assets/icons/XIcon";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Contact() {
  const [activeId, setActiveId] = useState<string | null>(null);
  return (
    <section className="w-full bg-background border-y shadow-md">
      <h2 className="font-semibold text-2xl text-foreground/80 border-b px-4 py-2 tracking-tight">
        Contact
      </h2>

      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t mt-4">
        <a
          onTouchStart={() => setActiveId("mail")}
          onTouchEnd={() => setActiveId(null)}
          href="mailto:email.rohitmehta@gmail.com"
          target="_blank"
          rel="noopner noreferrer"
          className={cn(
            "flex items-center px-4 py-3 gap-4 hover:bg-secondary/50 cursor-pointer",
            activeId === "mail" && "bg-secondary/50"
          )}
        >
          <div
            className={cn(
              "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:border p-2 size-10 rounded-lg flex justify-center items-center relative cursor-pointer overflow-hidden",
              "before:content-[''] before:bg-white before:h-10 before:blur-sm before:w-3 before:absolute before:rotate-25 before:-translate-x-10 hover:before:translate-x-10 before:transition-all before:duration-400",
              "active:before:translate-x-10"
            )}
          >
            <MailIcon className="h-4.5" />
          </div>
          <div className="flex flex-col">
            <h4 className="font-medium">Mail</h4>
            <p className="text-xs text-muted-foreground font-mono ">
              email.rohitmehta@gmail.com
            </p>
          </div>
        </a>

        <a
          onTouchStart={() => setActiveId("x")}
          onTouchEnd={() => setActiveId(null)}
          href="https://x.com/RohitMehta1409"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center px-4 py-3 gap-4 hover:bg-secondary/50 cursor-pointer",
            activeId === "x" && "bg-secondary/50"
          )}
        >
          <div
            className={cn(
              "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:border p-2 size-10 rounded-lg cursor-pointer relative overflow-hidden",
              "before:content-[''] before:bg-white before:h-10 before:blur-sm before:w-3 before:absolute before:rotate-25 before:-translate-x-10 hover:before:translate-x-10 before:transition-all before:duration-400",
              activeId === "x" ? "before:translate-x-10" : ""
            )}
          >
            <XIcon />
          </div>
          <div className="flex flex-col">
            <h4 className="font-medium">X</h4>
            <p className="text-xs text-muted-foreground font-mono">
              RohitMehta1409
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
