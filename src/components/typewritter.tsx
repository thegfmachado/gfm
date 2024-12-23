"use client";

import React, { useState, useEffect } from "react";

type TypewriterProps = {
  words: string[];
};

export function Typewriter(props: TypewriterProps) {
  const { words } = props;

  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const type = () => {
      const currentWordText = words[wordIndex];

      if (isDeleting) {
        setCurrentWord(currentWordText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        setCurrentWord(currentWordText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === currentWordText.length) {
          setIsPaused(true);
          setTimeout(() => setIsPaused(false), 500);
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(type, 75);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, isPaused, wordIndex, words]);

  return <span className="block min-h-10">{currentWord}</span>;
}
