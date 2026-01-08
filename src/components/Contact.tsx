"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MapPin, Download } from "lucide-react";

export default function Contact() {
    const { email, phone, socials } = portfolioData.personalInfo;

    return (
        <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">Get In Touch</h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full opacity-80"></div>
                    <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 justify-center max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-8"
                    >
                        <div className="flex items-start gap-5">
                            <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-blue-600 border border-slate-100 dark:border-slate-700">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">Email</h3>
                                <a href={`mailto:${email}`} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">
                                    {email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-blue-600 border border-slate-100 dark:border-slate-700">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">Phone</h3>
                                <a href={`tel:${phone}`} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">
                                    {phone}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-blue-600 border border-slate-100 dark:border-slate-700">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">Location</h3>
                                <p className="text-slate-600 dark:text-slate-300">Karachi, Pakistan</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
                            >
                                <Download size={20} />
                                Download Resume
                            </a>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700/50 flex flex-col justify-center items-center text-center"
                    >
                        <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Connect With Me</h3>
                        <div className="flex flex-wrap gap-4 mb-8 justify-center">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-full bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 text-2xl border border-slate-100 dark:border-slate-700 hover:-translate-y-1"
                                    aria-label={social.name}
                                >
                                    <social.icon size={28} />
                                </a>
                            ))}
                        </div>
                        <p className="text-slate-500 text-sm">
                            Feel free to reach out on any of these platforms.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
