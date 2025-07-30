
export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 text-gray-800 dark:text-white transition-all duration-300">
            {/* Hero Section */}
            <section className="text-center px-6 py-20 md:py-32">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Turn Spare Medicines Into Shared Hope</h2>
                <p className="max-w-xl mx-auto text-lg md:text-xl mb-8">
                    Medishelf Monitor is your go-to platform for buying and selling unused medicines in your neighborhood. Empower others while avoiding waste.
                </p>
            </section>

            {/* Features */}
            <section className="px-6 py-16 bg-white dark:bg-gray-900">
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">🌍 Community Driven</h3>
                        <p className="text-gray-600 dark:text-gray-300">Connect with nearby users and contribute to a circular health economy.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">🛒 Easy to Use</h3>
                        <p className="text-gray-600 dark:text-gray-300">Post medicines in seconds. Search and buy with one click.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">🔒 Secure Platform</h3>
                        <p className="text-gray-600 dark:text-gray-300">We ensure privacy, trust, and secure transactions every step of the way.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="px-6 py-6 border-t dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Medishelf Monitor. All rights reserved.
            </footer>
        </main>
    );
}
