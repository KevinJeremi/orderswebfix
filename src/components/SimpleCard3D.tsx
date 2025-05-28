/* eslint-disable react/no-unknown-property */
"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Styles for the 3D card container
const cardStyles = {
    wrapper: {
        width: '100%',
        height: '400px',
        perspective: '1000px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '12px',
        overflow: 'hidden',
        position: 'relative' as const,
    },
    card: {
        width: '200px',
        height: '300px',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        transition: 'transform 0.3s ease',
        cursor: 'grab',
        position: 'relative' as const,
        border: '2px solid #333',
    },
    cardContent: {
        textAlign: 'center' as const,
        color: '#333',
    },
    logo: {
        width: '60px',
        height: '60px',
        background: '#1a1a1a',
        borderRadius: '8px',
        marginBottom: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '8px',
        color: '#1a1a1a',
    },
    subtitle: {
        fontSize: '14px',
        color: '#666',
        marginBottom: '15px',
    },
    contact: {
        fontSize: '12px',
        color: '#999',
        lineHeight: '1.4',
    },
    lanyard: {
        position: 'absolute' as const,
        top: '-30px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '4px',
        height: '80px',
        background: 'linear-gradient(to bottom, #8B4513, #A0522D)',
        borderRadius: '2px',
    },
    clip: {
        position: 'absolute' as const,
        top: '-15px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '20px',
        height: '15px',
        background: 'silver',
        borderRadius: '3px',
        border: '1px solid #ccc',
    },
    hint: {
        position: 'absolute' as const,
        bottom: '20px',
        left: '20px',
        background: 'rgba(0,0,0,0.5)',
        color: 'white',
        padding: '8px 12px',
        borderRadius: '6px',
        fontSize: '12px',
        backdropFilter: 'blur(4px)',
    }
};

interface SimpleCard3DProps {
    transparent?: boolean;
}

export default function SimpleCard3D({ transparent = true }: SimpleCard3DProps) {
    const [isClient, setIsClient] = useState(false);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const rotateX = (e.clientY - centerY) / 10;
        const rotateY = (e.clientX - centerX) / 10;

        setRotation({
            x: Math.max(-30, Math.min(30, rotateX)),
            y: Math.max(-30, Math.min(30, rotateY))
        });
    };

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        // Reset rotation smoothly
        setTimeout(() => {
            setRotation({ x: 0, y: 0 });
        }, 100);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        setRotation({ x: 0, y: 0 });
    };

    if (!isClient) {
        return (
            <div style={cardStyles.wrapper}>
                <div style={{
                    ...cardStyles.card,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#666',
                    fontSize: '12px'
                }}>
                    Loading...
                </div>
            </div>
        );
    }

    return (
        <div
            style={cardStyles.wrapper}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={cardRef}
                style={{
                    ...cardStyles.card,
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    cursor: isDragging ? 'grabbing' : 'grab',
                }}
                onMouseDown={handleMouseDown}
            >
                {/* Lanyard */}
                <div style={cardStyles.lanyard}></div>
                <div style={cardStyles.clip}></div>

                {/* Card Content */}
                <div style={cardStyles.cardContent}>
                    <div style={cardStyles.logo}>
                        O
                    </div>
                    <div style={cardStyles.title}>
                        ORDER
                    </div>
                    <div style={cardStyles.subtitle}>
                        Digital Solutions
                    </div>
                    <div style={cardStyles.contact}>
                        Solusi digital yang inovatif<br />
                        untuk bisnis modern
                    </div>
                </div>
            </div>

            {/* Interaction Hint */}
            <div style={cardStyles.hint}>
                💡 Drag the card to interact
            </div>
        </div>
    );
}
