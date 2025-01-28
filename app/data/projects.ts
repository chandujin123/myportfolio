import { Project, ProjectDetails } from '../types/project';

export const projects: Project[] = [
    {
        id: "eclipse",
        title: "Eze Eclipse - Post Trade Operations",
        company: "SSC & Eze",
        period: "OCT 2019 - Present",
        shortDesc: "Investment platform facilitating fund managers to send investment details/transactions to third parties.",
        tech: ["Angular", "TypeScript", "AWS", "Microservices", "Splunk"]
    },
    {
        id: "falcon",
        title: "Falcon Dive",
        company: "Idea Spark Solutions",
        period: "MAY 2017 - MAY 2019",
        shortDesc: "Business analytics platform with KPI dashboards and campaign automation.",
        tech: ["Node.js", "React", "GitLab", "Nginx", "MongoDB"]
    },
    {
        id: "express-loan",
        title: "Express Loan",
        company: "Idea Spark Solutions",
        period: "2018 - 2019",
        shortDesc: "AI-powered loan application with minimal documentation requirements.",
        tech: ["TensorFlow.js", "Node.js", "GCP", "Docker", "CNN"]
    },
    {
        id: "ecr",
        title: "ECR - E-Learning Platform",
        company: "M3bi India",
        period: "NOV 2014 - MAR 2017",
        shortDesc: "Smart E-learning platform with video streaming and interactive features.",
        tech: ["Node.js", "PeerJS", "YouTube API", "Passport.js", "Video Streaming"]
    },
    {
        id: "pluto",
        title: "PLUTO - American Express",
        company: "M3bi India",
        period: "2016 - 2017",
        shortDesc: "Credit card management system with Pay-It and Plan-It features.",
        tech: ["HBase", "Big Data", "Node.js", "Express", "EMI Processing"]
    }
];

export const projectDetails: Record<string, ProjectDetails> = {
    "eclipse": {
        description: "Eze Eclipse is designed from the ground up to enable the most effective, reliable and secure operations infrastructure. Post trade Operations (PTO) module facilitates fund managers to send their investment details/transactions to third parties like Custodians and Executing Brokers.",
        features: [
            "Transforming Trade Details through ETL",
            "EOD trade Details delivery via File/API",
            "Schedule file/API release automation",
            "Custom mapping for ETL configurations via UI",
            "Trading Day Rollover configuration"
        ],
        responsibilities: [
            "Transformed monolith into 9 microservices architecture",
            "Implemented Dark Launch and feature toggles",
            "Set up Splunk dashboards for monitoring",
            "Led ETL processes for data transformation",
            "Mentored new hires and conducted knowledge transfer"
        ]
    },
    "falcon": {
        description: "This product helps organizations analyze their business with KPI dashboards and improve business through campaign automation. Management can easily identify business overview through visual analytics.",
        features: [
            "Visual Customer Extraction",
            "Customer Data Distribution",
            "Customer Segmentation with defined constraints",
            "Campaign automation with ROI tracking",
            "AI-generated Segments for better performance",
            "Custom Dashboard building"
        ],
        responsibilities: [
            "Architecture and design implementation",
            "End-to-end feature development",
            "Set up git repository with GitLab",
            "Log monitoring with Stack Driver",
            "Campaign scheduling with Agenda JS"
        ]
    },
    "express-loan": {
        description: "Express Loan is an easy-to-use loan application with minimal customer interaction. Features minimal documentation requirements and easy approval process where customers can apply by uploading their Aadhaar or PAN card.",
        features: [
            "Text Extraction from Aadhaar/Pan Cards using CNN",
            "Aadhaar and Pan Verification API integration",
            "SMS Notification with Twilio and WhatsApp",
            "Email Notification with Node Mailer"
        ],
        responsibilities: [
            "Set up CI/CD pipelines for GCP deployment",
            "Integrated third-party APIs for verification",
            "Implemented pre-trained models with TensorFlow.js",
            "Created stories from EPICS",
            "Email integration with Node Mailer"
        ]
    },
    "ecr": {
        description: "ECR is a Smart E-learning hub for competitive exams where videos are pulled from different sources through YouTube and Sprout Videos API and managed by an admin panel.",
        features: [
            "Third-party Login using Google and Facebook",
            "YouTube and Sprout video integration",
            "Video Management from admin panel",
            "Student-to-student chat with PeerJS",
            "Live Streaming capabilities",
            "Live news feed using Google News API"
        ],
        responsibilities: [
            "Developed video streaming service",
            "Integrated VideoGlur2 for streaming",
            "YouTube and Sprout Video API integration",
            "Created admin panel for video management",
            "Implemented Passport.js for authentication"
        ]
    },
    "pluto": {
        description: "PLUTO is a web-interface for American Express Credit Card Holders providing Pay-It and Plan-It features. The platform enables customers to convert transactions into monthly EMI plans with risk-based eligibility calculated on the Big Data platform.",
        features: [
            "Pay-It: Direct Credit Card Debt payment",
            "Plan-It: EMI conversion with eligibility check",
            "Real-time risk analysis with HBase",
            "Big Data platform integration",
            "Real-time data processing"
        ],
        responsibilities: [
            "Developed Express endpoints for HBase data",
            "Integrated with HBase for real-time data",
            "Big Data Hive integration for querying",
            "Built interactive EMI conversion interface",
            "Implemented risk analysis workflows"
        ]
    }
};