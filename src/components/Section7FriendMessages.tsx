import React, { useState } from 'react';
import { Mail, MailOpen, Heart, Sparkles, X, User } from 'lucide-react';
import { friendMessages, FriendMessage } from '../data/birthdayData';

export const Section7FriendMessages: React.FC = () => {
  const [messages, setMessages] = useState<FriendMessage[]>(friendMessages);
  const [openedId, setOpenedId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="friend-messages" className="relative min-h-screen w-full px-4 py-20 bg-gradient-to-b from-[#FFD1DC] via-[#FFE4EC] to-[#FFF0F5] text-slate-800">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/70 border border-pink-300 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
            <Mail className="w-3.5 h-3.5 text-pink-500" />
            <span>Digital Letters</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-display font-extrabold text-slate-900 tracking-tight mb-3">
            MESSAGES FROM YOUR PEOPLE 💌
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Personal letters written with love. Tap any envelope to unseal and read the note!
          </p>
        </div>

        {/* Envelope Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {messages.map((item) => {
            const isOpen = openedId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => toggleOpen(item.id)}
                className="group relative cursor-pointer"
              >
                {/* Envelope Container */}
                <div
                  className={`relative rounded-3xl p-6 transition-all duration-500 border-2 shadow-lg group-hover:shadow-2xl group-hover:shadow-pink-400/30 ${
                    isOpen
                      ? 'bg-white border-pink-400 -translate-y-2'
                      : 'bg-white/90 hover:bg-white border-pink-200 hover:-translate-y-1'
                  }`}
                  style={{
                    backgroundColor: isOpen ? '#FFFFFF' : item.envelopeColor || '#FFE4EC',
                  }}
                >
                  {/* Wax Seal / Stamp */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center text-white shadow-md border-2 border-white/80 group-hover:scale-110 transition-transform">
                    <span className="text-base">{item.stampEmoji || '💌'}</span>
                  </div>

                  {/* Sender Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-pink-100 border-2 border-pink-300 flex items-center justify-center shadow-xs">
                      {item.avatar ? (
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-6 h-6 text-pink-500" />
                      )}
                    </div>

                    <div>
                      <h3 className="font-serif-display font-bold text-slate-900 text-lg leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-xs text-pink-700 font-medium">
                        {item.relationship}
                      </p>
                    </div>
                  </div>

                  {/* Letter Content Preview or Unfolded */}
                  <div className="relative pt-2">
                    {!isOpen ? (
                      <div className="flex flex-col items-center justify-center py-6 border-t border-pink-200/60 text-slate-500">
                        <div className="flex items-center gap-2 text-pink-700 font-semibold text-sm">
                          <Mail className="w-4 h-4" />
                          <span>Tap to open letter</span>
                        </div>
                        <span className="text-[11px] text-pink-400 mt-1 font-mono">
                          Sealed with love 🎀
                        </span>
                      </div>
                    ) : (
                      <div className="pt-3 border-t-2 border-dashed border-pink-200 animate-fade-in">
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-serif-display italic mb-4">
                          “{item.message}”
                        </p>
                        <div className="flex items-center justify-between text-[11px] text-pink-600 font-semibold font-handwriting text-lg pt-1">
                          <span>With tons of love ♡</span>
                          <span className="text-xs font-sans text-slate-400 hover:text-slate-600">
                            (tap to close)
                          </span>
                        </div>
                      </div>
                    )}
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
