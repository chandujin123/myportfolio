'use client';

interface ProjectDetails {
    description: string;
    features: string[];
    responsibilities: string[];
}

interface Project {
    id: string;
    title: string;
    company: string;
    period: string;
}

interface ProjectModalProps {
    project: Project;
    details: ProjectDetails;
    onClose: () => void;
}

export function ProjectModal({ project, details, onClose }: ProjectModalProps) {
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
        <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 animate-fadeIn"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
                >
                    ×
                </button>

                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-pink-500">
                        {project.title}
                    </h2>

                    <div className="space-y-4">
                        <p className="text-pink-400 text-sm">{project.company}</p>
                        <p className="text-gray-400 text-sm">{project.period}</p>
                    </div>

                    <div className="h-48 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg w-full flex items-center justify-center text-6xl">
                        {getProjectEmoji(project.id)}
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-pink-400 mb-2">Overview</h3>
                            <p className="text-gray-300 leading-relaxed">
                                {details.description}
                            </p>
                        </div>

                        {details.features && (
                            <div>
                                <h3 className="text-xl font-bold text-pink-400 mb-2">Key Features</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {details.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {details.responsibilities && (
                            <div>
                                <h3 className="text-xl font-bold text-pink-400 mb-2">Responsibilities</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {details.responsibilities.map((resp, index) => (
                                        <li key={index}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}