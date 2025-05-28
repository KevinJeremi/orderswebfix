'use client';

export default function AboutSection() {
    return (<section id="about" className="py-16 md:py-32 bg-gray-50 relative">
        {/* Lanyard dihapus - diganti dengan div kosong */}
        <div className="container mx-auto px-4 md:px-6 relative z-20">
            <div className="text-center max-w-6xl mx-auto">
                <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-16 text-accent text-center">
                        Tentang Kami
                    </h2>
                </div>

                {/* Teks utama tanpa animasi */}
                <div className="mb-8 md:mb-12 px-2 md:px-0">
                    <div className="mb-6 md:mb-8">
                        <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed text-gray-800 font-semibold text-center md:text-justify">
                            Orders adalah startup teknologi yang menghadirkan revolusi digital dengan solusi inovatif dan teknologi terdepan untuk setiap kebutuhan bisnis modern.
                        </p>
                    </div>
                </div>

                {/* Stats tanpa animasi */}
                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-16 relative z-20"
                >
                    <div className="text-center bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                        <div
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2"
                        >
                            50+
                        </div>
                        <p className="text-gray-600 text-base md:text-lg">Project Selesai</p>                    </div>
                    <div className="text-center bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                        <div
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal mb-2"
                        >
                            100%
                        </div>
                        <p className="text-gray-600 text-base md:text-lg">Client Satisfaction</p>
                    </div>
                    <div className="text-center bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                        <div
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-2"
                        >
                            24/7
                        </div>
                        <p className="text-gray-600 text-base md:text-lg">Support Team</p>
                    </div></div>

            </div>
        </div>
    </section>
    );
}
