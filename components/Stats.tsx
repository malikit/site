import React from 'react';
import { motion } from 'framer-motion';

const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
             <div className="w-full max-w-md">
                <img 
                  src="/images/proven.png" 
                  alt="Proven at Global Scale" 
                  className="w-full h-auto object-contain"
                />
             </div>
          </motion.div>

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-extrabold text-primary mb-2 text-right lg:text-left">Proven at Global</h2>
              <h2 className="text-5xl font-extrabold text-primary mb-8 text-right lg:text-left">Scale</h2>
            </motion.div>

            <div className="space-y-4">
              {[
                { val: "4,000+", label: "Active stations worldwide" },
                { val: "500+", label: "Self-service points accepting cash" },
                { val: "9", label: "Years of proven reliability" },
                { val: "99.9%", label: "Uptime with 24/7 support" },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-secondary/10 rounded-r-2xl border-l-8 border-secondary p-6 pr-10 hover:bg-secondary/20 transition-colors"
                >
                  <div className="flex items-center justify-between">
                     <span className="text-3xl font-extrabold text-primary">{item.val}</span>
                     <span className="text-lg font-medium text-primary/80">{item.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 text-right lg:text-left"
            >
              <h4 className="text-2xl font-bold text-primary mb-2">Strategic Partnerships</h4>
              <p className="text-gray-600">Leading integrators, cash hardware manufacturers, and POS companies across diverse global markets</p>
              
              <div className="mt-6">
                 <button className="bg-secondary text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all">
                   View Solutions
                 </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;