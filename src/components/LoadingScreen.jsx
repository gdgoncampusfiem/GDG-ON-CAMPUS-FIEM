import { useState, useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, settext] = useState("");
  const fulltext = [
    "Semicolons matter.",
    "Semicolon saves lives.",
    "99 bugs left.",
    "Oops, semicolon.",
    "404 Sleep not found.",
  ];
  const randomQuote = fulltext[Math.floor(Math.random() * fulltext.length)];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      settext(randomQuote.substring(0, index));
      index++;
      if (index > randomQuote.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-white text-gray-900 flex flex-col items-center justify-center">
      {/* </> logo */}
      <div className="text-6xl font-extrabold text-[#3b82f6] mb-6 animate-pulse">
        &lt;/&gt;
      </div>

      {/* animated text */}
      <div className="mb-4 text-4xl font-bold font-mono">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      {/* progress bar */}
      <div className="w-[350px] h-[3px] bg-gray-300 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-[#3b82f6] shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
