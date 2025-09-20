import { cn } from "@/lib/utils";
import * as React from "react";

export default function VercelIcon({ className }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" className={cn("dark:text-foreground",className)}>
      <path fill="currentColor" d="M64.002 8.576 128 119.424H0Zm0 0"></path>
    </svg>
  );
}
