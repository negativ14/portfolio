import Image from "next/image";
import avatar from "@/assets/images/dp.jpg";
import ModeToggle from "./ui/theme-toggle";
import GithubIcon from "@/assets/icons/GithubIcon";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <nav className="w-full bg-background border-y px-4 py-2.5 flex justify-between items-center gap-4 shadow-md">
      <div className="flex items-center gap-2">
        <Image
          loading="lazy"
          src={avatar}
          alt="avatar"
          height={100}
          width={100}
          className="h-7 w-auto rounded-full object-cover border-2 border-neutral-600"
        />

        <h2 className="text-2xl tracking-tight font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-900 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-400">
          ROHIT
        </h2>
      </div>

      <div className="flex items-center gap-2 ">
        <ModeToggle />
        <a
          href="https://github.com/negativ14/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center justify-center p-2 border dark:border-neutral-700 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 active:scale-[0.8] cursor-pointer relative overflow-hidden",
            "before:content-[''] before:bg-white before:h-10 before:blur-sm before:w-4 before:absolute before:rotate-25 before:-translate-x-10 hover:before:translate-x-10 before:transition-all before:duration-400"
          )}
        >
          <GithubIcon className="h-4 w-auto text-muted-foreground" />
        </a>
      </div>
    </nav>
  );
}
