import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Using your existing product assets
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p5 from '../assets/p5.png';

const reelsData = [
  {
    id: 1,
    title: "Apex Carbon",
    subtitle: "Thermal Bonded Match Ball",
    price: "$149.00",
    location: "FIFA Quality Pro",
    stats: [
      { value: "430g", label: "Weight" },
      { value: "Size 5", label: "Spec" },
      { value: "0%", label: "Absorption" }
    ],
    img: p1,
    bgClass: "from-gray-200 to-gray-50 dark:from-[#0a0a0a] dark:to-black" 
  },
  {
    id: 5,
    title: "Heritage Classic",
    subtitle: "Premium Grain Leather",
    price: "$185.00",
    location: "Hand-Stitched",
    stats: [
      { value: "445g", label: "Weight" },
      { value: "Size 5", label: "Spec" },
      { value: "100%", label: "Leather" }
    ],
    img: p5,
    bgClass: "from-stone-200 to-stone-50 dark:from-[#150505] dark:to-black"
  },
  {
    id: 2,
    title: "Core Training",
    subtitle: "High Durability Surface",
    price: "$18.99",
    location: "Academy Standard",
    stats: [
      { value: "420g", label: "Weight" },
      { value: "Size 5", label: "Spec" },
      { value: "PU", label: "Material" }
    ],
    img: p2,
    bgClass: "from-slate-200 to-slate-50 dark:from-[#050a15] dark:to-black"
  }
];

const VideoGallery = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white relative border-t border-black/5 dark:border-white/5 py-12 md:py-20 transition-colors duration-500">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#b91c1c] rounded-full blur-[100px] md:blur-[180px] opacity-10 dark:opacity-5 pointer-events-none" />

      {/* Section Label Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center mb-8 relative z-10">
        <div className="flex items-center gap-2 text-black dark:text-white">
          <span className="text-lg md:text-xl font-serif italic">Showcase Archive</span>
          <ChevronDown size={20} className="mt-1 text-[#b91c1c]" />
        </div>
        <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-black/60 dark:text-white/40 border border-black/10 dark:border-white/10 px-3 md:px-4 py-2 rounded-full backdrop-blur-sm transition-colors duration-500">
          Scroll Inside Frame
        </div>
      </div>

      {/* Frame Wrapper for left/right spacing */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        
        {/* THE SCROLL BOX (Fixed Scroll Trap) */}
        <div 
          ref={scrollRef}
          className="w-full h-[75vh] md:h-[80vh] overflow-y-auto snap-y snap-proximity relative rounded-3xl md:rounded-[3rem] border border-black/10 dark:border-white/10 shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] transition-colors duration-500"
        >
          
          {reelsData.map((item, index) => (
            <div 
              key={item.id} 
              className={`w-full h-full snap-center shrink-0 relative flex flex-col md:flex-row items-center overflow-hidden bg-gradient-to-br ${item.bgClass} text-black dark:text-white p-6 md:p-12 lg:p-20 transition-colors duration-500`}
            >
              
              {/* Side Pagination Bar */}
              <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-2 md:gap-4 z-30 text-black/30 dark:text-white/30 hidden md:flex pointer-events-none transition-colors duration-500">
                  <ChevronUp size={16} />
                  <span className="text-xs font-bold font-mono">0{index + 1}</span>
                  <div className="w-[2px] h-16 bg-black/10 dark:bg-white/10 rounded-full transition-colors duration-500"></div>
                  <span className="text-xs font-bold font-mono">0{reelsData.length}</span>
                  <ChevronDown size={16} />
              </div>

              {/* LEFT SIDE: Text & Details */}
              <div className="w-full md:w-1/2 h-[45%] md:h-full flex flex-col justify-end md:justify-center z-30 relative order-2 md:order-1 md:pl-16 lg:pl-20">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ root: scrollRef, amount: 0.4 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-2 md:mb-4 text-black dark:text-white">
                    {item.title}
                  </h2>
                  <p className="text-[10px] md:text-sm lg:text-base text-black/60 dark:text-white/50 uppercase tracking-widest font-bold mb-6 md:mb-10 transition-colors duration-500">
                    {item.subtitle}
                  </p>

                  {/* Stats Row */}
                  <div className="flex gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12 pointer-events-none">
                    {item.stats.map((stat, i) => (
                      <div key={i} className="border-l border-[#b91c1c]/50 pl-3 md:pl-4">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter mb-1 text-black dark:text-white">{stat.value}</h3>
                        <p className="text-[8px] md:text-[10px] text-black/50 dark:text-white/40 font-bold uppercase tracking-widest transition-colors duration-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Price & Location */}
                  <div className="mb-6 md:mb-10">
                    <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-black/50 dark:text-white/40 block mb-1 transition-colors duration-500">Standard Configuration</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-1 md:mb-2 text-[#b91c1c]">{item.price}</h2>
                    <p className="text-[9px] md:text-[10px] text-black/60 dark:text-white/50 font-bold uppercase tracking-widest transition-colors duration-500">{item.location}</p>
                  </div>

                  {/* Action Button */}
                  <button 
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="flex items-center gap-3 font-bold text-[10px] md:text-xs lg:text-sm uppercase tracking-widest border-b border-black/20 dark:border-white/30 pb-2 hover:text-[#b91c1c] dark:hover:text-[#b91c1c] hover:border-[#b91c1c] transition-all w-max text-black dark:text-white"
                  >
                    View Specs <ArrowRight size={16} className="transform group-hover:translate-x-1" />
                  </button>
                </motion.div>
              </div>

              {/* RIGHT SIDE (Corner): MASSIVE 3D Image & Enhanced Thematic Rings */}
              <div className="w-full md:w-1/2 h-[55%] md:h-full relative flex items-center justify-center md:justify-end order-1 md:order-2 z-10 pointer-events-none mt-4 md:mt-0">
                
                <motion.div 
                  className="relative w-[35vh] h-[35vh] md:w-[45vh] md:h-[45vh] lg:w-[60vh] lg:h-[60vh] flex items-center justify-center group/football"
                  initial={{ opacity: 0, scale: 0.5, x: 100, rotate: 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                  viewport={{ root: scrollRef, amount: 0.4 }}
                  transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.1 }} 
                >
                    {/* Layered Depth Shadows */}
                    <div className="absolute bottom-[-10%] w-[110%] h-[15%] bg-black/30 dark:bg-black/60 rounded-full blur-[30px] md:blur-[50px] opacity-80 transition-colors duration-500" />
                    <div className="absolute bottom-[-5%] w-[80%] h-[10%] bg-black/60 dark:bg-black/90 rounded-full blur-[15px] md:blur-[25px] opacity-100 transition-colors duration-500" />

                    {/* Animated Design Border (Adapts to Light/Dark mode) */}
                    <div className="absolute inset-[-20%] md:inset-[-30%] flex items-center justify-center">
                       {/* Outer slow rotating ring */}
                       {/* CHANGED dark:border-white/10 to white/5 to dampen the glow */}
                       <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                          className="absolute inset-0 rounded-full border border-black/10 dark:border-white/5 z-0 transition-colors duration-500"
                       />
                       {/* Inner dashed reverse rotating ring */}
                       {/* CHANGED opacity from dark:border-[#b91c1c]/30 to /70 for deeper red */}
                       <motion.div 
                          animate={{ rotate: -360 }}
                          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                          className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-[#b91c1c]/40 dark:border-[#b91c1c]/70 z-0 transition-colors duration-500"
                       />
                       {/* Deep core pulse glow */}
                       {/* CHANGED dark:bg-[#b91c1c]/80 to /60 to prevent washout and deepen the color */}
                       <motion.div 
                          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.3, 0.1] }}
                          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                          className="absolute w-[70%] h-[70%] rounded-full bg-[#b91c1c]/30 dark:bg-[#b91c1c]/60 blur-[60px] md:blur-[100px] z-0 transition-colors duration-500"
                       />
                    </div>

                    {/* The Football */}
                    <motion.img 
                      src={item.img} 
                      alt={item.title}
                      className="w-full h-full object-contain brightness-[1.05] dark:brightness-[1.15] contrast-[1.05] dark:contrast-[1.1] relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-500"
                      animate={{ y: [0, -15, 0] }}
                      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    />

                    {/* SPECULAR GLOSS OVERLAY for 3D Realism */}
                    <div className="absolute inset-0 flex items-center justify-center z-20 overflow-hidden rounded-full aspect-square pointer-events-none">
                        <div className="absolute top-[-10%] left-[-10%] w-[100%] h-[100%] bg-gradient-radial from-white via-white/5 to-transparent opacity-30 dark:opacity-10 blur-[15px] transition-opacity duration-500" />
                        <div className="absolute top-[0%] right-[20%] w-[4px] h-[80%] bg-white opacity-[0.1] dark:opacity-[0.03] rotate-[35deg] blur-[2px] transition-opacity duration-500" />
                    </div>
                </motion.div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default VideoGallery;