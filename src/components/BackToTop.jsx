import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 600px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          // Adjusted bottom and right values for mobile so it doesn't hug the edge
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[150] group"
        >
          {/* Glowing Aura */}
          <div className="absolute inset-0 bg-[#b91c1c] rounded-full blur-md opacity-40 group-hover:opacity-100 transition-opacity animate-pulse" />
          
          {/* The Button */}
          <div className="relative w-12 h-12 md:w-14 md:h-14 bg-[#b91c1c] text-white rounded-full flex items-center justify-center shadow-2xl border border-white/20 transition-transform group-hover:-translate-y-2">
            <ChevronUp size={24} className="md:w-[28px] md:h-[28px]" strokeWidth={3} />
          </div>

          {/* Label that appears on hover - Themed! */}
          <span className="absolute right-14 md:right-16 top-1/2 -translate-y-1/2 bg-black text-white dark:bg-white dark:text-black text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] py-1.5 px-3 rounded opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
            Back to Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;