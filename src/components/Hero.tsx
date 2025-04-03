'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import africaImg from "@/assets/10951.jpg"


const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image 
          src={africaImg} 
          alt="Africa" 
          layout='fill'// Use fill to cover the entire container
          className="object-cover w-full" // Maintain aspect ratio
          priority // Load the image with high priority
        />
      </div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Uncovering the True Africa
        </motion.h1>
        
        <motion.div 
          className="w-20 h-1 bg-amber-500 mb-6"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        <motion.p 
          className="max-w-2xl text-lg sm:text-xl font-light mb-8 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Beyond the stereotypes lies a continent of immense potential and opportunity. 
          Discover Africa&apos;s known strengths and hidden treasures.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Link
            href="#known" 
            className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-medium transition-colors duration-300"
          >
            Start Reading
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center items-start p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;


// 'use client'
// import React from 'react';
// import { motion } from 'framer-motion';

// const Hero: React.FC = () => {
//   // Visible HR elements (above waterline)
//   const visibleElements = [
//     "Job postings",
//     "Interviews",
//     "Company events",
//     "Employee handbook",
//     "Onboarding", 
//     "Performance reviews"
//   ];

//   // Hidden HR elements (below waterline)
//   const hiddenElements = [
//     "Recruitment strategy planning",
//     "Benefits negotiation",
//     "Employee engagement initiatives",
//     "Compliance management",
//     "Workplace safety measures",
//     "Employee data management",
//     "Company culture cultivation",
//     "Workforce planning",
//     "Salary benchmarking",
//     "Conflict resolution",
//     "Succession planning",
//     "Training program development",
//     "Diversity and inclusion efforts",
//     "Exit interviews and turnover analysis",
//     "Legal risk management",
//     "Employee wellness programs"
//   ];

//   return (
//     <div className="relative h-screen w-full bg-gray-100 overflow-hidden flex justify-center items-center">
//       {/* Title */}
//       <motion.h1 
//         className="absolute top-8 left-0 right-0 text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-800"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         THE HR ICEBERG
//       </motion.h1>
      
//       {/* Waterline */}
//       <div className="absolute w-full h-px bg-gray-400 top-1/3">
//         <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-purple-600"></div>
//       </div>
      
//       {/* Iceberg */}
//       <div className="relative w-full max-w-3xl h-3/4 flex flex-col">
//         {/* Above water section - visible part */}
//         <div className="relative h-1/3 flex justify-center">
//           {/* Top of iceberg */}
//           <motion.div 
//             className="absolute bottom-0 w-3/4 h-4/5"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <div className="w-full h-full bg-blue-200 clip-triangle-top"></div>
            
//             {/* "What people see" label */}
//             <motion.div 
//               className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-500 text-white font-bold py-2 px-6 rounded-md text-center"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//             >
//               WHAT PEOPLE SEE
//             </motion.div>
            
//             {/* Visible labels */}
//             {visibleElements.map((item, index) => {
//               // Calculate positions around the top of the iceberg
//               const side = index < visibleElements.length / 2 ? 'left' : 'right';
//               const position = index % (visibleElements.length / 2);
//               const percentage = position / (visibleElements.length / 2 - 1);
              
//               return (
//                 <motion.div 
//                   key={item}
//                   className={`absolute ${side === 'left' ? 'left-0 -translate-x-full text-right' : 'right-0 translate-x-full text-left'} whitespace-nowrap`}
//                   style={{ 
//                     top: `${15 + percentage * 70}%`, 
//                   }}
//                   initial={{ opacity: 0, x: side === 'left' ? 20 : -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
//                 >
//                   <div className="flex items-center gap-2">
//                     {side === 'left' && (
//                       <>
//                         <span className="font-medium">{item}</span>
//                         <div className="w-20 h-px bg-purple-600 relative">
//                           <div className="absolute right-0 w-2 h-2 rounded-full bg-purple-600"></div>
//                         </div>
//                       </>
//                     )}
//                     {side === 'right' && (
//                       <>
//                         <div className="w-20 h-px bg-purple-600 relative">
//                           <div className="absolute left-0 w-2 h-2 rounded-full bg-purple-600"></div>
//                         </div>
//                         <span className="font-medium">{item}</span>
//                       </>
//                     )}
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
        
//         {/* Below water section - hidden part */}
//         <div className="relative h-2/3 flex justify-center bg-gradient-to-b from-blue-300/40 to-blue-500/40">
//           {/* Bottom of iceberg */}
//           <motion.div 
//             className="absolute top-0 w-full h-full"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.3 }}
//           >
//             <div className="w-full h-full bg-blue-300 clip-triangle-bottom"></div>
            
//             {/* "What people don't see" label */}
//             <motion.div 
//               className="absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-pink-500 text-white font-bold py-2 px-6 rounded-md text-center"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.8, duration: 0.8 }}
//             >
//               WHAT PEOPLE DON'T SEE
//             </motion.div>
            
//             {/* Hidden labels */}
//             {hiddenElements.map((item, index) => {
//               // Calculate positions around the bottom of the iceberg
//               const side = index < hiddenElements.length / 2 ? 'left' : 'right';
//               const position = index % (hiddenElements.length / 2);
//               const percentage = position / (hiddenElements.length / 2 - 1);
              
//               return (
//                 <motion.div 
//                   key={item}
//                   className={`absolute ${side === 'left' ? 'left-0 -translate-x-full text-right' : 'right-0 translate-x-full text-left'} whitespace-nowrap`}
//                   style={{ 
//                     top: `${30 + percentage * 65}%`, 
//                   }}
//                   initial={{ opacity: 0, x: side === 'left' ? 20 : -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 1 + index * 0.05, duration: 0.5 }}
//                 >
//                   <div className="flex items-center gap-2">
//                     {side === 'left' && (
//                       <>
//                         <span className="font-medium">{item}</span>
//                         <div className="w-20 h-px bg-purple-600 relative">
//                           <div className="absolute right-0 w-2 h-2 rounded-full bg-purple-600"></div>
//                         </div>
//                       </>
//                     )}
//                     {side === 'right' && (
//                       <>
//                         <div className="w-20 h-px bg-purple-600 relative">
//                           <div className="absolute left-0 w-2 h-2 rounded-full bg-purple-600"></div>
//                         </div>
//                         <span className="font-medium">{item}</span>
//                       </>
//                     )}
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </div>
      
//       {/* Footer/Attribution */}
//       <div className="absolute bottom-4 w-full flex justify-between px-4 text-sm">
//         <div className="flex items-center">
//           <div className="w-6 h-6 bg-pink-500 rounded-md flex items-center justify-center text-white mr-2">
//             TG
//           </div>
//           <span>TestGorilla</span>
//         </div>
//         <div className="bg-pink-500 text-white px-4 py-1 rounded-full text-xs">
//           REGISTER COMPANY
//         </div>
//       </div>

//       {/* CSS for iceberg shape */}
//       <style jsx>{`
//         .clip-triangle-top {
//           clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
//           background-color: #bfdbfe;
//         }
        
//         .clip-triangle-bottom {
//           clip-path: polygon(0% 0%, 50% 100%, 100% 0%);
//           background-color: #93c5fd;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Hero;