'use client';

import StaticContent from './StaticContent';
import ServiceCard from './ServiceCard';

const services = [
    {
        title: "Pembuatan Website",
        description: "Website responsif dan modern untuk bisnis Anda",
        icon: "🌐"
    },
    {
        title: "Aplikasi Mobile",
        description: "Aplikasi mobile iOS dan Android yang user-friendly",
        icon: "📱"
    },
    {
        title: "Sistem Informasi",
        description: "Sistem informasi terintegrasi untuk efisiensi bisnis",
        icon: "⚙️"
    }
];

export default function ServicesSection() {
    return (<section id="services" className="py-16 md:py-20 bg-gray-50 relative z-10">            <div className="container mx-auto px-4 md:px-6">
        {/* Header Section - Mobile Optimized */}
        <div className="text-center mb-12 md:mb-16 max-w-6xl mx-auto">
            <StaticContent
                className="mb-4 md:mb-6 w-full"
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent">
                    Layanan Kami
                </h2>
            </StaticContent>

            <StaticContent
                className="w-full px-2 md:px-0"
            >
                <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed text-center">
                    Kami menyediakan berbagai solusi digital yang disesuaikan dengan kebutuhan bisnis Anda. Dari website modern hingga aplikasi mobile.
                </p>
            </StaticContent>
        </div>        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
                <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                />
            ))}
        </div>
    </div>
    </section>
    );
}
