'use client';

interface SectionTitleProps {
    children: React.ReactNode;
    className?: string;
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
    return (
        <h3 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 mb-6 ${className}`}>
            {children}
        </h3>
    );
}