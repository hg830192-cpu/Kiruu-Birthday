import React, { useState } from 'react';
import { Laugh, Sparkles, RefreshCcw, Camera, Upload, AlertCircle, Tv, Play } from 'lucide-react';
import { useMedia } from '../context/MediaContext';
import confetti from 'canvas-confetti';

const PRESET_GIFS = [
  {
    id: 'mindblown',
    label: '🤯 Mind Blown',
    url: 'https://media4.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif',
  },
  {
    id: 'confused-cat',
    label: '🐱 Confused Cat',
    url: 'https://media.tenor.com/2s4-qP6P8uAAAAAM/confused-cat.gif',
  },
  {
    id: 'math-lady',
    label: '🧐 Math Formulae',
    url: 'https://media.tenor.com/GfaiP-0442EAAAAj/confused-math.gif',
  },
];

export const Section4Copylot: React.FC = () => {
  const { customPhotos, setCustomPhoto, setCustomPhotoUrl } = useMedia();
  const [phase, setPhase] = useState<'intro' | 'wanted' | 'copilot' | 'glitch' | 'final'>('final');
  const [photoError, setPhotoError] = useState(false);
  const [gifError, setGifError] = useState(false);
  const [showGifPicker, setShowGifPicker] = useState(false);
  const [customGifInput, setCustomGifInput] = useState('');
  const [isGlitching, setIsGlitching] = useState(false);

  const activePhoto = customPhotos['copylot-memory'] || 'assets/copylot-memory.jpg';
  // Use custom GIF if set, otherwise default to first preset
  const activeGif = customPhotos['copylot-gif'] || PRESET_GIFS[0].url;

  // Play animation sequence with screen shake & confetti
  const startIncidentAnimation = () => {
    setIsGlitching(true);
    setPhase('intro');
    
    // Playful burst
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#FF8FAB', '#FB6F92', '#38BDF8'],
    });

    setTimeout(() => setPhase('wanted'), 1100);
    setTimeout(() => setPhase('copilot'), 2300);
    setTimeout(() => {
      setPhase('glitch');
      setIsGlitching(true);
    }, 3500);
    setTimeout(() => {
      setPhase('final');
      setIsGlitching(false);
    }, 4500);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCustomPhoto('copylot-memory', file);
      setPhotoError(false);
    }
  };

  const handleGifUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCustomPhoto('copylot-gif', file);
      setGifError(false);
      setShowGifPicker(false);
    }
  };

  const handleSelectPreset = (url: string) => {
    setCustomPhotoUrl('copylot-gif', url);
    setGifError(false);
    setShowGifPicker(false);
  };

  const handleAddUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customGifInput.trim()) {
      setCustomPhotoUrl('copylot-gif', customGifInput.trim());
      setCustomGifInput('');
      setGifError(false);
      setShowGifPicker(false);
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
        <div className={`w-full bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 border-2 border-pink-200 shadow-xl shadow-pink-300/40 relative overflow-hidden transition-all duration-300 ${isGlitching ? 'animate-glitch ring-4 ring-rose-400/50' : ''}`}>
          {/* Decorative Tapes */}
          <div className="washi-tape -top-3 left-10 rotate-2" />
          <div className="washi-tape -top-3 right-10 -rotate-2" />

          <div className="min-h-[200px] flex flex-col items-center justify-center space-y-4">
            {(phase === 'intro' || phase === 'final') && (
              <p className="text-slate-600 font-handwriting text-2xl sm:text-3xl font-semibold">
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
                className="cursor-pointer group py-3 px-6 rounded-2xl bg-gradient-to-r from-rose-50 via-pink-50 to-amber-50 border-2 border-rose-300 shadow-inner hover:scale-105 transition-all relative overflow-hidden"
                title="Click to replay the glitch!"
              >
                <div className="text-4xl sm:text-6xl font-black text-rose-600 tracking-widest font-mono animate-glitch select-none">
                  COP YLOT 😂
                </div>
                <span className="block text-[11px] text-rose-500 font-mono mt-1 font-semibold uppercase">
                  (Yes, with that legendary mysterious space!)
                </span>
                <span className="absolute bottom-1 right-2 text-[10px] text-slate-400 group-hover:text-rose-600 transition-colors">
                  Tap to replay ↺
                </span>
              </div>
            )}

            {phase === 'final' && (
              <div className="pt-3 space-y-1.5 max-w-lg mx-auto">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  And just like that...
                </p>
                <p className="text-lg sm:text-xl font-bold text-slate-900 font-serif-display">
                  A Microsoft product became a lifetime memory. 😂
                </p>
              </div>
            )}
          </div>

          {/* Reaction GIF Effect & Funny Memory Photo */}
          <div className="mt-8 pt-6 border-t border-pink-100 grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
            
            {/* Retro TV Monitor Reaction GIF with Animated Scanlines & Glitch */}
            <div className="flex flex-col items-center w-full">
              <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-slate-950 border-2 border-pink-300 flex items-center justify-center p-1 group shadow-lg shadow-pink-900/10">
                {/* CRT Scanline effect overlay */}
                <div className="absolute inset-0 pointer-events-none z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-30" />
                
                {/* Retro TV Live Tag */}
                <div className="absolute top-2 left-2 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-[10px] font-mono text-white border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span className="text-red-400 font-bold">LIVE REACTION</span>
                </div>

                {!gifError ? (
                  <img
                    src={activeGif}
                    alt="Reaction meme"
                    className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                    onError={() => setGifError(true)}
                  />
                ) : (
                  /* Custom Animated Meme TV Display if external image fails */
                  <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-indigo-950 via-slate-900 to-rose-950 flex flex-col items-center justify-center p-4 text-center text-white overflow-hidden">
                    <div className="text-4xl animate-bounce mb-1">🤯</div>
                    <div className="font-mono text-xs font-bold text-pink-300 tracking-wider">
                      WAIT WHAT?!
                    </div>
                    <div className="font-mono text-[11px] text-amber-300 mt-1 bg-black/50 px-2 py-0.5 rounded border border-amber-400/30 animate-pulse">
                      &gt; SEARCHING: "COP YLOT"
                    </div>
                    <p className="text-[10px] text-pink-200/80 mt-1 font-mono">
                      [404: Brain Not Found 😂]
                    </p>
                  </div>
                )}

                {/* Upload or Change GIF overlay on hover */}
                <div className="absolute inset-0 z-20 bg-slate-950/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-3 text-white backdrop-blur-xs">
                  <button
                    onClick={() => setShowGifPicker(!showGifPicker)}
                    className="px-3 py-1.5 rounded-full bg-pink-500 hover:bg-pink-600 text-xs font-semibold flex items-center gap-1.5 shadow-md hover:scale-105 transition-all cursor-pointer"
                  >
                    <Tv className="w-3.5 h-3.5" />
                    <span>Change Reaction GIF</span>
                  </button>
                  <label className="cursor-pointer text-[11px] text-pink-200 hover:text-white flex items-center gap-1 underline transition-colors">
                    <Upload className="w-3 h-3" />
                    <span>Upload GIF from Device</span>
                    <input type="file" accept="image/gif,image/*" className="hidden" onChange={handleGifUpload} />
                  </label>
                </div>
              </div>
              <span className="text-[11px] text-slate-500 font-mono mt-1.5">Our live reaction at that exact second</span>

              {/* GIF Picker Popover */}
              {showGifPicker && (
                <div className="mt-2 w-full p-3 bg-white rounded-2xl border-2 border-pink-300 shadow-xl text-left z-30 animate-fade-in text-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-800 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                      <span>Choose Reaction Meme:</span>
                    </span>
                    <button
                      onClick={() => setShowGifPicker(false)}
                      className="text-slate-400 hover:text-slate-600 font-bold px-1"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 mb-2.5">
                    {PRESET_GIFS.map((preset) => (
                      <button
                        key={preset.id}
                        onClick={() => handleSelectPreset(preset.url)}
                        className={`p-1.5 rounded-xl border text-[11px] font-semibold text-center transition-all cursor-pointer ${
                          activeGif === preset.url
                            ? 'bg-pink-100 border-pink-500 text-pink-800 shadow-2xs'
                            : 'bg-slate-50 border-slate-200 hover:bg-pink-50 text-slate-700'
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleAddUrl} className="flex gap-1.5">
                    <input
                      type="url"
                      placeholder="Paste any image / GIF link..."
                      value={customGifInput}
                      onChange={(e) => setCustomGifInput(e.target.value)}
                      className="flex-1 px-2.5 py-1.5 rounded-xl border border-pink-200 text-xs text-slate-700 focus:outline-pink-400"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 rounded-xl bg-pink-500 text-white font-semibold text-xs hover:bg-pink-600 transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Funny Memory Photo Attachment Slot */}
            <div className="flex flex-col items-center w-full">
              <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-pink-50 border-2 border-dashed border-pink-300 flex items-center justify-center group shadow-md shadow-pink-900/5">
                {!photoError ? (
                  <img
                    src={activePhoto}
                    alt="Funny memory moment"
                    className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
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
                <label className="absolute inset-0 z-20 bg-slate-950/70 text-white opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer p-2 backdrop-blur-xs">
                  <Upload className="w-5 h-5 mb-1 text-pink-300" />
                  <span className="text-xs font-semibold">Change photo</span>
                  <span className="text-[10px] text-pink-200 mt-0.5">assets/copylot-memory.jpg</span>
                  <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
                </label>
              </div>
              <span className="text-[11px] text-pink-600 font-handwriting text-lg mt-1 font-semibold">
                “Minus 2 redefining tech jargon”
              </span>
            </div>
          </div>

          {/* Replay Incident Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={startIncidentAnimation}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold text-sm shadow-md shadow-rose-300/50 hover:shadow-rose-400/60 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <RefreshCcw className="w-4 h-4" />
              <span>😂 REPLAY THE INCIDENT</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
