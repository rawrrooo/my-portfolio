'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/app/lib/animations'
import Link from 'next/link'
import { smoothScrollTo } from '@/app/utils/scroll'

export default function CTA() {
    const handleScroll = (id: string) => {
        smoothScrollTo(id);
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="py-20"
            id="contact"
        >
            <motion.div
                variants={fadeIn('up', 'spring', 0.1, 1)}
                className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-2xl p-8 md:p-12 border border-gray-800"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together!</h2>
                    <p className="text-gray-300 mb-8 text-lg">
                        Have a project in mind or want to discuss potential opportunities?
                        I'm currently available for freelance work and full-time positions.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="mailto:alicodespace@gmail.com"
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity font-medium"
                        >
                            Get In Touch
                        </Link>
                        <Link
                            href="/projects"
                            onClick={(e) => {
                                e.preventDefault();
                                handleScroll('projects');
                            }}
                            className="px-8 py-4 rounded-full border border-gray-700 text-white hover:bg-gray-800 transition-colors font-medium"
                        >
                            View My Work
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    )
}