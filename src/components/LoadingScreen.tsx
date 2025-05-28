'use client';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 bg-primary flex items-center justify-center z-50">
            <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1
                    className="text-6xl font-bold text-white mb-8"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "backOut" }}
                >
                    Orders
                </motion.h1>
                <motion.div
                    className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full mx-auto"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.p
                    className="text-white/80 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Memuat solusi digital terbaik...
                </motion.p>
            </motion.div>
        </div>
    );
}
