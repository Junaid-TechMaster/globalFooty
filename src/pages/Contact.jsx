import { motion } from 'framer-motion';
import { Mail, Phone, Send, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen pt-32 md:pt-48 pb-20 px-6 md:px-10 relative overflow-hidden transition-colors duration-500">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#b91c1c] rounded-full blur-[100px] md:blur-[180px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#b91c1c] rounded-full blur-[100px] md:blur-[180px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* Left Side: Brand Presence */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-4 md:mt-10 text-center lg:text-left" 
        >
          <span className="text-[#b91c1c] text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-bold mb-4 md:mb-6 block">
            Get In Touch
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif tracking-tighter uppercase mb-6 md:mb-8 leading-[0.9]">
            Let's build <br className="hidden sm:block"/> <span className="italic text-black/30 dark:text-white/20">The Future</span> <br className="hidden sm:block"/> of Football.
          </h1>
          
          <div className="space-y-6 md:space-y-8 mt-8 md:mt-12 flex flex-col items-center lg:items-start">
            
            {/* Email */}
            <a href="mailto:hello@globalfootytrade.com" className="flex items-center gap-4 md:gap-6 group cursor-pointer w-full max-w-sm justify-center lg:justify-start">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-[#b91c1c] group-hover:border-[#b91c1c] group-hover:text-white transition-all duration-500 shrink-0">
                <Mail size={18} className="md:w-5 md:h-5" />
              </div>
              <div className="text-left">
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40">Email Us</p>
                <p className="text-sm md:text-lg font-light group-hover:text-[#b91c1c] transition-colors">hello@globalfootytrade.com</p>
              </div>
            </a>

            {/* Phone */}
            <a href="https://wa.me/92090078601" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-6 group cursor-pointer w-full max-w-sm justify-center lg:justify-start">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-[#b91c1c] group-hover:border-[#b91c1c] group-hover:text-white transition-all duration-500 shrink-0">
                <Phone size={18} className="md:w-5 md:h-5" />
              </div>
              <div className="text-left">
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40">WhatsApp / Call</p>
                <p className="text-sm md:text-lg font-light group-hover:text-[#b91c1c] transition-colors">+92 090078601</p>
              </div>
            </a>

            {/* Location */}
            <a href="https://maps.google.com/?q=Deira,+Dubai,+UAE" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-6 group cursor-pointer w-full max-w-sm justify-center lg:justify-start">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-[#b91c1c] group-hover:border-[#b91c1c] group-hover:text-white transition-all duration-500 shrink-0">
                <MapPin size={18} className="md:w-5 md:h-5" />
              </div>
              <div className="text-left">
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40">Headquarters</p>
                <p className="text-sm md:text-lg font-light group-hover:text-[#b91c1c] transition-colors">Deira, Dubai, UAE</p>
              </div>
            </a>

          </div>
        </motion.div>

        {/* Right Side: Modern Glass Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 backdrop-blur-xl p-6 md:p-12 rounded-2xl md:rounded-3xl mt-4 md:mt-10 shadow-2xl transition-colors duration-500"
        >
          <form className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-1 md:space-y-2">
                <label className="text-[9px] md:text-[10px] uppercase tracking-widest text-black/60 dark:text-white/60 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 md:py-4 focus:outline-none focus:border-[#b91c1c] dark:focus:border-[#b91c1c] transition-colors text-xs md:text-sm text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30"
                />
              </div>
              <div className="space-y-1 md:space-y-2">
                <label className="text-[9px] md:text-[10px] uppercase tracking-widest text-black/60 dark:text-white/60 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 md:py-4 focus:outline-none focus:border-[#b91c1c] dark:focus:border-[#b91c1c] transition-colors text-xs md:text-sm text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30"
                />
              </div>
            </div>

            <div className="space-y-1 md:space-y-2 relative">
              <label className="text-[9px] md:text-[10px] uppercase tracking-widest text-black/60 dark:text-white/60 ml-1">Subject</label>
              <select className="w-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 md:py-4 focus:outline-none focus:border-[#b91c1c] dark:focus:border-[#b91c1c] transition-colors text-xs md:text-sm text-black dark:text-white appearance-none cursor-pointer">
                <option className="bg-white dark:bg-black text-black dark:text-white">Custom Club Inquiry</option>
                <option className="bg-white dark:bg-black text-black dark:text-white">Partnership</option>
                <option className="bg-white dark:bg-black text-black dark:text-white">General Support</option>
              </select>
              {/* Custom dropdown arrow */}
              <div className="absolute inset-y-0 right-4 top-5 md:top-6 flex items-center pointer-events-none text-black/40 dark:text-white/40">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>

            <div className="space-y-1 md:space-y-2">
              <label className="text-[9px] md:text-[10px] uppercase tracking-widest text-black/60 dark:text-white/60 ml-1">Message</label>
              <textarea 
                rows="4" 
                placeholder="How can we help your squad?" 
                className="w-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 md:py-4 focus:outline-none focus:border-[#b91c1c] dark:focus:border-[#b91c1c] transition-colors text-xs md:text-sm text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 resize-none"
              ></textarea>
            </div>

            <button type="button" className="w-full bg-[#b91c1c] text-white hover:bg-black dark:hover:bg-white dark:hover:text-black font-bold py-4 md:py-5 rounded-xl transition-all duration-500 uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center justify-center gap-2 md:gap-3 group shadow-lg mt-2">
              Send Message
              <Send size={14} className="md:w-4 md:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;