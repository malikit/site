import React from 'react';
import { motion } from 'framer-motion';

const CaseStudy: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="z-10"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-2 leading-tight">
              From 6-Month Delay
            </h2>
            <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-8 leading-tight">
              to 5-Day Success
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-lg">
              How an Israeli ATM Manufacturer leveraged Safer to overcome integration challenges and accelerate global market entry.
            </p>

            <div className="flex gap-12 mb-12">
              <div className="text-center">
                <div className="text-5xl font-extrabold text-primary mb-2">36x</div>
                <div className="font-bold text-lg text-primary mb-1">Faster Deployment</div>
                <div className="text-sm text-gray-500 max-w-[150px]">Accelerated integration timeline</div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-extrabold text-primary mb-2">$60K+</div>
                <div className="font-bold text-lg text-primary mb-1">Cost Savings</div>
                <div className="text-sm text-gray-500 max-w-[150px]">Reduced development expenses</div>
              </div>
            </div>

            <button className="bg-secondary text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all shadow-md">
              View Our Track Record
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
             <div className="w-full max-w-lg">
               <img 
                 src="/images/success.png" 
                 alt="Success Story Illustration" 
                 className="w-full h-auto object-contain"
               />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudy;