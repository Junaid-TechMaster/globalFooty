import { motion } from 'framer-motion';

// 1. Import your local images
import ccgImg from '../assets/CCG.png';
import baImg from '../assets/BA.png';

const servicesData = [
  {
    title: "CUSTOM CLUB GEAR",
    description: "Equip your entire squad with premium, bespoke footballs designed to match your club's identity. From local leagues to professional academies, we engineer match-ready balls with your colors and crest.",
    image: ccgImg, 
    align: "left"
  },
  {
    title: "TOURNAMENT SPONSORSHIP",
    description: "Elevate your next corporate or competitive tournament. We provide FIFA-quality match balls engineered for peak performance, ensuring your event feels authentic from the first whistle to the final penalty.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop",
    align: "right"
  },
  {
    title: "BRAND ACTIVATIONS",
    description: "Make a statement on and off the pitch. We collaborate with brands to design highly stylized, limited-edition footballs perfect for marketing campaigns, giveaways, and exclusive retail drops.",
    image: baImg, 
    align: "left"
  }
];

const Services = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-20 md:py-32 px-6 md:px-8 overflow-hidden font-sans border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-28">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-[#b91c1c] font-bold block mb-4"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tighter italic uppercase"
          >
            How We Help You
          </motion.h2>
        </div>

        {/* Alternating Service Rows */}
        <div className="space-y-24 md:space-y-32 lg:space-y-40">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              // Changed to flex-col-reverse on mobile so text is always under the image
              className={`flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-24 ${
                service.align === "right" ? 'md:flex-row-reverse' : ''
              }`}
            >
              
              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: service.align === "right" ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`w-full md:w-1/2 flex flex-col ${service.align === "right" ? 'md:items-start text-center md:text-left' : 'md:items-end text-center md:text-right'}`}
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-widest mb-4 md:mb-6 leading-tight">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm opacity-70 dark:opacity-60 leading-relaxed font-light max-w-md mb-8 md:mb-10 mx-auto md:mx-0">
                  {service.description}
                </p>
                
                {/* Fixed group hover transition for the "Read More" link */}
                <button className={`flex items-center gap-3 md:gap-4 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-[#b91c1c] hover:text-black dark:hover:text-white transition-colors group mx-auto ${service.align === "right" ? 'md:mx-0 md:mr-auto' : 'md:mx-0 md:ml-auto'}`}>
                  <span className="relative pb-1">
                    Read More
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-2 transition-transform duration-300">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </motion.div>

              {/* Circular Image Container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="w-full md:w-1/2 flex justify-center"
              >
                <div className="relative group cursor-pointer">
                  {/* Outer glowing ring */}
                  <div className="absolute inset-[-10px] md:inset-[-15px] rounded-full border border-black/10 dark:border-white/10 group-hover:border-[#b91c1c]/50 transition-colors duration-700" />
                  
                  {/* Scaled down the circle for mobile */}
                  <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-2 border-black/5 dark:border-white/5 relative bg-gray-100 dark:bg-[#0a0a0a] transition-colors duration-500">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 dark:opacity-80 group-hover:opacity-100"
                    />
                    {/* Shadow overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 dark:from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;