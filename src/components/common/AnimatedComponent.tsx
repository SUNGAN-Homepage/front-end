import React, { useEffect, useRef, useState } from 'react';
import './AnimatedComponent.css'; // CSS 파일 추가

interface AnimatedComponentProps {
  children: React.ReactNode;
}

export const AnimatedComponent: React.FC<AnimatedComponentProps> = ({
  children,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // 보이면 true, 사라지면 false
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className={`fade-up ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};
