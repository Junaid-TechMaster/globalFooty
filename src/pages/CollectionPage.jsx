import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShoppingBag, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 

// Using your existing assets
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';

const CollectionPage = () => {
  const [activeFilter, setActiveFilter] = useState('All Products');
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart(); 

  // Extract search term from the URL
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('search')?.toLowerCase() || "";

  const filters = ['All Products', 'Match Footballs', 'Training Footballs', 'Promotional', 'Custom Designs'];

  const products = [
    { id: 1, name: 'Professional Match Ball', desc: 'FIFA-quality aerodynamics for elite play.', price: '$24.99', category: 'Match Footballs', img: p1 },
    { id: 5, name: 'Standard Match Football', desc: 'Reliable match-day performance.', price: '$21.99', category: 'Match Footballs', img: p5 },
    { id: 2, name: 'Training Football', desc: 'Highly durable build for daily drills.', price: '$18.99', category: 'Training Footballs', img: p2 },
    { id: 3, name: 'Promotional Football', desc: 'Cost-effective for brand giveaways.', price: '$12.99', category: 'Promotional', img: p3 },
    { id: 4, name: 'Custom Team Design', desc: 'Fully personalized to your club colors.', price: 'Inquire', category: 'Custom Designs', img: p4 },
  ];

  const filteredProducts = products.filter(p => {
    const matchesFilter = activeFilter === 'All Products' || p.category === activeFilter;
    const matchesSearch = !searchTerm || 
                          p.name.toLowerCase().includes(searchTerm) || 
                          p.desc.toLowerCase().includes(searchTerm) ||
                          p.category.toLowerCase().includes(searchTerm);
                          
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen pt-32 md:pt-40 pb-20 px-6 md:px-10 transition-colors duration-500 relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[300px] md:h-[500px] bg-[#b91c1c] rounded-full blur-[120px] md:blur-[180px] opacity-10 dark:opacity-5 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <header className="mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8"
          >
            <div className="max-w-3xl">
              <span className="text-[#b91c1c] text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-3 md:mb-4 block font-bold">
                Global Footy / Archive 2026
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif tracking-tighter uppercase leading-[0.9] md:leading-[0.85]">
                Full <br className="hidden sm:block"/> <span className="italic text-black/40 dark:text-white/40">Inventory</span>
              </h1>
            </div>
            <div className="text-left md:text-right mt-4 md:mt-0">
              <p className="text-[10px] md:text-[11px] opacity-60 dark:opacity-40 max-w-[250px] uppercase tracking-widest leading-relaxed mb-3 md:mb-4">
                Professional grade equipment engineered for the modern athlete.
              </p>
              <div className="h-[1px] w-12 md:w-20 bg-[#b91c1c] mr-auto md:ml-auto" />
            </div>
          </motion.div>
        </header>

        {/* ACTIVE SEARCH BADGE */}
        {searchTerm && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg py-3 px-5 max-w-md backdrop-blur-sm transition-colors duration-500"
          >
            <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-black/60 dark:text-gray-400">
              Showing results for: <span className="text-black dark:text-white font-bold ml-1">"{searchTerm}"</span>
            </span>
            <button 
              onClick={() => navigate('/collection')}
              className="text-[#b91c1c] hover:text-black dark:hover:text-white transition-colors flex items-center gap-1 text-[9px] md:text-[10px] uppercase tracking-widest font-bold self-end sm:self-auto"
            >
              Clear <X size={14} />
            </button>
          </motion.div>
        )}

        {/* Filter Navigation */}
        <nav className="flex flex-wrap gap-3 md:gap-8 mb-12 md:mb-16 border-b border-black/10 dark:border-white/10 pb-4 md:pb-6 transition-colors duration-500">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-[9px] md:text-[10px] uppercase tracking-[0.2em] transition-all relative py-2 ${
                activeFilter === filter ? 'text-black dark:text-white font-bold' : 'text-black/40 dark:text-white/40 hover:text-black/80 dark:hover:text-white/70'
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <motion.div 
                  layoutId="activeFilterUnderline" 
                  className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#b91c1c]"
                />
              )}
            </button>
          ))}
        </nav>

        {/* NO RESULTS FALLBACK */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 md:py-20 border border-black/10 dark:border-white/5 rounded-2xl bg-gray-50 dark:bg-white/[0.02] transition-colors duration-500">
            <p className="text-black/50 dark:text-gray-500 text-xs md:text-sm uppercase tracking-widest mb-4">No artifacts found matching your criteria.</p>
            <button 
              onClick={() => { setActiveFilter('All Products'); navigate('/collection'); }}
              className="text-[#b91c1c] text-[9px] md:text-[10px] uppercase tracking-widest font-bold hover:text-black dark:hover:text-white transition-colors border-b border-[#b91c1c] pb-1"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Vertical Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div 
                layout
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => navigate(`/product/${product.id}`)}
                className="group flex flex-col cursor-pointer bg-white dark:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none shadow-sm md:shadow-none border border-black/5 md:border-none dark:border-transparent transition-colors duration-500"
              >
                {/* Image Box */}
                <div className="aspect-square relative bg-gray-50 dark:bg-[#080808] border border-black/5 dark:border-white/5 rounded-2xl overflow-hidden flex items-center justify-center p-8 md:p-12 mb-4 md:mb-6 transition-colors duration-500">
                   <div className="absolute inset-0 bg-[#b91c1c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   
                   <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-contain grayscale opacity-90 md:opacity-70 group-hover:grayscale-0 group-hover:opacity-100 md:group-hover:scale-110 transition-all duration-700 drop-shadow-xl md:drop-shadow-2xl" 
                   />

                   {/* Quick View Tag */}
                   <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation(); 
                          addToCart(product); 
                        }}
                        className="bg-black text-white dark:bg-white dark:text-black px-4 md:px-6 py-2 rounded-full text-[9px] md:text-[10px] uppercase font-bold tracking-widest flex items-center gap-2 hover:bg-[#b91c1c] hover:text-white dark:hover:bg-[#b91c1c] dark:hover:text-white transition-colors whitespace-nowrap"
                      >
                        <ShoppingBag size={12} /> Add To Cart
                      </button>
                   </div>
                </div>

                {/* Info Area */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl md:text-2xl tracking-tight text-black dark:text-white">{product.name}</h3>
                  <span className="font-mono text-xs md:text-sm opacity-80 dark:opacity-60 italic text-[#b91c1c] md:text-black md:dark:text-white">{product.price}</span>
                </div>
                
                <p className="text-[9px] md:text-[10px] opacity-60 dark:opacity-40 uppercase tracking-widest mb-4 md:mb-6 leading-relaxed text-black dark:text-white line-clamp-2 md:line-clamp-none">
                  {product.desc}
                </p>

                <div className="mt-auto pt-3 md:pt-4 border-t border-black/10 dark:border-white/5 group-hover:border-[#b91c1c]/30 transition-colors">
                  <button className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 dark:text-white/40 group-hover:text-[#b91c1c] transition-colors flex items-center gap-2">
                    Technical Specs <ArrowRight size={12} className="md:w-3.5 md:h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;