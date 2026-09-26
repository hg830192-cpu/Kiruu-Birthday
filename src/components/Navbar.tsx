import React, { useState } from 'react';
import { Menu, X, Sparkles, Heart, Share2, Check, Camera, Github } from 'lucide-react';

interface NavbarProps {
  onScrollTo: (id: string) => void;
  activeSection: string;
  onOpenMediaManager: () => void;
  unlockedLevel: number;
  onUnlockAll: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onScrollTo,
  activeSection,
  onOpenMediaManager,
  unlockedLevel,
  onUnlockAll,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const navItems = [
    { id: 'birthday-reveal', label: 'Celebrate', level: 2 },
    { id: 'minus-two-legend', label: 'The Legend', level: 3 },
    { id: 'cop-ylot-incident', label: 'Cop ylot', level: 4 },
    { id: 'our-memories', label: 'Memories', level: 5 },
    { id: 'special-qualities', label: 'Why You’re Special', level: 6 },
    { id: 'jokes-apart', label: 'Jokes Apart', level: 7 },
    { id: 'ca-kiran-yadav', label: 'CA Kiran', level: 8 },
    { id: 'final-surprise', label: 'Surprise 🎁', level: 9 },
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-pink-200/60 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Zone 1: Wordmark */}
        <button
          onClick={() => onScrollTo('birthday-reveal')}
          className="text-base sm:text-lg font-serif-display font-bold text-pink-700 hover:text-pink-900 transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <span>Kiran Yadav</span>
          <span className="text-xs bg-pink-100 text-pink-700 font-sans px-2 py-0.5 rounded-full font-semibold">
            -2 🎀
          </span>
        </button>

        {/* Zone 2: Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-4 text-xs font-semibold text-slate-600">
          {navItems.map((item) => {
            const isAccessible = unlockedLevel >= item.level;
            return (
              <button
                key={item.id}
                onClick={() => isAccessible && handleNavClick(item.id)}
                disabled={!isAccessible}
                className={`transition-colors tracking-wide ${
                  activeSection === item.id
                    ? 'text-pink-600 font-bold border-b-2 border-pink-500 pb-0.5'
                    : isAccessible
                    ? 'hover:text-pink-700 cursor-pointer'
                    : 'opacity-40 cursor-not-allowed'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-2">
          {/* Photos, Song & GitHub Button */}
          <button
            onClick={onOpenMediaManager}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white shadow-xs transition-all hover:scale-102 cursor-pointer"
            title="Upload your MP3, Photos and see GitHub instructions"
          >
            <Camera className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Add Photos & Song</span>
            <span className="sm:hidden">Media</span>
          </button>

          {/* Quick Copy Link Button */}
          <button
            onClick={handleCopyLink}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 shadow-2xs transition-all cursor-pointer mr-14 lg:mr-28"
            title="Copy link to send to Kiran"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-medium">Link Copied! 🎀</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-pink-500" />
                <span>Share Link</span>
              </>
            )}
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-slate-700 hover:text-pink-600 hover:bg-pink-50 transition-colors mr-14"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-pink-200 p-4 space-y-2 animate-fade-in shadow-xl">
          <div className="flex items-center justify-between pb-2 border-b border-pink-100 mb-2">
            <button
              onClick={handleCopyLink}
              className="text-xs text-pink-700 font-semibold flex items-center gap-1"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Link Copied! 🎀' : 'Copy Link for Kiran'}</span>
            </button>

            {unlockedLevel < 9 && (
              <button
                onClick={() => {
                  onUnlockAll();
                  setMobileMenuOpen(false);
                }}
                className="text-xs text-slate-500 hover:text-pink-600 underline"
              >
                Unlock All Chapters (Testing Mode)
              </button>
            )}
          </div>

          {navItems.map((item) => {
            const isAccessible = unlockedLevel >= item.level;
            return (
              <button
                key={item.id}
                onClick={() => isAccessible && handleNavClick(item.id)}
                disabled={!isAccessible}
                className={`w-full text-left py-2 px-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                  isAccessible
                    ? 'text-slate-700 hover:text-pink-700 hover:bg-pink-50'
                    : 'text-slate-400 opacity-50 cursor-not-allowed'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs">{isAccessible ? '→' : '🔒'}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

