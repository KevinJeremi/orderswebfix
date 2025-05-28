// Performance optimization utilities

import { useCallback, useRef, useState, useEffect } from 'react';

// Debounce hook for expensive operations
export function useDebounce<T extends (...args: any[]) => any>(
    callback: T,
    delay: number
): (...args: Parameters<T>) => void {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    return useCallback((...args: Parameters<T>) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
}

// Throttle hook for high-frequency events
export function useThrottle<T extends (...args: any[]) => any>(
    callback: T,
    delay: number
): (...args: Parameters<T>) => void {
    const lastExecutedRef = useRef<number>(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    return useCallback((...args: Parameters<T>) => {
        const now = Date.now();

        if (now - lastExecutedRef.current >= delay) {
            lastExecutedRef.current = now;
            callback(...args);
        } else {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => {
                lastExecutedRef.current = Date.now();
                callback(...args);
            }, delay - (now - lastExecutedRef.current));
        }
    }, [callback, delay]);
}

// Intersection Observer hook for lazy loading
export function useIntersectionObserver(
    elementRef: React.RefObject<Element>,
    options?: IntersectionObserverInit
) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsIntersecting(entry.isIntersecting),
            {
                threshold: 0.1,
                rootMargin: '50px',
                ...options
            }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [options]);

    return isIntersecting;
}
