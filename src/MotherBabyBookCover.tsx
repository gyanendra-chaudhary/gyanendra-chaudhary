export default function MotherBabyBookCover() {
    return (
        <div className="relative w-full h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0">
                {/* Floating hearts */}
                <div className="absolute top-10 left-10 w-6 h-6 bg-pink-300 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute top-20 right-20 w-4 h-4 bg-purple-300 rounded-full opacity-40 animate-pulse delay-1000"></div>
                <div className="absolute bottom-32 left-16 w-8 h-8 bg-pink-200 rounded-full opacity-25 animate-pulse delay-2000"></div>
                <div className="absolute bottom-20 right-12 w-5 h-5 bg-purple-200 rounded-full opacity-35 animate-pulse delay-500"></div>

                {/* Soft geometric shapes */}
                <div className="absolute top-1/4 left-0 w-32 h-32 bg-gradient-to-r from-pink-200 to-transparent rounded-full opacity-20 blur-xl"></div>
                <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-gradient-to-l from-purple-200 to-transparent rounded-full opacity-20 blur-xl"></div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">

                {/* Decorative Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
                        <div className="mx-4 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
                    </div>
                </div>

                {/* Main Title */}
                <div className="mb-12">
                    <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 tracking-tight">
                        Precious
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-light text-gray-700 mb-6">
                        Moments
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
                </div>

                {/* Central Illustration Area */}
                <div className="relative mb-12">
                    <div className="w-64 h-64 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                        {/* Mother and Baby Silhouette */}
                        <svg className="w-40 h-40 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9.5C15 10.8 13.8 12 12.5 12S10 10.8 10 9.5V7.5L4 7V9C4 10.1 4.9 11 6 11V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V11C19.1 11 20 10.1 20 9H21ZM7.5 16.5C7.5 17.6 8.4 18.5 9.5 18.5S11.5 17.6 11.5 16.5S10.6 15.5 9.5 15.5S7.5 15.4 7.5 16.5Z" />
                        </svg>

                        {/* Decorative rings around the circle */}
                        <div className="absolute inset-0 border-2 border-pink-300 opacity-30 rounded-full animate-ping"></div>
                        <div className="absolute inset-4 border border-purple-300 opacity-20 rounded-full animate-ping delay-1000"></div>
                    </div>

                    {/* Floating elements around the circle */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                        <span className="text-white text-sm">★</span>
                    </div>
                    <div className="absolute -top-2 -right-6 w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                        <span className="text-white text-xs">♥</span>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-1000">
                        <span className="text-white text-lg">✨</span>
                    </div>
                </div>

                {/* Subtitle */}
                <div className="mb-8">
                    <p className="text-xl md:text-2xl text-gray-600 font-light italic">
                        A Journey of Love, Growth & Wonder
                    </p>
                </div>

                {/* Author Section */}
                <div className="mb-8">
                    <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-4"></div>
                    <p className="text-lg text-gray-500 font-medium">
                        Written with Love
                    </p>
                </div>

                {/* Bottom Decorative Element */}
                <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full text-pink-400" fill="currentColor">
                    <path d="M0,0 Q50,50 100,0 L100,100 L0,100 Z" />
                </svg>
            </div>

            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 rotate-180">
                <svg viewBox="0 0 100 100" className="w-full h-full text-purple-400" fill="currentColor">
                    <path d="M0,0 Q50,50 100,0 L100,100 L0,100 Z" />
                </svg>
            </div>
        </div>
    );
}