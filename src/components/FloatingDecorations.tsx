import React, { useEffect, useState, useCallback } from 'react';
import confetti from 'canvas-confetti';

interface FloatingItem {
  id: number;
  emoji: string;
  left: number; // percentage
  bottom: number; // start
  size: number; // rem
  duration: number; // seconds
  delay: number; // seconds
  sway: number; // px
}

interface FlyingMinusTwo {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

export const FloatingDecorations: React.FC = () => {
  const [decorations, setDecorations] = useState<FloatingItem[]>([]);
  const [flyingMinusTwos, setFlyingMinusTwos] = useState<FlyingMinusTwo[]>([]);

  // Base subtle decorative emojis: 🎀 💗 ✨ 🌸 🦋 🧸 ☁️ ⭐ 🩷
  const emojis = ['🎀', '💗', '✨', '🌸', '🦋', '🧸', '☁️', '⭐', '🩷'];

  useEffect(() => {
    // Generate gentle ambient floating items
    const items: FloatingItem[] = Array.from({ length: 16 }, (_, i) => ({
      id: i,
      emoji: emojis[i % emojis.length],
      left: Math.random() * 94 + 3,
      bottom: Math.random() * 100,
      size: Math.random() * 0.8 + 1.2,
      duration: Math.random() * 14 + 18,
      delay: Math.random() * 8,
      sway: Math.random() * 40 - 20,
    }));
    setDecorations(items);

    // Listen for custom minus two fly events
    const handleMinusTwoFly = (e: CustomEvent<{ x?: number; y?: number }>) => {
      triggerMinusTwoFly(e.detail?.x, e.detail?.y);
    };

    // Listen for custom heart burst
    const handleHeartBurst = (e: CustomEvent<{ x: number; y: number }>) => {
      triggerHeartBurst(e.detail.x, e.detail.y);
    };

    window.addEventListener('minus-two-fly' as any, handleMinusTwoFly);
    window.addEventListener('heart-burst' as any, handleHeartBurst);

    return () => {
      window.removeEventListener('minus-two-fly' as any, handleMinusTwoFly);
      window.removeEventListener('heart-burst' as any, handleHeartBurst);
    };
  }, []);

  const triggerHeartBurst = useCallback((clientX?: number, clientY?: number) => {
    const x = clientX !== undefined ? clientX / window.innerWidth : 0.5;
    const y = clientY !== undefined ? clientY / window.innerHeight : 0.5;

    confetti({
      particleCount: 28,
      spread: 60,
      origin: { x, y },
      colors: ['#FF8FAB', '#FFB6C8', '#FFD1DC', '#FFE4EC', '#FB6F92'],
      shapes: ['circle'],
      scalar: 1.2,
      ticks: 120,
      disableForReducedMotion: true,
    });
  }, []);

  const triggerMinusTwoFly = (originX?: number, originY?: number) => {
    // Create 6-8 flying '-2' elements
    const startX = originX ?? window.innerWidth / 2;
    const startY = originY ?? window.innerHeight / 2;

    const newItems: FlyingMinusTwo[] = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: startX + (Math.random() * 80 - 40),
      y: startY + (Math.random() * 80 - 40),
      rotation: Math.random() * 60 - 30,
      scale: Math.random() * 0.6 + 0.8,
    }));

    setFlyingMinusTwos((prev) => [...prev, ...newItems]);

    setTimeout(() => {
      setFlyingMinusTwos((prev) => prev.filter((item) => !newItems.some((n) => n.id === item.id)));
    }, 2800);
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    // Only trigger if clicking directly on ambient background
    if ((e.target as HTMLElement).tagName === 'SECTION' || (e.target as HTMLElement).id === 'main-wrapper') {
      triggerHeartBurst(e.clientX, e.clientY);
    }
  };

  return (
    <>
      {/* Ambient floating gentle background items */}
      <div
        className="fixed inset-0 pointer-events-none z-10 overflow-hidden select-none"
        onClick={handleBackgroundClick}
        aria-hidden="true"
      >
        {decorations.map((item) => (
          <div
            key={item.id}
            className="absolute opacity-25 hover:opacity-80 transition-opacity animate-gentle-float"
            style={{
              left: `${item.left}%`,
              top: `${(item.bottom + 10) % 90}%`,
              fontSize: `${item.size}rem`,
              filter: 'drop-shadow(0 2px 8px rgba(255, 143, 171, 0.3))',
              animationDuration: `${item.duration}s`,
              animationDelay: `${item.delay}s`,
            }}
          >
            {item.emoji}
          </div>
        ))}
      </div>

      {/* Flying -2 Easter Egg Particles */}
      {flyingMinusTwos.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {flyingMinusTwos.map((item, idx) => (
            <div
              key={item.id}
              className="absolute font-black tracking-tighter text-pink-600 transition-all duration-[2400ms] ease-out select-none"
              style={{
                left: `${item.x}px`,
                top: `${item.y}px`,
                transform: `translate(${(idx % 2 === 0 ? 1 : -1) * (180 + idx * 40)}px, ${-220 - idx * 30}px) rotate(${item.rotation * 3}deg) scale(${item.scale})`,
                opacity: 0,
                textShadow: '0 0 12px rgba(255, 105, 180, 0.8), 0 0 20px rgba(255, 192, 203, 0.9)',
                fontSize: '2rem',
              }}
            >
              -2 ✨
            </div>
          ))}
        </div>
      )}
    </>
  );
};
