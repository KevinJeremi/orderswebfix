'use client';

import { motion } from 'framer-motion';
import TiltedCard from './TiltedCard';
import Aurora from './Aurora';

interface HeroSectionProps {
    mousePosition: { x: number; y: number };
    onContactClick: () => void;
}

export default function HeroSection({ mousePosition, onContactClick }: HeroSectionProps) {
    const handleAnimationComplete = () => {
        console.log('BlurText animation completed!');
    };

    return (
        <section id="hero" className="bg-gradient-to-br from-primary to-teal text-white min-h-screen flex items-center relative overflow-hidden">
            {/* Aurora Background */}
            <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
                <Aurora
                    colorStops={["#1e3a5f", "#b24826", "#ff6b35"]}
                    blend={0.5}      // Slightly reduced blend for softer edges
                    amplitude={0.6}  // Further reduced amplitude for less movement
                    speed={0.15}     // Further reduced speed
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-between gap-8 min-h-[80vh] pt-8"
                    initial={{ opacity: 0, y: 20 }} // Simplified animation
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }} // Faster duration
                >
                    {/* Left side: Text Content */}
                    <div className="flex flex-col items-start text-left md:w-1/2 order-2 md:order-1">
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }} // Reduced delay
                        >
                            Solusi Digital untuk Bisnis Masa Depan
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }} // Reduced delay
                        >
                            Kami membantu perusahaan Anda bertransformasi melalui teknologi digital terdepan dan strategi inovatif.
                        </motion.p>

                        {/* Buttons side by side */}
                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }} // Reduced delay
                        >
                            <button
                                className="bg-white text-primary px-6 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-accent hover:text-white transition-colors duration-300 shadow-lg border border-transparent hover:border-white/20"
                                onClick={onContactClick}
                            >
                                Hubungi Kami
                            </button>
                            <button
                                className="bg-transparent text-white px-6 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-white/10 transition-colors duration-300 border border-white/30 hover:border-white"
                            >
                                Lihat Layanan
                            </button>
                        </motion.div>
                    </div>

                    {/* Right side: Card */}
                    <motion.div
                        className="hero-glow md:w-1/2 flex justify-center items-center order-1 md:order-2"
                        initial={{ opacity: 0, scale: 0.9 }} // Simplified animation
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.1 }} // Faster duration
                    >
                        <TiltedCard
                            imageSrc="/images/logo.png"
                            altText="Orders"
                            captionText="ORDERS"
                            containerHeight="clamp(180px, 25vw, 290px)"
                            containerWidth="clamp(300px, 70vw, 500px)"
                            imageHeight="clamp(160px, 22vw, 260px)"
                            imageWidth="clamp(300px, 65vw, 600px)"
                            showMobileWarning={false}
                            showTooltip={false}
                            displayOverlayContent={false}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}