'use client';

import { createContext, useContext, useEffect, useRef, ReactNode } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollContextType {
    lenis: Lenis | null;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
    lenis: null,
});

export const useSmoothScrollContext = () => useContext(SmoothScrollContext);

interface SmoothScrollProviderProps {
    children: ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Mobile detection
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;

        // Don't initialize smooth scroll on mobile for better performance
        if (isMobile) {
            return;
        }        // Initialize Lenis with optimized settings for smoother navigation
        const lenis = new Lenis({
            duration: 1.2, // Slightly reduced duration for more responsive navigation
            easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // Improved easing function
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 0.8, // Slightly reduced for more control
            touchMultiplier: 1.5,
            infinite: false
        });

        lenisRef.current = lenis;

        // GSAP integration
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        // Update CSS for smooth scroll
        document.documentElement.style.scrollBehavior = 'auto';

        // Cleanup function
        return () => {
            if (lenisRef.current) {
                lenisRef.current.destroy();
                lenisRef.current = null;
            }

            gsap.ticker.remove((time) => {
                if (lenisRef.current) {
                    lenisRef.current.raf(time * 1000);
                }
            });

            // Restore default scroll behavior
            document.documentElement.style.scrollBehavior = 'smooth';
        };
    }, []);

    return (
        <SmoothScrollContext.Provider value={{ lenis: lenisRef.current }}>
            {children}
        </SmoothScrollContext.Provider>
    );
}