import { motion } from 'framer-motion';
import { Send, MessageSquare, ShieldCheck } from 'lucide-react';

const HomeContact = () => {
  return (
    <section className="bg-gray-50 dark:bg-black py-20 md:py-24 px-6 md:px-10 relative overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      
      {/* Background Decorative Element */}
      <div className="absolute -bottom-24 -right-24 w-72 h-72 md:w-96 md:h-96 bg-[#b91c1c] rounded-full blur-[100px] md:blur-[150px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#b91c1c] text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block"
          >
            Direct Line
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tighter uppercase mb-4 md:mb-6 text-black dark:text-white"
          >
            Ready to <span className="italic text-black/40 dark:text-white/40">Kick Off</span> <br className="hidden md:block"/> Your Project?
          </motion.h2>
          <p className="text-black/60 dark:text-gray-400 text-xs md:text-sm max-w-md mx-auto lg:mx-0 leading-relaxed mb-8 md:mb-10 uppercase tracking-widest">
            Whether it's a bulk club order or a custom brand activation, our team is standing by to bring your vision to the pitch.
          </p>

          <div className="flex flex-col gap-4 md:gap-6 items-center lg:items-start">
            <div className="flex items-start gap-3 md:gap-4 text-left">
              <div className="text-[#b91c1c] mt-[2px]"><ShieldCheck size={18} className="md:w-5 md:h-5" /></div>
              <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-black/80 dark:text-white/80">FIFA Quality Pro Standard Consulting</p>
            </div>
            <div className="flex items-start gap-3 md:gap-4 text-left">
              <div className="text-[#b91c1c] mt-[2px]"><MessageSquare size={18} className="md:w-5 md:h-5" /></div>
              <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-black/80 dark:text-white/80">24-Hour Response Guarantee</p>
            </div>
          </div>
        </div>

        {/* The Compact Home Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl transition-colors duration-500"
        >
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="NAME" 
                className="w-full bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-4 md:py-5 focus:outline-none focus:border-[#b91c1c] dark:focus:border-[#b91c1c] transition-colors text-[9px] md:text-[10px] tracking-widest text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 uppercase"
              />
              <input 
                type="email" 
                placeholder="EMAIL" 
                className="w-full bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-4 md:py-5 focus:outline-none focus:border-[#b91c1c] dark:focus:border-[#b91c1c] transition-colors text-[9px] md:text-[10px] tracking-widest text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 uppercase"
              />
            </div>
            
            <div className="relative">
              <select className="w-full bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-4 md:py-5 focus:outline-none focus:border-[#b91c1c] transition-colors text-[9px] md:text-[10px] tracking-widest text-black/60 dark:text-white/40 uppercase appearance-none cursor-pointer">
                <option value="" disabled selected className="bg-white dark:bg-black text-black/40 dark:text-white/40">SELECT INQUIRY TYPE</option>
                <option value="bulk" className="bg-white dark:bg-black text-black dark:text-white">BULK CLUB ORDER</option>
                <option value="custom" className="bg-white dark:bg-black text-black dark:text-white">CUSTOM DESIGN</option>
                <option value="sponsorship" className="bg-white dark:bg-black text-black dark:text-white">SPONSORSHIP</option>
              </select>
              {/* Custom Down Arrow for Select to look uniform across devices */}
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-black/40 dark:text-white/40">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>

            <textarea 
              rows="4" 
              placeholder="YOUR MESSAGE" 
              className="w-full bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-4 md:py-5 focus:outline-none focus:border-[#b91c1c] transition-colors text-[9px] md:text-[10px] tracking-widest text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 uppercase resize-none"
            ></textarea>

            <button className="w-full bg-black text-white dark:bg-[#b91c1c] dark:text-white hover:bg-[#b91c1c] dark:hover:bg-white dark:hover:text-black font-bold py-4 md:py-5 rounded-xl transition-all duration-500 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[10px] flex items-center justify-center gap-2 md:gap-3 group shadow-lg">
              Submit Inquiry
              <Send size={14} className="md:w-[16px] md:h-[16px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeContact;