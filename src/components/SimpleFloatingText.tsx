'use client';

import { motion } from 'framer-motion';

interface SimpleFloatingTextProps {
  text: string;
  className?: string;
  containerClassName?: string;
}

export default function SimpleFloatingText({ 
  text, 
  className = '',
  containerClassName = ''
}: SimpleFloatingTextProps) {
  return (
    <div className={containerClassName}>
      <motion.h2 
        className={`${className} animate-float`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          ease: "easeOut"
        }}
        viewport={{ once: true }}
        whileHover={{
          y: -5,
          transition: { duration: 0.3 }
        }}
      >
        {text}
      </motion.h2>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
