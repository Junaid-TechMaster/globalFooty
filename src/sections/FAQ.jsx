import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is the minimum order quantity (MOQ) for custom designs?",
    answer: "For fully bespoke designs via our Custom Design Lab, the MOQ starts at 50 units (Academy Pro tier). For standard batch orders (like training balls or simple logo prints), the MOQ starts at just 15 units."
  },
  {
    question: "Do your footballs meet FIFA Quality Pro standards?",
    answer: "Yes. Our Apex and Academy Pro lines are engineered to meet and exceed FIFA Quality Pro specifications. They feature thermal-bonded seams, strict weight tolerances, and zero water absorption for professional match-day performance."
  },
  {
    question: "How long does production and shipping take?",
    answer: "Standard batch orders take approximately 14 days for production and delivery. Express delivery (7 days) is available for our Academy Pro and Brand Collab tiers. All orders ship directly from our global logistics hub in Dubai."
  },
  {
    question: "Can I receive a physical sample before a bulk order?",
    answer: "Absolutely. We provide a free physical prototype sample for all Academy Pro and Brand Collab tier orders. Full production only begins once you have approved the physical sample."
  },
  {
    question: "What printing methods do you use for custom graphics?",
    answer: "We use high-durability UV-cured ink and sublimation printing directly onto the polyurethane (PU) panels before the ball is stitched or thermally bonded. This ensures your logo or pattern will not easily peel or fade during intense play."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 dark:bg-[#050505] text-black dark:text-white py-20 md:py-32 px-6 md:px-10 border-t border-black/5 dark:border-white/5 transition-colors duration-500 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#b91c1c] rounded-full blur-[120px] md:blur-[180px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">
        
        {/* LEFT SIDE: Header & Sticky Context */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#b91c1c] text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-bold mb-4 md:mb-6 block"
          >
            Knowledge Base
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tighter uppercase mb-6 leading-tight text-black dark:text-white"
          >
            Common <br /> <span className="italic text-black/40 dark:text-white/40">Inquiries</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-black/60 dark:text-gray-400 text-xs md:text-sm leading-relaxed uppercase tracking-widest max-w-sm"
          >
            Everything you need to know about our engineering process, custom orders, and global logistics.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-black/10 dark:border-white/10"
          >
            <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40 mb-2">Still have questions?</p>
            <a href="mailto:hello@globalfootytrade.com" className="text-sm md:text-base font-bold hover:text-[#b91c1c] transition-colors inline-flex items-center gap-2 group">
              Contact our Support Team
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Accordion List */}
        <div className="w-full lg:w-2/3">
          <div className="border-t border-black/10 dark:border-white/10 transition-colors duration-500">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-black/10 dark:border-white/10 transition-colors duration-500"
                >
                  <button 
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-6 md:py-8 flex justify-between items-center text-left focus:outline-none group"
                  >
                    <h3 className={`text-sm md:text-lg font-bold uppercase tracking-widest pr-8 transition-colors duration-300 ${isActive ? 'text-[#b91c1c]' : 'text-black dark:text-white group-hover:text-[#b91c1c]'}`}>
                      {faq.question}
                    </h3>
                    <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive ? 'border-[#b91c1c] bg-[#b91c1c] text-white' : 'border-black/20 dark:border-white/20 text-black/40 dark:text-white/40 group-hover:border-[#b91c1c] group-hover:text-[#b91c1c]'}`}>
                      {isActive ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 text-[11px] md:text-sm text-black/60 dark:text-white/60 leading-relaxed uppercase tracking-widest max-w-2xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;