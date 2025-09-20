import { cn } from "@/lib/utils";
import * as React from "react";

export default function SocketioIcon({
  className,
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" className={cn("text-foreground", className)}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M63.951.001C28.696.001.001 28.696.001 63.951s28.695 63.95 63.95 63.95 63.95-28.695 63.95-63.95S99.206.001 63.95.001zm0 10.679c29.484 0 53.272 23.787 53.272 53.271 0 29.485-23.788 53.272-53.272 53.272-29.484 0-53.272-23.787-53.272-53.272 0-29.484 23.788-53.271 53.272-53.271z"
          fillRule="nonzero"
        ></path>
        <path d="M48.39 60.716c14.004-11.44 27.702-23.278 42.011-34.384-7.505 11.533-15.224 22.913-22.729 34.445-6.437.03-12.875.03-19.282-.061zM60.228 67.092c6.468 0 12.905 0 19.342.092-14.095 11.38-27.732 23.309-42.071 34.384 7.505-11.533 15.224-22.943 22.729-34.476z"></path>
      </g>
    </svg>
  );
}
