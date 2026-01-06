"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const { name, tagline, intro, socials } = portfolioData.personalInfo;

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-900/20"></div>

            <div className="container mx-auto px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium mb-6">
                        Available for Hire
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Hi, I'm <span className="text-blue-600">{name}</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light">
                        {tagline}
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400 mb-10 leading-relaxed">
                        {intro}
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 group"
                        >
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <div className="flex items-center gap-4 mt-4 md:mt-0">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    aria-label={social.name}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
