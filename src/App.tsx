/**
 * 🌸 Happy Birthday Kiran Yadav (Minus 2) 🌸
 * Digital Scrapbook & Interactive Chapter-by-Chapter Birthday Experience
 */

import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { AudioPlayer } from './components/AudioPlayer';
import { FloatingDecorations } from './components/FloatingDecorations';
import { Navbar } from './components/Navbar';
import { PlayfulGate } from './components/PlayfulGate';
import { MediaManagerModal } from './components/MediaManagerModal';
import { MediaProvider } from './context/MediaContext';
import { Section1Locked } from './components/Section1Locked';
import { Section2Reveal } from './components/Section2Reveal';
import { Section3MinusTwo } from './components/Section3MinusTwo';
import { Section4Copylot } from './components/Section4Copylot';
import { Section5Memories } from './components/Section5Memories';
import { Section6SpecialQualities } from './components/Section6SpecialQualities';
import { Section7FriendMessages } from './components/Section7FriendMessages';
import { Section8JokesApart } from './components/Section8JokesApart';
import { Section9CAKiran } from './components/Section9CAKiran';
import { Section10FinalSurprise } from './components/Section10FinalSurprise';
import { EasterEgg } from './components/EasterEgg';
import { CustomizerHelper } from './components/CustomizerHelper';
import { Heart, Sparkles, Unlock } from 'lucide-react';

function BirthdayApp() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [unlockedChapter, setUnlockedChapter] = useState(2); // Starts at Chapter 2 after opening
  const [activeSection, setActiveSection] = useState('birthday-reveal');
  const [mediaModalOpen, setMediaModalOpen] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
    setIsPlayingMusic(true);
    setTimeout(() => {
      document.getElementById('birthday-reveal')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const advanceToChapter = (chapterNum: number, targetId: string) => {
    setUnlockedChapter((prev) => Math.max(prev, chapterNum));
    setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleUnlockAll = () => {
    setUnlockedChapter(10);
  };

  return (
    <div id="main-wrapper" className="relative min-h-screen w-full bg-[#FFF5F7] text-slate-800 overflow-x-hidden selection:bg-pink-300 selection:text-pink-900">
      {/* Cute Desktop Custom Cursor */}
      <CustomCursor />

      {/* Floating Sparkles, Hearts & Background Elements */}
      <FloatingDecorations />

      {/* Music Controller (Top-Right) */}
      <AudioPlayer
        isPlaying={isPlayingMusic}
        onTogglePlay={() => setIsPlayingMusic(!isPlayingMusic)}
        onOpenMediaManager={() => setMediaModalOpen(true)}
      />

      {/* Secret Easter Egg ("Psst... Minus 2") */}
      <EasterEgg />

      {/* Media Manager & GitHub Publisher Modal */}
      <MediaManagerModal
        isOpen={mediaModalOpen}
        onClose={() => setMediaModalOpen(false)}
      />

      {/* Bottom Floating Quick Tips */}
      <CustomizerHelper />

      {!isUnlocked ? (
        /* Section 1: Cinematic Locked Countdown Screen */
        <Section1Locked onUnlock={handleUnlock} />
      ) : (
        /* Interactive Step-by-Step Experience */
        <div className="relative animate-fade-in">
          {/* Top Bar Navigation */}
          <Navbar
            onScrollTo={scrollToSection}
            activeSection={activeSection}
            onOpenMediaManager={() => setMediaModalOpen(true)}
            unlockedLevel={unlockedChapter}
            onUnlockAll={handleUnlockAll}
          />

          {/* Chapter Testing Mode Bar */}
          {unlockedChapter < 10 && (
            <div className="pt-16 pb-2 px-4 text-center bg-pink-100/60 border-b border-pink-200 text-xs text-pink-700 flex items-center justify-center gap-3">
              <span>Testing mode: Each section unlocks after clicking the playful button below!</span>
              <button
                onClick={handleUnlockAll}
                className="font-bold underline text-pink-800 hover:text-pink-950 flex items-center gap-1"
              >
                <Unlock className="w-3 h-3" />
                <span>Unlock All 10 Chapters Now</span>
              </button>
            </div>
          )}

          <main className={unlockedChapter < 10 ? 'pt-2' : 'pt-14'}>
            {/* CHAPTER 2: Birthday Reveal */}
            <div id="birthday-reveal">
              <Section2Reveal onScrollNext={() => advanceToChapter(3, 'minus-two-legend')} />
              {unlockedChapter === 2 && (
                <PlayfulGate
                  chapterNumber={2}
                  question="Want to know why on earth you are called Minus 2? 🤔"
                  yesButtonLabel="Tell me the origin story! 🎀"
                  noButtonLabel="No, I'm already embarrassed 🙈"
                  onAdvance={() => advanceToChapter(3, 'minus-two-legend')}
                />
              )}
            </div>

            {/* CHAPTER 3: The Legend of Minus 2 */}
            {unlockedChapter >= 3 && (
              <div id="minus-two-legend" className="animate-fade-in">
                <Section3MinusTwo />
                {unlockedChapter === 3 && (
                  <PlayfulGate
                    chapterNumber={3}
                    question="Remember that Microsoft thing you completely butchered? 😂"
                    yesButtonLabel="Relive the Cop ylot incident! ✈️"
                    noButtonLabel="Please delete that memory ❌"
                    onAdvance={() => advanceToChapter(4, 'cop-ylot-incident')}
                  />
                )}
              </div>
            )}

            {/* CHAPTER 4: The Cop ylot Incident */}
            {unlockedChapter >= 4 && (
              <div id="cop-ylot-incident" className="animate-fade-in">
                <Section4Copylot />
                {unlockedChapter === 4 && (
                  <PlayfulGate
                    chapterNumber={4}
                    question="Ready to inspect our photographic evidence? 📸"
                    yesButtonLabel="Take me to the scrapbook! 🩷"
                    noButtonLabel="I look too chaotic in those 🏃‍♀️"
                    onAdvance={() => advanceToChapter(5, 'our-memories')}
                  />
                )}
              </div>
            )}

            {/* CHAPTER 5: Our Memories (Polaroid Scrapbook) */}
            {unlockedChapter >= 5 && (
              <div id="our-memories" className="animate-fade-in">
                <Section5Memories />
                {unlockedChapter === 5 && (
                  <PlayfulGate
                    chapterNumber={5}
                    question="Want to discover 12 reasons you are so special? 👀"
                    yesButtonLabel="Show me the flip cards! 🎀"
                    noButtonLabel="My ego is already too big 💅"
                    onAdvance={() => advanceToChapter(6, 'special-qualities')}
                  />
                )}
              </div>
            )}

            {/* CHAPTER 6: Things That Make Kiran Special (12 3D Flip Cards) */}
            {unlockedChapter >= 6 && (
              <div id="special-qualities" className="animate-fade-in">
                <Section6SpecialQualities />
                {unlockedChapter === 6 && (
                  <PlayfulGate
                    chapterNumber={6}
                    question="Ready to read letters from your favorite people? 💌"
                    yesButtonLabel="Unseal the envelopes! 📬"
                    noButtonLabel="I'm too emotional for this 🥹"
                    onAdvance={() => advanceToChapter(7, 'friend-messages')}
                  />
                )}
              </div>
            )}

            {/* CHAPTER 7: Messages From Your People (Digital Letters) */}
            {unlockedChapter >= 7 && (
              <div id="friend-messages" className="animate-fade-in">
                <Section7FriendMessages />
                {unlockedChapter === 7 && (
                  <PlayfulGate
                    chapterNumber={7}
                    question="Can we talk from the bottom of our hearts for a second? 🥹"
                    yesButtonLabel="Okay... jokes apart 🩷"
                    noButtonLabel="Keep roasting me please 😂"
                    onAdvance={() => advanceToChapter(8, 'jokes-apart')}
                  />
                )}
              </div>
            )}

            {/* CHAPTER 8: Okay... Jokes Apart (Heartfelt Wishes) */}
            {unlockedChapter >= 8 && (
              <div id="jokes-apart" className="animate-fade-in">
                <Section8JokesApart />
                {unlockedChapter === 8 && (
                  <PlayfulGate
                    chapterNumber={8}
                    question="Ready for your future CA coronation? 📚✨"
                    yesButtonLabel="Destined for CA Kiran Yadav! 📈"
                    noButtonLabel="Don't mention audits right now 😭"
                    onAdvance={() => advanceToChapter(9, 'ca-kiran-yadav')}
                  />
                )}
              </div>
            )}

            {/* CHAPTER 9: CA Kiran Yadav (CA Final Motivation) */}
            {unlockedChapter >= 9 && (
              <div id="ca-kiran-yadav" className="animate-fade-in">
                <Section9CAKiran />
                {unlockedChapter === 9 && (
                  <PlayfulGate
                    chapterNumber={9}
                    question="Ready for one last little surprise? 🎁"
                    yesButtonLabel="OPEN THE GRAND FINALE! 🎀"
                    noButtonLabel="I can't handle any more love 🥹"
                    onAdvance={() => advanceToChapter(10, 'final-surprise')}
                  />
                )}
              </div>
            )}

            {/* CHAPTER 10: Final Surprise (Best Photo & Personal Letter) */}
            {unlockedChapter >= 10 && (
              <div id="final-surprise" className="animate-fade-in">
                <Section10FinalSurprise />
              </div>
            )}
          </main>

          {/* Scrapbook Footer */}
          <footer className="relative py-12 px-4 bg-gradient-to-t from-[#FFD1DC] to-[#FFF0F5] border-t border-pink-200 text-center">
            <div className="max-w-md mx-auto space-y-3">
              <div className="flex items-center justify-center gap-2 text-pink-600 text-xl font-handwriting text-2xl font-bold">
                <span>Made with</span>
                <Heart className="w-5 h-5 text-pink-500 fill-pink-500 animate-pulse" />
                <span>for Kiran Yadav (Minus 2)</span>
              </div>
              <p className="text-xs text-slate-500">
                A digital birthday gift to make 12:00 AM unforgettable. Happy Birthday! 🎀🎂✨
              </p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <MediaProvider>
      <BirthdayApp />
    </MediaProvider>
  );
}
