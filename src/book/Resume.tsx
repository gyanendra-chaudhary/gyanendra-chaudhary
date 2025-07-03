import ResumePdf from "../assets/Gyanendra_Chaudhary.pdf";

const Resume = () => {
    const pdfUrl = `${ResumePdf}#toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit`;

    return (
        <div className="w-full h-full bg-gray-50 flex flex-col p-6">
            {/* Header Section */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Professional Resume</h2>
                <div className="w-16 h-1 bg-blue-500 mt-2"></div>
                <p className="text-sm text-gray-600 mt-2">Detailed overview of my skills and experience</p>
            </div>

            {/* PDF Viewer Container */}
            <div className="flex-grow border-2 border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                <iframe
                    src={pdfUrl}
                    className="w-full h-full min-h-[70vh]"
                    title="Gyanendra Chaudhary - Full Stack Developer Resume"
                    frameBorder="0"
                    loading="lazy"
                />
            </div>

            {/* Download Section */}
            <div className="mt-4 flex justify-between items-center">
                <a
                    href={ResumePdf}
                    download="Gyanendra_Chaudhary_Resume.pdf"
                    className="text-sm text-primary px-4 py-1 rounded transition-colors"
                >
                    Download PDF
                </a>
                <p className="text-xs text-gray-500">Use the download button to save the file</p>
            </div>
        </div>
    );
};

export default Resume;