import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Image as ImageIcon } from 'lucide-react';

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  // Array of image paths - user should add their images to public/images/
  const images = [
    { src: '/images/kiosk-1.png', alt: 'CashOS Kiosk Image 1' },
    { src: '/images/kiosk-2.png', alt: 'CashOS Kiosk Image 2' },
    { src: '/images/kiosk-3.png', alt: 'CashOS Kiosk Image 3' },
    { src: '/images/kiosk-4.png', alt: 'CashOS Kiosk Image 4' },
    { src: '/images/kiosk-5.png', alt: 'CashOS Kiosk Image 5' },
    { src: '/images/kiosk-6.png', alt: 'CashOS Kiosk Image 6' },
    { src: '/images/kiosk-7.png', alt: 'CashOS Kiosk Image 7' },
    { src: '/images/kiosk-8.png', alt: 'CashOS Kiosk Image 8' },
  ];

  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set(prev).add(index));
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-4">
            CashOS in Action
          </h2>
          <p className="text-xl text-gray-600">
            See our kiosk solutions in real-world environments
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative aspect-square overflow-hidden rounded-lg ${
                imageErrors.has(index) ? '' : 'cursor-pointer group'
              } bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center`}
              onClick={() => !imageErrors.has(index) && setSelectedImage(index)}
            >
              {imageErrors.has(index) ? (
                <div className="text-center p-4">
                  <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 text-xs">{image.alt}</p>
                  <p className="text-gray-400 text-xs mt-1">תמונה חסרה</p>
                </div>
              ) : (
                <>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={() => handleImageError(index)}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />
                </>
              )}
            </motion.div>
          ))}
        </div>
        
        {imageErrors.size === images.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg text-center"
          >
            <p className="text-gray-700 font-semibold mb-2">תמונות לא נמצאו</p>
            <p className="text-gray-600 text-sm mb-2">שים את קבצי התמונות בתיקייה:</p>
            <code className="bg-white px-3 py-1 rounded border border-gray-300 text-sm font-mono">public/images/</code>
            <p className="text-gray-600 text-sm mt-3">שמות הקבצים הנדרשים:</p>
            <p className="text-xs text-gray-500 mt-1 font-mono">
              kiosk-1.png, kiosk-2.png, kiosk-3.png, kiosk-4.png,<br />
              kiosk-5.png, kiosk-6.png, kiosk-7.png, kiosk-8.png
            </p>
          </motion.div>
        )}

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;

