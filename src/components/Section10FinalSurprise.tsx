import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Gift, Heart, Sparkles, Trophy, Camera, Upload, RotateCcw } from 'lucide-react';
import { finalSurpriseData } from '../data/birthdayData';
import { useMedia } from '../context/MediaContext';

export const Section10FinalSurprise: React.FC = () => {
  const { customPhotos, setCustomPhoto } = useMedia();
  const [isOpen, setIsOpen] = useState(false);
  const [photoError, setPhotoError] = useState(false);
  const [displayedLineIndex, setDisplayedLineIndex] = useState(-1);
  const [gifLoaded, setGifLoaded] = useState(false);

  const activePhoto = customPhotos['best-photo'] || finalSurpriseData.bestPhoto;

  const handleOpenSurprise = () => {
    setIsOpen(true);

    // Launch pink confetti explosion
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#FF8FAB', '#FFB6C8', '#FFD1DC', '#FFE4EC', '#FB6F92', '#FDE047'],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });

    // Step-by-step line reveal
    finalSurpriseData.letterLines.forEach((_, idx) => {
      setTimeout(() => {
        setDisplayedLineIndex(idx);
      }, 500 + idx * 450);
    });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCustomPhoto('best-photo', file);
      setPhotoError(false);
    }
  };

  return (
    <section id="final-surprise" className="relative min-h-screen w-full px-4 py-24 bg-gradient-to-b from-[#FFD1DC] via-[#FFE4EC] to-[#FFF0F5] text-slate-800 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Hearts */}
      <div className="absolute inset-0 pointer-events-none opacity-20 select-none">
        <span className="absolute top-1/4 left-10 text-6xl">💖</span>
        <span className="absolute top-1/3 right-12 text-7xl">🎀</span>
        <span className="absolute bottom-1/4 left-1/4 text-6xl">✨</span>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto w-full text-center">
        {!isOpen ? (
          /* Suspense Before Opening */
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-14 border-2 border-pink-300 shadow-2xl shadow-pink-300/40 space-y-6 animate-scale-up">
            <div className="inline-flex p-4 rounded-full bg-pink-100 border border-pink-300 text-pink-600 mb-2">
              <Gift className="w-12 h-12 text-pink-500 animate-gentle-float" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-4xl font-serif-display font-bold text-slate-900">
                🎀 WAIT, MINUS 2...
              </h2>
              <p className="text-lg sm:text-xl text-pink-700 font-handwriting text-2xl sm:text-3xl font-semibold">
                I have one last little surprise for you. 🥹🩷
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto">
              You’ve laughed, remembered memories, and celebrated. Now here is something strictly for you.
            </p>

            <div className="pt-4">
              <button
                onClick={handleOpenSurprise}
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 hover:from-pink-600 hover:to-rose-600 text-white font-extrabold text-lg sm:text-xl shadow-xl shadow-pink-500/40 hover:shadow-pink-400/60 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Gift className="w-6 h-6 text-pink-200 group-hover:rotate-12 transition-transform" />
                <span>🎁 OPEN IT 🎀</span>
                <Sparkles className="w-6 h-6 text-amber-200 animate-spin" style={{ animationDuration: '4s' }} />
              </button>
            </div>
          </div>
        ) : (
          /* Surprise Revealed State */
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 sm:p-12 border-4 border-pink-300 shadow-2xl shadow-pink-400/50 space-y-8 animate-fade-in relative">
            {/* Scrapbook corner ribbons */}
            <div className="washi-tape -top-3 left-8 rotate-3" />
            <div className="washi-tape -top-3 right-8 -rotate-3" />

            {/* Heartbeat Header */}
            <div className="space-y-2 animate-heartbeat">
              <span className="text-3xl sm:text-4xl">🩷 🎀 🎂</span>
              <h2 className="text-3xl sm:text-5xl font-serif-display font-extrabold text-slate-900 tracking-tight">
                HAPPY BIRTHDAY, KIRAN! 🎂🎀🩷
              </h2>
            </div>

            {/* Best Photo Together Showcase */}
            <div className="relative max-w-md mx-auto">
              <div className="relative aspect-[4/4.5] w-full rounded-2xl overflow-hidden bg-pink-50 border-4 border-white shadow-xl shadow-pink-300/40 group">
                <img
                  src={photoError ? finalSurpriseData.fallbackPhoto : activePhoto}
                  alt="Our best memory together"
                  className="w-full h-full object-cover object-center"
                  onError={() => setPhotoError(true)}
                />

                {/* Upload custom best photo button */}
                <label className="absolute inset-0 bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer p-4">
                  <Upload className="w-6 h-6 mb-2" />
                  <span className="text-xs font-semibold">Change to your best photo together</span>
                  <span className="text-[10px] text-pink-200 mt-1">assets/best-photo.jpg</span>
                  <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
                </label>
              </div>

              {/* Photo Caption Note */}
              <div className="mt-3 text-center">
                <p className="font-handwriting text-2xl font-bold text-pink-700">
                  {finalSurpriseData.title}
                </p>
              </div>
            </div>

            {/* Cute GIPHY Celebration GIF */}
            <div className="max-w-xs mx-auto h-36 rounded-2xl overflow-hidden bg-pink-50 border border-pink-200 flex items-center justify-center shadow-xs">
              <img
                src="https://media.giphy.com/media/artj92V8o75VPL7AeQ/giphy.gif"
                alt="Celebration hug/sparkle"
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  gifLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setGifLoaded(true)}
                onError={() => setGifLoaded(false)}
              />
              {!gifLoaded && (
                <div className="text-center p-3 text-pink-600">
                  <span className="text-3xl">🥳✨</span>
                  <p className="text-xs font-medium mt-1">Forever celebrating Kiran!</p>
                </div>
              )}
            </div>

            {/* Gradual Typing / Line-by-Line Heartfelt Letter */}
            <div className="bg-pink-50/60 rounded-2xl p-6 sm:p-8 border border-pink-200/80 text-left space-y-3 font-serif-display text-slate-800 text-base sm:text-lg">
              {finalSurpriseData.letterLines.map((line, idx) => {
                const isVisible = idx <= displayedLineIndex;
                const isCA = line.includes('CA KIRAN YADAV');
                const isCopylot = line.includes('Cop ylot');

                return (
                  <div
                    key={idx}
                    className={`transition-all duration-500 ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                  >
                    {isCA ? (
                      <div className="py-2 text-center">
                        <span className="inline-block text-2xl sm:text-3xl font-black text-pink-600 tracking-wider uppercase drop-shadow-sm bg-pink-100/70 px-4 py-1.5 rounded-xl border border-pink-300">
                          {line}
                        </span>
                      </div>
                    ) : isCopylot ? (
                      <p className="font-bold text-rose-600">
                        {line}
                      </p>
                    ) : (
                      <p className="leading-relaxed">
                        {line}
                      </p>
                    )}
                  </div>
                );
              })}

              {/* Final Personal Signoff */}
              {displayedLineIndex >= finalSurpriseData.letterLines.length - 1 && (
                <div className="pt-6 border-t border-pink-200 text-right animate-fade-in">
                  <p className="text-sm sm:text-base font-handwriting text-2xl font-bold text-pink-700">
                    {finalSurpriseData.signoff}
                  </p>
                </div>
              )}
            </div>

            {/* Replay Surprise Button */}
            <div className="pt-4 flex justify-center">
              <button
                onClick={handleOpenSurprise}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-700 text-xs font-semibold transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Replay Confetti & Message</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
