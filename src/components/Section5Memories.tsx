import React, { useState } from 'react';
import { Camera, Heart, Sparkles, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { memories, MemoryPhoto } from '../data/birthdayData';
import { useMedia } from '../context/MediaContext';

export const Section5Memories: React.FC = () => {
  const { customPhotos } = useMedia();
  const [activePhoto, setActivePhoto] = useState<MemoryPhoto | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const getPhotoSrc = (item: MemoryPhoto) => {
    if (customPhotos[item.id]) {
      return customPhotos[item.id];
    }
    return imgErrors[item.id] ? item.fallbackImage : item.image;
  };

  const getStickerBadge = (sticker?: string) => {
    switch (sticker) {
      case 'bow':
        return <span className="text-2xl filter drop-shadow">🎀</span>;
      case 'heart':
        return <span className="text-2xl filter drop-shadow">💗</span>;
      case 'star':
        return <span className="text-2xl filter drop-shadow">⭐</span>;
      case 'flower':
        return <span className="text-2xl filter drop-shadow">🌸</span>;
      default:
        return <span className="text-2xl filter drop-shadow">✨</span>;
    }
  };

  return (
    <section id="our-memories" className="relative min-h-screen w-full px-4 py-20 bg-gradient-to-b from-[#FFD1DC] via-[#FFE4EC] to-[#FFF0F5] overflow-hidden">
      {/* Decorative background doodles */}
      <div className="absolute top-10 right-10 text-pink-300 opacity-25 text-8xl font-handwriting select-none pointer-events-none">
        memories ♡
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/70 border border-pink-300 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
            <Camera className="w-3.5 h-3.5 text-pink-500" />
            <span>Digital Scrapbook</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-display font-extrabold text-slate-900 tracking-tight mb-3">
            US BEING US 📸🩷
          </h2>

          <p className="text-lg sm:text-xl font-handwriting text-pink-700 font-semibold">
            A few memories with my favourite Minus 2 🎀
          </p>
        </div>

        {/* Polaroid Scrapbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {memories.map((item, idx) => {
            const currentSrc = getPhotoSrc(item);

            return (
              <div
                key={item.id}
                onClick={() => setActivePhoto(item)}
                className="group relative cursor-pointer transition-all duration-500 ease-out transform hover:rotate-0 hover:scale-105 hover:z-30"
                style={{
                  transform: `rotate(${item.tilt || (idx % 2 === 0 ? -2.5 : 2.5)}deg)`,
                }}
              >
                {/* Polaroid Frame */}
                <div className="bg-white p-4 pb-6 rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:shadow-pink-400/40 border border-pink-200/80 transition-shadow">
                  {/* Washi Tape Header */}
                  <div
                    className={`washi-tape -top-3 left-1/2 -translate-x-1/2 ${
                      idx % 2 === 0 ? 'rotate-2' : '-rotate-2'
                    }`}
                  />

                  {/* Sticker at the corner */}
                  <div className="absolute -top-3 -right-3 z-20 group-hover:scale-125 transition-transform duration-300">
                    {getStickerBadge(item.sticker)}
                  </div>

                  {/* Photo Container */}
                  <div className="relative aspect-[4/4.5] w-full rounded-xl overflow-hidden bg-pink-50/50 mb-3 border border-pink-100">
                    <img
                      src={currentSrc}
                      alt={item.title}
                      loading="lazy"
                      onError={() => handleImageError(item.id)}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-108"
                    />

                    {/* Gradient Overlay for subtle caption reveal */}
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                      <span className="text-xs uppercase tracking-wider text-pink-200 font-mono">
                        {item.date || 'Golden Memory'}
                      </span>
                      <p className="text-sm font-medium leading-snug drop-shadow-sm mt-0.5 line-clamp-2">
                        {item.caption}
                      </p>
                    </div>
                  </div>

                  {/* Polaroid Handwritten Caption */}
                  <div className="text-center px-1">
                    <h3 className="font-handwriting text-2xl font-bold text-slate-800 tracking-wide line-clamp-1 group-hover:text-pink-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 sm:hidden">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for Full View */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-3xl p-5 shadow-2xl border-4 border-pink-200 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-3 right-3 p-2 rounded-full bg-pink-100 text-pink-700 hover:bg-pink-200 transition-colors z-10"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-pink-50 mb-4 border border-pink-100">
              <img
                src={getPhotoSrc(activePhoto)}
                alt={activePhoto.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Details */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-pink-100 text-pink-800 text-xs font-semibold">
                <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
                <span>{activePhoto.date || 'Precious Memory'}</span>
              </div>
              <h3 className="font-serif-display text-2xl font-bold text-slate-900">
                {activePhoto.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
