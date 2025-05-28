'use client';

import { motion } from 'framer-motion';

interface TeamMember {
    name: string;
    position: string;
    description: string;
    image: string;
    skills: string[];
}

interface TeamCardProps {
    member: TeamMember;
    index: number;
}

export default function TeamCard({ member, index }: TeamCardProps) {
    return (
        <motion.div
            className="group relative perspective-1000"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeOut"
            }}
            viewport={{ once: true }}
            whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2 }
            }}
        >
            <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
            >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative group border border-gray-100">
                    {/* Animated Background Gradient */}
                    <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-teal/5 to-accent/10"
                            animate={{
                                background: [
                                    "linear-gradient(45deg, rgba(5, 29, 64, 0.1), rgba(49, 122, 139, 0.05), rgba(255, 130, 16, 0.1))",
                                    "linear-gradient(225deg, rgba(49, 122, 139, 0.1), rgba(255, 130, 16, 0.05), rgba(5, 29, 64, 0.1))",
                                    "linear-gradient(45deg, rgba(5, 29, 64, 0.1), rgba(49, 122, 139, 0.05), rgba(255, 130, 16, 0.1))"
                                ]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        className="relative mb-8 mx-auto w-28 h-28 rounded-full overflow-hidden"
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <motion.div
                            className="absolute -inset-1 rounded-full border-2 border-primary/30"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        />

                        <div className="relative z-10 w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-teal/20">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover relative z-10"
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.8 }}
                            />
                        </div>
                    </motion.div>

                    {/* Name */}
                    <motion.h3
                        className="text-xl font-bold text-accent mb-3 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.1 + 0.3
                        }}
                        viewport={{ once: true }}
                    >
                        {member.name}
                    </motion.h3>

                    {/* Position */}
                    <motion.div
                        className="text-center mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.1 + 0.4
                        }}
                        viewport={{ once: true }}
                    >
                        <motion.p
                            className="text-primary font-semibold px-4 py-2 bg-primary/10 rounded-full inline-block"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(5, 29, 64, 0.2)",
                                transition: { duration: 0.2 }
                            }}
                        >
                            {member.position}
                        </motion.p>
                    </motion.div>                    {/* Description */}
                    <motion.p
                        className="text-gray-600 text-sm text-justify mb-6 leading-relaxed px-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.1 + 0.5
                        }}
                        viewport={{ once: true }}
                    >
                        {member.description}
                    </motion.p>

                    {/* Skills */}
                    <motion.div
                        className="flex flex-wrap gap-2 justify-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.1 + 0.6
                        }}
                        viewport={{ once: true }}
                    >
                        {member.skills.map((skill, skillIndex) => (
                            <motion.span
                                key={skillIndex}
                                className="px-3 py-1 bg-teal/10 text-teal text-xs rounded-full border border-teal/20"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.1 + 0.7 + skillIndex * 0.1
                                }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}
