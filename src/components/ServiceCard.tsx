'use client';

import React from "react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
}

export default function ServiceCard({
    title,
    description,
    icon,
}: ServiceCardProps) {
    return (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center">
            <div className="text-4xl md:text-5xl mb-4 md:mb-6 bg-gray-50 p-4 rounded-full">
                {icon}
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-accent text-center">
                {title}
            </h3>
            <p className="text-gray-600 text-center leading-relaxed text-sm md:text-base">
                {description}
            </p>
        </div>
    );
}
