import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';

interface PlayfulGateProps {
  question: string;
  yesButtonLabel: string;
  noButtonLabel?: string;
  onAdvance: () => void;
  chapterNumber: number;
}

const RUNAWAY_PHRASES = [
  "No way 🙄",
  "Nice try, Minus 2! 😂",
  "Can't click this! 🏃‍♀️",
  "Not an option! 😜",
  "You HAVE to see this! 🎀",
  "Oops, too slow! 💨",
  "Click YES already! 🩷",
];

export const PlayfulGate: React.FC<PlayfulGateProps> = ({
  question,
  yesButtonLabel,
  noButtonLabel = "No 🙄",
  onAdvance,
  chapterNumber,
}) => {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [dodgeCount, setDodgeCount] = useState(0);
  const [noLabel, setNoLabel] = useState(noButtonLabel);
  const containerRef = useRef<HTMLDivElement>(null);

  const dodgeNoButton = () => {
    // Generate random offset within boundary
    const randomX = (Math.random() - 0.5) * 260;
    const randomY = (Math.random() - 0.5) * 160;

    setNoPosition({ x: randomX, y: randomY });
    setDodgeCount((prev) => {
      const next = prev + 1;
      setNoLabel(RUNAWAY_PHRASES[next % RUNAWAY_PHRASES.length]);
      return next;
    });
  };

  const handleYesClick = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#FF8FAB', '#FFB6C8', '#FFD1DC', '#FFE4EC', '#FB6F92'],
    });
    onAdvance();
  };

  return (
    <div
      ref={containerRef}
      className="my-14 p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border-2 border-pink-300 shadow-xl shadow-pink-200/50 max-w-xl mx-auto text-center relative overflow-hidden"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold mb-3">
        <Sparkles className="w-3.5 h-3.5 text-pink-500" />
        <span>Chapter {chapterNumber} Unlocked</span>
      </div>

      <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-slate-800 mb-6">
        {question}
      </h3>

      <div className="relative min-h-[90px] flex items-center justify-center gap-4 flex-wrap">
        {/* The YES button */}
        <button
          onClick={handleYesClick}
          className="group relative px-7 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-pink-400/40 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
        >
          <span>{yesButtonLabel}</span>
          <Heart className="w-4 h-4 fill-white text-white group-hover:scale-125 transition-transform" />
        </button>

        {/* The runaway NO button (cursor cannot click!) */}
        <button
          onMouseEnter={dodgeNoButton}
          onClick={dodgeNoButton}
          onTouchStart={dodgeNoButton}
          style={{
            transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
            transition: 'transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
          className="px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs sm:text-sm font-medium border border-slate-300 shadow-xs cursor-not-allowed select-none transition-colors"
        >
          {noLabel}
        </button>
      </div>

      {dodgeCount > 0 && (
        <p className="mt-3 text-[11px] text-pink-500 font-medium italic animate-fade-in">
          (Minus 2, you know you can't say no! 😂)
        </p>
      )}
    </div>
  );
};
