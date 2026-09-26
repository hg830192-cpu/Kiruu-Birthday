import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music, Upload } from 'lucide-react';
import { synthAudio } from '../utils/audioEngine';
import { useMedia } from '../context/MediaContext';

interface AudioPlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onOpenMediaManager?: () => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ isPlaying, onTogglePlay, onOpenMediaManager }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [usingFallbackSynth, setUsingFallbackSynth] = useState(false);
  const { customSongUrl, customSongName } = useMedia();

  const activeAudioSrc = customSongUrl || 'assets/shape-of-you.mp3';

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.18; // ~18% volume as requested

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setUsingFallbackSynth(false);
            synthAudio.stop();
          })
          .catch(() => {
            // If local mp3 not found or blocked, start warm synthesized melody
            setUsingFallbackSynth(true);
            synthAudio.play();
          });
      }
    } else {
      audio.pause();
      synthAudio.stop();
    }
  }, [isPlaying, activeAudioSrc]);

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <audio
        ref={audioRef}
        src={activeAudioSrc}
        loop
        preload="auto"
        onError={() => {
          if (isPlaying) {
            setUsingFallbackSynth(true);
            synthAudio.play();
          }
        }}
      />

      <div className="relative group flex items-center gap-1.5">
        <button
          onClick={onTogglePlay}
          aria-label={isPlaying ? "Mute music" : "Play music"}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-full backdrop-blur-md border transition-all duration-300 shadow-md ${
            isPlaying
              ? 'bg-pink-500/85 text-white border-pink-300 shadow-pink-300/40 hover:bg-pink-600 scale-100'
              : 'bg-white/85 text-pink-700 border-pink-200 hover:bg-pink-50 shadow-sm'
          }`}
        >
          {isPlaying ? (
            <>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="text-sm font-medium tracking-wide flex items-center gap-1.5">
                🎵 <span className="hidden sm:inline">{customSongName.replace('.mp3', '')}</span>
              </span>
              <Volume2 className="w-4 h-4 ml-0.5 animate-pulse" />
            </>
          ) : (
            <>
              <span className="text-sm font-medium tracking-wide flex items-center gap-1.5">
                🔇 <span className="hidden sm:inline">Music Muted</span>
              </span>
              <VolumeX className="w-4 h-4 ml-0.5 text-pink-400" />
            </>
          )}
        </button>

        {/* Change song / media manager trigger */}
        {onOpenMediaManager && (
          <button
            onClick={onOpenMediaManager}
            title="Upload your MP3 song / Change photos"
            className="p-2 rounded-full bg-white/80 hover:bg-white text-pink-600 border border-pink-200 shadow-sm transition-all hover:scale-105"
          >
            <Music className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
