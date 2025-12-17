import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-20">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-24">
              <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-6 leading-tight">
                Ready to make your <br/> cash operations <br/> simple?
              </h2>
              <p className="text-2xl text-secondary font-bold mb-12">Let's connect.</p>

              <div className="space-y-6 mb-12">
                <a href="mailto:sales@safer.link" className="block group">
                  <div className="border border-secondary/30 rounded-lg p-6 flex items-center gap-4 hover:shadow-lg transition-all bg-white group-hover:border-secondary">
                    <div className="bg-secondary/10 p-3 rounded-full group-hover:bg-secondary group-hover:text-white transition-colors text-secondary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-medium text-primary underline decoration-secondary">sales@safer.link</span>
                  </div>
                </a>

                <a href="https://safer.link" className="block group">
                  <div className="border border-secondary/30 rounded-lg p-6 flex items-center gap-4 hover:shadow-lg transition-all bg-white group-hover:border-secondary">
                    <div className="bg-secondary/10 p-3 rounded-full group-hover:bg-secondary group-hover:text-white transition-colors text-secondary">
                       <ExternalLink className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-medium text-primary underline decoration-secondary">safer.link</span>
                  </div>
                </a>

                <a href="tel:+97225011450" className="block group">
                  <div className="border border-secondary/30 rounded-lg p-6 flex items-center gap-4 hover:shadow-lg transition-all bg-white group-hover:border-secondary">
                    <div className="bg-secondary/10 p-3 rounded-full group-hover:bg-secondary group-hover:text-white transition-colors text-secondary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-medium text-primary underline decoration-secondary">+972-2-5011450</span>
                  </div>
                </a>
              </div>
              
              <div className="mb-8 w-full max-w-sm">
                <img src="/images/contact.png" alt="Contact Support" className="w-full h-auto object-contain" />
              </div>

              <div className="mb-4">
                <img src="/images/logo.png" alt="Safer Logo" className="h-[60px] w-auto" />
              </div>
              <p className="text-gray-500 mt-2 font-medium">Cash operations made simple</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl border border-gray-100"
          >
            <h3 className="text-3xl font-extrabold text-primary mb-2">Get in Touch</h3>
            <p className="text-gray-500 mb-10 text-lg">Fill out the form below and we'll get back to you shortly</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="block text-sm font-bold text-gray-700">Name</label>
                <input type="text" required className="w-full px-4 py-4 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Enter your name" />
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm font-bold text-gray-700">Email</label>
                <input type="email" required className="w-full px-4 py-4 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Enter your email" />
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm font-bold text-gray-700">Company</label>
                <input type="text" className="w-full px-4 py-4 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Enter company name" />
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm font-bold text-gray-700">Phone</label>
                <input type="tel" className="w-full px-4 py-4 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Enter phone number" />
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm font-bold text-gray-700">Message</label>
                <textarea rows={4} className="w-full px-4 py-4 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Tell us about your needs"></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={formStatus !== 'idle'}
                className={`w-full py-5 rounded-lg font-bold text-lg text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${formStatus === 'success' ? 'bg-green-600' : 'bg-secondary'}`}
              >
                {formStatus === 'idle' && 'Send Message'}
                {formStatus === 'submitting' && 'Sending...'}
                {formStatus === 'success' && 'Message Sent!'}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;