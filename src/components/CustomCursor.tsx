import React, { useEffect, useState, useRef } from 'react';

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  type: 'heart' | 'sparkle';
  rotation: number;
}

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [particles, setParticles] = useState<TrailParticle[]>([]);
  const particleIdCounter = useRef(0);
  const lastEmitTime = useRef(0);

  useEffect(() => {
    // Check if device is touch or mobile
    const checkTouch = () => {
      const isTouch =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches;
      setIsTouchDevice(isTouch);
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);

    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Trail generation throttled
      const now = performance.now();
      if (now - lastEmitTime.current > 60) {
        lastEmitTime.current = now;
        const newParticle: TrailParticle = {
          id: particleIdCounter.current++,
          x: e.clientX + (Math.random() * 8 - 4),
          y: e.clientY + (Math.random() * 8 - 4),
          size: Math.random() * 6 + 8,
          opacity: 0.85,
          type: Math.random() > 0.35 ? 'heart' : 'sparkle',
          rotation: Math.random() * 40 - 20,
        };

        setParticles((prev) => [...prev.slice(-15), newParticle]);
      }

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive =
          target.closest('button') ||
          target.closest('a') ||
          target.closest('.interactive-target') ||
          target.closest('[role="button"]') ||
          target.tagName === 'INPUT' ||
          target.tagName === 'SELECT';
        setIsHovering(!!isInteractive);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Particle decay loop
    const decayInterval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            y: p.y - 1.2,
            opacity: p.opacity - 0.05,
            size: p.size * 0.96,
          }))
          .filter((p) => p.opacity > 0.1)
      );
    }, 40);

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      clearInterval(decayInterval);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Particle trail */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-75 select-none"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            opacity: p.opacity,
            transform: `translate(-50%, -50%) rotate(${p.rotation}deg) scale(${p.size / 10})`,
          }}
        >
          {p.type === 'heart' ? (
            <span className="text-pink-400 drop-shadow-[0_0_4px_rgba(255,143,171,0.6)]">🩷</span>
          ) : (
            <span className="text-amber-300 drop-shadow-[0_0_4px_rgba(251,191,36,0.8)]">✨</span>
          )}
        </div>
      ))}

      {/* Main cursor heart / bow */}
      <div
        className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out select-none ${
          isClicking ? 'scale-75' : isHovering ? 'scale-135' : 'scale-100'
        }`}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      >
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 ${
            isHovering
              ? 'bg-pink-400/20 backdrop-blur-xs ring-4 ring-pink-300/60 shadow-[0_0_15px_#FF8FAB]'
              : ''
          }`}
        >
          <span className="text-xl filter drop-shadow-[0_2px_4px_rgba(255,105,180,0.5)]">
            {isHovering ? '💖' : '🎀'}
          </span>
        </div>
      </div>
    </div>
  );
};
