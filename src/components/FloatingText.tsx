'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FloatingTextProps {
  text: string;
  className?: string;
  containerClassName?: string;
}

export default function FloatingText({
  text,
  className = '',
  containerClassName = ''
}: FloatingTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [gsapLoaded, setGsapLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const textElement = textRef.current;

    // Fallback: Make text visible immediately
    const fallbackTimer = setTimeout(() => {
      if (textElement && !isVisible) {
        textElement.classList.add('floating-text-fallback');
        setIsVisible(true);
      }
    }, 100);

    if (!container || !textElement) {
      clearTimeout(fallbackTimer);
      return;
    }

    try {
      // Check if GSAP is available
      if (typeof gsap !== 'undefined' && ScrollTrigger) {
        setGsapLoaded(true);

        // Set initial state
        gsap.set(textElement, {
          y: 50,
          opacity: 0
        });

        // Create scroll trigger animation
        const scrollAnimation = gsap.to(textElement, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          onComplete: () => setIsVisible(true),
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            onEnter: () => setIsVisible(true)
          }
        });

        // Add floating animation
        const floatingAnimation = gsap.to(textElement, {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: 1,
          scrollTrigger: {
            trigger: container,
            start: "top 70%",
            toggleActions: "play pause resume pause"
          }
        });

        clearTimeout(fallbackTimer);

        return () => {
          scrollAnimation.kill();
          floatingAnimation.kill();
          ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.trigger === container) trigger.kill();
          });
        };
      } else {
        // GSAP not available, use CSS fallback
        throw new Error('GSAP not available');
      }
    } catch (error) {
      console.log('Using CSS fallback for FloatingText');
      if (textElement) {
        textElement.classList.add('animate-float-in-up', 'animate-float-gentle');
        setIsVisible(true);
      }
      clearTimeout(fallbackTimer);
    }

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, [isVisible]);

  return (
    <div ref={containerRef} className={containerClassName}>
      <h2
        ref={textRef}
        className={`${className} ${!gsapLoaded ? 'animate-float-in-up animate-float-gentle' : ''}`}
        style={{
          opacity: !gsapLoaded ? 1 : undefined,
          transform: !gsapLoaded ? 'translateY(0)' : undefined
        }}
      >
        {text}
      </h2>
    </div>
  );
}
