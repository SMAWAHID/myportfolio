"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const { name, tagline, intro, socials } = portfolioData.personalInfo;

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-28 pb-20 relative overflow-hidden"
        >
            {/* Clean, subtle background */}
            {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent opacity-60 dark:from-blue-900/10 dark:opacity-40"></div> */}

            <div className="container mx-auto px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-4xl"
                >
                    <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-slate-900 dark:text-white">
                        {name}
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-slate-500 dark:text-slate-400 mb-8 font-light tracking-wide">
                        {tagline}
                    </h2>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed opacity-90">
                        {intro}
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View Projects
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </a>

                        <div className="flex items-center gap-4">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-full bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-900 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    <social.icon size={22} className="stroke-[1.5]" />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
