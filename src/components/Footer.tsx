"use client";

import { portfolioData } from "@/data/portfolio";

export default function Footer() {
    const { name } = portfolioData.personalInfo;

    return (
        <footer className="py-8 bg-white dark:bg-black border-t dark:border-gray-800 text-center">
            <div className="container mx-auto px-6">
                <p className="text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} <span className="font-semibold text-blue-600">{name}</span>. All rights reserved.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                    Built with Next.js, Tailwind CSS & Framer Motion
                </p>
            </div>
        </footer>
    );
}
