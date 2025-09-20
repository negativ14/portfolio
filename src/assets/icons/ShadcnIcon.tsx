import { cn } from "@/lib/utils";
import * as React from "react";

export default function ShadcnIcon({
  className,
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      id="Shadcnui--Streamline-Simple-Icons"
      height="24"
      width="24"
      className={cn("text-foreground p-1", className)}
    >
      <path
        d="M22.219 11.784 11.784 22.219c-0.407 0.407 -0.407 1.068 0 1.476 0.407 0.407 1.068 0.407 1.476 0L23.695 13.26c0.407 -0.408 0.407 -1.069 0 -1.476 -0.408 -0.407 -1.069 -0.407 -1.476 0ZM20.132 0.305 0.305 20.132c-0.407 0.407 -0.407 1.068 0 1.476 0.408 0.407 1.069 0.407 1.476 0L21.608 1.781c0.407 -0.407 0.407 -1.068 0 -1.476 -0.408 -0.407 -1.069 -0.407 -1.476 0Z"
        fill="currentColor"
        strokeWidth="1"
      ></path>
    </svg>
  );
}
