const blogs = [
    {
        title: "Optimizing React Performance",
        excerpt: "Practical techniques to identify and fix performance bottlenecks in React applications.",
        date: "May 2023",
        readTime: "8 min read"
    },
    {
        title: "TypeScript Best Practices",
        excerpt: "How we implemented TypeScript across our codebase and the lessons learned.",
        date: "March 2023",
        readTime: "12 min read"
    },
    {
        title: "The State of Web Development 2023",
        excerpt: "An overview of emerging trends and technologies shaping modern web development.",
        date: "January 2023",
        readTime: "15 min read"
    },
    {
        title: "Building Accessible Web Applications",
        excerpt: "A comprehensive guide to implementing WCAG standards in your projects.",
        date: "November 2022",
        readTime: "10 min read"
    }
];

const Blogs = () => {
    return (
        <div className="w-full h-full bg-gray-50 p-6 flex flex-col">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800">Technical Writings</h2>
                <div className="w-12 h-1 bg-orange-500"></div>
            </div>

            <div className="flex-grow overflow-y-auto space-y-6">
                {blogs.map((blog, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow-xs hover:shadow-sm transition-shadow">
                        <h3 className="text-sm font-semibold text-gray-800 mb-1">{blog.title}</h3>
                        <p className="text-xs text-gray-600 mb-3">{blog.excerpt}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500">{blog.date}</span>
                            <span className="text-xs text-orange-500">{blog.readTime}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-auto pt-4 border-t border-gray-200">
                <a
                    href="#"
                    className="text-xs text-orange-500 hover:text-orange-600 font-medium flex items-center justify-center transition-colors"
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