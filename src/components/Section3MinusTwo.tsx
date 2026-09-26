import React, { useState } from 'react';
import { HelpCircle, Sparkles, Smile, RefreshCw } from 'lucide-react';

export const Section3MinusTwo: React.FC = () => {
  const [step, setStep] = useState(4); // default visible, can be replayed

  const handleReplayStory = () => {
    setStep(1);
    setTimeout(() => setStep(2), 1400);
    setTimeout(() => setStep(3), 2800);
    setTimeout(() => setStep(4), 4200);
  };

  const handleMinusTwoBurst = (e: React.MouseEvent) => {
    window.dispatchEvent(
      new CustomEvent('minus-two-fly', {
        detail: { x: e.clientX, y: e.clientY },
      })
    );
  };

  return (
    <section id="minus-two-legend" className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-[#FFD1DC] via-[#FFE4EC] to-[#FFF0F5] overflow-hidden">
      {/* Background floating numbers */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-10">
        <span className="absolute top-1/4 left-10 text-8xl font-black text-pink-700">-2</span>
        <span className="absolute bottom-1/3 right-12 text-9xl font-black text-rose-700">-2</span>
        <span className="absolute top-2/3 left-1/4 text-7xl font-black text-pink-800">-2</span>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto w-full text-center flex flex-col items-center">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/70 border border-pink-300 text-pink-800 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
          <HelpCircle className="w-3.5 h-3.5 text-pink-500" />
          <span>The Origin Story</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-slate-900 tracking-tight mb-8">
          WHY “MINUS 2”? 🤔🎀
        </h2>

        {/* Story Animation Container */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-12 border-2 border-pink-200 shadow-xl shadow-pink-300/30 w-full relative">
          {/* Scrapbook corner stickers */}
          <div className="washi-tape -top-3 left-8 rotate-3" />
          <div className="washi-tape -bottom-3 right-8 -rotate-2" />

          <div className="space-y-6 min-h-[260px] flex flex-col items-center justify-center">
            {step >= 1 && (
              <p className="text-lg sm:text-xl text-slate-700 font-serif-display italic transition-all duration-700">
                “Some nicknames are chosen...”
              </p>
            )}

            {step >= 2 && (
              <p className="text-lg sm:text-xl text-slate-700 font-serif-display italic transition-all duration-700">
                “Some nicknames are earned...”
              </p>
            )}

            {step >= 3 && (
              <p className="text-xl sm:text-2xl text-pink-600 font-medium transition-all duration-700">
                And some...
              </p>
            )}

            {step >= 4 && (
              <div className="pt-2 pb-4 space-y-4 animate-scale-up">
                <h3 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 drop-shadow-sm">
                  JUST BECOME LEGENDARY 😂
                </h3>

                <div className="py-2">
                  <button
                    onClick={handleMinusTwoBurst}
                    className="group relative inline-block px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-100 to-rose-100 border-2 border-pink-300 shadow-md hover:shadow-pink-300/60 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    title="Click to unleash flying -2s!"
                  >
                    <span className="text-4xl sm:text-6xl font-black text-pink-600 tracking-tight group-hover:text-rose-600">
                      MINUS 2™
                    </span>
                    <span className="absolute -top-3 -right-3 text-2xl group-hover:rotate-12 transition-transform">
                      🎀
                    </span>
                    <span className="block text-[11px] text-pink-500 font-mono mt-1 font-semibold uppercase tracking-wider">
                      ✨ Click to launch “-2” magic ✨
                    </span>
                  </button>
                </div>

                <div className="space-y-1.5 text-slate-700 text-sm sm:text-base font-handwriting text-2xl sm:text-3xl font-medium pt-3">
                  <p>One of a kind. 🩷</p>
                  <p>Impossible to replace. 🌸</p>
                  <p>Slightly impossible to explain. 😂</p>
                </div>
              </div>
            )}
          </div>

          {/* Replay Story Button */}
          <div className="mt-6 pt-4 border-t border-pink-100 flex justify-center">
            <button
              onClick={handleReplayStory}
              className="inline-flex items-center gap-1.5 text-xs text-pink-600 hover:text-pink-800 font-medium py-1 px-3 rounded-full hover:bg-pink-50 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Replay the story</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
