import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Cake, Heart, ArrowDown } from 'lucide-react';
import { birthdayPerson } from '../data/birthdayData';

interface Section2RevealProps {
  onScrollNext: () => void;
}

export const Section2Reveal: React.FC<Section2RevealProps> = ({ onScrollNext }) => {
  const [gifLoaded, setGifLoaded] = useState(false);
  const [gifError, setGifError] = useState(false);

  // Trigger continuous festive confetti blast on mount
  useEffect(() => {
    const end = Date.now() + 2.5 * 1000;
    const colors = ['#FF8FAB', '#FFB6C8', '#FFD1DC', '#FFE4EC', '#FB6F92', '#FDE047'];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  const handleMinusTwoClick = (e: React.MouseEvent) => {
    window.dispatchEvent(
      new CustomEvent('minus-two-fly', {
        detail: { x: e.clientX, y: e.clientY },
      })
    );
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 text-center overflow-hidden bg-gradient-to-b from-[#FFF0F5] via-[#FFE4EC] to-[#FFD1DC]">
      {/* Decorative ambient elements */}
      <div className="absolute top-12 left-8 md:left-24 text-3xl md:text-5xl animate-gentle-float opacity-70">
        🎀
      </div>
      <div className="absolute top-20 right-8 md:right-28 text-3xl md:text-5xl animate-gentle-float opacity-70" style={{ animationDelay: '1.2s' }}>
        🎂
      </div>
      <div className="absolute bottom-24 left-10 md:left-32 text-3xl md:text-4xl animate-gentle-float opacity-60" style={{ animationDelay: '2s' }}>
        🌸
      </div>
      <div className="absolute bottom-20 right-12 md:right-36 text-3xl md:text-4xl animate-gentle-float opacity-60" style={{ animationDelay: '0.8s' }}>
        ✨
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-6">
        {/* Floating badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-pink-300 text-pink-700 shadow-sm backdrop-blur-xs text-xs sm:text-sm font-semibold tracking-wide">
          <Sparkles className="w-4 h-4 text-pink-500 animate-spin" style={{ animationDuration: '4s' }} />
          <span>OFFICIAL MIDNIGHT CELEBRATION</span>
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
        </div>

        {/* Primary Birthday Header */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-display font-extrabold text-slate-900 tracking-tight leading-tight">
            HAPPY BIRTHDAY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 drop-shadow-[0_2px_8px_rgba(255,143,171,0.5)]">
              {birthdayPerson.name.toUpperCase()}!
            </span>{' '}
            <span className="inline-block animate-bounce">🎂</span>
          </h1>

          <div className="pt-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-handwriting font-bold text-pink-700">
              Happy Birthday,{' '}
              <button
                onClick={handleMinusTwoClick}
                className="underline decoration-pink-400 decoration-wavy underline-offset-8 hover:text-pink-900 transition-colors"
                title="Click to unleash -2!"
              >
                Minus 2! 🎀
              </button>
            </h2>
          </div>
        </div>

        {/* Funny Subtitle */}
        <p className="max-w-xl text-base sm:text-lg text-slate-700 font-medium leading-relaxed bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-pink-200 shadow-sm">
          Congratulations! You have successfully completed another year of being Minus 2. 😂🩷
        </p>

        {/* Cute GIPHY Celebration GIF or CSS Fallback */}
        <div className="relative mt-4 w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden bg-white/80 border-4 border-pink-200 shadow-xl shadow-pink-300/30 flex items-center justify-center p-2 group transition-transform duration-300 hover:scale-105">
          {/* Scrapbook corner tapes */}
          <div className="washi-tape -top-3 -left-4 -rotate-45" />
          <div className="washi-tape -top-3 -right-4 rotate-45" />

          {!gifError ? (
            <img
              src="https://media.giphy.com/media/g5R9dok94mrIvplmZd/giphy.gif"
              alt="Cute birthday celebration dance"
              className={`w-full h-full object-cover rounded-2xl transition-opacity duration-300 ${
                gifLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setGifLoaded(true)}
              onError={() => setGifError(true)}
            />
          ) : null}

          {/* CSS Animation Fallback if GIF fails */}
          {(!gifLoaded || gifError) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-tr from-pink-100 to-rose-50 text-center">
              <div className="relative mb-3">
                <Cake className="w-16 h-16 text-pink-500 animate-bounce" />
                <Sparkles className="w-6 h-6 text-amber-400 absolute -top-2 -right-2 animate-spin" />
              </div>
              <p className="font-handwriting text-2xl text-pink-700 font-bold">Party Time! 🥳</p>
              <p className="text-xs text-slate-600 mt-1">Ready for cake, laughs, and chaos!</p>
            </div>
          )}
        </div>

        {/* Jump to next chapter indicator */}
        <div className="pt-6">
          <button
            onClick={onScrollNext}
            className="group flex flex-col items-center gap-1.5 text-xs font-semibold text-pink-700 hover:text-pink-900 transition-colors"
          >
            <span>Scroll down to discover the legend</span>
            <div className="w-9 h-9 rounded-full bg-white/80 border border-pink-300 shadow-sm flex items-center justify-center group-hover:translate-y-1 transition-transform">
              <ArrowDown className="w-4 h-4 text-pink-600" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
