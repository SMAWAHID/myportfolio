"use client";

import { portfolioData } from "@/data/portfolio";

export default function Footer() {
    const { name } = portfolioData.personalInfo;

    return (
        <footer className="py-8 bg-white/50 dark:bg-black/50 border-t border-slate-100 dark:border-slate-800 text-center backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <p className="text-slate-600 dark:text-slate-400">
                    © {new Date().getFullYear()} <span className="font-semibold text-blue-600">{name}</span>. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
