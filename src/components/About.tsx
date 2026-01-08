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
        <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">About Me</h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full opacity-80"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20"
                >
                    {/* Education */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <h3 className="text-2xl font-semibold flex items-center gap-3 text-slate-800 dark:text-slate-100">
                            <div className="p-2 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                                <Book size={24} />
                            </div>
                            Education
                        </h3>
                        <div className="space-y-6 pl-4 border-l-2 border-slate-200 dark:border-slate-800 ml-5">
                            {education.map((edu, index) => (
                                <div key={index} className="pl-6 relative">
                                    <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-white border-4 border-blue-600 dark:border-blue-500 box-content"></div>
                                    <h4 className="text-xl font-medium text-slate-900 dark:text-white">{edu.institution}</h4>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">{edu.degree}</p>
                                    <p className="text-slate-500 text-sm mt-1 font-mono">{edu.year}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Extracurricular */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <h3 className="text-2xl font-semibold flex items-center gap-3 text-slate-800 dark:text-slate-100">
                            <div className="p-2 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                                <Award size={24} />
                            </div>
                            Experience & Volunteer
                        </h3>
                        <div className="space-y-4">
                            {extracurricular.map((extra, index) => (
                                <div
                                    key={index}
                                    className="group bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 dark:border-slate-700/50"
                                >
                                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{extra.organization}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 mt-2">{extra.role}</p>
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
                >
                    <h3 className="text-2xl font-semibold text-center mb-12 text-slate-900 dark:text-white">Technical Expertise</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Skill Cards - unified design */}
                        <SkillCard title="Languages" icon={Code} skills={skills.languages} />
                        <SkillCard title="Frameworks" icon={Globe} skills={skills.frameworks} />
                        <SkillCard title="Tools" icon={Wrench} skills={skills.tools} />
                        <SkillCard title="Concepts" icon={Brain} skills={skills.concepts} />
                        <SkillCard title="Soft Skills" icon={Users} skills={skills.softSkills} />
                        <SkillCard title="Spoken Languages" icon={Briefcase} skills={skills.spokenLanguages} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function SkillCard({ title, icon: Icon, skills }: { title: string, icon: any, skills: string[] }) {
    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50 hover:shadow-md hover:border-blue-100 dark:hover:border-blue-900/50 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-slate-50 dark:bg-slate-700 rounded-xl text-slate-600 dark:text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon size={20} />
                </div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">{title}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-md text-sm font-medium border border-slate-100 dark:border-slate-700">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
