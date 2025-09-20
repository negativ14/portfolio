"use client";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants/project";
import { ChevronsDown, ChevronsUp } from "lucide-react";
import { useState } from "react";

export default function Project() {
  const [expanded, setExpanded] = useState<boolean>(false);

  const visibleProjects = expanded ? projects : projects.slice(0, 4);

  return (
    <main className="w-full border-y bg-background shadow-md">
      <h2 className="text-2xl tracking-tight px-4 py-2 text-foreground/80 border-b font-semibold">
        Project
      </h2>

      <div className="grid md:grid-cols-2 divide-x divide-y items-stretch">
        {visibleProjects.map((project, index) => {
          const isLastOdd =
            visibleProjects.length % 2 === 1 &&
            index === visibleProjects.length - 1;
          return (
            <ProjectCard
              key={project.id}
              {...project}
              className={
                isLastOdd
                  ? "border-r border-b border-gray-200 dark:border-gray-700"
                  : ""
              }
            />
          );
        })}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full border-t flex justify-center items-center py-2 hover:bg-muted/50 transition-colors group/expand"
      >
        {expanded ? "Collapse" : "Expand"}
        {expanded ? (
          <ChevronsUp className="h-4 ml-1 group-hover/expand:animate-bounce" />
        ) : (
          <ChevronsDown className="h-4 ml-1 group-hover/expand:animate-bounce" />
        )}
      </button>
    </main>
  );
}
