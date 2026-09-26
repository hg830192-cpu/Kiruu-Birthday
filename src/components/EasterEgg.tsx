import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles, Smile } from 'lucide-react';

export const EasterEgg: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    setShowModal(true);

    // Blast "-2" particles
    window.dispatchEvent(
      new CustomEvent('minus-two-fly', {
        detail: { x: e.clientX, y: e.clientY },
      })
    );

    // Confetti
    confetti({
      particleCount: 40,
      spread: 70,
      colors: ['#FF8FAB', '#FFB6C8', '#FFD1DC'],
    });
  };

  return (
    <>
      {/* Tiny subtle Easter Egg placed in bottom footer or corner */}
      <div className="fixed bottom-3 left-4 z-40">
        <button
          onClick={handleClick}
          className="text-[11px] font-mono text-pink-400/80 hover:text-pink-600 bg-white/60 hover:bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-pink-200/60 shadow-xs transition-all hover:scale-105"
          title="Secret button..."
        >
          Psst... Minus 2 👀
        </button>
      </div>

      {/* Secret Popup Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center border-4 border-pink-300 shadow-2xl animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-4xl block mb-2">🎀 👀 🎀</span>

            <h3 className="text-xl sm:text-2xl font-black text-pink-600 font-serif-display mb-2">
              SECRET REVEALED
            </h3>

            <p className="text-xl font-bold font-handwriting text-slate-800 my-4 text-3xl">
              You're still Minus 2. 😂🎀
            </p>

            <p className="text-xs text-slate-500 font-medium">
              No matter how many exams you pass, you will always be our beloved Minus 2!
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-pink-300"
            >
              Accept My Fate 😂
            </button>
          </div>
        </div>
      )}
    </>
  );
};
