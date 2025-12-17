import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-left"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-primary leading-tight mb-8">
              Cash operations <br />
              <span className="text-primary">made easy</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-primary/80 font-medium mb-8 max-w-xl leading-relaxed">
              A universal cash operating system built for growth
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 w-full flex justify-end"
          >
            <div className="relative w-full max-w-lg">
              <img 
                src="/images/kiosk.png" 
                alt="CashOS Kiosk" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;