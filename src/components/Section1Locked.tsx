import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Lock, Unlock, Sparkles, Heart, Clock, Play } from 'lucide-react';
import { birthdayPerson } from '../data/birthdayData';

interface Section1LockedProps {
  onUnlock: () => void;
}

export const Section1Locked: React.FC<Section1LockedProps> = ({ onUnlock }) => {
  const [timeRemaining, setTimeRemaining] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isPastMidnight, setIsPastMidnight] = useState(false);

  // Midnight countdown calculation
  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const targetMidnight = new Date(now);
      targetMidnight.setHours(24, 0, 0, 0);

      const currentHours = now.getHours();
      if (currentHours === 0 && now.getMinutes() < 60) {
        setIsPastMidnight(true);
      }

      const diffMs = targetMidnight.getTime() - now.getTime();
      if (diffMs <= 0) {
        setIsPastMidnight(true);
        setTimeRemaining({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor(diffMs / (1000 * 60 * 60));
        const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
        setTimeRemaining({ hours, minutes, seconds });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleUnlockClick = () => {
    confetti({
      particleCount: 100,
      spread: 120,
      origin: { y: 0.6 },
      colors: ['#FF8FAB', '#FFB6C8', '#FFD1DC', '#FFE4EC', '#FB6F92', '#FDE047'],
    });

    onUnlock();
  };

  const handleMinusTwoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.dispatchEvent(
      new CustomEvent('minus-two-fly', {
        detail: { x: e.clientX, y: e.clientY },
      })
    );
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#2B0920] via-[#4A0E35] to-[#731952] text-white px-4 py-12">
      {/* Starry night glow & ambient nebula circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Floating star sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-10 text-pink-300 opacity-60 animate-sparkle text-xl">✦</div>
        <div className="absolute top-28 right-16 text-pink-200 opacity-40 animate-sparkle text-sm" style={{ animationDelay: '1s' }}>✧</div>
        <div className="absolute bottom-32 left-20 text-pink-300 opacity-50 animate-sparkle text-lg" style={{ animationDelay: '1.5s' }}>✦</div>
        <div className="absolute bottom-20 right-28 text-pink-200 opacity-70 animate-sparkle text-xl" style={{ animationDelay: '0.5s' }}>✧</div>
        <div className="absolute top-1/2 left-8 text-pink-400 opacity-30 text-xs">✨</div>
        <div className="absolute top-1/3 right-10 text-pink-300 opacity-40 text-sm">✨</div>
      </div>

      <div className="relative z-20 max-w-xl w-full text-center flex flex-col items-center">
        {/* Main Locked Card - ALWAYS DIRECTLY VISIBLE */}
        <div className="bg-white/10 backdrop-blur-2xl border border-pink-300/30 rounded-3xl p-6 sm:p-10 w-full shadow-2xl shadow-pink-900/50 transition-all duration-500">
          
          {/* Header Tag */}
          <div className="flex items-center justify-center gap-2 mb-4 text-pink-300 text-xs font-mono uppercase tracking-widest">
            <span className="inline-block w-2 h-2 rounded-full bg-pink-400 animate-ping" />
            <span>SPECIAL BIRTHDAY SURPRISE DETECTED</span>
          </div>

          {/* Recipient Identity */}
          <div className="space-y-1 mb-6">
            <p className="text-pink-200 text-sm font-light">
              Crafted exclusively for
            </p>
            <h1 className="text-3xl sm:text-4xl font-serif-display font-bold text-white tracking-wide drop-shadow-[0_2px_10px_rgba(255,182,200,0.5)]">
              {birthdayPerson.name}
            </h1>
            <div className="pt-1">
              <button
                onClick={handleMinusTwoClick}
                className="cursor-pointer group inline-block transition-transform transform hover:scale-105"
                title="Click to unleash -2!"
              >
                <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-pink-400 to-rose-300 drop-shadow-[0_0_12px_rgba(255,143,171,0.6)]">
                  MINUS 2 🎀
                </span>
              </button>
            </div>
          </div>

          {/* Locked status banner */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-950/70 border border-pink-400/40 text-pink-200 text-xs sm:text-sm font-semibold mb-6">
            <Lock className="w-4 h-4 text-pink-400 animate-pulse" />
            <span>🔒 BIRTHDAY SURPRISE LOCKED</span>
          </div>

          {/* Live Midnight Countdown Display */}
          <div className="bg-black/35 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-pink-500/25 mb-8">
            <div className="flex items-center justify-center gap-1.5 text-xs text-pink-300 mb-3 font-mono">
              <Clock className="w-3.5 h-3.5" />
              <span>{isPastMidnight ? "IT'S 12:00 AM! THE TIME HAS ARRIVED 🥳" : "COUNTDOWN TO 12:00 AM MIDNIGHT"}</span>
            </div>

            {!isPastMidnight ? (
              <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
                <div className="bg-pink-950/60 rounded-xl p-2.5 border border-pink-500/30">
                  <span className="text-2xl sm:text-3xl font-black text-pink-200 font-mono tabular-nums">
                    {String(timeRemaining.hours).padStart(2, '0')}
                  </span>
                  <span className="block text-[10px] uppercase tracking-wider text-pink-400 font-mono mt-1">Hours</span>
                </div>
                <div className="bg-pink-950/60 rounded-xl p-2.5 border border-pink-500/30">
                  <span className="text-2xl sm:text-3xl font-black text-pink-200 font-mono tabular-nums">
                    {String(timeRemaining.minutes).padStart(2, '0')}
                  </span>
                  <span className="block text-[10px] uppercase tracking-wider text-pink-400 font-mono mt-1">Mins</span>
                </div>
                <div className="bg-pink-950/60 rounded-xl p-2.5 border border-pink-500/30">
                  <span className="text-2xl sm:text-3xl font-black text-pink-200 font-mono tabular-nums">
                    {String(timeRemaining.seconds).padStart(2, '0')}
                  </span>
                  <span className="block text-[10px] uppercase tracking-wider text-pink-400 font-mono mt-1">Secs</span>
                </div>
              </div>
            ) : (
              <div className="text-pink-200 font-serif-display text-base sm:text-lg italic py-1">
                ✨ The clock has struck midnight! Time to unlock your world. ✨
              </div>
            )}
          </div>

          {/* PRIMARY ENTER SURPRISE BUTTON */}
          <div className="space-y-3">
            <button
              onClick={handleUnlockClick}
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 hover:from-pink-400 hover:to-rose-400 text-white font-extrabold text-base sm:text-xl shadow-xl shadow-pink-500/50 hover:shadow-pink-400/70 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer ring-4 ring-pink-400/30"
            >
              <Unlock className="w-6 h-6 transition-transform group-hover:scale-110" />
              <span>🎀 ENTER THE SURPRISE 🎀</span>
              <Sparkles className="w-6 h-6 text-amber-200 animate-spin" style={{ animationDuration: '5s' }} />
            </button>

            <p className="text-xs text-pink-300 font-medium">
              Click the button above to unlock the surprise and start the music! 🎵
            </p>
          </div>

          {/* Quick Actions Footer */}
          <div className="mt-8 pt-4 border-t border-pink-400/20 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs">
            <button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(window.location.href);
                  alert("Birthday link copied to clipboard! 🎀");
                } catch {
                  // Fallback
                }
              }}
              className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-pink-200 hover:text-white border border-pink-400/30 transition-all flex items-center gap-1.5"
            >
              <span>🔗 Copy Gift Link to Send</span>
            </button>
            <span className="text-pink-300/80 font-light flex items-center justify-center gap-1">
              <Heart className="w-3 h-3 text-pink-400 inline" fill="currentColor" />
              Sound recommended!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
