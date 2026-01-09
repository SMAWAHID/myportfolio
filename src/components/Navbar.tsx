"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path: string) => {
        if (path === "/" && pathname !== "/") return false;
        return pathname.startsWith(path);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
                ? "bg-white/95 backdrop-blur-md border-gray-200 dark:bg-[#0b0c0e]/95 dark:border-gray-800"
                : "bg-white border-gray-200 dark:bg-[#0b0c0e] dark:border-gray-800"
                }`}
        >
            <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
                {/* Left Side: Logo + Navigation */}
                <div className="flex items-center gap-8 md:gap-12">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group shrink-0">
                        <div className="relative w-8 h-8 overflow-hidden">
                            <Image
                                src="/logo.png"
                                alt="SMH Logo"
                                fill
                                className="object-contain" // Changed to contain to respect logo shape
                            />
                        </div>
                    </Link>

                    {/* Desktop/Tablet Nav Links */}
                    <div className="flex items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[15px] font-medium tracking-wide transition-colors !no-underline mr-8 last:mr-0 ${isActive(link.href)
                                        ? "text-blue-600 dark:text-blue-400"
                                        : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Side: Simple CTA or Empty for now (Google style often has search/profile here) */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Placeholder for future actions like Layout Toggle or Search */}
                </div>
            </div>
        </nav>
    );
}
