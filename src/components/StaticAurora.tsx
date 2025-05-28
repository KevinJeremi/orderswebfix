'use client';

interface StaticAuroraProps {
    colorStops?: string[];
    blend?: number;
}

export default function StaticAurora({
    colorStops = ["#1e3a5f", "#b24826", "#ff6b35"],
    blend = 0.5
}: StaticAuroraProps) {
    return (
        <div className="w-full h-full overflow-hidden">
            {/* Static gradient background instead of animated aurora */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-teal opacity-70"
                style={{
                    filter: `blur(${120 * blend}px)`,
                }}
            />

            {/* Static color spots */}
            <div className="absolute top-1/4 -left-[10%] w-1/3 h-1/3 rounded-full"
                style={{
                    backgroundColor: colorStops[0],
                    opacity: 0.6,
                    filter: `blur(${80 * blend}px)`,
                }}
            />

            <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/2 rounded-full"
                style={{
                    backgroundColor: colorStops[1],
                    opacity: 0.5,
                    filter: `blur(${100 * blend}px)`,
                }}
            />

            <div className="absolute top-1/3 right-1/6 w-1/4 h-1/4 rounded-full"
                style={{
                    backgroundColor: colorStops[2],
                    opacity: 0.4,
                    filter: `blur(${90 * blend}px)`,
                }}
            />
        </div>
    );
}
