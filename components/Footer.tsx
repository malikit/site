import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary py-12 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
           <a href="#" className="flex items-center mb-2">
              <img src="/images/logo.png" alt="Safer Logo" className="h-12 w-auto" />
            </a>
            <p className="text-gray-400 mt-2 text-sm">© {new Date().getFullYear()} Safer. All rights reserved.</p>
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;