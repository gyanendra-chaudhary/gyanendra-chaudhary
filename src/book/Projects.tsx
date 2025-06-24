const projects = [
    {
        title: "E-commerce Platform",
        description: "A full-featured online store with payment integration, inventory management, and analytics dashboard.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        year: "2023"
    },
    {
        title: "Health Monitoring App",
        description: "Mobile application for tracking health metrics with data visualization and doctor-patient communication.",
        technologies: ["React Native", "Firebase", "D3.js"],
        year: "2022"
    },
    {
        title: "Task Management System",
        description: "Collaborative project management tool with real-time updates and role-based access control.",
        technologies: ["TypeScript", "Next.js", "PostgreSQL", "WebSockets"],
        year: "2021"
    },
    {
        title: "AI Content Generator",
        description: "Platform leveraging GPT-3 to assist content creators with blog post generation and ideation.",
        technologies: ["Python", "FastAPI", "React", "OpenAI API"],
        year: "2023"
    }
];

const Projects = () => {
    return (
        <div className="w-full h-full bg-white p-6 flex flex-col">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800">Selected Projects</h2>
                <div className="w-12 h-1 bg-green-500"></div>
            </div>

            <div className="flex-grow overflow-y-auto space-y-6">
                {projects.map((project, index) => (
                    <div key={index} className="group relative p-4 border border-gray-100 rounded-lg hover:border-green-200 hover:shadow-sm transition-all">
                        <div className="absolute -left-1 top-4 w-1 h-8 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="flex justify-between items-start">
                            <h3 className="text-sm font-semibold text-gray-800">{project.title}</h3>
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{project.year}</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-2 mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="text-xs bg-gray-50 text-gray-700 px-2 py-1 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center">More projects available on GitHub</p>
            </div>
        </div>
    );
};

export default Projects;