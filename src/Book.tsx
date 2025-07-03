import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Page } from "./Page";
import FrontCover from "./book/FrontCover";
import BackCover from "./book/BackCover";
import Introduction from "./book/Introduction";
import Resume from "./book/Resume";
import Projects from "./book/Projects";
import Blogs from "./book/Blogs";
import Contact from "./book/Contact";
import ProfessionalFeedback from "./book/ProfessionalFeedback";

const TOTAL_PAGES = 8;

// Default book dimensions
const DEFAULT_WIDTH = 520;
const DEFAULT_HEIGHT = 700;
const ASPECT_RATIO = DEFAULT_WIDTH / DEFAULT_HEIGHT;

const Book: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [bookSize, setBookSize] = useState({
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
    });

    const isCoverPage = currentPage === 0 || currentPage === TOTAL_PAGES - 1;

    useEffect(() => {
        const handleResize = () => {
            const mediaQuery = window.matchMedia('(max-width: 1023px)');
            setIsMobile(mediaQuery.matches);

            // Calculate available space with some padding
            const maxAvailableWidth = window.innerWidth * 0.9;
            const maxAvailableHeight = window.innerHeight * 0.9;

            let width, height;

            if (isCoverPage || isMobile) {
                // Portrait mode - height is limiting factor
                height = Math.min(maxAvailableHeight, DEFAULT_HEIGHT);
                width = height * ASPECT_RATIO;
            } else {
                // Landscape mode - width is limiting factor
                width = Math.min(maxAvailableWidth / 2, DEFAULT_WIDTH); // Divide by 2 for two pages
                height = width / ASPECT_RATIO;
            }

            // Ensure minimum sizes
            width = Math.max(width, 300);
            height = Math.max(height, 400);

            setBookSize({ width, height });
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [isMobile, isCoverPage]);

    return (
        <div className="w-screen h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4">
            <HTMLFlipBook
                key={`${bookSize.width}-${isMobile}-${isCoverPage}`} // Force re-render on size/orientation change
                width={bookSize.width}
                height={bookSize.height}
                size="fixed"
                minWidth={300}
                maxWidth={DEFAULT_WIDTH}
                minHeight={400}
                maxHeight={DEFAULT_HEIGHT}
                showCover={true}
                mobileScrollSupport={true}
                drawShadow={true}
                flippingTime={900}
                usePortrait={isCoverPage || isMobile}
                startZIndex={1}
                autoSize={false}
                maxShadowOpacity={0.4}
                clickEventForward={true}
                useMouseEvents={true}
                swipeDistance={30}
                showPageCorners={true}
                disableFlipByClick={false}
                className="rounded-lg shadow-xl"
                style={{ overflow: "hidden" }}
                startPage={currentPage}
                onFlip={(e) => setCurrentPage(e.data)}
            >
                <Page number={0}>
                    <FrontCover />
                </Page>
                <Page number={1}>
                    <Introduction />
                </Page>
                <Page number={2}>
                    <Projects />
                </Page>
                <Page number={3}>
                    <Resume />
                </Page>
                <Page number={4}>
                    <Blogs />
                </Page>
                <Page number={5}>
                    <ProfessionalFeedback />
                </Page>
                <Page number={6}>
                    <Contact />
                </Page>
                <Page number={7}>
                    <BackCover />
                </Page>
            </HTMLFlipBook>
        </div>
    );
};

export default Book;