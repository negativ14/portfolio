import React from "react";

export default function ButtonIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="inline-flex items-center justify-center p-2 border dark:border-neutral-700 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 active:scale-[0.8] cursor-pointer text-muted-foreground">
      {children}
    </button>
  );
}
