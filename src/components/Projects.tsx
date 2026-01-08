"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Github, ExternalLink, Calendar } from "lucide-react";

export default function Projects() {
    const { projects } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="projects" className="py-24 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">Featured Projects</h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full opacity-80"></div>
                    <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        A selection of projects highlighting my technical skills and problem-solving abilities.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700/50 group hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors text-slate-900 dark:text-white">
                                        {project.title}
                                    </h3>
                                    {/* Placeholder for links as user didn't provide project URLs but requested structure */}
                                    <div className="flex gap-2 text-slate-400">
                                        {/* <a href="#" className="hover:text-blue-600"><Github size={20} /></a> */}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4 font-mono">
                                    <Calendar size={16} />
                                    <span>{project.date}</span>
                                </div>

                                <p className="text-slate-600 dark:text-slate-300 mb-8 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-slate-50 text-slate-600 border border-slate-100 dark:bg-slate-700/50 dark:text-slate-300 dark:border-slate-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
