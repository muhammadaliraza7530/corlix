'use client';

import React, { useEffect, useRef, useState } from 'react';

export type ExtendedAnimationType =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'zoom-out'
  | 'scale-fade'
  | 'slide-up'
  | 'slide-down'
  | 'bounce-in'
  | 'spring-bounce'
  | 'rotate-in'
  | 'flip-in';

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ExtendedAnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  stagger?: number;
};

export default function ScrollReveal({
  children,
  className = '',
  variant = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.2,
  once = true,
  stagger = 0,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once, threshold]);

  const getInitialTransform = (): string => {
    switch (variant) {
      case 'fade-up':
        return 'translateY(30px)';
      case 'fade-down':
        return 'translateY(-30px)';
      case 'fade-left':
        return 'translateX(30px)';
      case 'fade-right':
        return 'translateX(-30px)';
      case 'zoom-in':
        return 'scale(0.9)';
      case 'zoom-out':
        return 'scale(1.1)';
      case 'scale-fade':
        return 'scale(0.95)';
      case 'slide-up':
        return 'translateY(40px)';
      case 'slide-down':
        return 'translateY(-40px)';
      case 'bounce-in':
      case 'spring-bounce':
        return 'scale(0.8)';
      case 'rotate-in':
        return 'rotate(-5deg) scale(0.95)';
      case 'flip-in':
        return 'rotateY(90deg)';
      default:
        return 'translateY(30px)';
    }
  };

  const getEasing = (): string => {
    switch (variant) {
      case 'bounce-in':
      case 'spring-bounce':
        return 'cubic-bezier(0.68, -0.55, 0.265, 1.55)';
      case 'zoom-in':
      case 'zoom-out':
      case 'scale-fade':
        return 'cubic-bezier(0.34, 1.56, 0.64, 1)';
      default:
        return 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    }
  };

  const renderChildren = () => {
    if (!stagger || stagger <= 0) return children;

    return React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) return child;

      const computedDelay = delay + index * stagger;

      return (
        <div
          key={child.key ?? index}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : getInitialTransform(),
            transition: `opacity ${duration}ms ${getEasing()} ${computedDelay}ms, transform ${duration}ms ${getEasing()} ${computedDelay}ms`,
          }}
        >
          {child}
        </div>
      );
    });
  };

  if (!stagger || stagger <= 0) {
    return (
      <div
        ref={containerRef}
        className={className}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'none' : getInitialTransform(),
          transition: `opacity ${duration}ms ${getEasing()} ${delay}ms, transform ${duration}ms ${getEasing()} ${delay}ms`,
          backfaceVisibility: 'hidden',
          willChange: isVisible ? 'auto' : 'opacity, transform',
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={className}>
      {renderChildren()}
    </div>
  );
}
