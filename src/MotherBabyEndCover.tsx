import React from 'react';

export default function MotherBabyEndCover() {
    return (
        <div className="relative w-full h-screen bg-gradient-to-tl from-purple-50 via-pink-50 to-yellow-50 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0">
                {/* Soft watercolor-like blobs */}
                <div className="absolute top-16 right-10 w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-30 blur-xl animate-pulse delay-300"></div>
                <div className="absolute bottom-24 left-12 w-32 h-32 bg-gradient-to-tr from-yellow-200 to-pink-200 rounded-full opacity-25 blur-2xl animate-pulse delay-700"></div>
                <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-20 blur-lg animate-pulse delay-1000"></div>

                {/* Scattered small elements */}
                <div className="absolute top-32 left-20 w-3 h-3 bg-yellow-400 rounded-full opacity-40 animate-bounce delay-200"></div>
                <div className="absolute top-48 right-32 w-2 h-2 bg-pink-400 rounded-full opacity-50 animate-bounce delay-800"></div>
                <div className="absolute bottom-40 right-24 w-4 h-4 bg-purple-400 rounded-full opacity-35 animate-bounce delay-1200"></div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">

                {/* Top Decorative Quote */}
                <div className="mb-16">
                    <div className="relative">
                        <svg className="w-12 h-12 text-pink-300 mx-auto mb-6 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                        </svg>
                        <p className="text-2xl md:text-3xl font-light text-gray-600 italic leading-relaxed max-w-2xl">
                            Every moment is a gift,<br />
                            every memory a treasure
                        </p>
                    </div>
                </div>

                {/* Central Artistic Element */}
                <div className="relative mb-16">
                    <div className="flex items-center justify-center space-x-8">
                        {/* Left decorative element */}
                        <div className="hidden md:block">
                            <div className="w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center shadow-lg opacity-80">
                                <svg className="w-16 h-16 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                                </svg>
                            </div>
                        </div>

                        {/* Center main illustration */}
                        <div className="relative">
                            <div className="w-48 h-48 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/60">
                                {/* Family silhouette */}
                                <svg className="w-32 h-32 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 4C16.55 4 17 4.45 17 5S16.55 6 16 6 15 5.55 15 5 15.45 4 16 4M13 11.5C13 12.88 14.12 14 15.5 14S18 12.88 18 14V22H16V16H14.5V22H12.5V14C12.5 12.62 13.62 11.5 15 11.5H13M12.5 11.5C12.5 12.88 11.38 14 10 14S7.5 12.88 7.5 14V22H9.5V16H11V22H13V14C13 12.62 11.88 11.5 10.5 11.5H12.5M8 4C8.55 4 9 4.45 9 5S8.55 6 8 6 7 5.55 7 5 7.45 4 8 4M8 6.5C9.38 6.5 10.5 7.62 10.5 9S9.38 11.5 8 11.5 5.5 10.38 5.5 9 6.62 6.5 8 6.5Z" />
                                </svg>

                                {/* Gentle pulse animation */}
                                <div className="absolute inset-0 border border-pink-300 opacity-20 rounded-full animate-ping"></div>
                            </div>

                            {/* Floating hearts around */}
                            <div className="absolute -top-6 left-6 text-2xl text-pink-400 animate-bounce">💕</div>
                            <div className="absolute -bottom-4 right-8 text-xl text-yellow-400 animate-bounce delay-500">🌟</div>
                            <div className="absolute top-12 -right-8 text-lg text-purple-400 animate-bounce delay-1000">✨</div>
                        </div>

                        {/* Right decorative element */}
                        <div className="hidden md:block">
                            <div className="w-32 h-32 bg-gradient-to-bl from-yellow-200 to-pink-200 rounded-full flex items-center justify-center shadow-lg opacity-80">
                                <svg className="w-16 h-16 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gratitude Message */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                        Thank You
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 font-light max-w-lg leading-relaxed">
                        For sharing in this beautiful journey of love, growth, and endless wonder
                    </p>
                </div>

                {/* Bottom decorative elements */}
                <div className="flex flex-col items-center space-y-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
                        <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                    </div>

                    {/* Small inspirational text */}
                    <p className="text-sm text-gray-500 italic">
                        May your days be filled with precious moments
                    </p>
                </div>
            </div>

            {/* Corner Flourishes */}
            <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full text-pink-400" fill="currentColor">
                    <path d="M100,0 Q50,25 75,50 Q100,75 100,100 L100,0 Z" />
                </svg>
            </div>

            <div className="absolute bottom-0 left-0 w-40 h-40 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full text-purple-400" fill="currentColor">
                    <path d="M0,100 Q25,75 50,100 Q75,100 100,100 L0,100 Z" />
                </svg>
            </div>

            {/* Subtle texture overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none"></div>
        </div>
    );
}