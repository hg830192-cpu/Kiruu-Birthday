import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { memories } from '../data/birthdayData';

export const Section8JokesApart: React.FC = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Softly cycle ambient background photos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % memories.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const wishes = [
    "I genuinely wish you the happiest birthday.",
    "May this year bring you happiness, peace, success and countless reasons to smile.",
    "May you always have people around you who genuinely care about you.",
    "May you get everything you've been working and praying for.",
    "May this year give you memories that you'll look back on with a huge smile.",
    "You deserve happiness, success and beautiful moments.",
  ];

  return (
    <section id="jokes-apart" className="relative min-h-screen w-full flex items-center justify-center px-4 py-24 bg-gradient-to-b from-[#FFF0F5] via-[#FFE4EC] to-[#FCE7F3] text-slate-800 overflow-hidden">
      {/* Ambient background photo slideshow (soft & dreamy) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10 transition-opacity duration-1000">
        {memories.map((mem, i) => (
          <img
            key={mem.id}
            src={mem.image}
            alt="Ambient background"
            onError={(e) => {
              (e.target as HTMLImageElement).src = mem.fallbackImage;
            }}
            className={`absolute inset-0 w-full h-full object-cover filter blur-md transition-opacity duration-1000 ease-in-out ${
              i === currentBgIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Gentle floating slow sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 text-pink-300 opacity-40 animate-pulse-soft text-xl">✦</div>
        <div className="absolute bottom-1/4 right-1/6 text-pink-300 opacity-40 animate-pulse-soft text-xl" style={{ animationDelay: '2s' }}>✧</div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto w-full text-center">
        {/* Soft atmospheric badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/60 border border-pink-200 text-pink-700 text-xs font-medium tracking-widest uppercase mb-6 shadow-xs backdrop-blur-xs">
          <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400 inline" />
          <span>From The Heart</span>
        </div>

        {/* Heading */}
        <div className="space-y-1 mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-pink-900 tracking-tight">
            OKAY MINUS 2...
          </h2>
          <h3 className="text-3xl sm:text-5xl font-serif-display font-bold text-slate-900 tracking-tight">
            JOKES APART 🥹🩷
          </h3>
        </div>

        {/* Heartfelt Wishes Card */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-14 border border-pink-200/90 shadow-xl shadow-pink-200/50 space-y-6 text-slate-700 leading-relaxed font-serif-display">
          {wishes.map((line, idx) => (
            <p
              key={idx}
              className="text-base sm:text-xl font-normal leading-relaxed text-slate-700 tracking-wide"
            >
              {line}
            </p>
          ))}

          <div className="pt-6 border-t border-pink-100">
            <p className="text-2xl sm:text-3xl font-serif-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 drop-shadow-xs">
              Happy Birthday, Kiran. ❤️
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
