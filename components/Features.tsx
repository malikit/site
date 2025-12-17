import React from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-primary mb-4">Built-in Intelligence & Security</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="grid gap-8">
            {[
              {
                icon: "./icon_gear.png",
                title: "Cash Policy Engine",
                points: [
                  "Smart acceptance logic based on real-time inventory",
                  "Prevents transaction failures",
                  "Dynamic policies that adapt during transactions"
                ]
              },
              {
                icon: "./icon_shield.png",
                title: "Anti-Fraud & Security",
                points: [
                  "Complete audit trail of all cash events",
                  "Camera and biometric support",
                  "Serial number tracking"
                ]
              },
              {
                icon: "./icon_cloud.png",
                title: "Offline Mode & Sync",
                points: [
                  "Continues working without internet",
                  "Encrypted local storage",
                  "Automatic synchronization when reconnected"
                ]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-xl shadow-lg border border-secondary/20 p-8 hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-secondary/10 p-3 rounded-full group-hover:bg-secondary group-hover:text-white transition-colors w-14 h-14 flex items-center justify-center">
                    <img src={feature.icon} alt={feature.title} className="w-8 h-8 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{feature.title}</h3>
                </div>
                <ul className="space-y-3 pl-2">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2.5 flex-shrink-0"></div>
                      <span className="text-gray-600 text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex justify-center relative"
          >
             <div className="w-full max-w-lg">
               <img 
                 src="/images/security.png" 
                 alt="Intelligence and Security Illustration" 
                 className="w-full h-auto object-contain"
               />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;