import ProfileImage from "../assets/profile.png";

const FrontCover = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex flex-col items-center justify-center p-8 text-white">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white overflow-hidden mb-6 shadow-xl">
                <img
                    src={ProfileImage}
                    alt="Gyanendra Chaudhary"
                    className="w-full h-full object-cover"
                />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">GYANENDRA CHAUDHARY</h1>
            <p className="text-sm md:text-base opacity-80 mb-6 text-center">Full Stack Developer</p>
            <div className="w-16 h-1 bg-pink-400 mb-8"></div>
            <p className="text-xs md:text-sm opacity-70 text-center max-w-md flex items-center justify-center gap-1">
                Building solutions with purpose and legacy.
            </p>
            <p className="pt-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                        2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81
                        4.5 2.09C13.09 3.81 14.76 3 16.5 3
                        19.58 3 22 5.42 22 8.5c0 3.78-3.4
                        6.86-8.55 11.54L12 21.35z" />
                </svg>
            </p>

            <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-xs opacity-50">Swipe to explore</p>
                <div className="animate-bounce mt-2">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default FrontCover;