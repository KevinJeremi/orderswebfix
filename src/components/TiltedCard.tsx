import { useRef } from "react";
import "./TiltedCard.css";

interface TiltedCardProps {
    imageSrc: React.ComponentProps<"img">["src"];
    altText?: string;
    captionText?: string;
    containerHeight?: React.CSSProperties['height'];
    containerWidth?: React.CSSProperties['width'];
    imageHeight?: React.CSSProperties['height'];
    imageWidth?: React.CSSProperties['width'];
    showMobileWarning?: boolean;
    showTooltip?: boolean;
    overlayContent?: React.ReactNode;
    displayOverlayContent?: boolean;
}

export default function TiltedCard({
    imageSrc,
    altText = "Tilted card image",
    captionText = "",
    containerHeight = "300px",
    containerWidth = "100%",
    imageHeight = "300px",
    imageWidth = "300px",
    showMobileWarning = true,
    showTooltip = true,
    overlayContent = null,
    displayOverlayContent = false,
}: TiltedCardProps) {
    const ref = useRef<HTMLElement>(null);

    return (
        <figure
            ref={ref}
            className="tilted-card-figure"
            style={{
                height: containerHeight,
                width: containerWidth,
            }}
        >
            {showMobileWarning && (
                <div className="tilted-card-mobile-alert">
                    This effect is not optimized for mobile. Check on desktop.
                </div>
            )}

            <div
                className="tilted-card-inner"
                style={{
                    width: imageWidth,
                    height: imageHeight,
                }}
            >
                <img
                    src={imageSrc}
                    alt={altText}
                    className="tilted-card-img"
                    style={{
                        width: imageWidth,
                        height: imageHeight,
                    }}
                />

                {displayOverlayContent && overlayContent && (
                    <div
                        className="tilted-card-overlay"
                    >
                        {overlayContent}
                    </div>
                )}
            </div>

            {showTooltip && captionText && (
                <figcaption
                    className="tilted-card-caption-static"
                >
                    {captionText}
                </figcaption>
            )}
        </figure>
    );
}
