'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { foodInsecurity } from '@/utils/images';

const AboutPage: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-500">
          {/* Abstract pattern overlay */}
          <div className="absolute inset-0 opacity-20 bg-[url('/pattern.svg')]"></div>
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Author
          </motion.h1>
          
          <motion.div 
            className="w-20 h-1 bg-white mb-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <motion.p 
            className="max-w-2xl text-lg sm:text-xl font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Author, Researcher, and African Development Expert
          </motion.p>
        </div>
      </section>

      {/* Author Bio Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            variants={fadeIn}
          >
            {/* Image */}
            <div className="w-full lg:w-2/5">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src={foodInsecurity}
                  alt="Amara Okonkwo" 
                  layout="fill"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-amber-600/10"></div>
              </div>
            </div>
            
            {/* Text */}
            <div className="w-full lg:w-3/5">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">My Story</h2>
              <div className="w-16 h-1 bg-amber-500 mb-8"></div>
              <p className="text-lg text-gray-700 mb-6">
                With over 15 years of experience in African development initiatives, I founded TrueAfrica in 2020 to challenge prevailing stereotypes and highlight the continent&apos;s true potential. My journey began after witnessing the consistent misrepresentation of African stories in global media.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Born and raised in Lagos, Nigeria, I completed my education at the University of Cape Town and later at Oxford University, where I specialized in Development Economics. My research has taken me to over 30 African countries, documenting untold stories of innovation, resilience, and growth.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Before founding TrueAfrica, I worked as a development consultant for international organizations and authored two books on African economics and social innovation. My work has been featured in leading publications including The Economist, Financial Times, and various academic journals.
              </p>
              <p className="text-lg text-gray-700">
                Through TrueAfrica, I aim to bridge the gap between perception and reality, highlighting both the continent&apos;s achievements and its potential through rigorous research and authentic storytelling.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      
    </Layout>
  );
};

export default AboutPage;