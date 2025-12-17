import React from 'react';
import { motion } from 'framer-motion';

const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold text-primary mb-4"
          >
            Meet CashOS
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-primary/80 mb-6"
          >
            The Operating System for Cash Automation
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500"
          >
            Like Windows for hardware or Android for mobile
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: "./icon_web.png",
              title: "Universal Compatibility",
              description: "All kiosks can now handle cash payments securely"
            },
            {
              icon: "./icon_ecosystem.png",
              title: "Complete Ecosystem",
              description: "Our system streamlines every step of the cash management process"
            },
            {
              icon: "./icon_monitor.png",
              title: "End-to-End Automation",
              description: "From payment to settlement to reporting"
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg border border-secondary/20 p-8 pt-12 relative mt-8 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="bg-secondary rounded-full p-5 shadow-lg border-4 border-white w-20 h-20 flex items-center justify-center">
                  <img src={card.icon} alt={card.title} className="w-full h-full object-contain" />
                </div>
              </div>
              <h4 className="text-2xl font-extrabold text-primary mb-4 text-center mt-4">{card.title}</h4>
              <p className="text-gray-600 text-center text-lg leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center gap-6">
          <a href="#benefits" className="bg-secondary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all shadow-md">
            Learn More
          </a>
          <a href="#contact" className="bg-white text-secondary border-2 border-secondary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all">
            Request Demo
          </a>
        </div>

      </div>
    </section>
  );
};

export default Solution;