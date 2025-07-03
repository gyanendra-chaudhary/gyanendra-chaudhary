import { useState, useEffect } from 'react';

// Define types for the WordPress post data
type FeaturedMedia = {
    source_url: string;
    alt_text: string;
};

type WpEmbedded = {
    'wp:featuredmedia'?: FeaturedMedia[];
};

type WordPressPost = {
    id: number;
    date: string;
    title: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    _embedded?: WpEmbedded;
    slug: string;
    link: string; // WordPress provides the correct URL in the link property
};

const Blogs = () => {
    const [posts, setPosts] = useState<WordPressPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(
                    'https://chaudharygyanendra.com.np/wp-json/wp/v2/posts?_embed&per_page=4'
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data: WordPressPost[] = await response.json();
                setPosts(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const formatDate = (dateString: string): string => {
        const postDate = new Date(dateString);
        return postDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long'
        });
    };

    const calculateReadTime = (content: string): string => {
        const wordCount = content.split(' ').length;
        const readTime = Math.ceil(wordCount / 200);
        return `${readTime} min read`;
    };

    const stripHtmlTags = (html: string): string => {
        return html.replace(/<[^>]+>/g, '');
    };

    const getFeaturedImage = (post: WordPressPost): string | undefined => {
        return post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    };

    if (loading) {
        return (
            <div className="w-full h-full bg-gray-50 p-6 flex flex-col">
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Technical Writings</h2>
                    <div className="w-12 h-1 bg-orange-500"></div>
                </div>
                <div className="flex-grow flex items-center justify-center">
                    <div className="animate-pulse flex flex-col space-y-4 w-full">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="p-4 bg-white rounded-lg shadow-xs">
                                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                                <div className="h-3 bg-gray-200 rounded w-full mb-3"></div>
                                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full h-full bg-gray-50 p-6 flex flex-col">
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Technical Writings</h2>
                    <div className="w-12 h-1 bg-orange-500"></div>
                </div>
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-red-500 mb-2">Error loading posts</p>
                        <p className="text-gray-600 text-sm mb-4">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="text-xs bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 transition-colors"
                        >
                            Retry
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-full bg-gray-50 p-6 flex flex-col">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800">Technical Writings</h2>
                <div className="w-12 h-1 bg-orange-500"></div>
            </div>

            <div className="flex-grow overflow-y-auto space-y-6">
                {posts.map((post) => {
                    const featuredImage = getFeaturedImage(post);
                    // Use the link provided by WordPress API which is always correct
                    const postUrl = post.link;

                    return (
                        <a
                            key={post.id}
                            href={postUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-4 bg-white rounded-lg shadow-xs hover:shadow-sm transition-shadow"
                        >
                            {featuredImage && (
                                <img
                                    src={featuredImage}
                                    alt={stripHtmlTags(post.title.rendered)}
                                    className="w-full h-32 object-cover mb-3 rounded"
                                />
                            )}
                            <h3
                                className="text-sm font-semibold text-gray-800 mb-1"
                                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                            />
                            <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                                {stripHtmlTags(post.excerpt.rendered)}
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-500">{formatDate(post.date)}</span>
                                <span className="text-xs text-orange-500">
                                    {calculateReadTime(post.content.rendered)}
                                </span>
                            </div>
                        </a>
                    );
                })}
            </div>

            <div className="mt-auto pt-4 border-t border-gray-200">
                <a
                    href="https://chaudharygyanendra.com.np/blog"
                    className="text-xs text-orange-500 hover:text-orange-600 font-medium flex items-center justify-center transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View all articles
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Blogs;