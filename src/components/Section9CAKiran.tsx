import React, { useState } from 'react';
import { BookOpen, Award, Sparkles, TrendingUp, Calculator, CheckCircle } from 'lucide-react';

export const Section9CAKiran: React.FC = () => {
  const [gifLoaded, setGifLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="ca-kiran-yadav" className="relative min-h-screen w-full px-4 py-20 bg-gradient-to-b from-[#FCE7F3] via-[#FFE4EC] to-[#FFD1DC] text-slate-800 overflow-hidden">
      {/* Background cute icons float */}
      <div className="absolute inset-0 pointer-events-none opacity-20 select-none">
        <span className="absolute top-16 left-12 text-5xl">📚</span>
        <span className="absolute top-28 right-16 text-5xl">📈</span>
        <span className="absolute bottom-24 left-16 text-5xl">🧮</span>
        <span className="absolute bottom-32 right-12 text-5xl">📊</span>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto w-full text-center flex flex-col items-center">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-pink-300 text-pink-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
          <BookOpen className="w-4 h-4 text-pink-600" />
          <span>CA Final Motivation & Destiny</span>
          <Award className="w-4 h-4 text-amber-500" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-serif-display font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          FROM MINUS 2 → CA KIRAN YADAV 📚✨
        </h2>

        <p className="text-slate-600 text-sm sm:text-base font-medium max-w-lg mb-8">
          The late nights, the endless standards, and the unstoppable determination.
        </p>

        {/* Motivation Card */}
        <div className="w-full bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 border-2 border-pink-200 shadow-xl shadow-pink-300/40 text-left relative">
          {/* Scrapbook Tape */}
          <div className="washi-tape -top-3 left-10 rotate-1" />
          <div className="washi-tape -top-3 right-10 -rotate-2" />

          {/* Cute studying GIF / sticker container */}
          <div className="float-none sm:float-right sm:ml-6 mb-6 sm:mb-4 w-full sm:w-56 h-48 rounded-2xl overflow-hidden bg-pink-50 border-2 border-pink-200 shadow-md relative flex items-center justify-center">
            <img
              src="https://media.giphy.com/media/LmN8OYiY4m0X85K0Zz/giphy.gif"
              alt="Cute study motivation GIF"
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                gifLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setGifLoaded(true)}
              onError={() => setGifLoaded(false)}
            />
            {!gifLoaded && (
              <div className="flex flex-col items-center text-center p-3 text-pink-600">
                <span className="text-4xl mb-1">📚✨</span>
                <p className="text-xs font-semibold">CA Final Prep Mode</p>
                <p className="text-[10px] text-slate-500">Focus · Grit · Success</p>
              </div>
            )}
          </div>

          <div className="space-y-4 text-slate-700 leading-relaxed font-serif-display text-base sm:text-lg">
            <p className="font-bold text-pink-700 text-lg sm:text-xl">
              Dear CA Kiran Yadav (future),
            </p>

            <p>
              Your CA Final exams are around the corner, and I know you have a lot ahead of you.
            </p>

            <p>
              May you have the focus to study, the confidence to face every paper, the patience to keep going on difficult days, and the strength to believe in yourself.
            </p>

            <p>
              May all your hard work, late nights and sacrifices turn into the result you've been waiting for.
            </p>

            <p>
              May you stay calm when things get difficult and always remember how capable you are.
            </p>

            <p className="pt-2 text-slate-800 italic">
              And hopefully very soon...
            </p>
          </div>

          {/* Cinematic Glowing CA KIRAN YADAV Title */}
          <div className="my-8 text-center relative py-4">
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="inline-block relative cursor-pointer group transition-transform hover:scale-105 duration-300"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse" />
              
              <div className="relative px-8 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white rounded-2xl shadow-xl border border-pink-200">
                <h3 className="text-3xl sm:text-5xl font-black tracking-wider uppercase font-serif-display drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] flex items-center justify-center gap-2">
                  <span>CA KIRAN YADAV</span>
                  <Sparkles className="w-6 h-6 text-amber-200 animate-spin" style={{ animationDuration: '5s' }} />
                </h3>
              </div>

              {/* Hover Badge: Future CA detected */}
              <div
                className={`absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-xs font-mono rounded-full whitespace-nowrap shadow-lg transition-all duration-200 pointer-events-none ${
                  isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                }`}
              >
                Future CA detected... 📚✨
              </div>
            </div>
          </div>

          <div className="space-y-4 text-slate-700 leading-relaxed font-serif-display text-base sm:text-lg">
            <p>
              One day you'll look back at this stressful phase and realize it was all worth it.
            </p>

            <p className="font-semibold text-slate-900">
              And when that day comes, remember...
            </p>

            <p className="text-xl sm:text-2xl font-bold font-handwriting text-pink-700">
              Minus 2 was always destined for +2. 😂🩷
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
