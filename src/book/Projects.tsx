import { useEffect, useState } from 'react';
import { FaExclamationTriangle, FaGithub } from 'react-icons/fa';

interface GitHubRepository {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    created_at: string;
    updated_at: string;
    topics: string[];
    language: string | null;
    languages_url: string;
}

interface RepositoryWithLanguages extends GitHubRepository {
    languages: Record<string, number>;
}

const Projects = () => {
    const [repos, setRepos] = useState<RepositoryWithLanguages[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                // Fetch repositories
                const reposResponse = await fetch(
                    'https://api.github.com/users/gyanendra-chaudhary/repos?sort=updated&direction=desc'
                );

                if (!reposResponse.ok) {
                    throw new Error(`GitHub API returned ${reposResponse.status}`);
                }

                const reposData: GitHubRepository[] = await reposResponse.json();

                // Fetch languages for each repository
                const reposWithLanguages = await Promise.all(
                    reposData.map(async (repo) => {
                        const languagesResponse = await fetch(repo.languages_url);
                        if (!languagesResponse.ok) {
                            return {
                                ...repo,
                                languages: {}
                            };
                        }
                        const languagesData = await languagesResponse.json();
                        return {
                            ...repo,
                            languages: languagesData
                        };
                    })
                );

                setRepos(reposWithLanguages);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
                console.error('Error fetching GitHub repos:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading) {
        return (
            <div className="w-full h-full bg-white p-6 flex flex-col">
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Selected Projects</h2>
                    <div className="w-12 h-1 bg-green-500"></div>
                </div>
                <div className="flex-grow flex flex-col items-center justify-center space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
                    <p className="text-gray-600">Loading projects...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full h-full bg-white p-6 flex flex-col">
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Selected Projects</h2>
                    <div className="w-12 h-1 bg-green-500"></div>
                </div>
                <div className="flex-grow flex flex-col items-center justify-center space-y-4">
                    <div className="text-center animate-pulse">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                            <FaExclamationTriangle className="text-red-500 text-3xl animate-bounce" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-800 mt-2">Couldn't load projects</h3>
                        <div className="w-full h-1 bg-green-500"></div>
                        <a
                            href="https://github.com/gyanendra-chaudhary"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center mt-4 px-4 py-2 rounded-md"
                        >
                            <FaGithub className="mr-2" />
                            Visit My GitHub
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-full bg-white p-6 flex flex-col">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800">GitHub Projects</h2>
                <div className="w-12 h-1 bg-green-500"></div>
            </div>

            <div className="flex-grow overflow-y-auto space-y-6">
                {repos.map((repo) => (
                    <div
                        key={repo.id}
                        className="group relative p-4 border border-gray-100 rounded-lg hover:border-green-200 hover:shadow-sm transition-all"
                    >
                        <div className="absolute -left-1 top-4 w-1 h-8 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="flex justify-between items-start">
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-semibold text-gray-800 hover:text-green-600 hover:underline"
                            >
                                {repo.name}
                            </a>
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                {new Date(repo.updated_at).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short'
                                })}
                            </span>
                        </div>
                        <p className="text-xs text-gray-600 mt-2 mb-3">
                            {repo.description || 'No description provided'}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {Object.keys(repo.languages).map((language) => (
                                <span
                                    key={language}
                                    className="text-xs bg-gray-50 text-gray-700 px-2 py-1 rounded"
                                    title={`${language}: ${repo.languages[language]} bytes`}
                                >
                                    {language}
                                </span>
                            ))}
                            {repo.topics.map((topic) => (
                                <span key={topic} className="text-xs bg-gray-50 text-gray-700 px-2 py-1 rounded">
                                    {topic}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-auto pt-4 border-t border-gray-100">
                <a
                    href="https://github.com/gyanendra-chaudhary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 text-center hover:text-green-600 hover:underline"
                >
                    View all projects on GitHub
                </a>
            </div>
        </div>
    );
};

export default Projects;