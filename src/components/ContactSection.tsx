'use client';

import { useState } from 'react';
import StaticContent from './StaticContent';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        alert('Terima kasih! Pesan Anda telah dikirim. Tim kami akan segera menghubungi Anda.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }; return (
        <section id="contact" className="py-12 md:py-20 bg-gray-50 relative z-10">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header Section - Mobile Optimized */}
                <div className="text-center mb-8 md:mb-16 max-w-6xl mx-auto">
                    <StaticContent
                        className="mb-4 md:mb-6 w-full"
                    >
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-accent">
                            Hubungi Kami
                        </h2>
                    </StaticContent>

                    <StaticContent
                        className="w-full px-2 md:px-0"
                    >
                        <p className="text-sm md:text-lg lg:text-xl text-gray-600 leading-relaxed text-center">
                            Siap untuk memulai proyek Anda? Mari diskusikan kebutuhan digital bisnis Anda. Tim kami siap membantu mewujudkan ide dan visi digital perusahaan Anda menjadi kenyataan.
                        </p>
                    </StaticContent>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">                    {/* Contact Info */}
                    <div
                        className="space-y-4 md:space-y-8"
                    >
                        <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-lg border border-gray-100">
                            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-accent">Informasi Kontak</h3>
                            <div className="space-y-3 md:space-y-4">
                                {[
                                    { icon: "📧", text: "teamorders2k25@gmail.com", label: "Email" },
                                    { icon: "📱", text: "+62 812-3456-7890", label: "Telepon" },
                                ].map((contact, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-3 p-2 md:p-3 rounded-xl hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="text-xl md:text-2xl">{contact.icon}</span>
                                        <div>
                                            <p className="text-xs md:text-sm text-gray-500">{contact.label}</p>
                                            <p className="text-sm md:text-base text-gray-700 font-medium">{contact.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div
                            className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-lg border border-gray-100"
                        >
                            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-accent">Mengapa Memilih Kami?</h3>
                            <div className="grid grid-cols-2 gap-2 md:gap-4">
                                {[
                                    { number: "24h", label: "Response Time" },
                                    { number: "100%", label: "Satisfaction" },
                                    { number: "50+", label: "Projects Done" },
                                    { number: "4+", label: "Years Experience" }
                                ].map((stat, index) => (
                                    <div
                                        key={index}
                                        className="text-center p-2 md:p-3 rounded-xl bg-gray-50"
                                    >
                                        <div className="text-lg md:text-2xl font-bold text-primary mb-1">{stat.number}</div>
                                        <div className="text-xs text-gray-600 leading-tight">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div
                        className="bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-lg border border-gray-100"
                    >
                        <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-accent">Kirim Pesan</h3>
                        <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>                            <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Nama Lengkap"
                                required
                                className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 text-sm md:text-base"
                            />
                        </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 text-sm md:text-base"
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Ceritakan tentang proyek Anda..."
                                    rows={4}
                                    required
                                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 resize-none text-sm md:text-base"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-2 md:py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
                            >
                                Kirim Pesan 🚀
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}