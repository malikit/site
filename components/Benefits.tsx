import React from 'react';
import { motion } from 'framer-motion';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-extrabold text-primary text-center mb-20">
          Who Benefits from CashOS?
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: "./icon_kiosk.png",
              title: "Kiosk Manufacturers",
              points: [
                "Unlock Android market for cash payments",
                "Deploy cash solutions in days, not months",
                "Win tenders with accelerated delivery"
              ]
            },
            {
              icon: "./icon_nodes.png",
              title: "Integrators & Developers",
              points: [
                "Focus on apps, not hardware protocols",
                "Single API for all cash operations",
                "Eliminate integration risks and faster delivery"
              ]
            },
            {
              icon: "./icon_retail.png",
              title: "Retailers & Enterprises",
              points: [
                "Real-time cash flow visibility",
                "Up to 60% reduction in operational costs",
                "Data-driven decision making"
              ]
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white"
            >
              <div className="mb-8">
                 <div className="w-16 h-16 mb-4">
                   <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                 </div>
                 <h3 className="text-3xl font-extrabold text-primary leading-tight">{item.title}</h3>
              </div>
              
              <ul className="space-y-4">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2.5 flex-shrink-0"></div>
                    <span className="text-gray-600 text-lg leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <a href="#contact" className="text-secondary font-bold hover:underline flex items-center gap-2">
                  Learn more &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="#features" className="inline-block bg-secondary text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;