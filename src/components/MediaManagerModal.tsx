import React, { useState } from 'react';
import { Camera, Music, Github, X, Upload, Check, Trash2, Globe, Sparkles, Copy } from 'lucide-react';
import { useMedia } from '../context/MediaContext';
import { memories, finalSurpriseData } from '../data/birthdayData';

interface MediaManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MediaManagerModal: React.FC<MediaManagerModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'github'>('upload');
  const [copiedCode, setCopiedCode] = useState(false);

  const {
    customSongName,
    setCustomSong,
    clearCustomSong,
    customPhotos,
    setCustomPhoto,
    clearCustomPhoto,
    resetAllMedia,
  } = useMedia();

  if (!isOpen) return null;

  const photoSlots = [
    { key: 'mem-1', label: 'Memory 1', subtitle: 'That Unforgettable Day' },
    { key: 'mem-2', label: 'Memory 2', subtitle: 'Candid Perfection' },
    { key: 'mem-3', label: 'Memory 3', subtitle: 'Signature Kiran Smile' },
    { key: 'mem-4', label: 'Memory 4', subtitle: 'Study Sessions' },
    { key: 'mem-5', label: 'Memory 5', subtitle: 'Partner in Crime' },
    { key: 'mem-6', label: 'Memory 6', subtitle: 'Future CA' },
    { key: 'copylot-memory', label: 'Cop ylot Incident', subtitle: 'Funny reaction photo' },
    { key: 'best-photo', label: 'Grand Finale Best Photo', subtitle: 'Your best photo together' },
  ];

  const handleCopyGitCommands = async () => {
    const text = `# Step 1: Initialize git in your project
git init
git add .
git commit -m "Happy Birthday Kiran website"

# Step 2: Push to your GitHub repo
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/kiran-birthday.git
git push -u origin main

# Step 3: Go to GitHub Repo -> Settings -> Pages -> Source: GitHub Actions!`;
    await navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl w-full max-w-2xl border-4 border-pink-300 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-200" />
            <h3 className="font-serif-display font-bold text-lg sm:text-xl">
              Add Your Song & Photos + Publish to GitHub
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-pink-200 bg-pink-50/60 p-1.5 gap-2">
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex-1 py-2 px-3 rounded-2xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'upload'
                ? 'bg-white text-pink-700 shadow-sm border border-pink-200'
                : 'text-slate-600 hover:text-pink-600'
            }`}
          >
            <Camera className="w-4 h-4" />
            <span>Upload Song & Photos</span>
          </button>
          <button
            onClick={() => setActiveTab('github')}
            className={`flex-1 py-2 px-3 rounded-2xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'github'
                ? 'bg-white text-pink-700 shadow-sm border border-pink-200'
                : 'text-slate-600 hover:text-pink-600'
            }`}
          >
            <Github className="w-4 h-4" />
            <span>Publish to GitHub Guide</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-700 text-sm">
          {activeTab === 'upload' ? (
            <>
              {/* Song Section */}
              <div className="bg-pink-50/60 p-4 rounded-2xl border border-pink-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 font-bold text-pink-800 text-sm">
                    <Music className="w-4 h-4 text-pink-600" />
                    <span>Background Song (Shape of You)</span>
                  </div>
                  {customSongName !== 'assets/shape-of-you.mp3' && (
                    <button
                      onClick={clearCustomSong}
                      className="text-xs text-rose-500 hover:underline flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" /> Reset
                    </button>
                  )}
                </div>

                <p className="text-xs text-slate-500 mb-3">
                  Currently set to: <strong className="text-pink-700 font-mono">{customSongName}</strong>
                </p>

                <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-semibold text-xs cursor-pointer shadow-sm transition-all hover:scale-102">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Choose MP3 / Audio File From Computer</span>
                  <input
                    type="file"
                    accept="audio/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) setCustomSong(file);
                    }}
                  />
                </label>
              </div>

              {/* Photos Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-pink-800 text-sm flex items-center gap-2">
                    <Camera className="w-4 h-4 text-pink-600" />
                    <span>Scrapbook Photos (Click to replace with real photos)</span>
                  </h4>
                  <button
                    onClick={resetAllMedia}
                    className="text-xs text-rose-500 hover:underline"
                  >
                    Reset all photos
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {photoSlots.map((slot) => {
                    const custom = customPhotos[slot.key];
                    return (
                      <div
                        key={slot.key}
                        className="bg-white p-2.5 rounded-2xl border-2 border-pink-200 hover:border-pink-400 shadow-xs transition-all flex flex-col items-center text-center group relative"
                      >
                        <div className="w-full aspect-square rounded-xl overflow-hidden bg-pink-100/50 mb-2 relative flex items-center justify-center border border-pink-100">
                          {custom ? (
                            <img
                              src={custom}
                              alt={slot.label}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="p-2 text-center">
                              <Camera className="w-6 h-6 text-pink-400 mx-auto mb-1" />
                              <span className="text-[10px] text-slate-400 font-mono">Sample Photo</span>
                            </div>
                          )}

                          {/* Hover Upload Overlay */}
                          <label className="absolute inset-0 bg-pink-900/60 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-1">
                            <Upload className="w-4 h-4 mb-0.5" />
                            <span className="text-[10px] font-bold">Replace Photo</span>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) setCustomPhoto(slot.key, file);
                              }}
                            />
                          </label>
                        </div>

                        <span className="text-xs font-bold text-slate-800 line-clamp-1">{slot.label}</span>
                        <span className="text-[10px] text-pink-600 line-clamp-1">{slot.subtitle}</span>

                        {custom && (
                          <button
                            onClick={() => clearCustomPhoto(slot.key)}
                            className="mt-1 text-[10px] text-rose-500 hover:underline flex items-center gap-0.5"
                          >
                            <Trash2 className="w-2.5 h-2.5" /> Reset
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            /* GitHub Deployment Guide */
            <div className="space-y-4">
              <div className="bg-slate-900 text-white p-4 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-pink-300">Quick Push to GitHub Commands</span>
                  <button
                    onClick={handleCopyGitCommands}
                    className="flex items-center gap-1 text-xs bg-white/20 hover:bg-white/30 text-white px-2.5 py-1 rounded-lg transition-colors"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'Copied!' : 'Copy Commands'}</span>
                  </button>
                </div>
                <pre className="text-xs font-mono text-emerald-300 overflow-x-auto p-2 bg-slate-950 rounded-xl leading-relaxed">
{`git init
git add .
git commit -m "Kiran Yadav Birthday surprise website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/kiran-birthday.git
git push -u origin main`}
                </pre>
              </div>

              <div className="space-y-3 text-xs leading-relaxed">
                <div className="p-3 bg-pink-50 rounded-xl border border-pink-200">
                  <strong className="text-pink-800 block mb-1">🚀 Automatic GitHub Pages Deployment Ready:</strong>
                  We have already added the automated <code className="bg-white px-1 py-0.5 rounded text-pink-700 font-mono">.github/workflows/deploy.yml</code> and configured <code className="bg-white px-1 py-0.5 rounded text-pink-700 font-mono">base: './'</code> in Vite!
                  Once you push to GitHub, go to <strong>Settings → Pages → Build and deployment → Source: GitHub Actions</strong>. It will deploy your site live in 60 seconds!
                </div>

                <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
                  <strong className="text-purple-800 block mb-1">📁 Permanent Asset Files:</strong>
                  If you want your photos and song permanently embedded in the git repository before pushing, simply put your files directly in the <code className="bg-white px-1 py-0.5 rounded text-purple-700 font-mono">public/assets/</code> directory:
                  <ul className="list-disc list-inside mt-1 space-y-0.5 text-slate-600">
                    <li><code className="text-purple-700 font-mono">public/assets/shape-of-you.mp3</code></li>
                    <li><code className="text-purple-700 font-mono">public/assets/photo1.jpg</code> to <code className="text-purple-700 font-mono">photo6.jpg</code></li>
                    <li><code className="text-purple-700 font-mono">public/assets/copylot-memory.jpg</code></li>
                    <li><code className="text-purple-700 font-mono">public/assets/best-photo.jpg</code></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Changes apply in real-time across all sections!
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold text-xs shadow-sm transition-all"
          >
            Done 🎀
          </button>
        </div>
      </div>
    </div>
  );
};
