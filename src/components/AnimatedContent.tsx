// Client Component for animations
'use client';
import { Topic } from "@/types";
import { motion } from 'framer-motion';
import Image from "next/image"

function AnimatedContent({ topic }: { topic: Topic }) {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <Image 
            src={topic.imageUrl} 
            alt={topic.title}
            fill
            sizes="100vw"
            priority
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4 z-10">
          <motion.span 
            className={`inline-block px-4 py-1 text-sm font-medium rounded-full mb-4 ${
              topic.category === 'known' ? 'bg-blue-500' : 'bg-amber-500'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {topic.category === 'known' ? 'Known Potential' : 'Hidden Potential'}
          </motion.span>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {topic.title}
          </motion.h1>
          
          <motion.div 
            className={`w-20 h-1 ${
              topic.category === 'known' ? 'bg-blue-500' : 'bg-amber-500'
            } mb-6`}
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p 
            className="max-w-2xl text-base sm:text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {topic.shortDescription}
          </motion.p>
        </div>
      </div>
      
      {/* Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="prose prose-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                {topic.fullDescription}
              </p>
              
              <div className="mt-8 p-4 md:p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Key Insights</h3>
                <ul className="space-y-3">
                  {topic.category === 'known' ? (
                    <>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Africa has untapped potential that can be leveraged for global impact.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Strategic investments in key sectors can accelerate continental growth.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Collaboration between public and private sectors is essential for sustainable development.</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2">•</span>
                        <span>Africa's overlooked assets represent significant opportunities for innovation.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2">•</span>
                        <span>Increased awareness of these hidden potentials can attract more investments.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2">•</span>
                        <span>Local solutions to continental challenges are emerging from these untapped resources.</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AnimatedContent;