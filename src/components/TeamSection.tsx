'use client';

import StaticContent from './StaticContent';
import StaticTeamCard from './StaticTeamCard';

interface TeamMember {
    name: string;
    position: string;
    description: string;
    image: string;
    skills: string[];
}

const teamMembers: TeamMember[] = [
    {
        name: "Aldy Loing",
        position: "Leader",
        description: "Pemimpin tim yang berpengalaman dalam mengelola proyek teknologi, dengan fokus pada inovasi dan efisiensi operasional.",
        image: "/images/p2.png",
        skills: ["Leadership", "Strategy", "Business Development"]
    },
    {
        name: "Jazel Kandou",
        position: "Team Dev",
        description: "Software engineer dengan spesialisasi dalam pengembangan aplikasi web dan mobile",
        image: "/images/p4.png",
        skills: ["Full Stack", "DevOps", "System Architecture"]
    },
    {
        name: "Kevin Pesik",
        position: "Team Dev",
        description: "Software engineer dengan spesialisasi dalam pengembangan aplikasi web dan mobile",
        image: "/images/p3.png",
        skills: ["UI/UX", "Branding", "Prototyping"]
    },
    {
        name: "Friestha Arikalang",
        position: "Designer",
        description: "Desainer UI/UX yang menciptakan antarmuka pengguna yang menarik secara visual",
        image: "/images/p5.png",
        skills: ["Agile", "Scrum", "Team Management"]
    },
    {
        name: "Owen Kalumata",
        position: "Project Manager",
        description: "Manajer proyek yang mengelola tim dan memastikan proyek selesai tepat waktu",
        image: "/images/p7.png",
        skills: ["Agile", "Scrum", "Team Management"]
    },
    {
        name: "Rizky Mema",
        position: "Designer",
        description: "berpengalaman dalam desain grafis dan antarmuka pengguna",
        image: "/images/p10.png",
        skills: ["Agile", "Scrum", "Team Management"]
    }
];

export default function TeamSection() {
    return (<section id="team" className="py-12 md:py-20 relative bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
            {/* Header Section */}
            <div className="max-w-6xl mx-auto mb-8 md:mb-16">
                <StaticContent className="mb-4 md:mb-8 w-full text-center">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-accent">
                        Tim Kami
                    </h2>
                </StaticContent>

                <div className="text-center max-w-5xl mx-auto px-2 md:px-4 w-full">
                    <p className="text-sm md:text-base">
                        Bertemu dengan tim kami yang berdedikasi
                    </p>
                </div>
            </div>                {/* Static Team Cards - Enhanced Layout */}
            <div className="mb-12 md:mb-16">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <StaticTeamCard
                            key={index}
                            member={member}
                        />
                    ))}
                </div>
            </div>

            {/* Team Stats - Mobile Responsive - simplified */}                {/* Team Stats - Enhanced Design */}
            <div className="mt-12 md:mt-16 relative">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                    {[
                        { number: 50, suffix: "+", label: "Project Selesai", icon: "🚀" },
                        { number: 5, suffix: "+", label: "Client Puas", icon: "😊" },
                        { number: 2, suffix: "", label: "Tahun Pengalaman", icon: "⭐" },
                        { number: 24, suffix: "/7", label: "Support", icon: "🛠️" }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-3 md:p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center hover:border-accent/30 transition-colors"
                        >
                            <div className="text-2xl md:text-3xl mb-2">{stat.icon}</div>
                            <div className="text-xl md:text-2xl font-bold mb-1 text-accent">{stat.number}{stat.suffix}</div>
                            <p className="text-gray-600 font-medium text-xs md:text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
}