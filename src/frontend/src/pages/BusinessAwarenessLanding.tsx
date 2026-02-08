import TopicCard from '../components/business-awareness/TopicCard';
import { TrendingUp, LineChart, ShoppingCart, Package, Globe } from 'lucide-react';

export default function BusinessAwarenessLanding() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="min-h-screen bg-page-background">
            {/* Header */}
            <header className="bg-navy-dark text-white py-8 px-6 text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
                    Business Development Awareness
                </h1>
                <p className="text-base md:text-lg text-navy-light opacity-95">
                    Learn Modern Business & Income Opportunities
                </p>
            </header>

            {/* Navigation */}
            <nav className="bg-navy-medium shadow-md sticky top-0 z-10">
                <div className="flex justify-center flex-wrap">
                    <button
                        onClick={() => scrollToSection('share')}
                        className="text-white px-5 py-3.5 font-semibold hover:bg-navy-dark transition-colors duration-200 focus:outline-none focus:bg-navy-dark focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-medium"
                    >
                        Share Market
                    </button>
                    <button
                        onClick={() => scrollToSection('trading')}
                        className="text-white px-5 py-3.5 font-semibold hover:bg-navy-dark transition-colors duration-200 focus:outline-none focus:bg-navy-dark focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-medium"
                    >
                        Trading
                    </button>
                    <button
                        onClick={() => scrollToSection('ecommerce')}
                        className="text-white px-5 py-3.5 font-semibold hover:bg-navy-dark transition-colors duration-200 focus:outline-none focus:bg-navy-dark focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-medium"
                    >
                        E-Commerce
                    </button>
                    <button
                        onClick={() => scrollToSection('dropshipping')}
                        className="text-white px-5 py-3.5 font-semibold hover:bg-navy-dark transition-colors duration-200 focus:outline-none focus:bg-navy-dark focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-medium"
                    >
                        Dropshipping
                    </button>
                    <button
                        onClick={() => scrollToSection('importexport')}
                        className="text-white px-5 py-3.5 font-semibold hover:bg-navy-dark transition-colors duration-200 focus:outline-none focus:bg-navy-dark focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-medium"
                    >
                        Import & Export
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="py-8 px-6 max-w-4xl mx-auto">
                <TopicCard
                    id="share"
                    icon={<TrendingUp className="w-8 h-8" />}
                    title="📈 Share Market"
                    description="The share market is a place where investors buy and sell shares of companies. People invest to grow their money over time through dividends and price increase."
                />

                <TopicCard
                    id="trading"
                    icon={<LineChart className="w-8 h-8" />}
                    title="💹 Trading"
                    description="Trading involves buying and selling financial instruments like stocks, commodities, or currencies for short-term profit. It requires market knowledge and discipline."
                />

                <TopicCard
                    id="ecommerce"
                    icon={<ShoppingCart className="w-8 h-8" />}
                    title="🛒 E-Commerce"
                    description="E-commerce means buying and selling products online through websites like Amazon, Flipkart, or your own online store. It reduces physical store costs."
                />

                <TopicCard
                    id="dropshipping"
                    icon={<Package className="w-8 h-8" />}
                    title="📦 Dropshipping"
                    description="Dropshipping is a business model where you sell products online without keeping stock. The supplier ships products directly to customers."
                />

                <TopicCard
                    id="importexport"
                    icon={<Globe className="w-8 h-8" />}
                    title="🌍 Import & Export"
                    description="Import & Export business involves buying goods from one country and selling them in another. It helps expand businesses globally and earn foreign income."
                />
            </main>

            {/* Footer */}
            <footer className="bg-navy-dark text-white text-center py-6 px-6 mt-12">
                <p className="text-sm md:text-base">
                    © 2026 Business Awareness | Learn • Grow • Succeed
                </p>
            </footer>
        </div>
    );
}
