import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Architecture: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "CashOS Cloud",
      description: "Live monitoring, automatic settlement, and predictive maintenance."
    },
    {
      num: "02",
      title: "CashOS SDK",
      description: "One unified API for all cash operations with real-time payment management."
    },
    {
      num: "03",
      title: "CashOS Bridge",
      description: "Universal hardware translator for Android compatibility with all cash protocols."
    },
    {
      num: "04",
      title: "CashOS API",
      description: "REST & WebSocket integration with existing ERP and POS systems."
    }
  ];

  return (
    <section id="architecture" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative z-10"
            >
               <img 
                 src="/images/architecture.png" 
                 alt="CashOS Platform Architecture" 
                 className="w-full h-auto drop-shadow-xl"
               />
            </motion.div>
          </div>

          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold text-primary mb-12"
            >
              CashOS Platform <br/> Architecture
            </motion.h2>

            <div className="space-y-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12 border-b border-gray-100 pb-6 last:border-0"
                >
                  <span className="absolute left-0 top-0 text-xl font-bold text-secondary">{step.num}</span>
                  <h3 className="text-2xl font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8">
               <a href="#benefits" className="text-secondary font-bold hover:underline flex items-center gap-2">
                 Who Benefits? <ArrowRight size={16} />
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Architecture;