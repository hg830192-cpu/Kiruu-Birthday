import React, { useState, useEffect } from 'react';
import { Laugh, Sparkles, RefreshCcw, Camera, Upload } from 'lucide-react';
import { useMedia } from '../context/MediaContext';

export const Section4Copylot: React.FC = () => {
  const { customPhotos, setCustomPhoto } = useMedia();
  const [phase, setPhase] = useState<'intro' | 'wanted' | 'copilot' | 'glitch' | 'final'>('final');
  const [photoError, setPhotoError] = useState(false);
  const [gifLoaded, setGifLoaded] = useState(false);

  const activePhoto = customPhotos['copylot-memory'] || 'assets/copylot-memory.jpg';

  // Play animation sequence
  const startIncidentAnimation = () => {
    setPhase('intro');
    setTimeout(() => setPhase('wanted'), 1200);
    setTimeout(() => setPhase('copilot'), 2500);
    setTimeout(() => setPhase('glitch'), 3800);
    setTimeout(() => setPhase('final'), 4500);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCustomPhoto('copylot-memory', file);
      setPhotoError(false);
    }
  };

  return (
    <section id="cop-ylot-incident" className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-[#FFF0F5] via-[#FFE4EC] to-[#FFD1DC] text-slate-800">
      <div className="relative z-10 max-w-3xl mx-auto w-full text-center flex flex-col items-center">
        {/* Funny incident badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-rose-100 border border-rose-300 text-rose-800 text-xs font-semibold tracking-wide uppercase mb-4 shadow-sm">
          <Laugh className="w-4 h-4 text-rose-500" />
          <span>Hall of Fame Inside Joke</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-serif-display font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
          THE INCIDENT WE SHALL NEVER FORGET 😂
        </h2>

        {/* Interactive Glitch Card */}
        <div className="w-full bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 border-2 border-pink-200 shadow-xl shadow-pink-300/40 relative overflow-hidden">
          {/* Tapes */}
          <div className="washi-tape -top-3 left-10 rotate-2" />
          <div className="washi-tape -top-3 right-10 -rotate-2" />

          <div className="min-h-[220px] flex flex-col items-center justify-center space-y-4">
            {(phase === 'intro' || phase === 'final') && (
              <p className="text-lg sm:text-xl text-slate-600 font-handwriting text-2xl sm:text-3xl font-semibold">
                Once upon a time...
              </p>
            )}

            {(phase === 'wanted' || phase === 'copilot' || phase === 'glitch' || phase === 'final') && (
              <p className="text-base sm:text-lg text-slate-700 italic">
                She wanted to say:
              </p>
            )}

            {/* Word Display */}
            {phase === 'copilot' && (
              <div className="text-4xl sm:text-6xl font-black text-blue-600 tracking-wider font-mono animate-pulse">
                COPILOT
              </div>
            )}

            {(phase === 'glitch' || phase === 'final') && (
              <div
                onClick={startIncidentAnimation}
                className="cursor-pointer group py-3 px-6 rounded-2xl bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-300 shadow-inner hover:scale-105 transition-all"
                title="Click to replay the glitch!"
              >
                <div className="text-4xl sm:text-6xl font-black text-rose-600 tracking-widest font-mono animate-glitch">
                  COP YLOT 😂
                </div>
                <span className="block text-[11px] text-rose-500 font-mono mt-1 font-semibold uppercase">
                  (Yes, with that legendary mysterious space!)
                </span>
              </div>
            )}

            {phase === 'final' && (
              <div className="pt-4 space-y-2 max-w-lg mx-auto">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  And just like that...
                </p>
                <p className="text-lg sm:text-xl font-bold text-slate-900 font-serif-display">
                  A Microsoft product became a lifetime memory. 😂
                </p>
              </div>
            )}
          </div>

          {/* Reaction GIF & Optional Memory Photo */}
          <div className="mt-8 pt-6 border-t border-pink-100 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            {/* Reaction GIF */}
            <div className="flex flex-col items-center">
              <div className="w-full h-44 rounded-2xl overflow-hidden bg-pink-50 border border-pink-200 flex items-center justify-center p-1 relative shadow-sm">
                <img
                  src="https://media.giphy.com/media/lkdH8FmImcGoykgFgz/giphy.gif"
                  alt="Confused meme reaction"
                  className={`w-full h-full object-cover rounded-xl transition-opacity duration-300 ${
                    gifLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setGifLoaded(true)}
                  onError={() => setGifLoaded(false)}
                />
                {!gifLoaded && (
                  <div className="text-center p-3 text-pink-600">
                    <span className="text-4xl">🤔</span>
                    <p className="text-xs font-medium mt-1">Everyone in the room: “Did she just say Cop ylot?!”</p>
                  </div>
                )}
              </div>
              <span className="text-[11px] text-slate-500 font-mono mt-1">Our live reaction at that exact second</span>
            </div>

            {/* Funny Memory Photo Attachment Slot */}
            <div className="flex flex-col items-center">
              <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-pink-50 border-2 border-dashed border-pink-300 flex items-center justify-center group shadow-sm">
                {!photoError ? (
                  <img
                    src={activePhoto}
                    alt="Funny memory moment"
                    className="w-full h-full object-cover rounded-xl"
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-3 text-center text-slate-500">
                    <Camera className="w-7 h-7 text-pink-400 mb-1" />
                    <p className="text-xs font-semibold text-pink-700">Attach Incident Photo / Screenshot</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Place in assets/copylot-memory.jpg or click upload</p>
                  </div>
                )}

                {/* Upload overlay */}
                <label className="absolute inset-0 bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer p-2">
                  <Upload className="w-5 h-5 mb-1" />
                  <span className="text-xs font-semibold">Change photo</span>
                  <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
                </label>
              </div>
              <span className="text-[11px] text-pink-600 font-handwriting text-base mt-1">“Minus 2 redefining tech jargon”</span>
            </div>
          </div>

          {/* Replay Incident Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={startIncidentAnimation}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm shadow-md shadow-rose-300/50 hover:shadow-rose-400/60 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <RefreshCcw className="w-4 h-4 animate-spin-reverse" />
              <span>😂 REPLAY THE INCIDENT</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
