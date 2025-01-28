'use client';

import { TechBadge } from './TechBadge';

interface ProjectCardProps {
    id: string;
    title: string;
    company: string;
    period: string;
    shortDesc: string;
    tech: string[];
    onClick: () => void;
}

export function ProjectCard({
    id,
    title,
    company,
    period,
    shortDesc,
    tech,
    onClick
}: ProjectCardProps) {
    const getProjectEmoji = (projectId: string) => {
        const emojis: Record<string, string> = {
            'eclipse': '🌓',
            'falcon': '🦅',
            'express-loan': '💰',
            'ecr': '📚',
            'pluto': '💳'
        };
        return emojis[projectId] || '💼';
    };

    return (
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:transform hover:scale-105 transition-all cursor-pointer" onClick={onClick}>
            <div className="h-36 md:h-48 bg-gradient-to-r from-pink-500 to-purple-500 rounded-md mb-4 flex items-center justify-center text-4xl">
                {getProjectEmoji(id)}
            </div>
            <div className="space-y-2">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-pink-400 text-sm">{company}</p>
                <p className="text-gray-400 text-sm">{period}</p>
                <p className="text-gray-300">{shortDesc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {tech.map((t) => <TechBadge key={t} tech={t} />)}
                </div>
            </div>
        </div>
    );
}