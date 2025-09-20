import GithubIcon2 from "@/assets/icons/GithubIcon2";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  techstack: string[];
  link: string;
  repo: string;
  className?: string;
}

export default function ProjectCard({
  image,
  title,
  description,
  techstack,
  link,
  repo,
  className,
}: ProjectCardProps) {
  return (
    <div className={cn("p-4 group h-auto", className)}>
      <div className="border bg-secondary flex flex-col justify-between gap-4 h-full w-full shadow-md">
        <div className="flex flex-col gap-4 px-4 pt-4">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="relative aspect-video rounded-xl overflow-hidden group/img">
              <Image
                src={image}
                alt="project image"
                data-img={title}
                loading="lazy"
                className="object-cover rounded-xl group-hover:scale-105 transition-all duration-300 group-hover:blur-[1px]"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 active:opacity-100">
                <h2 className="text-3xl md:text-5xl font-semibold text-white transform translate-y-5 group-hover:translate-y-0 transition-all duration-300">
                  {title}
                </h2>
                <ArrowUpRight className="absolute right-0 h-5 top-1 transition-transform duration-300 group-hover:scale-110 text-white group-hover/img:animate-caret-blink" />
              </div>
            </div>
          </a>

          <p className="text-muted-foreground text-xs max-w-[90%] px-2">
            {description}
          </p>
        </div>

        <a
          href={repo}
          rel="noopener noreferrer"
          target="_blank"
          className="w-full border-t flex justify-center items-center relative bg-background py-1 text-muted-foreground group cursor-pointer gap-2 hover:text-foreground group/github"
        >
          <GithubIcon2 className="h-4 w-auto" />
          Github
          <span>
            <ArrowUpRight className="absolute -right-1 h-3 top-1 transition-transform duration-300 group-hover:scale-110 group-hover/github:animate-caret-blink" />
          </span>
        </a>
      </div>
    </div>
  );
}
