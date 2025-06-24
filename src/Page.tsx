import React from "react";

export interface PageProps {
    number?: number; // Made optional since we're removing it
    children: React.ReactNode;
    className?: string; // Added for custom styling
}

export const Page = React.forwardRef<HTMLDivElement, PageProps>(
    ({ children, className = "" }, ref) => {
        return (
            <div
                ref={ref}
                className={`w-full h-full bg-white ${className}`}
            >
                {children}
            </div>
        );
    }
);

Page.displayName = "Page";