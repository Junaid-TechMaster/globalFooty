import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos corrupti, obcaecati repudiandae, animi ad quos. Eius expedita ipsa qui autem.",
    name: "Jean Doe",
    role: "Professional Athlete",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "The precision engineering behind these footballs is unmatched. Every touch feels intentional, completely changing the dynamic of our training sessions.",
    name: "Gregg Pollack",
    role: "Head Coach, City FC",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "Partnering with Global Footy for our custom club gear was the best decision. The quality, the grip technology, and the aesthetic are simply top-tier.",
    name: "Robert Kenneth",
    role: "Sporting Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const autoPlayTimer = setInterval(() => {
      handleNext();
    }, 3000); // Extended to 3 seconds so users have more time to read

    return () => clearInterval(autoPlayTimer);
  }, [currentIndex]); 

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-20 md:py-32 px-6 md:px-8 overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-[#b91c1c] font-bold block mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif tracking-tighter uppercase text-black dark:text-white"
          >
            What They Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[10px] md:text-[11px] opacity-60 dark:opacity-40 uppercase tracking-widest mt-4 md:mt-6 max-w-lg mx-auto leading-relaxed"
          >
            Don't just take our word for it. Hear from the professionals who demand perfection on the pitch.
          </motion.p>
        </div>

        {/* Carousel Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl mx-auto">
          
          {/* Left: Text & Quote */}
          <div className="relative min-h-[220px] md:min-h-[250px] flex flex-col justify-center order-2 md:order-1">
            <Quote size={60} className="text-[#b91c1c] opacity-10 dark:opacity-20 absolute -top-6 md:-top-10 -left-2 md:-left-6 z-0" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10"
              >
                <p className="text-xl md:text-3xl font-serif italic leading-relaxed mb-6 md:mb-8 text-black/80 dark:text-white/90">
                  "{testimonialsData[currentIndex].quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-8 md:w-10 h-[1px] bg-[#b91c1c]"></div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-[11px] md:text-sm text-[#b91c1c]">
                      {testimonialsData[currentIndex].name}
                    </h4>
                    <span className="text-[9px] md:text-[10px] uppercase tracking-widest opacity-60 dark:opacity-40 text-black dark:text-white">
                      {testimonialsData[currentIndex].role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Image & Controls */}
          <div className="relative flex justify-center md:justify-end order-1 md:order-2">
            <div className="w-64 h-72 md:w-96 md:h-[450px] rounded-tl-[80px] rounded-br-[80px] md:rounded-tl-[100px] md:rounded-br-[100px] overflow-hidden border border-black/10 dark:border-white/10 relative bg-gray-100 dark:bg-[#0a0a0a] transition-colors duration-500">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={testimonialsData[currentIndex].image}
                  alt={testimonialsData[currentIndex].name}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 dark:opacity-80"
                />
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex bg-[#b91c1c] z-20">
                <button 
                  onClick={handlePrev}
                  className="p-3 md:p-4 text-white hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-[#b91c1c] transition-colors border-r border-white/20"
                >
                  <ChevronLeft size={18} className="md:w-5 md:h-5" />
                </button>
                <button 
                  onClick={handleNext}
                  className="p-3 md:p-4 text-white hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-[#b91c1c] transition-colors"
                >
                  <ChevronRight size={18} className="md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;