'use client';

interface TeamMember {
    name: string;
    position: string;
    description: string;
    image: string;
    skills: string[];
}

interface StaticTeamCardProps {
    member: TeamMember;
}

export default function StaticTeamCard({ member }: StaticTeamCardProps) {
    return (
        <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow transition-shadow duration-300 border border-gray-100">
            {/* Profile Image - elegant design */}
            <div className="mb-5 mx-auto w-24 h-24 overflow-hidden">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 object-cover rounded-full border-2 border-accent/20"
                    width="96"
                    height="96"
                    loading="lazy"
                    decoding="async"
                />
            </div>

            {/* Name and Position - enhanced styling */}
            <div className="text-center">
                <h3 className="text-xl font-bold text-accent mb-1">
                    {member.name}
                </h3>
                <p className="text-gray-600 text-sm bg-gray-50 inline-block px-3 py-1 rounded-full">
                    {member.position}
                </p>
            </div>
        </div>
    );
}
