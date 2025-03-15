// 'use client'
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import Layout from '@/components/Layout';
// import { Send, Phone, Mail, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

// const ContactPage: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSubmitted(true);
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//       });
      
//       // Reset success message after 5 seconds
//       setTimeout(() => setIsSubmitted(false), 5000);
//     }, 1500);
//   };

//   // Animation variants
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   const staggerChildren = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="relative h-[40vh] w-full overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-500">
//           {/* Abstract pattern overlay */}
//           <div className="absolute inset-0 opacity-20 bg-[url('/pattern.svg')]"></div>
//         </div>
        
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
//           <motion.h1 
//             className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Get In Touch
//           </motion.h1>
          
//           <motion.div 
//             className="w-20 h-1 bg-white mb-6"
//             initial={{ width: 0 }}
//             animate={{ width: 80 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           />
          
//           <motion.p 
//             className="max-w-2xl text-lg sm:text-xl font-light"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//           >
//             I'd love to hear from you. Let's connect and explore opportunities together.
//           </motion.p>
//         </div>
//       </section>

//       {/* Contact Information & Form Section */}
//       <section className="py-16 md:py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row gap-12">
            
//             {/* Contact Information */}
//             <motion.div 
//               className="w-full lg:w-1/3"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={staggerChildren}
//             >
//               <motion.h2 
//                 className="text-3xl font-bold mb-8 text-gray-900"
//                 variants={fadeIn}
//               >
//                 Contact Information
//               </motion.h2>
              
//               <div className="space-y-8">
//                 <motion.div 
//                   className="flex items-start"
//                   variants={fadeIn}
//                 >
//                   <div className="bg-amber-100 p-3 rounded-full mr-4">
//                     <Phone className="h-6 w-6 text-amber-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
//                     <p className="text-gray-700">+1 (555) 123-4567</p>
//                   </div>
//                 </motion.div>
                
//                 <motion.div 
//                   className="flex items-start"
//                   variants={fadeIn}
//                 >
//                   <div className="bg-amber-100 p-3 rounded-full mr-4">
//                     <Mail className="h-6 w-6 text-amber-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900">Email</h3>
//                     <p className="text-gray-700">hello@yourdomain.com</p>
//                   </div>
//                 </motion.div>
                
//                 <motion.div 
//                   className="flex items-start"
//                   variants={fadeIn}
//                 >
//                   <div className="bg-amber-100 p-3 rounded-full mr-4">
//                     <MapPin className="h-6 w-6 text-amber-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900">Location</h3>
//                     <p className="text-gray-700">San Francisco, CA</p>
//                   </div>
//                 </motion.div>
//               </div>
              
//               <motion.div
//                 className="mt-12"
//                 variants={fadeIn}
//               >
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Me</h3>
//                 <div className="flex space-x-4">
//                   <motion.a 
//                     href="#" 
//                     className="bg-amber-100 p-3 rounded-full text-amber-600 hover:bg-amber-600 hover:text-white transition-colors duration-300"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Linkedin className="h-5 w-5" />
//                   </motion.a>
//                   <motion.a 
//                     href="#" 
//                     className="bg-amber-100 p-3 rounded-full text-amber-600 hover:bg-amber-600 hover:text-white transition-colors duration-300"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Twitter className="h-5 w-5" />
//                   </motion.a>
//                   <motion.a 
//                     href="#" 
//                     className="bg-amber-100 p-3 rounded-full text-amber-600 hover:bg-amber-600 hover:text-white transition-colors duration-300"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Instagram className="h-5 w-5" />
//                   </motion.a>
//                 </div>
//               </motion.div>
//             </motion.div>
            
//             {/* Contact Form */}
//             <motion.div 
//               className="w-full lg:w-2/3"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-100px" }}
//               variants={fadeIn}
//             >
//               <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
//                 <h2 className="text-3xl font-bold mb-6 text-gray-900">Send Me a Message</h2>
//                 <p className="text-gray-600 mb-8">Fill out the form below, and I'll get back to you as soon as possible.</p>
                
//                 {isSubmitted ? (
//                   <motion.div 
//                     className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                   >
//                     <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                     </svg>
//                     <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
//                     <p>Your message has been sent successfully. I'll respond to you shortly.</p>
//                   </motion.div>
//                 ) : (
//                   <form onSubmit={handleSubmit}>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                       <div>
//                         <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//                         <input
//                           type="text"
//                           id="name"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
//                           placeholder="Your name"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//                         <input
//                           type="email"
//                           id="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
//                           placeholder="your.email@example.com"
//                           required
//                         />
//                       </div>
//                     </div>
                    
//                     <div className="mb-6">
//                       <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
//                       <select
//                         id="subject"
//                         name="subject"
//                         value={formData.subject}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors appearance-none"
//                         required
//                       >
//                         <option value="" disabled>Select a subject</option>
//                         <option value="general">General Inquiry</option>
//                         <option value="project">Project Proposal</option>
//                         <option value="collaboration">Collaboration</option>
//                         <option value="speaking">Speaking Engagement</option>
//                         <option value="other">Other</option>
//                       </select>
//                     </div>
                    
//                     <div className="mb-6">
//                       <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         rows={5}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
//                         focus:ring-amber-500 focus:border-amber-500 transition-colors"
//                         placeholder="Tell me about your project, request, or question..."
//                         required
//                       ></textarea>
//                     </div>
                    
//                     <motion.button
//                       type="submit"
//                       className="w-full md:w-auto px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold flex 
//                       items-center justify-center hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors duration-300"
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                           </svg>
//                           Processing...
//                         </>
//                       ) : (
//                         <>
//                           Send Message <Send className="ml-2 h-5 w-5" />
//                         </>
//                       )}
//                     </motion.button>
//                   </form>
//                 )}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-16 md:py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             className="text-center mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
//             <div className="w-16 h-1 bg-amber-500 mx-auto my-6"></div>
//             <p className="max-w-2xl mx-auto text-gray-600">
//               Find answers to some common questions. If you don't see what you're looking for, please reach out directly.
//             </p>
//           </motion.div>
          
//           <div className="max-w-3xl mx-auto">
//             <div className="space-y-6">
//               {[
//                 {
//                   question: "What is your typical response time?",
//                   answer: "I typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please indicate this in your subject line."
//                 },
//                 {
//                   question: "Do you offer virtual consultations?",
//                   answer: "Yes, I offer both in-person and virtual consultations depending on your preferences and location."
//                 },
//                 {
//                   question: "What types of projects do you handle?",
//                   answer: "I work on a variety of projects including web design, web development, and digital marketing strategies tailored to your needs."
//                 },
//                 {
//                   question: "Can I see your portfolio?",
//                   answer: "Absolutely! You can view my portfolio on the website. It showcases a range of projects I've completed for various clients."
//                 }
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   className="p-6 bg-white rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
//                   <p className="mt-2 text-gray-700">{item.answer}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//     </Layout>
//   );
// };

// export default ContactPage;