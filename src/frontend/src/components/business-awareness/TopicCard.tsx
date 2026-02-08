import { type ReactNode } from 'react';

interface TopicCardProps {
    id: string;
    icon: ReactNode;
    title: string;
    description: string;
}

export default function TopicCard({ id, icon, title, description }: TopicCardProps) {
    return (
        <section
            id={id}
            className="bg-white rounded-lg shadow-card p-6 md:p-8 mb-6 scroll-mt-20 hover:shadow-card-hover transition-shadow duration-300"
        >
            <div className="flex items-start gap-4">
                <div className="text-navy-medium flex-shrink-0 mt-1" aria-hidden="true">
                    {icon}
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mb-3">
                        {title}
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
}
