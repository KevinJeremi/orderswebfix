import React, { useRef } from "react";
import { motion } from "framer-motion";

interface SimpleTiltedCardProps {
    imageSrc: string;
    altText?: string;
    width?: string;
    height?: string;
}

export default function SimpleTiltedCard({
    imageSrc,
    altText = "Tilted card image",
    width = "300px",
    height = "300px",
}: SimpleTiltedCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={ref}
            style={{
                width,
                height,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <motion.div
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <img
                    src={imageSrc}
                    alt={altText}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "15px",
                        background: "rgba(255, 255, 255, 0.95)",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)", // Static shadow
                    }}
                />
            </motion.div>
        </div>
    );
}
