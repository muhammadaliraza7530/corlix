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
  duration = 700, // Slightly longer default for smoother glide
  threshold = 0.15,
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
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, threshold]);

  const getInitialTransform = (): string => {
    switch (variant) {
      case 'fade-up':
      case 'slide-up':
        return 'translate3d(0, 40px, 0)';
      case 'fade-down':
      case 'slide-down':
        return 'translate3d(0, -40px, 0)';
      case 'fade-left':
        return 'translate3d(40px, 0, 0)';
      case 'fade-right':
        return 'translate3d(-40px, 0, 0)';
      case 'zoom-in':
      case 'scale-fade':
        return 'scale3d(0.92, 0.92, 1)';
      case 'zoom-out':
        return 'scale3d(1.08, 1.08, 1)';
      case 'bounce-in':
      case 'spring-bounce':
        return 'scale3d(0.8, 0.8, 1)';
      case 'rotate-in':
        return 'rotate(-4deg) scale3d(0.95, 0.95, 1)';
      case 'flip-in':
        return 'perspective(1000px) rotateY(80deg)';
      default:
        return 'translate3d(0, 40px, 0)';
    }
  };

  const getEasing = (): string => {
    switch (variant) {
      case 'bounce-in':
      case 'spring-bounce':
        return 'cubic-bezier(0.34, 1.56, 0.64, 1)';
      case 'zoom-in':
      case 'zoom-out':
      case 'scale-fade':
        return 'cubic-bezier(0.16, 1, 0.3, 1)';
      case 'flip-in':
      case 'rotate-in':
        return 'cubic-bezier(0.45, 0, 0.55, 1)';
      default:
        // Premium EaseOutExpo curve
        return 'cubic-bezier(0.16, 1, 0.3, 1)';
    }
  };

  const getTransitionStyles = (computedDelay: number): React.CSSProperties => {
    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible
        ? variant === 'flip-in'
          ? 'perspective(1000px) rotateY(0)'
          : 'translate3d(0, 0, 0) scale3d(1, 1, 1)'
        : getInitialTransform(),
      filter: isVisible ? 'blur(0)' : 'blur(8px)',
      transition: `opacity ${duration}ms ${getEasing()} ${computedDelay}ms, transform ${duration}ms ${getEasing()} ${computedDelay}ms, filter ${duration}ms ${getEasing()} ${computedDelay}ms`,
      willChange: 'opacity, transform, filter',
      backfaceVisibility: 'hidden',
      transformOrigin: 'center center',
    };
  };

  // If no stagger, apply styles to the container div
  if (!stagger || stagger <= 0) {
    return (
      <div
        ref={containerRef}
        className={className}
        style={getTransitionStyles(delay)}
      >
        {children}
      </div>
    );
  }

  // If stagger is applied, inject styles directly into children to preserve Grid/Flex layouts
  return (
    <div ref={containerRef} className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        const computedDelay = delay + index * stagger;
        const childProps = child.props as { style?: React.CSSProperties };
        
        return React.cloneElement(child, {
          style: {
            ...childProps.style,
            ...getTransitionStyles(computedDelay),
          },
        } as { style?: React.CSSProperties });
      })}
    </div>
  );
}