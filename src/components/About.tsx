"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Book, Code, Wrench, Brain, Users, Globe, Award, Briefcase } from "lucide-react";

export default function About() {
    const { skills, education, extracurricular } = portfolioData;

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
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                    {/* Education */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                            <Book className="text-blue-600" /> Education
                        </h3>
                        <div className="space-y-4">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
                                >
                                    <h4 className="text-xl font-semibold">{edu.institution}</h4>
                                    <p className="text-blue-600 font-medium">{edu.degree}</p>
                                    <p className="text-gray-500 text-sm mt-1">{edu.year}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Extracurricular */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                            <Award className="text-blue-600" /> Extracurricular & Volunteer
                        </h3>
                        <div className="space-y-4">
                            {extracurricular.map((extra, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
                                >
                                    <h4 className="text-xl font-semibold">{extra.organization}</h4>
                                    <p className="text-gray-600 dark:text-gray-300">{extra.role}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <h3 className="text-2xl font-bold flex items-center gap-2 mb-8 justify-center">
                        <Code className="text-blue-600" /> Technical Expertise
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Languages */}
                        <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                                    <Code size={20} />
                                </div>
                                <h4 className="text-lg font-bold">Languages</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.languages.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Frameworks */}
                        <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                                    <Globe size={20} />
                                </div>
                                <h4 className="text-lg font-bold">Frameworks</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.frameworks.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Tools */}
                        <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                                    <Wrench size={20} />
                                </div>
                                <h4 className="text-lg font-bold">Tools</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.tools.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Technical Concepts */}
                        <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400">
                                    <Brain size={20} />
                                </div>
                                <h4 className="text-lg font-bold">Technical Concepts</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.concepts.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Soft Skills */}
                        <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-lg text-pink-600 dark:text-pink-400">
                                    <Users size={20} />
                                </div>
                                <h4 className="text-lg font-bold">Soft Skills</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.softSkills.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Spoken Languages */}
                        <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg text-teal-600 dark:text-teal-400">
                                    <Briefcase size={20} />
                                </div>
                                <h4 className="text-lg font-bold">Languages</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.spokenLanguages.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>


                    </div>

                </motion.div>
            </div>
        </section>
    );
}
