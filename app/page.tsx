'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Header, ProjectCard, ProjectModal, SectionTitle } from './components';
import { projects, projectDetails } from './data/projects';
import type { Project } from './types/project';

export default function Page() {
    const [activeTab, setActiveTab] = useState('about');
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    const selectedProjectData = selectedProject ? projects.find(p => p.id === selectedProject) : null;

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
            <Header activeTab={activeTab} onTabChange={setActiveTab} />

            <main className="container mx-auto px-4 md:px-6 py-8 md:py-12">
                {activeTab === 'about' && (
                    <div className="space-y-8 animate-fadeIn animate-slideUp">
                        <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
                            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center animate-float hover:animate-spin-slow relative group">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-600/50 to-purple-500/50 blur-lg group-hover:blur-xl transition-all duration-300"></div>
                                <div className="relative w-44 h-44 rounded-full overflow-hidden">
                                    <Image
                                        src="/images/profile.jpg"
                                        alt="Profile"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="relative z-10 text-center sm:text-left">
                                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                <div className="relative">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-lg font-semibold mb-2 block animate-fadeIn">
                                        Welcome to my portfolio
                                    </span>
                                    <h2 className="text-4xl font-bold mb-4 drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-200 animate-pulse">
                                        Hello, I&apos;m{' '}
                                        <span className="relative">
                                            <span className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 blur opacity-25"></span>
                                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                                                Pavan Kumar Raghavendra Bobbili
                                            </span>
                                        </span>
                                    </h2>
                                    <div className="relative inline-block">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-25 animate-pulse"></div>
                                        <p className="relative text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300 py-2 px-4 rounded-full border border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                                            Principal Lead in Full Stack
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center sm:text-left">
                            A Full Stack Developer with 9+ years of experience with a strong
                            background in delivering high-quality, scalable web applications.
                            Skilled in React, Angular, TypeScript, and AWS, with a passion for staying
                            up-to-date on the latest technologies.
                        </p>

                        <div className="mt-6">
                            <SectionTitle>Technical Skills</SectionTitle>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {[
                                    'JavaScript',
                                    'Angular',
                                    'React',
                                    'Node.js',
                                    'AWS',
                                    'TypeScript',
                                    'MongoDB',
                                    'Docker',
                                ].map((skill, index) => (
                                    <div
                                        key={skill}
                                        className="transform transition-all duration-500 hover:scale-110"
                                        style={{
                                            animation: `fadeInUp 0.5s ease-out forwards ${index * 0.1}s`,
                                        }}
                                    >
                                        <div className="group bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-center hover:bg-white/20 transition-all duration-500 cursor-pointer relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            <span className="relative z-10 group-hover:text-white transition-colors duration-300 font-medium">
                                                {skill}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'projects' && (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 animate-fadeIn">
                            {projects.map((project: Project) => (
                                <ProjectCard
                                    key={project.id}
                                    {...project}
                                    onClick={() => setSelectedProject(project.id)}
                                />
                            ))}
                        </div>

                        {selectedProjectData && selectedProject && (
                            <ProjectModal
                                project={selectedProjectData}
                                details={projectDetails[selectedProject]}
                                onClose={() => setSelectedProject(null)}
                            />
                        )}
                    </>
                )}

                {activeTab === 'contact' && (
                    <div className="max-w-xl mx-auto space-y-6 md:space-y-8 px-4 animate-fadeIn">
                        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full p-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />

                            <textarea
                                placeholder="Message"
                                rows={6}
                                className="w-full p-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            ></textarea>
                            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
                                Send Message
                            </button>
                        </form>
                    </div>
                )}
            </main>

            <footer className="text-center py-6 text-gray-400">
                <p>© 2024 DevPortfolio. All rights reserved.</p>
            </footer>
        </div>
    );
}
