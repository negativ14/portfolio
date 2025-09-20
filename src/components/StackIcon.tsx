"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface StackIconProps {
  children: React.ReactNode;
}

export default function StackIcon({ children }: StackIconProps) {
  const [touched, setTouched] = useState(false);

  const handleTouch = () => {
    setTouched(true);
    setTimeout(() => setTouched(false), 500);
  };

  return (
    <div
      onTouchStart={handleTouch}
      className={cn(
        "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:border p-2 size-10 rounded-lg cursor-pointer relative overflow-hidden bg-secondary",
        "before:content-[''] before:bg-white before:h-10 before:blur-sm before:w-3 before:absolute before:rotate-25 before:-translate-x-10 before:transition-all before:duration-400",
        "hover:before:translate-x-10",
        touched && "before:translate-x-10"
      )}
    >
      {children}
    </div>
  );
}
