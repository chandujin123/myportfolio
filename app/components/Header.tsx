'use client';

interface HeaderProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
    return (
        <nav className="p-4 md:p-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <h1 className="text-3xl font-bold tracking-wider">
                <span className="text-pink-500">&lt;</span>
                DevPortfolio
                <span className="text-pink-500">/&gt;</span>
            </h1>
            <div className="flex space-x-4 md:space-x-6">
                {['about', 'projects', 'contact'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => onTabChange(tab)}
                        className={`text-base md:text-lg capitalize ${activeTab === tab
                                ? 'text-pink-500 border-b-2 border-pink-500'
                                : 'hover:text-pink-300'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </nav>
    );
}