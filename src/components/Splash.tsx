import { useEffect, useState } from 'react';

interface SplashProps {
  onComplete: () => void;
}

const Splash = ({ onComplete }: SplashProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-complete after 2 seconds
    const timeout = setTimeout(() => {
      handleAnimationComplete();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleAnimationComplete = () => {
    setIsVisible(false);
    setTimeout(onComplete, 500);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-space-dark flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block w-16 h-16 relative">
          <div className="absolute inset-0 border-4 border-accent rounded-full animate-[spin_1s_linear_infinite] border-t-transparent"></div>
          <div className="absolute inset-2 border-4 border-accent/50 rounded-full animate-[spin_2s_linear_infinite_reverse] border-b-transparent"></div>
        </div>
        <h1 className="mt-8 text-2xl font-bold text-gradient">Loading...</h1>
      </div>
    </div>
  );
};

export default Splash; 