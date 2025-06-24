const testimonials = [
    {
        name: "Avishkaram Team Lead",
        role: "Senior Developer at Avishkaram Technologies",
        content: "Gyanendra is a highly skilled Full Stack Developer who consistently delivers robust solutions. His expertise in ReactJS and .NET Core significantly improved our project efficiency. He integrated APIs seamlessly and optimized database performance.",
        avatar: "/assets/avatar1.jpg"
    },
    {
        name: "Saayami Project Manager",
        role: "Tech Lead at Saayami Technologies",
        content: "During his internship, Gyanendra demonstrated strong problem-solving skills. His optimizations in MySQL queries and UI enhancements greatly improved our system's performance and user experience.",
        avatar: "/assets/avatar2.jpg"
    },
    {
        name: "Broadway Infosys Trainer",
        role: "Instructor at Broadway Infosys",
        content: "Gyanendra showed exceptional dedication during ASP.NET Core training. He grasped advanced concepts quickly and applied them effectively in real-world scenarios, making him a standout learner.",
        avatar: "/assets/avatar3.jpg"
    }
];

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
                                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-800">{testimonial.name}</h3>
                                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-xs text-gray-700 italic">"{testimonial.content}"</p>
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