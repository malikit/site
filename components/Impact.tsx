import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data1 = [{ name: 'Savings', value: 60 }, { name: 'Remaining', value: 40 }];
const data2 = [{ name: 'Faster', value: 90 }, { name: 'Remaining', value: 10 }];
const COLORS = ['#2fa883', '#e5e7eb'];

const Impact: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20">
          <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-5xl md:text-6xl font-extrabold text-primary mb-4"
          >
            Transformational <br /> Business Impact
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-bold text-gray-500"
          >
            Measurable Benefits
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-end">
          
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
          >
             <div className="w-full">
                <img 
                  src="/images/impact.png" 
                  alt="Business Impact Graph" 
                  className="w-full h-auto object-contain"
                />
             </div>
             
             <div className="mt-8">
               <button className="bg-secondary text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all shadow-md w-full sm:w-auto">
                 Start Your Automation
               </button>
             </div>
          </motion.div>

          <div className="flex flex-col gap-16">
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="flex items-center gap-8"
            >
              <div className="w-40 h-40 relative flex-shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={data1} innerRadius={50} outerRadius={70} startAngle={90} endAngle={-270} paddingAngle={0} dataKey="value" stroke="none">
                      {data1.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-extrabold text-primary">60%</span>
                </div>
              </div>
              <div>
                 <h4 className="text-2xl font-bold text-primary">Reduction in operational costs</h4>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="flex items-center gap-8"
            >
              <div className="w-40 h-40 relative flex-shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={data2} innerRadius={50} outerRadius={70} startAngle={90} endAngle={-270} paddingAngle={0} dataKey="value" stroke="none">
                      {data2.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-extrabold text-primary">90%</span>
                </div>
              </div>
              <div>
                 <h4 className="text-2xl font-bold text-primary">Faster deployment</h4>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;