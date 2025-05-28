'use client';

import React, { ReactNode } from 'react';

interface StaticContentProps {
    children: ReactNode;
    className?: string;
    delay?: number; // Unused but included for API compatibility
    duration?: number; // Unused but included for API compatibility
    yOffset?: number; // Unused but included for API compatibility
}

// A static replacement for FadeInOnScroll that just renders children without animations
const StaticContent: React.FC<StaticContentProps> = ({
    children,
    className,
}) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default StaticContent;
