'use client';

import { useState, useEffect } from 'react';

interface TerminalProps {
  commands: string[];
  loop?: boolean;
  typingSpeed?: number;
  blinkSpeed?: number;
}

export default function Terminal({
  commands,
  loop = false,
  typingSpeed = 50,
  blinkSpeed = 500,
}: TerminalProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [commandIndex, setCommandIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!isTyping) {
      const blinkInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, blinkSpeed);
      return () => clearInterval(blinkInterval);
    } else {
      setShowCursor(true);
    }
  }, [isTyping, blinkSpeed]);

  useEffect(() => {
    if (commandIndex < commands.length) {
      if (isTyping) {
        const typingInterval = setInterval(() => {
          if (charIndex < commands[commandIndex].length) {
            setDisplayedText((prev) => prev + commands[commandIndex].charAt(charIndex));
            setCharIndex((prev) => prev + 1);
          } else {
            clearInterval(typingInterval);
            setIsTyping(false);
            // Move to the next command after a delay
            setTimeout(() => {
              setIsTyping(true);
              setDisplayedText('');
              setCharIndex(0);
              setCommandIndex((prev) => (prev + 1) % commands.length);
            }, 1500); // Delay before starting next command
          }
        }, typingSpeed);
        return () => clearInterval(typingInterval);
      }
    } else if (loop) {
       // If loop is true and all commands are displayed, reset
       setTimeout(() => {
         setCommandIndex(0);
         setDisplayedText('');
         setCharIndex(0);
         setIsTyping(true);
       }, 1500); // Delay before looping
    }
  }, [commandIndex, charIndex, isTyping, commands, typingSpeed, loop]);

  return (
    <div className="bg-gray-900 text-green-400 font-mono text-sm p-4 rounded-md overflow-auto">
      <pre>
        {displayedText}
        {showCursor && <span className="animate-blink">█</span>}
      </pre>
    </div>
  );
}