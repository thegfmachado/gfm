"use client";

import * as React from 'react';

type TypewriterProps = {
  words: string[];
};

export function Typewriter(props: TypewriterProps) {
  const { words } = props;

  const [currentWord, setCurrentWord] = React.useState("");
  const [wordIndex, setWordIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (isPaused) {
      return;
    };

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

  return <span className="block min-h-10 min-w-10">{currentWord}</span>;
}
