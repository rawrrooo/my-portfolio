'use client'

import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '@/app/lib/animations'
import { socialLinks } from '@/app/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import { smoothScrollTo } from '@/app/utils/scroll'

export default function Hero() {
    const handleScroll = (id: string) => {
        smoothScrollTo(id);
    };

    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col justify-center pt-10 md:pt-20 pb-32"
            id="home"
        >
            <div className="flex flex-col md:flex-row items-center gap-8 overflow-hidden justify-between">
                <motion.div
                    variants={slideIn('left', 'tween', 0.2, 1)}
                    className="md:w-1/2"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Roopali Singh</span>
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-gray-300">
                        Full Stack Web Developer
                    </h2>
                    <p className="text-lg text-gray-400 mb-8">
                        I build modern, responsive, and user-friendly web applications with the latest technologies.
                    </p>
                    <div className="flex gap-4">
                        <Link
                            href="/projects"
                            onClick={(e) => {
                                e.preventDefault();
                                handleScroll('projects');
                            }}
                            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity"
                        >
                            View My Work
                        </Link>
                        <Link
                            href="/contact"
                            onClick={(e) => {
                                e.preventDefault();
                                handleScroll('contact');
                            }}
                            className="px-6 py-3 rounded-full border border-gray-700 text-white hover:bg-gray-800 transition-colors"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    variants={slideIn('right', 'tween', 0.2, 1)}
                    className="justify-end flex"
                >
                    <div className='relative mx-auto md:ml-auto'>
                        <Image
                            src="/images/profilepic.jpg"
                            alt="roopali's profile picture"
                            className="rounded-full w-4/5 xl:w-[90%] mx-auto md:ml-auto h-full object-contain"
                            width={200}
                            height={250}
                        />
                        <span className="-top-16 -left-24 xl:-left-28 inset-0 relative flex size-5 mx-auto">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2bb700] opacity-75"></span>
                            <span className="relative inline-flex size-5 rounded-full bg-[#2bb700]"></span>
                        </span>
                    </div>
                </motion.div>
            </div>

            <motion.div
                variants={fadeIn('up', 'tween', 0.5, 1)}
                className="mt-16 flex justify-center gap-6"
            >
                {socialLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label={link.name}
                    >
                        <link.icon className="w-6 h-6" />
                    </Link>
                ))}
            </motion.div>
        </motion.section>
    )
}