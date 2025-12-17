import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 pt-10"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-2 tracking-tight">
              The Cash Hardware
            </h2>
            <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-2 tracking-tight">
              Integration
            </h2>
            <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-16 tracking-tight">
              Nightmare
            </h2>

            <div className="space-y-12">
              {[
                {
                  title: "Development Hassle",
                  desc: "Months of custom development, pushing back product delivery"
                },
                {
                  title: "Protocol Incompatibility",
                  desc: "Modern kiosks can't communicate with legacy cash hardware protocols"
                },
                {
                  title: "Operational Blindness",
                  desc: "No real-time monitoring of cash flow, faults, or inventory across locations"
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                   <div className="mt-1">
                     <ArrowRight className="w-8 h-8 text-primary group-hover:translate-x-2 transition-transform" />
                   </div>
                   <div>
                     <h3 className="text-2xl font-extrabold text-primary mb-2">{item.title}</h3>
                     <p className="text-xl text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <a href="#solution" className="inline-block bg-secondary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg">
                See Our Solution
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex justify-center"
          >
             <div className="w-full max-w-lg">
                <img 
                  src="/images/problem.png" 
                  alt="Integration Nightmare Illustration" 
                  className="w-full h-auto object-contain"
                />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Problem;