import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ChevronLeft, Lock } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  // Calculate Subtotal
  const subtotal = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return acc + (isNaN(price) ? 0 : price * item.quantity);
  }, 0);

  const tax = subtotal * 0.1; // Example 10% tax rate
  const total = subtotal + tax;

  // If cart is empty, show a message instead of the checkout form
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center pt-32 px-6 text-center transition-colors duration-500">
        <h1 className="text-3xl md:text-4xl font-serif italic mb-4">Your Kit is Empty</h1>
        <button onClick={() => navigate('/collection')} className="text-[#b91c1c] underline uppercase tracking-widest text-[10px] mt-2">Return to Archive</button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen pt-28 md:pt-32 pb-20 px-6 md:px-10 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-black/50 dark:text-gray-500 hover:text-[#b91c1c] dark:hover:text-white transition-colors mb-8 md:mb-10"
        >
          <ChevronLeft size={14} /> Back
        </button>

        <h1 className="text-4xl md:text-6xl font-serif uppercase tracking-tighter mb-8 md:mb-12">
          Secure <span className="italic text-black/30 dark:text-white/40">Checkout</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Order Review List */}
          <div className="w-full lg:w-3/5 space-y-6">
            <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-[#b91c1c] border-b border-black/10 dark:border-white/10 pb-4 transition-colors duration-500">Order Review</h2>
            
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 md:gap-6 bg-gray-50 dark:bg-white/[0.02] p-3 md:p-4 rounded-2xl border border-black/5 dark:border-white/5 transition-colors duration-500 shadow-sm">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-black rounded-xl p-2 border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0">
                    <img src={item.img} alt={item.name} className="max-w-full max-h-full object-contain drop-shadow-md" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest mb-1">{item.name}</h3>
                    <p className="text-[9px] md:text-[10px] text-black/50 dark:text-gray-500 uppercase tracking-widest mb-2">Qty: {item.quantity}</p>
                    <p className="font-mono text-sm md:text-base text-[#b91c1c] font-bold">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Payment Totals Box */}
          <div className="w-full lg:w-2/5 lg:sticky lg:top-32">
            <div className="bg-gray-50 dark:bg-[#080808] border border-black/10 dark:border-white/10 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl transition-colors duration-500">
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold border-b border-black/10 dark:border-white/10 pb-4 mb-6 transition-colors duration-500">Summary</h2>
              
              <div className="space-y-4 font-mono text-xs md:text-sm text-black/60 dark:text-gray-400 mb-8">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-black dark:text-white font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Taxes</span>
                  <span className="text-black dark:text-white font-bold">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t border-black/10 dark:border-white/10 pt-4 text-black dark:text-white text-lg md:text-xl font-bold transition-colors duration-500">
                  <span>Total</span>
                  <span className="text-[#b91c1c]">${total.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={() => alert("Redirecting to Payment Gateway...")}
                className="w-full bg-[#b91c1c] text-white py-4 md:py-5 rounded-xl text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] flex items-center justify-center gap-2 md:gap-3 hover:bg-black dark:hover:bg-white dark:hover:text-black transition-all mb-4 shadow-md"
              >
                <Lock size={14} className="md:w-4 md:h-4" /> Proceed to Payment
              </button>
              
              <p className="text-center text-[8px] md:text-[9px] uppercase tracking-widest text-black/50 dark:text-gray-600">
                You will be redirected to our secure Stripe gateway to enter your card details.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;