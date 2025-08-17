'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { navLinks } from '@/app/lib/constants'
import { fadeIn } from '@/app/lib/animations'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { smoothScrollTo } from '@/app/utils/scroll'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const handleNavClick = (id: string) => {
        smoothScrollTo(id);
        setIsOpen(false);
    };

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            variants={fadeIn as any}
            className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md"
        >
            <nav className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4 sm:px-6 lg:px-8">
                <button 
                    onClick={() => smoothScrollTo('home')}
                    className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                >
                    Roopali Singh
                </button>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <button
                                onClick={() => handleNavClick(link.href)}
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => smoothScrollTo('contact')}
                        className="hidden sm:inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity"
                    >
                        Hire Me
                    </button>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-gray-300 hover:text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ y: -300, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -300, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25 }}
                        className="fixed top-16 left-0 right-0 bg-gray-900 z-50 shadow-2xl md:hidden border-b border-gray-800"
                    >
                        <div className="flex flex-col p-6">
                            <ul className="flex flex-col space-y-6">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <button
                                            onClick={() => handleNavClick(link.href)}
                                            className="text-gray-300 hover:text-white text-lg transition-colors"
                                        >
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 pt-4 border-t border-gray-800">
                                <button
                                    onClick={() => handleNavClick('contact')}
                                    className="block w-full text-center px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity"
                                >
                                    Hire Me
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </nav>
        </motion.header>
    )
}