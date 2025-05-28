'use client';

import StaticContent from './StaticContent'; // Impor komponen statis
import SimpleCard from './SimpleCard';

const portfolio = [
    {
        title: "Rusdi - Rumah Sampah Digital",
        description: "Aplikasi mobile untuk pengelolaan sampah digital berbasis Android dengan fitur penukaran sampah, pemantauan lingkungan, dan integrasi dengan sistem Firebase untuk sinkronisasi data secara realtime.",
        image: "/images/p1.png",
        tech: ["Flutter", "Dart", "Firebase"]
    },
    {
        title: "Bank Sampah Pinabetengan",
        description: "Platform bank sampah berbasis React untuk komunitas Pinabetengan dengan sistem tabungan sampah digital, manajemen sampah terintegrasi, dan analisis dampak lingkungan yang dapat diakses melalui web dan Android.",
        image: "/images/p2.png",
        tech: ["React", "Android", "Node.js"]
    },
    {
        title: "Reservasi Rakit Malalayang",
        description: "Aplikasi Android untuk wisata rakit di Malalayang dengan fitur reservasi online, pembayaran digital, manajemen jadwal terintegrasi, dan fitur ulasan pengunjung untuk meningkatkan layanan wisata lokal.",
        image: "/images/p3.png",
        tech: ["Android", "Java", "MySQL"]
    }
];

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="py-12 md:py-20 relative z-10">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header Section - Mobile Optimized */}
                <div className="text-center mb-8 md:mb-16 max-w-6xl mx-auto">
                    <StaticContent
                        className="mb-4 md:mb-6 w-full"
                    >
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-accent">
                            Portofolio Kami
                        </h2>
                    </StaticContent>

                    <StaticContent
                        className="w-full px-2 md:px-0"
                    >
                        <p className="text-sm md:text-lg lg:text-xl text-gray-600 leading-relaxed text-center">
                            Beberapa project yang telah kami kerjakan dengan hasil yang memuaskan. Setiap project dikerjakan dengan dedikasi tinggi dan menggunakan teknologi terdepan untuk memberikan solusi terbaik bagi klien.
                        </p>
                    </StaticContent>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
                    {portfolio.map((project, index) => (
                        <div
                            key={index}
                            className="group"
                        >
                            {/* Simple Card Container - Mobile Optimized */}
                            <div className="mb-3 md:mb-6">
                                <SimpleCard
                                    imageSrc={project.image}
                                    altText={project.title}
                                    captionText={project.title}
                                    containerHeight="180px"
                                    containerWidth="100%"
                                    imageHeight="100%"
                                    imageWidth="100%"
                                    displayOverlayContent={true}
                                    overlayContent={
                                        <div className="flex items-center justify-center w-full h-full">
                                            <div className="text-center text-white p-2 md:p-4">
                                                <h4 className="font-bold text-xs md:text-lg mb-1 md:mb-2 line-clamp-2">{project.title}</h4>
                                                <div className="flex flex-wrap gap-1 justify-center">
                                                    {project.tech.slice(0, 2).map((tech, techIndex) => (
                                                        <span
                                                            key={techIndex}
                                                            className="px-1.5 md:px-2 py-0.5 md:py-1 bg-white/20 backdrop-blur-sm text-xs rounded-full"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    }
                                />
                            </div>

                            {/* Project Details */}
                            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-6 border border-gray-100">
                                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-accent group-hover:text-primary transition-colors line-clamp-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-xs md:text-base text-justify line-clamp-3 md:line-clamp-none">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-1 md:gap-2">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 md:px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
