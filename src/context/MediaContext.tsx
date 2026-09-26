import React, { createContext, useContext, useState, useEffect } from 'react';

interface MediaContextType {
  customSongUrl: string | null;
  customSongName: string;
  setCustomSong: (file: File) => void;
  clearCustomSong: () => void;
  customPhotos: Record<string, string>;
  setCustomPhoto: (key: string, file: File) => void;
  clearCustomPhoto: (key: string) => void;
  resetAllMedia: () => void;
}

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export const MediaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [customSongUrl, setCustomSongUrl] = useState<string | null>(() => {
    return localStorage.getItem('birthday_custom_song_url') || null;
  });
  const [customSongName, setCustomSongName] = useState<string>(() => {
    return localStorage.getItem('birthday_custom_song_name') || 'assets/shape-of-you.mp3';
  });

  const [customPhotos, setCustomPhotos] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('birthday_custom_photos');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const setCustomSong = (file: File) => {
    const url = URL.createObjectURL(file);
    setCustomSongUrl(url);
    setCustomSongName(file.name);
    // Note: Blob URLs are per-session, but we save the name in localStorage
    localStorage.setItem('birthday_custom_song_name', file.name);
  };

  const clearCustomSong = () => {
    setCustomSongUrl(null);
    setCustomSongName('assets/shape-of-you.mp3');
    localStorage.removeItem('birthday_custom_song_url');
    localStorage.removeItem('birthday_custom_song_name');
  };

  const setCustomPhoto = (key: string, file: File) => {
    // Read as Base64 data URL so it persists across reloads in localStorage
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      if (base64) {
        setCustomPhotos((prev) => {
          const updated = { ...prev, [key]: base64 };
          try {
            localStorage.setItem('birthday_custom_photos', JSON.stringify(updated));
          } catch {
            // If localStorage limit reached, still keep in memory
          }
          return updated;
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const clearCustomPhoto = (key: string) => {
    setCustomPhotos((prev) => {
      const updated = { ...prev };
      delete updated[key];
      try {
        localStorage.setItem('birthday_custom_photos', JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const resetAllMedia = () => {
    setCustomSongUrl(null);
    setCustomSongName('assets/shape-of-you.mp3');
    setCustomPhotos({});
    localStorage.removeItem('birthday_custom_photos');
    localStorage.removeItem('birthday_custom_song_name');
  };

  return (
    <MediaContext.Provider
      value={{
        customSongUrl,
        customSongName,
        setCustomSong,
        clearCustomSong,
        customPhotos,
        setCustomPhoto,
        clearCustomPhoto,
        resetAllMedia,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

export const useMedia = () => {
  const ctx = useContext(MediaContext);
  if (!ctx) throw new Error('useMedia must be used within MediaProvider');
  return ctx;
};
