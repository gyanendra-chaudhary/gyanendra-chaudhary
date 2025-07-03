const testimonials = [
    {
        name: "Avishkaram Team Lead",
        role: "Senior Developer at Avishkaram Technologies",
        content: "Gyanendra is a highly skilled Full Stack Developer who consistently delivers robust solutions. His expertise in ReactJS and .NET Core significantly improved our project efficiency. He integrated APIs seamlessly and optimized database performance.",
        avatar: null
    },
    {
        name: "Saayami Project Manager",
        role: "Tech Lead at Saayami Technologies",
        content: "During his internship, Gyanendra demonstrated strong problem-solving skills. His optimizations in MySQL queries and UI enhancements greatly improved our system's performance and user experience.",
        avatar: null
    },
    {
        name: "Broadway Infosys Trainer",
        role: "Instructor at Broadway Infosys",
        content: "Gyanendra showed exceptional dedication during ASP.NET Core training. He grasped advanced concepts quickly and applied them effectively in real-world scenarios, making him a standout learner.",
        avatar: null
    }
];

const UserAvatar = () => (
    <svg
        className="w-8 h-8 text-gray-400"
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
    </svg>
);

const ProfessionalFeedback = () => {
    return (
        <div className="w-full h-full bg-white p-6 flex flex-col">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800">Professional Feedback</h2>
                <div className="w-12 h-1 bg-pink-500"></div>
            </div>

            <div className="flex-grow overflow-y-auto">
                <div className="space-y-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-5 bg-gray-50 rounded-lg">
                            <div className="flex items-start mb-4">
                                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 flex items-center justify-center">
                                    {testimonial.avatar ? (
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <UserAvatar />
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-800">{testimonial.name}</h3>
                                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                            <div className="relative">
                                <p className="text-xs text-gray-700 italic blur-sm select-none">"{testimonial.content}"</p>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">
                                        Content not ready yet
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center">More references available upon request</p>
            </div>
        </div>
    );
};

export default ProfessionalFeedback;