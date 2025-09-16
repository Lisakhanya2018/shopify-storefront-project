import { useState, useEffect } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  prefix = "", 
  suffix = "", 
  className = "" 
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const startValue = 0;
    const endValue = end;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * (endValue - startValue) + startValue));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <span className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default AnimatedCounter;