"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TextAnimation({
  texts = ["ROHIT", "NEGATIV"],
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseDuration = 2000,
  className = "",
  showCursor = true,
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex];

        if (isPaused) {
          setIsPaused(false);
          setIsDeleting(true);
          return;
        }

        if (isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length - 1));

          if (currentText === "") {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        } else {
          setCurrentText(fullText.substring(0, currentText.length + 1));

          if (currentText === fullText) {
            setIsPaused(true);
          }
        }
      },
      isPaused ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    isPaused,
    currentTextIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <div
      className={`relative h-[24px] overflow-hidden ${className}  flex items-center`}
    >
      <h2 className="text-2xl tracking-tight font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-900 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-400 h-8 flex items-center">
        {currentText}
        {showCursor && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="ml-1 text-current"
          >
            |
          </motion.span>
        )}
      </h2>
    </div>
  );
}
