import { useEffect, useState, useRef, useCallback } from 'react';

// Star: position/size/type/twinkle
interface Star {
  id: number;
  x: number;
  y: number;
  size: number;    // px
  opacity: number;
  twinkleDur: number;
  twinkleDelay: number;
}

// ShootingStar: position/angle/speed etc
interface ShootingStar {
  id: number;
  x: number;
  y: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  trail: number;
  active: boolean;
}

const STAR_SPECS = [
  { type: 'small', fraction: 0.7, sizeRange: [0.7, 1.5], twinkleRange: [1, 2.2] },
  { type: 'medium', fraction: 0.23, sizeRange: [1.7, 3], twinkleRange: [1.5, 2.8] },
  { type: 'large', fraction: 0.07, sizeRange: [3.2, 5.6], twinkleRange: [2, 3.2] },
];

const StarsBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const animationRef = useRef<number>();
  const lastShootingStarTime = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Optimized star generation with memoization
  const generateStars = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight * 3; // cover all sections
    const STAR_COUNT = Math.round(width * 0.55); // scale by width

    let idx = 0;
    const newStars: Star[] = [];
    STAR_SPECS.forEach(({ fraction, sizeRange, twinkleRange }) => {
      const count = Math.floor(STAR_COUNT * fraction);
      for (let i = 0; i < count; i++) {
        const size = Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
        const twinkleDur = Math.random() * (twinkleRange[1] - twinkleRange[0]) + twinkleRange[0];
        newStars.push({
          id: idx++,
          x: Math.random() * 100,
          y: Math.random() * 300,
          size,
          opacity: Math.random() * 0.7 + 0.2,
          twinkleDur,
          twinkleDelay: Math.random() * 6,
        });
      }
    });
    setStars(newStars);
  }, []);

  // Initialize stars and handle resize
  useEffect(() => {
    generateStars();
    const handleResize = () => {
      if (containerRef.current) {
        generateStars();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [generateStars]);

  // Initialize shooting stars
  useEffect(() => {
    const shootingStarsCount = 8;
    const initial: ShootingStar[] = [];
    for (let i = 0; i < shootingStarsCount; i++) {
      initial.push({
        id: i,
        x: -120,
        y: -120,
        length: Math.random() * 80 + 50,
        angle: Math.random() * 28 + 12,
        speed: Math.random() * 0.14 + 0.09,
        opacity: 0,
        trail: Math.random() * 24 + 28,
        active: false
      });
    }
    setShootingStars(initial);
  }, []);

  // Optimized shooting star animation with requestAnimationFrame
  useEffect(() => {
    const animate = (timestamp: number) => {
      // Shoot at random intervals
      if ((timestamp - lastShootingStarTime.current) > (Math.random() * 3100 + 1700)) {
        setShootingStars(prev => {
          const idx = prev.findIndex(star => !star.active);
          if (idx !== -1) {
            const updated = [...prev];
            updated[idx] = {
              ...updated[idx],
              x: Math.random() * window.innerWidth * 0.98,
              y: Math.random() * window.innerHeight * 0.6,
              angle: Math.random() * 35 + 23,
              length: Math.random() * 90 + 36,
              trail: Math.random() * 25 + 28,
              speed: Math.random() * 0.17 + 0.07,
              opacity: 1,
              active: true
            };
            lastShootingStarTime.current = timestamp;
            return updated;
          }
          return prev;
        });
      }

      setShootingStars(prev =>
        prev.map(star => {
          if (!star.active) return star;
          const newX = star.x + Math.cos(star.angle * Math.PI/180) * star.speed * 16;
          const newY = star.y + Math.sin(star.angle * Math.PI/180) * star.speed * 16;
          if (newX > window.innerWidth + 160 || newY > window.innerHeight * 3 + 110) {
            return { ...star, active: false, opacity: 0 };
          }
          return { ...star, x: newX, y: newY, opacity: Math.max(star.opacity - 0.017, 0) };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-space-dark bg-gradient-to-b from-black via-[#08142a] to-[#112240]"
    >
      {/* Multi-size twinkle stars with improved performance */}
      {stars.map(star => (
        <div
          key={star.id}
          className="star absolute will-change-transform"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            borderRadius: '9999px',
            background: '#FFF',
            boxShadow: `0 0 4px 1px #fff7, 0 0 12px 2px #fff3`,
            animation: `twinkle ${star.twinkleDur}s ease-in-out ${star.twinkleDelay}s infinite`,
            willChange: 'transform, opacity'
          }}
        />
      ))}
      {/* Animated shooting stars with improved performance */}
      {shootingStars.map(star => star.active && (
        <div
          key={`shooting-${star.id}`}
          className="absolute pointer-events-none will-change-transform"
          style={{
            width: `${star.length}px`,
            height: '1.7px',
            left: `${star.x}px`,
            top: `${star.y}px`,
            opacity: star.opacity,
            transform: `rotate(${star.angle}deg)`,
            background: `linear-gradient(90deg, #fff0 0%, #fff 55%, #fff0 96%)`,
            boxShadow: `0 0 15px 4px #fff8`,
            filter: `blur(0.46px)`,
            willChange: 'transform, left, top, opacity'
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;
