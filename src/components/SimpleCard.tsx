'use client';

import React from "react";

interface SimpleCardProps {
    imageSrc: React.ComponentProps<"img">["src"];
    altText?: string;
    captionText?: string;
    containerHeight?: React.CSSProperties['height'];
    containerWidth?: React.CSSProperties['width'];
    imageHeight?: React.CSSProperties['height'];
    imageWidth?: React.CSSProperties['width'];
    overlayContent?: React.ReactNode;
    displayOverlayContent?: boolean;
}

export default function SimpleCard({
    imageSrc,
    altText = "Card image",
    captionText = "",
    containerHeight = "300px",
    containerWidth = "100%",
    imageHeight = "300px",
    imageWidth = "300px",
    overlayContent = null,
    displayOverlayContent = false,
}: SimpleCardProps) {
    return (
        <div
            className="relative rounded-xl overflow-hidden shadow-md"
            style={{
                height: containerHeight,
                width: containerWidth,
            }}
        >
            <div className="w-full h-full">
                <img
                    src={imageSrc}
                    alt={altText}
                    className="w-full h-full object-cover"
                    style={{
                        width: imageWidth,
                        height: imageHeight,
                    }}
                />

                {displayOverlayContent && overlayContent && (
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                    >
                        {overlayContent}
                    </div>
                )}
            </div>

            {captionText && (
                <div
                    className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center text-sm"
                >
                    {captionText}
                </div>
            )}
        </div>
    );
}
