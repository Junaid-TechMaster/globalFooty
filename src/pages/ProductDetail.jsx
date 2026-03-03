import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ShoppingBag, ShieldCheck, Wind, Layers, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext'; 

// Using your existing assets
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';

const productsData = [
  { id: 1, name: 'Professional Match Ball', desc: 'FIFA-quality aerodynamics for elite play. Engineered with seamless thermal bonding for zero water absorption and predictable flight paths.', price: '$24.99', category: 'Match Footballs', series: 'Apex', img: p1 },
  { id: 5, name: 'Standard Match Football', desc: 'Reliable match-day performance. Features a textured PU surface for enhanced grip in all weather conditions.', price: '$21.99', category: 'Match Footballs', series: 'Heritage', img: p5 },
  { id: 2, name: 'Training Football', desc: 'Highly durable build for daily drills. Hand-stitched for maximum tension retention over thousands of kicks.', price: '$18.99', category: 'Training Footballs', series: 'Core', img: p2 },
  { id: 3, name: 'Promotional Football', desc: 'Cost-effective for brand giveaways without sacrificing the authentic football feel.', price: '$12.99', category: 'Promotional', series: 'Concept', img: p3 },
  { id: 4, name: 'Custom Team Design', desc: 'Fully personalized to your club colors. Contact our design lab for volume pricing.', price: 'Inquire', category: 'Custom Designs', series: 'Bespoke', img: p4 },
];

const ProductDetail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const { addToCart } = useCart(); 

  const product = productsData.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center pt-32 px-6 text-center transition-colors duration-500">
        <h1 className="text-3xl md:text-4xl font-serif mb-4">Artifact Not Found</h1>
        <button onClick={() => navigate('/collection')} className="text-[#b91c1c] underline text-xs uppercase tracking-widest">Return to Collection</button>
      </div>
    );
  }

  // Mocking a gallery by repeating the main image
  const gallery = [product.img, product.img, product.img];

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen pt-28 md:pt-32 pb-20 px-6 md:px-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/collection')}
          className="flex items-center gap-2 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-black/50 dark:text-gray-500 hover:text-[#b91c1c] dark:hover:text-white transition-colors mb-8 md:mb-10"
        >
          <ChevronLeft size={14} /> Back to Archive
        </button>

        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start">
          
          {/* LEFT: Sticky Image Gallery */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 space-y-4">
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square bg-gray-50 dark:bg-[#080808] border border-black/10 dark:border-white/5 rounded-2xl flex items-center justify-center p-8 md:p-12 relative overflow-hidden transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#b91c1c]/5 dark:from-[#b91c1c]/10 to-transparent opacity-50" />
              <img 
                src={gallery[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-contain drop-shadow-xl dark:drop-shadow-2xl z-10 transition-transform duration-500"
              />
            </motion.div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {gallery.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square bg-gray-50 dark:bg-[#080808] border rounded-xl p-3 md:p-4 flex items-center justify-center transition-all duration-300 ${
                    activeImage === idx ? 'border-[#b91c1c] shadow-sm' : 'border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className={`w-full h-full object-contain transition-all ${idx === 1 ? 'scale-125 md:scale-150 -translate-y-2 md:-translate-y-4' : idx === 2 ? 'grayscale opacity-70' : ''}`} />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Details & Specs */}
          <div className="w-full lg:w-1/2 flex flex-col pt-2 md:pt-4">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[#b91c1c] text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold mb-3 md:mb-4"
            >
              {product.series} Series / {product.category}
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-7xl font-serif tracking-tighter uppercase leading-[1] md:leading-[0.9] mb-4 md:mb-6 text-black dark:text-white"
            >
              {product.name}
            </motion.h1>
            
            <p className="font-mono text-xl md:text-2xl text-black/80 dark:text-white/80 mb-6 md:mb-8 font-bold">{product.price}</p>
            
            <p className="text-black/60 dark:text-gray-400 text-[10px] md:text-xs leading-relaxed uppercase tracking-widest mb-10 md:mb-12 max-w-lg">
              {product.desc}
            </p>

            {/* Add to Cart Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6 mb-12 md:mb-16 pb-8 md:pb-12 border-b border-black/10 dark:border-white/10 transition-colors duration-500">
              {/* Quantity Selector */}
              <div className="flex items-center justify-between sm:justify-start bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full px-4 py-3 md:py-4 gap-6 transition-colors duration-500 w-full sm:w-auto">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-black/50 dark:text-gray-400 hover:text-[#b91c1c] dark:hover:text-white transition-colors p-1">
                  <Minus size={14} className="md:w-4 md:h-4" />
                </button>
                <span className="font-mono text-sm font-bold w-4 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-black/50 dark:text-gray-400 hover:text-[#b91c1c] dark:hover:text-white transition-colors p-1">
                  <Plus size={14} className="md:w-4 md:h-4" />
                </button>
              </div>

              {/* Add Button */}
              <button 
                onClick={() => addToCart(product, quantity)}
                className="w-full sm:flex-1 bg-black text-white dark:bg-white dark:text-black py-4 md:py-5 rounded-full text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] flex items-center justify-center gap-2 md:gap-3 hover:bg-[#b91c1c] dark:hover:bg-[#b91c1c] hover:text-white dark:hover:text-white transition-all shadow-lg"
              >
                <ShoppingBag size={14} className="md:w-4 md:h-4" /> Add to Cart
              </button>
            </div>

            {/* Technical Specifications */}
            <div className="space-y-6 md:space-y-8">
              <h3 className="text-lg md:text-xl font-serif italic mb-4 md:mb-6 text-black dark:text-white">Technical Specifications</h3>
              
              <div className="flex items-start gap-3 md:gap-4">
                <div className="mt-1 text-[#b91c1c]"><Wind size={18} className="md:w-5 md:h-5" /></div>
                <div>
                  <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 text-black dark:text-white">Aerodynamic Profile</h4>
                  <p className="text-[9px] md:text-[10px] text-black/60 dark:text-gray-500 uppercase tracking-widest leading-relaxed">Engineered with a 32-panel precision cut to ensure stable flight dynamics and pinpoint accuracy during high-velocity strikes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="mt-1 text-[#b91c1c]"><Layers size={18} className="md:w-5 md:h-5" /></div>
                <div>
                  <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 text-black dark:text-white">Surface Material</h4>
                  <p className="text-[9px] md:text-[10px] text-black/60 dark:text-gray-500 uppercase tracking-widest leading-relaxed">Micro-textured polyurethane (PU) casing with EVA foam backing for a soft touch and superior grip in wet conditions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="mt-1 text-[#b91c1c]"><ShieldCheck size={18} className="md:w-5 md:h-5" /></div>
                <div>
                  <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 text-black dark:text-white">Durability Guarantee</h4>
                  <p className="text-[9px] md:text-[10px] text-black/60 dark:text-gray-500 uppercase tracking-widest leading-relaxed">Thermal bonded seams prevent water absorption. Backed by our 2-year shape and stitching warranty.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;