'use client';

import { useCallback } from 'react';
import { useSmoothScrollContext } from '@/components/SmoothScrollProvider';

interface SmoothScrollOptions {
    duration?: number;
    offset?: number;
}

export function useSmoothScroll() {
    const { lenis } = useSmoothScrollContext();

    const scrollTo = useCallback((target: string | number, options: SmoothScrollOptions = {}) => {
        if (!lenis) {
            // Fallback for mobile or when Lenis is not available
            if (typeof target === 'string') {
                const element = document.getElementById(target);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                window.scrollTo({ top: target, behavior: 'smooth' });
            }
            return;
        }

        if (typeof target === 'string') {
            lenis.scrollTo(`#${target}`, {
                duration: options.duration,
                offset: options.offset || 0,
            });
        } else {
            lenis.scrollTo(target, {
                duration: options.duration,
                offset: options.offset || 0,
            });
        }
    }, [lenis]); const scrollToSection = useCallback((sectionId: string, offset: number = -100) => {
        // First try to find the element directly
        const element = document.getElementById(sectionId);

        if (!element) {
            console.error(`Element with ID ${sectionId} not found`);
            return;
        }

        // Calculate the position more accurately based on the element's position
        const rect = element.getBoundingClientRect();
        const currentScrollY = window.scrollY;
        const targetY = currentScrollY + rect.top + offset;

        // Use scrollTo with calculated position for more accurate scrolling
        scrollTo(targetY);
    }, [scrollTo]);

    const scrollToTop = useCallback(() => {
        scrollTo(0);
    }, [scrollTo]);

    const start = useCallback(() => {
        if (lenis) {
            lenis.start();
        }
    }, [lenis]);

    const stop = useCallback(() => {
        if (lenis) {
            lenis.stop();
        }
    }, [lenis]);

    return {
        scrollTo,
        scrollToSection,
        scrollToTop,
        start,
        stop,
        lenis,
    };
}