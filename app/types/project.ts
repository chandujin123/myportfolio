export interface Project {
    id: string;
    title: string;
    company: string;
    period: string;
    shortDesc: string;
    tech: string[];
}

export interface ProjectDetails {
    description: string;
    features: string[];
    responsibilities: string[];
}