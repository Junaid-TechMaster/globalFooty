import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import highlight1Video from '../assets/Highlight1.mp4'; 
import highlight2Video from '../assets/Highlight2.mp4'; 
import highlight3Video from '../assets/Highlight3.mp4'; 

const highlightVideos = [
  {
    id: 1,
    src: highlight1Video, 
    title: "Advanced Grip <br/> Technology",
    subtitle: "Tested in extreme conditions"
  },
  {
    id: 2,
    src: highlight2Video, 
    title: "Aerodynamic <br/> Flight Path",
    subtitle: "Wind-tunnel tested precision"
  },
  {
    id: 3,
    src: highlight3Video, 
    title: "Thermal Bonded <br/> Seams",
    subtitle: "Seamless surface integration"
  }
];

const Highlights = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNext = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % highlightVideos.length);
  };

  const handlePrev = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + highlightVideos.length) % highlightVideos.length);
  };

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-20 md:py-32 px-6 md:px-10 transition-colors duration-500">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} 
        variants={containerVars}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-12 md:mb-16">
          <span className="text-[#b91c1c] font-bold text-xs md:text-sm uppercase tracking-[0.3em]">Highlights</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif mt-4 md:mt-6 leading-none tracking-tighter">
            Precision engineering.<br /> Pure performance.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">
          
          {/* Card 1 - Text Description */}
          <motion.div variants={itemVars} className="border border-black/10 dark:border-white/10 p-8 md:p-10 h-full flex flex-col justify-between bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-3xl rounded-xl md:rounded-none">
            <div>
              <h3 className="text-xl md:text-2xl font-serif mb-4 md:mb-6 italic">Aero-Core Design</h3>
              <p className="text-xs md:text-sm opacity-60 dark:opacity-50 leading-relaxed font-light text-black dark:text-white">
                Focused details that showcase the ball's precision and intentional design. Engineered for the quiet moments that define the game.
              </p>
            </div>
            <div className="mt-8 md:mt-10 h-[1px] w-full bg-gradient-to-r from-[#b91c1c] to-transparent" />
          </motion.div>

          {/* Card 2 - Video Carousel Box */}
          <motion.div variants={itemVars} className="md:col-span-2 relative overflow-hidden group aspect-[4/3] md:aspect-auto md:h-full min-h-[300px] md:min-h-[400px] rounded-xl md:rounded-none bg-black">
            
            {/* The Video Player */}
            <AnimatePresence mode="wait">
              <motion.video
                key={currentVideoIndex}
                src={highlightVideos[currentVideoIndex].src}
                autoPlay
                muted
                playsInline
                // Removed 'loop' and added 'onEnded' to auto-change video
                onEnded={handleNext}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
            </AnimatePresence>

            {/* Dark Gradient Overlay for text readability (Kept dark to contrast against video) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-70" />

            {/* Carousel Controls (Top Right) */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 flex gap-2 md:gap-3">
              <button 
                onClick={handlePrev} 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#b91c1c] hover:border-[#b91c1c] transition-colors bg-black/50 backdrop-blur-md text-white"
              >
                <ChevronLeft size={16} className="md:w-[18px] md:h-[18px]" />
              </button>
              <button 
                onClick={handleNext} 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#b91c1c] hover:border-[#b91c1c] transition-colors bg-black/50 backdrop-blur-md text-white"
              >
                <ChevronRight size={16} className="md:w-[18px] md:h-[18px]" />
              </button>
            </div>

            {/* Dynamic Text associated with the current video */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentVideoIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <span 
                    className="text-2xl md:text-4xl font-serif text-white tracking-tighter block leading-tight" 
                    dangerouslySetInnerHTML={{ __html: highlightVideos[currentVideoIndex].title }} 
                  />
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest mt-2 md:mt-4 opacity-80 text-white">
                    {highlightVideos[currentVideoIndex].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Highlights;