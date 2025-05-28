'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon

export default function FloatingActionButton() {
    const openWhatsApp = () => {
        // Ganti dengan nomor WhatsApp dan pesan Anda
        const phoneNumber = "YOUR_PHONE_NUMBER"; // Contoh: 6281234567890
        const message = "Halo, saya tertarik dengan layanan Anda.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="fixed bottom-8 right-8 z-40 flex flex-row items-center space-x-3"> {/* Mengubah ke flex-row dan space-x-3 */}
            <motion.button
                className="bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl"
                initial={{ opacity: 0, scale: 0.5, y: 20 }} // Animasi pop-up dari bawah
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
                whileHover={{ scale: 1.1 }} // Removed rotate: 360
                whileTap={{ scale: 0.9 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                ↑
            </motion.button>
            <motion.button
                className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl" // Gaya tombol WhatsApp
                initial={{ opacity: 0, scale: 0.5, y: 20 }} // Animasi pop-up dari bawah
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.2 }} // Sedikit penundaan untuk efek berurutan
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={openWhatsApp}
            >
                <FaWhatsapp size={24} /> {/* Ikon WhatsApp */}
            </motion.button>
        </div>
    );
}
