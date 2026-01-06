"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MapPin, Download, Send } from "lucide-react";

export default function Contact() {
    const { email, phone, socials } = portfolioData.personalInfo;

    return (
        <section id="contact" className="py-20 bg-blue-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 justify-center max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-blue-600">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Email</h3>
                                <a href={`mailto:${email}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                                    {email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-blue-600">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Phone</h3>
                                <a href={`tel:${phone}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                                    {phone}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-blue-600">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Location</h3>
                                <p className="text-gray-600 dark:text-gray-300">Karachi, Pakistan</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30"
                            >
                                <Download size={20} />
                                Download Resume
                            </a>
                        </div>
                    </motion.div>

                    {/* Social Links & Message */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col justify-center items-center text-center"
                    >
                        <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                        <div className="flex gap-4 mb-8">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-full bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
                                    aria-label={social.name}
                                >
                                    <social.icon size={32} />
                                </a>
                            ))}
                        </div>
                        <p className="text-gray-500 text-sm">
                            Feel free to reach out on any of these platforms.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
