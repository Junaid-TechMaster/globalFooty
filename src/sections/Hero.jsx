import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 
import footballImg from '../assets/Football.png'; 

const Hero = () => {
  const { scrollY } = useScroll();
  const navigate = useNavigate(); 

  // Parallax and scroll animations
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const scrollRotate = useTransform(scrollY, [0, 800], [0, 360]);
  const scale = useTransform(scrollY, [0, 800], [1, 0.8]);
  
  // Interactive drag rotation
  const dragX = useMotionValue(0);
  const rotateY = useSpring(useTransform(dragX, [-200, 200], [-180, 180]), { stiffness: 150, damping: 25 });

  return (
    <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden transition-colors duration-500">
      
      {/* TOP LEFT: Hidden on small mobile to prevent overlap, visible on sm and up */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.7, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-32 md:top-64 left-6 md:left-10 z-20 max-w-[200px] md:max-w-[250px] hidden sm:block"
      >
        <p className="text-[10px] uppercase tracking-[0.2em] leading-relaxed border-l border-[#b91c1c] pl-4 font-light text-black/80 dark:text-white/80">
          Engineered for the beautiful game. Perfected for the final strike.
        </p>
      </motion.div>

      {/* CENTER: Animated Football (Scaled for mobile) */}
      <motion.div 
        style={{ y, rotate: scrollRotate, scale, perspective: 1000 }} 
        className="relative z-10 w-full max-w-4xl px-4 flex justify-center mt-20 md:mt-40"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          drag="x" 
          dragConstraints={{ left: 0, right: 0 }} 
          dragElastic={0} 
          style={{ 
            x: dragX, 
            rotateY: rotateY, 
            transformStyle: "preserve-3d" 
          }}
          className="relative cursor-grab active:cursor-grabbing touch-none"
        >
          {/* Mobile w-64, Desktop w-[500px]+ */}
          <img 
            src={footballImg} 
            alt="Football" 
            className="w-64 sm:w-80 md:w-[500px] lg:w-[650px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_0_80px_rgba(255,255,255,0.08)] pointer-events-none" 
          />
          
          {/* Glowing Hotspot (Adjusted for mobile & theme) */}
          <div 
            className="absolute top-1/3 right-0 md:-right-10 flex items-center group cursor-pointer"
            style={{ transform: "translateZ(50px)" }} 
          >
             <div className="w-2 h-2 md:w-3 md:h-3 bg-[#b91c1c] rounded-full animate-ping absolute" />
             <div className="w-2 h-2 md:w-3 md:h-3 bg-[#b91c1c] rounded-full relative" />
             <motion.div 
               initial={{ width: 0, opacity: 0 }}
               animate={{ width: 20, opacity: 1 }}
               transition={{ delay: 1.5 }}
               className="h-[1px] bg-black/30 dark:bg-white/30 ml-2 md:ml-4 hidden sm:block" 
             />
             <span className="ml-2 text-[8px] md:text-[10px] uppercase tracking-widest opacity-50 whitespace-nowrap group-hover:opacity-100 transition-opacity hidden sm:block text-black dark:text-white">
               Aerodynamic Flight
             </span>
          </div>
        </motion.div>
      </motion.div>

      {/* BOTTOM LEFT: Heading (Scaled font size for mobile & themed) */}
      <div className="absolute bottom-24 md:bottom-16 left-6 md:left-10 z-20 max-w-[90%] md:max-w-2xl pointer-events-none">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-4xl sm:text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter text-black dark:text-white"
        >
          Command the pitch <br /> 
          <span className="text-black/30 dark:text-white/30 italic font-light">where every touch</span> <br />
          dictates the game.
        </motion.h1>
      </div>

      {/* BOTTOM RIGHT: CTA (Stacked better for mobile & themed) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-24 md:bottom-16 right-6 md:right-10 z-20 text-right flex flex-col items-end"
      >
        <p className="text-[9px] md:text-[11px] mb-4 md:mb-6 opacity-60 dark:opacity-40 italic max-w-[120px] md:max-w-[180px] font-light text-black dark:text-white pointer-events-none hidden sm:block">
          "90 minutes of pure focus. The ball is just the beginning."
        </p>
        <button 
          onClick={() => navigate('/collection')}
          // Button is Black on Light mode, White on Dark mode. Hovers to Red on both.
          className="group relative bg-black text-white dark:bg-white dark:text-black px-8 md:px-12 py-3 md:py-4 text-[10px] md:text-xs font-black uppercase tracking-widest overflow-hidden transition-all hover:bg-[#b91c1c] hover:text-white dark:hover:bg-[#b91c1c] dark:hover:text-white rounded-sm shadow-xl"
        >
          <span className="relative z-10">Buy Now</span>
        </button>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 dark:opacity-30 pointer-events-none">
        <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] mb-2 text-black/50 dark:text-white/50">[Scroll]</span>
        <motion.div 
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-6 md:h-10 bg-black dark:bg-white" 
        />
      </div>

    </section>
  );
};

export default Hero;