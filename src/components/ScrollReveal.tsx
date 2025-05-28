import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollReveal.css";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
    children: ReactNode;
    scrollContainerRef?: RefObject<HTMLElement>;
    enableBlur?: boolean;
    baseOpacity?: number;
    baseRotation?: number;
    blurStrength?: number;
    containerClassName?: string;
    textClassName?: string;
    rotationEnd?: string;
    wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    scrollContainerRef,
    enableBlur = false, // Disabled blur by default
    baseOpacity = 0.5,  // Increased base opacity for faster visibility
    baseRotation = 0,   // Disabled base rotation by default
    blurStrength = 2,   // Reduced blur strength if enabled
    containerClassName = "",
    textClassName = "",
    rotationEnd = "bottom bottom",
    wordAnimationEnd = "bottom bottom",
}) => {
    const containerRef = useRef<HTMLHeadingElement>(null);

    const splitText = useMemo(() => {
        const text = typeof children === "string" ? children : "";
        return text.split(/(\s+)/).map((word, index) => {
            if (word.match(/^\s+$/)) return word;
            return (
                <span className="word" key={index}>
                    {word}
                </span>
            );
        });
    }, [children]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const scroller =
            scrollContainerRef && scrollContainerRef.current
                ? scrollContainerRef.current
                : window;

        // Container rotation animation - Simplified/Disabled
        if (baseRotation !== 0) { // Only add rotation if baseRotation is not 0
            gsap.fromTo(
                el,
                {
                    transformOrigin: "center center",
                    rotate: baseRotation
                },
                {
                    ease: "none",
                    rotate: 0,
                    transformOrigin: "center center",
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: "top bottom",
                        end: rotationEnd,
                        scrub: true,
                    },
                }
            );
        }

        const wordElements = el.querySelectorAll<HTMLElement>(".word");

        // Word opacity animation - Simplified
        gsap.fromTo(
            wordElements,
            { opacity: baseOpacity, willChange: "opacity" }, // Use baseOpacity directly
            {
                ease: "power1.inOut", // Changed easing for a potentially smoother feel
                opacity: 1,
                stagger: 0.03, // Reduced stagger for faster reveal
                scrollTrigger: {
                    trigger: el,
                    scroller,
                    start: "top bottom-=10%", // Adjusted start point
                    end: wordAnimationEnd,
                    scrub: true,
                },
            }
        );

        // Optional blur animation - Simplified
        if (enableBlur) {
            gsap.fromTo(
                wordElements,
                { filter: `blur(${blurStrength}px)`, willChange: "filter" }, // Added willChange
                {
                    ease: "power1.inOut", // Changed easing
                    filter: "blur(0px)",
                    stagger: 0.03, // Reduced stagger
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: "top bottom-=10%", // Adjusted start point
                        end: wordAnimationEnd,
                        scrub: true,
                    },
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [
        scrollContainerRef,
        enableBlur,
        baseRotation,
        baseOpacity,
        rotationEnd,
        wordAnimationEnd,
        blurStrength,
    ]); return (
        <div
            ref={containerRef}
            className={`scroll-reveal ${containerClassName}`}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%'
            }}
        >
            <div
                className={`scroll-reveal-text ${textClassName}`}
                style={{
                    width: '100%',
                    display: 'block'
                }}
            >
                {splitText}
            </div>
        </div>
    );
};

export default ScrollReveal;