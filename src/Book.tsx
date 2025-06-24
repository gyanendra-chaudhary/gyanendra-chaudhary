import React, { useState } from "react";
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

const Book: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const isCoverPage = currentPage === 0 || currentPage === TOTAL_PAGES - 1;

    return (
        <div className="w-screen h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
            <HTMLFlipBook
                key={isCoverPage ? "portrait" : "landscape"}
                width={520}
                height={700}
                size="fixed"
                minWidth={520}
                maxWidth={520}
                minHeight={800}
                maxHeight={800}
                showCover={true}
                mobileScrollSupport={true}
                drawShadow={true}
                flippingTime={800}
                usePortrait={isCoverPage}
                startZIndex={1}
                autoSize={false}
                maxShadowOpacity={0.4}
                clickEventForward={true}
                useMouseEvents={true}
                swipeDistance={30}
                showPageCorners={true}
                disableFlipByClick={false}
                className="rounded-lg"
                style={{ overflow: "hidden" }}
                startPage={currentPage}
                onFlip={(e) => {
                    setCurrentPage(e.data);
                }}
                renderOnlyPageLengthChange={true}
            >
                <Page number={0}>
                    <FrontCover />
                </Page>
                <Page number={1}>
                    <Introduction />
                </Page>
                <Page number={2}>
                    <Resume />
                </Page>
                <Page number={3}>
                    <Projects />
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