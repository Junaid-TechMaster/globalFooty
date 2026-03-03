import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom'; 
import { useCart } from '../context/CartContext'; 

import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';

const Collection = () => {
  const [activeFilter, setActiveFilter] = useState('All Products');
  const [isHovered, setIsHovered] = useState(false); 
  const scrollRef = useRef(null); 
  
  const navigate = useNavigate(); 
  const { addToCart } = useCart(); 

  const filters = ['All Products', 'Match Footballs', 'Training Footballs', 'Promotional', 'Custom Designs'];

  const products = [
    { id: 1, name: 'Professional Match Ball', desc: 'FIFA-quality aerodynamics for elite play.', price: '$24.99', category: 'Match Footballs', img: p1 },
    { id: 5, name: 'Standard Match Football', desc: 'Reliable match-day performance.', price: '$21.99', category: 'Match Footballs', img: p5 },
    { id: 2, name: 'Training Football', desc: 'Highly durable build for daily drills.', price: '$18.99', category: 'Training Footballs', img: p2 },
    { id: 3, name: 'Promotional Football', desc: 'Cost-effective for brand giveaways.', price: '$12.99', category: 'Promotional', img: p3 },
    { id: 4, name: 'Custom Team Design', desc: 'Fully personalized to your club colors.', price: 'Inquire', category: 'Custom Designs', img: p4 },
  ];

  const filteredProducts = activeFilter === 'All Products' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  // AUTO-SCROLL LOGIC
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
        }
      }
    }, 3000); 

    return () => clearInterval(interval);
  }, [isHovered, filteredProducts]);

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-20 md:py-32 px-6 md:px-10 border-t border-black/5 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[300px] bg-[#b91c1c] rounded-full blur-[100px] md:blur-[150px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-4 md:gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#b91c1c] text-[10px] uppercase tracking-[0.4em] mb-4 block font-bold"
            >
              Exhibition
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-serif tracking-tighter uppercase text-black dark:text-white"
            >
              The Collection
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[10px] md:text-[11px] opacity-60 dark:opacity-40 max-w-[280px] uppercase tracking-widest leading-relaxed text-left md:text-right"
          >
            Engineered for precision. Crafted for the pursuit of quiet mastery on the pitch.
          </motion.p>
        </div>

        {/* Sleek Filters */}
        <div className="flex flex-wrap gap-3 md:gap-6 mb-12 md:mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-[9px] md:text-[10px] uppercase tracking-[0.2em] transition-all relative py-2 ${
                activeFilter === filter ? 'text-black dark:text-white font-bold' : 'text-black/40 dark:text-white/40 hover:text-black/80 dark:hover:text-white/80'
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <motion.div 
                  layoutId="activeFilterBubble" 
                  className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full -z-10 border border-black/10 dark:border-white/20"
                  style={{ padding: '0 0.75rem', margin: '0 -0.75rem' }}
                />
              )}
            </button>
          ))}
        </div>

        {/* The Product Horizontal Slider */}
        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)} 
          className="flex overflow-x-auto gap-4 md:gap-6 lg:gap-8 pb-10 pt-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                // NEW CARD CONTAINER: Rounded, sleek, elevated borders
                className="relative group h-[420px] md:h-[520px] min-w-[300px] md:min-w-[380px] flex-shrink-0 snap-start rounded-[2.5rem] overflow-hidden bg-gray-100 dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 hover:border-[#b91c1c]/30 dark:hover:border-[#b91c1c]/30 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl dark:shadow-none"
              >
                
                {/* 1. Top floating info pills */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                  <span className="text-[8px] md:text-[9px] uppercase tracking-widest font-bold text-black/60 dark:text-white/60 bg-white/50 dark:bg-black/50 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-black/5 dark:border-white/10 shadow-sm">
                    {product.category}
                  </span>
                  <span className="text-[10px] md:text-xs font-mono font-bold text-[#b91c1c] bg-white dark:bg-[#111] px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-md border border-black/5 dark:border-white/5">
                    {product.price}
                  </span>
                </div>

                {/* 2. Background Glow & Image Container */}
                <div className="absolute inset-0 flex items-center justify-center pt-8 pb-20 md:pb-32 z-10">
                   {/* Hover ambient glow */}
                   <div className="absolute w-40 h-40 md:w-56 md:h-56 bg-[#b91c1c] rounded-full blur-[60px] md:blur-[90px] opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-700" />
                   
                   {/* Contact shadow for realism */}
                   <div className="absolute bottom-[25%] md:bottom-[30%] w-[60%] h-[10%] bg-black/20 dark:bg-black/60 rounded-full blur-[15px] md:blur-[20px] opacity-100 group-hover:opacity-60 transition-opacity duration-700" />

                   <img 
                     src={product.img} 
                     alt={product.name} 
                     className="w-[70%] md:w-[75%] h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] group-hover:scale-110 group-hover:-translate-y-2 md:group-hover:-translate-y-4 transition-transform duration-700 ease-out z-10" 
                   />
                </div>

                {/* 3. New Frosted Glass Bottom Panel */}
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-white/50 dark:border-white/10 p-5 md:p-6 rounded-3xl z-20 transform translate-y-1 md:translate-y-2 group-hover:translate-y-0 transition-transform duration-500 shadow-lg dark:shadow-none">
                   
                   <h3 className="font-serif text-xl md:text-2xl text-black dark:text-white mb-2 md:mb-1 leading-tight">{product.name}</h3>
                   <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-black/50 dark:text-white/40 mb-4 md:mb-5 line-clamp-1">{product.desc}</p>
                   
                   <div className="flex justify-between items-center pt-4 md:pt-5 border-t border-black/10 dark:border-white/10">
                      
                      {/* Explore Link */}
                      <button className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-black dark:text-white group-hover:text-[#b91c1c] dark:group-hover:text-[#b91c1c] transition-colors flex items-center gap-2 group/btn">
                         Explore <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      {/* Quick Add to Cart Circular Button */}
                      <button 
                         onClick={(e) => {
                           e.stopPropagation(); 
                           addToCart(product);
                         }}
                         className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:bg-[#b91c1c] dark:hover:bg-[#b91c1c] hover:text-white dark:hover:text-white hover:scale-110 transition-all shadow-md"
                         title="Add to Cart"
                      >
                         <ShoppingBag size={16} />
                      </button>

                   </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Collection;