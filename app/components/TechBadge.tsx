'use client';

interface TechBadgeProps {
    tech: string;
}

export function TechBadge({ tech }: TechBadgeProps) {
    return (
        <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-pink-300">
            {tech}
        </span>
    );
}