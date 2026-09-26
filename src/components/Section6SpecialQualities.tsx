import React, { useState } from 'react';
import { Sparkles, Heart, Eye, CheckCircle2 } from 'lucide-react';
import { specialQualities, FlipQuality } from '../data/birthdayData';

export const Section6SpecialQualities: React.FC = () => {
  const [flippedIds, setFlippedIds] = useState<Set<number>>(new Set());

  const handleCardClick = (id: number) => {
    setFlippedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const flipAllCards = () => {
    if (flippedIds.size === specialQualities.length) {
      setFlippedIds(new Set());
    } else {
      setFlippedIds(new Set(specialQualities.map((q) => q.id)));
    }
  };

  return (
    <section id="special-qualities" className="relative min-h-screen w-full px-4 py-20 bg-gradient-to-b from-[#FFF0F5] via-[#FFE4EC] to-[#FFD1DC] text-slate-800">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/70 border border-pink-300 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            <span>Reasons You Are Cherished</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-display font-extrabold text-slate-900 tracking-tight mb-3">
            THINGS WE LOVE ABOUT YOU 💗
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Tap each card to reveal what makes Kiran so uniquely wonderful!
          </p>

          {/* Progress & Flip All Control */}
          <div className="mt-4 flex items-center justify-center gap-4 text-xs font-semibold text-pink-700">
            <span>
              Uncovered: <strong className="text-pink-900">{flippedIds.size}</strong> / {specialQualities.length}
            </span>
            <button
              onClick={flipAllCards}
              className="px-3 py-1 rounded-full bg-white/80 hover:bg-white text-pink-600 border border-pink-200 shadow-xs transition-colors cursor-pointer"
            >
              {flippedIds.size === specialQualities.length ? 'Flip Back All ↩️' : 'Reveal All ✨'}
            </button>
          </div>
        </div>

        {/* 3D Flip Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {specialQualities.map((item) => {
            const isFlipped = flippedIds.has(item.id);

            return (
              <div
                key={item.id}
                onClick={() => handleCardClick(item.id)}
                className="h-56 sm:h-64 cursor-pointer perspective-1000 group select-none"
              >
                <div
                  className={`relative w-full h-full duration-500 transform-style-3d transition-transform rounded-3xl ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl p-5 bg-white/85 hover:bg-white border-2 border-pink-200/90 shadow-md group-hover:shadow-xl group-hover:shadow-pink-300/30 flex flex-col items-center justify-center text-center transition-all">
                    <span className="text-3xl sm:text-4xl mb-3 animate-gentle-float">
                      🎀
                    </span>
                    <h3 className="font-bold text-pink-700 text-sm sm:text-base tracking-wider uppercase flex items-center gap-1.5">
                      TAP ME 👀
                    </h3>
                    <span className="text-[11px] text-slate-400 mt-1 font-mono">
                      #{item.id}
                    </span>
                    <span className="absolute bottom-3 text-[10px] text-pink-500 font-medium opacity-70 group-hover:opacity-100">
                      Click to unlock ✨
                    </span>
                  </div>

                  {/* BACK SIDE */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl p-5 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 border-2 border-pink-300 shadow-xl flex flex-col items-center justify-between text-center">
                    <div className="w-full flex items-center justify-between">
                      <span className="text-2xl">{item.emoji}</span>
                      <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-pink-700 bg-white/70 px-2 py-0.5 rounded-full border border-pink-200">
                        {item.vibe}
                      </span>
                    </div>

                    <div className="my-auto py-1">
                      <h4 className="font-serif-display font-bold text-slate-900 text-base sm:text-lg mb-1.5">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-snug font-medium line-clamp-4">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-[10px] text-pink-600 font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-pink-500" />
                      <span>100% True</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
