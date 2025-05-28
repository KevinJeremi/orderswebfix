'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: React.ReactNode;
  direction?: 'up' | 'down';
  distance?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export default function ScrollFloat({
  children,
  direction = 'up',
  distance = 50,
  duration = 1.5,
  delay = 0,
  className = ''
}: ScrollFloatProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [gsapLoaded, setGsapLoaded] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    // Fallback: Make content visible immediately
    const fallbackTimer = setTimeout(() => {
      if (element && !gsapLoaded) {
        element.classList.add('scroll-float-visible');
      }
    }, 100);

    if (!element) {
      clearTimeout(fallbackTimer);
      return;
    }

    try {
      // Check if GSAP is available
      if (typeof gsap !== 'undefined' && ScrollTrigger) {
        setGsapLoaded(true);

        // Set initial state
        const initialY = direction === 'up' ? distance : -distance;
        gsap.set(element, {
          y: initialY,
          opacity: 0
        });

        // Create scroll trigger animation
        const scrollAnimation = gsap.to(element, {
          y: 0,
          opacity: 1,
          duration: duration,
          delay: delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

        clearTimeout(fallbackTimer);

        return () => {
          scrollAnimation.kill();
          ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.trigger === element) trigger.kill();
          });
        };
      } else {
        throw new Error('GSAP not available');
      }
    } catch (error) {
      console.log('Using CSS fallback for ScrollFloat');
      if (element) {
        element.classList.add('animate-float-in-up');
        setTimeout(() => {
          element.classList.add('scroll-float-visible');
        }, delay * 1000);
      }
      clearTimeout(fallbackTimer);
    }

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, [direction, distance, duration, delay, gsapLoaded]);

  return (
    <div
      ref={elementRef}
      className={`${className} ${!gsapLoaded ? 'scroll-float-visible' : ''}`}
      style={{
        opacity: !gsapLoaded ? 1 : undefined,
        transform: !gsapLoaded ? 'translateY(0)' : undefined
      }}
    >
      {children}
    </div>
  );
}
