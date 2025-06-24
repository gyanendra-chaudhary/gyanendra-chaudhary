const Introduction = () => {
    return (
        <div className="w-full h-full bg-white p-8 flex flex-col">
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Hello, I'm Gyanendra</h2>
                <div className="w-12 h-1 bg-purple-500"></div>
            </div>

            <div className="flex-grow overflow-y-auto">
                <p className="text-sm text-gray-700 mb-4">
                    Welcome to my portfolio. I'm a Full Stack Developer with experience in designing, developing,
                    and implementing software solutions using both front-end and back-end technologies including
                    ReactJS, ASP.NET Core, and various SQL databases.
                </p>

                <p className="text-sm text-gray-700 mb-4">
                    My industry expertise includes leveraging Agile methodologies for project management and
                    employing tools such as JIRA and Git for efficient collaboration. I have proven ability
                    to integrate third-party APIs and Microsoft Graph API to enhance system functionalities
                    while optimizing code performance and user experience.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">My Approach</h3>
                    <p className="text-xs text-gray-600">
                        "I focus on creating robust applications that improve operational efficiency through
                        clean code architecture, performance optimization, and intuitive user interfaces.
                        I believe in continuous learning and adapting to new technologies to deliver modern solutions."
                    </p>
                </div>

                <p className="text-sm text-gray-700 mb-4">
                    In this portfolio, you'll find my professional journey including my work at Avishkaram Technologies
                    and Saayami Technologies, the technical skills I've mastered, and projects I've contributed to
                    across domains like LegalTech, CRM Solutions, and Productivity Tools.
                </p>

                <p className="text-sm text-gray-700"> Thank you for exploring my profile. I'm always excited to take on new challenges where I can apply my expertise in <span className="font-medium">.NET</span>,
                    <span className="font-medium"> ReactJS</span>, and database technologies to create impactful software solutions.
                </p>
            </div>

            <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center">Scroll down to continue</p>
            </div>
        </div>
    );
};

export default Introduction;