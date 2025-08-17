// //'use client'

// import { motion } from 'framer-motion'
// import { fadeIn, textVariant } from '@/app/lib/animations'
// import { testimonials } from '@/app/lib/constants'

// export default function Testimonials() {
//     return (
//         <motion.section
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="py-20"
//             id="testimonials"
//         >
//             <motion.div variants={textVariant()}>
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
//                 <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mb-8"></div>
//                 <p className="text-gray-400 max-w-3xl mb-12">
//                     What people I've worked with say about me
//                 </p>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {testimonials.map((testimonial, index) => (
//                     <motion.div
//                         key={testimonial.name}
//                         variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
//                         className="bg-gray-900 p-6 rounded-xl border border-gray-800"
//                     >
//                         <div className="flex items-center gap-4 mb-4">
//                             <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
//                                 <span className="text-xl">👤</span>
//                             </div>
//                             <div>
//                                 <h4 className="font-semibold">{testimonial.name}</h4>
//                                 <p className="text-sm text-gray-400">{testimonial.role}</p>
//                             </div>
//                         </div>
//                         <p className="text-gray-300">"{testimonial.quote}"</p>
//                     </motion.div>
//                 ))}
//             </div>
//         </motion.section>
//     )
// }//