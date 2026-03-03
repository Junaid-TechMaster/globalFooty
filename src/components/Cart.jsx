import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate(); 

  // Calculate Subtotal 
  const subtotal = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return acc + (isNaN(price) ? 0 : price * item.quantity);
  }, 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm z-[200] transition-colors duration-500"
          />

          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'circOut' }}
            // Apply light/dark classes here for the main background
            className="fixed top-0 right-0 w-full md:max-w-md h-full bg-white dark:bg-[#0a0a0a] border-l border-black/10 dark:border-white/10 z-[210] flex flex-col shadow-2xl transition-colors duration-500"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 md:p-6 border-b border-black/10 dark:border-white/10 transition-colors duration-500">
              <h2 className="text-xl font-serif italic flex items-center gap-3 text-black dark:text-white">
                <ShoppingBag size={20} className="text-[#b91c1c]" /> Your Kit
                <span className="text-[10px] font-sans not-italic uppercase tracking-widest bg-black/10 dark:bg-white/10 text-black dark:text-white px-2 py-1 rounded-full">
                  {cartItems.length}
                </span>
              </h2>
              <button onClick={() => setIsCartOpen(false)} className="text-black/40 dark:text-white/40 hover:text-[#b91c1c] dark:hover:text-[#b91c1c] transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Cart Items Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6 [&::-webkit-scrollbar]:hidden">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-black/40 dark:text-white/40 transition-colors duration-500">
                  <ShoppingBag size={48} className="mb-4 opacity-20" />
                  <p className="text-[10px] uppercase tracking-widest">Your kit is empty</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3 md:gap-4 bg-gray-50 dark:bg-white/5 p-3 md:p-4 rounded-xl border border-black/5 dark:border-white/5 relative group transition-colors duration-500">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-black rounded-lg p-2 flex items-center justify-center border border-black/5 dark:border-transparent shrink-0">
                      <img src={item.img} alt={item.name} className="w-full h-full object-contain drop-shadow-sm" />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-[10px] md:text-xs font-bold text-black dark:text-white uppercase tracking-widest mb-1 pr-6 leading-tight">{item.name}</h3>
                        <p className="font-mono text-xs md:text-sm text-[#b91c1c] font-bold">{item.price}</p>
                      </div>
                      
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center bg-white dark:bg-black rounded-full px-2 py-1 border border-black/10 dark:border-white/10 transition-colors duration-500">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-1 text-black/60 dark:text-white/60 hover:text-[#b91c1c] dark:hover:text-[#b91c1c]"><Minus size={12} /></button>
                          <span className="text-[10px] font-mono font-bold w-6 text-center text-black dark:text-white">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-1 text-black/60 dark:text-white/60 hover:text-[#b91c1c] dark:hover:text-[#b91c1c]"><Plus size={12} /></button>
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={() => removeFromCart(item.id)} 
                      className="absolute top-3 right-3 md:top-4 md:right-4 text-black/20 dark:text-white/20 hover:text-[#b91c1c] dark:hover:text-[#b91c1c] transition-colors p-1"
                    >
                      <Trash2 size={14} className="md:w-4 md:h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {cartItems.length > 0 && (
              <div className="p-5 md:p-6 border-t border-black/10 dark:border-white/10 bg-white dark:bg-black transition-colors duration-500 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] dark:shadow-none">
                <div className="flex justify-between items-center mb-4 md:mb-6">
                  <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-black/60 dark:text-white/60">Estimated Total</span>
                  <span className="text-xl md:text-2xl font-serif italic text-black dark:text-white font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <button 
                  onClick={() => {
                    setIsCartOpen(false); 
                    navigate('/checkout'); 
                  }}
                  className="w-full bg-[#b91c1c] text-white py-4 rounded-xl text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all shadow-md"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;