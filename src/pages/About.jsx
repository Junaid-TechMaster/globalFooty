import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Award } from 'lucide-react';
import p1 from '../assets/p1.png'; 

const About = () => {
  const stats = [
    { label: 'Countries Reached', value: '40+' },
    { label: 'Clubs Equipped', value: '1.2k' },
    { label: 'Standard', value: 'FIFA Pro' },
    { label: 'Innovation Patents', value: '12' },
  ];

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen pt-32 md:pt-48 pb-20 px-6 md:px-10 relative overflow-hidden transition-colors duration-500">
      {/* Background Cinematic Glows */}
      <div className="absolute top-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#b91c1c] rounded-full blur-[150px] md:blur-[200px] opacity-10 dark:opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-24 md:mb-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="text-[#b91c1c] text-[10px] uppercase tracking-[0.5em] font-bold mb-4 md:mb-6 block">
              Our Identity
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif tracking-tighter uppercase mb-6 md:mb-8 leading-[0.9]">
              Obsessed <br className="hidden sm:block"/> With <span className="italic text-black/30 dark:text-white/20">The Flight.</span>
            </h1>
            <p className="text-black/60 dark:text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 uppercase tracking-widest">
              Global Footy was founded on a single obsession: the perfect aerodynamic curve. We don't just manufacture equipment; we engineer the tools that define the beautiful game.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center mt-10 lg:mt-0"
          >
             <div className="absolute inset-0 bg-[#b91c1c] rounded-full blur-[80px] md:blur-[120px] opacity-15 dark:opacity-20 animate-pulse" />
             <img src={p1} alt="Innovation" className="w-3/4 sm:w-4/5 h-auto relative z-10 drop-shadow-[0_20px_30px_rgba(185,28,28,0.2)] dark:drop-shadow-[0_35px_35px_rgba(185,28,28,0.3)]" />
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24 md:mb-40 border-y border-black/10 dark:border-white/10 py-12 md:py-16 transition-colors duration-500">
          {stats.map((stat, i) => (
            <div key={i} className="text-center lg:text-left">
              <p className="text-[#b91c1c] text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-1 md:mb-2">{stat.value}</p>
              <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-60 dark:opacity-40 font-bold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-24 md:mb-40">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif uppercase tracking-tight italic">The Pillars of Global Footy</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {[
              { icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />, title: "Precision Engineering", desc: "Every seam is thermally bonded to ensure zero water absorption and a perfect spherical shape." },
              { icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />, title: "Elite Durability", desc: "Tested in the harshest conditions, from concrete street courts to professional stadium turf." },
              { icon: <Globe className="w-6 h-6 md:w-8 md:h-8" />, title: "Global Access", desc: "Bridging the gap between grassroots football and professional grade equipment worldwide." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 md:p-10 bg-gray-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl hover:border-[#b91c1c]/50 dark:hover:border-[#b91c1c]/50 transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                <div className="text-[#b91c1c] mb-4 md:mb-6">{value.icon}</div>
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest mb-3 md:mb-4">{value.title}</h3>
                <p className="text-[10px] md:text-xs text-black/60 dark:text-gray-400 leading-relaxed tracking-wider uppercase">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Statement (Stays Red & White for brand impact) */}
        <div className="bg-[#b91c1c] p-8 sm:p-12 md:p-24 rounded-[2rem] md:rounded-[3rem] text-center relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <Award className="mx-auto mb-6 md:mb-8 text-white opacity-80 dark:opacity-50 w-10 h-10 md:w-12 md:h-12" />
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight max-w-4xl mx-auto relative z-10 text-white">
            "Our mission is to put a professional-grade ball at the feet of every dreamer, in every corner of the world."
          </h2>
        </div>

      </div>
    </div>
  );
};

export default About;