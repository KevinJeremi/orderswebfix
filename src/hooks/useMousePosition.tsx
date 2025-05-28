'use client';

import { useState, useEffect, useRef } from 'react';

export function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const frameId = useRef<number>(0);
    const lastUpdate = useRef<number>(0);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            // Throttle to 60fps max
            const now = Date.now();
            if (now - lastUpdate.current < 16) return;

            if (frameId.current) return;

            frameId.current = requestAnimationFrame(() => {
                setMousePosition({ x: e.clientX, y: e.clientY });
                lastUpdate.current = now;
                frameId.current = 0;
            });
        };

        // Only track mouse on larger screens for performance
        const mediaQuery = window.matchMedia('(min-width: 768px)');

        if (mediaQuery.matches) {
            window.addEventListener('mousemove', updateMousePosition, { passive: true });
        }

        const handleMediaChange = (e: MediaQueryListEvent) => {
            if (e.matches) {
                window.addEventListener('mousemove', updateMousePosition, { passive: true });
            } else {
                window.removeEventListener('mousemove', updateMousePosition);
            }
        };

        mediaQuery.addEventListener('change', handleMediaChange);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            mediaQuery.removeEventListener('change', handleMediaChange);
            if (frameId.current) {
                cancelAnimationFrame(frameId.current);
            }
        };
    }, []);

    return mousePosition;
}
