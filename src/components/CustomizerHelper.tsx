import React, { useState } from 'react';
import { Settings, Info, X, Camera, Music, Sparkles } from 'lucide-react';

export const CustomizerHelper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Helper Button */}
      <div className="fixed bottom-3 right-4 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-pink-700 text-xs font-semibold border border-pink-200 shadow-md backdrop-blur-md transition-all hover:scale-105"
          title="Customization tips & asset guide"
        >
          <Camera className="w-3.5 h-3.5 text-pink-500" />
          <span>Gift Guide</span>
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border-2 border-pink-200 shadow-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-pink-50 text-pink-700 hover:bg-pink-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-3 text-pink-700 font-bold text-lg">
              <Sparkles className="w-5 h-5 text-pink-500" />
              <span>Personalizing Kiran’s Surprise</span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <div className="bg-pink-50 rounded-2xl p-4 border border-pink-100">
                <p className="font-semibold text-pink-800 mb-1">📸 Adding Your Photos:</p>
                <p>
                  You can edit the photo list directly in <code className="bg-white px-1.5 py-0.5 rounded border border-pink-200 text-pink-700 font-mono">src/data/birthdayData.ts</code>.
                  Each photo can have its title, caption, and date.
                </p>
                <p className="mt-1 text-slate-500 text-xs">
                  Place your photos in the <code className="font-mono text-pink-700">assets/</code> folder (e.g. <code className="font-mono">assets/photo1.jpg</code>, <code className="font-mono">assets/best-photo.jpg</code>).
                  High-quality fallback photos are already in place!
                </p>
              </div>

              <div className="bg-rose-50 rounded-2xl p-4 border border-rose-100">
                <p className="font-semibold text-rose-800 mb-1">🎵 Background Music (Shape of You):</p>
                <p>
                  The app checks for <code className="bg-white px-1.5 py-0.5 rounded border border-rose-200 text-rose-700 font-mono">assets/shape-of-you.mp3</code>.
                  If the file is not yet uploaded, a synthesized acoustic chime fallback plays automatically!
                </p>
                <p className="mt-1 text-slate-500 text-xs">
                  You can also select any audio file from your device using the 🎵 music icon button at the top-right!
                </p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-4 border border-purple-100">
                <p className="font-semibold text-purple-800 mb-1">💌 Customizing Friend Messages:</p>
                <p>
                  Edit the <code className="bg-white px-1.5 py-0.5 rounded border border-purple-200 text-purple-700 font-mono">friendMessages</code> array in <code className="font-mono text-purple-700">src/data/birthdayData.ts</code> to update the 6+ friend letters.
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold text-xs transition-colors"
              >
                Got It! 🎀
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
