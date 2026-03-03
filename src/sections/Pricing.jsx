import { motion } from 'framer-motion';

// NEW BUSINESS LOGIC: Batch ordering, manufacturing quality, and delivery speed
const pricingPlans = [
  {
    name: "Squad Batch",
    description: "Perfect for local clubs and small teams needing standard match-ready gear.",
    price: "450",
    unit: "Per 15 Balls", 
    features: ["Standard Match Quality", "1-2 Color Logo Print", "Standard Delivery (14 Days)", "Basic Polybag Packaging"],
    isPopular: false
  },
  {
    name: "Academy Pro",
    description: "FIFA-quality engineered footballs for professional academies and regional leagues.",
    price: "1,250",
    unit: "Per 50 Balls",
    features: ["Elite Aero-Core Design", "Full 3D Panel Customization", "Express Delivery (7 Days)", "Free Prototype Sample", "Priority Production"],
    isPopular: true
  },
  {
    name: "Brand Collab",
    description: "High-volume manufacturing for corporate sponsors, retail drops, and global brands.",
    price: "5,500",
    unit: "Per 250+ Balls",
    features: ["Premium Retail Quality", "Custom Branded Packaging", "Dedicated Account Manager", "Global Drop-Shipping", "Wholesale Tier Pricing"],
    isPopular: false
  }
];

const Pricing = () => {
  return (
    <section className="relative bg-white dark:bg-black text-black dark:text-white py-20 md:py-32 overflow-hidden font-sans border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      
      {/* Background grounding element */}
      <div className="absolute bottom-0 w-full h-1/2 bg-gray-50 dark:bg-[#050505] z-0 transition-colors duration-500"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif tracking-tighter uppercase mb-4 md:mb-6"
          >
            Production Packages
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[10px] md:text-[11px] opacity-60 dark:opacity-40 uppercase tracking-widest max-w-2xl mx-auto leading-relaxed"
          >
            Select a batch tier that meets your team's quantity, quality, and delivery requirements.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-center max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative bg-white dark:bg-[#0a0a0a] border flex flex-col p-8 md:p-10 text-center transition-all duration-500 ${
                plan.isPopular 
                  ? 'border-[#b91c1c] shadow-[0_10px_40px_rgba(185,28,28,0.15)] lg:scale-105 z-10 py-10 md:py-14' 
                  : 'border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 z-0'
              }`}
            >
              {/* Card Header */}
              <h3 className="text-xl md:text-2xl font-serif uppercase tracking-widest mb-4">{plan.name}</h3>
              <p className="text-[10px] md:text-[11px] opacity-60 dark:opacity-50 tracking-wide font-light mb-8 min-h-[40px] md:h-10">
                {plan.description}
              </p>
              
              <div className="mb-4">
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-[#b91c1c] block mb-2">Starting At</span>
                <div className="flex justify-center items-start">
                  <span className="text-2xl md:text-3xl mt-2">$</span>
                  <span className="text-6xl md:text-7xl font-serif tracking-tighter">{plan.price}</span>
                </div>
                <span className="text-[8px] md:text-[9px] uppercase tracking-widest opacity-60 dark:opacity-40 mt-2 block">{plan.unit}</span>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-black/10 dark:bg-white/10 my-6 md:my-8 transition-colors duration-500"></div>

              {/* Features List */}
              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-[11px] md:text-xs opacity-80 dark:opacity-70 tracking-wide">
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                className={`w-full py-4 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                  plan.isPopular 
                    ? 'bg-[#b91c1c] text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black' 
                    : 'bg-transparent border border-black/20 dark:border-white/20 text-black dark:text-white hover:border-black hover:bg-black hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black'
                }`}
              >
                Start Order
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;