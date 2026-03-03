import { Facebook, Twitter, Linkedin, Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom'; // <--- 1. IMPORT LINK
import logoImg from '../assets/logo.png'; 

const Footer = () => {
  return (
    // INVERTED: Outer wrapper is black in light mode, light gray in dark mode
    <footer className="bg-black dark:bg-gray-50 pt-20 md:pt-32 transition-colors duration-500">
      <div 
        // INVERTED: Main block is black in light mode, white in dark mode. Text is opposite.
        className="bg-[#0a0a0a] dark:bg-white text-white dark:text-black pt-24 md:pt-40 pb-12 px-6 md:px-8 flex flex-col items-center relative transition-colors duration-500 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.05)]"
        style={{ 
          clipPath: 'polygon(0 8vw, 25% 0%, 75% 0%, 100% 8vw, 100% 100%, 0% 100%)' 
        }}
      >
        {/* Brand Logo & Title */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-8 text-center">
          <img 
            src={logoImg} 
            alt="Global Footy Logo" 
            // INVERTED LOGO
            className="w-16 md:w-28 h-auto object-contain invert dark:invert-0 transition-all" 
          />
          <div className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase">
            Global Footy
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest mb-8 md:mb-10 mt-4 text-center">Follow Now</h3>
        
        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12 md:mb-16">
          <Facebook size={24} className="md:w-7 md:h-7 cursor-pointer hover:text-[#b91c1c] dark:hover:text-[#b91c1c] transition-colors" />
          <Twitter size={24} className="md:w-7 md:h-7 cursor-pointer hover:text-[#b91c1c] dark:hover:text-[#b91c1c] transition-colors" />
          <Linkedin size={24} className="md:w-7 md:h-7 cursor-pointer hover:text-[#b91c1c] dark:hover:text-[#b91c1c] transition-colors" />
          <Instagram size={24} className="md:w-7 md:h-7 cursor-pointer hover:text-[#b91c1c] dark:hover:text-[#b91c1c] transition-colors" />
          <Youtube size={24} className="md:w-7 md:h-7 cursor-pointer hover:text-[#b91c1c] dark:hover:text-[#b91c1c] transition-colors" />
        </div>

        {/* Contact Information Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-12 md:mb-16 text-xs md:text-sm font-semibold tracking-wide w-full">
          
          {/* Location */}
          <a 
            href="https://maps.google.com/?q=Deira,+Dubai,+UAE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 group hover:text-[#b91c1c] dark:hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <MapPin size={20} className="md:w-[22px] md:h-[22px] text-white/60 dark:text-black/60 group-hover:text-[#b91c1c] dark:group-hover:text-[#b91c1c] transition-colors" />
            <span className="text-white/80 dark:text-black/80 group-hover:text-white dark:group-hover:text-black transition-colors">Deira, Dubai, UAE</span>
          </a>

          {/* Email */}
          <a 
            href="mailto:hello@globalfootytrade.com" 
            className="flex items-center gap-3 group hover:text-[#b91c1c] dark:hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <Mail size={20} className="md:w-[22px] md:h-[22px] text-white/60 dark:text-black/60 group-hover:text-[#b91c1c] dark:group-hover:text-[#b91c1c] transition-colors" />
            <span className="text-white/80 dark:text-black/80 group-hover:text-white dark:group-hover:text-black transition-colors break-all text-center">hello@globalfootytrade.com</span>
          </a>

          {/* Phone */}
          <a 
            href="https://wa.me/92090078601" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 group hover:text-[#b91c1c] dark:hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <Phone size={20} className="md:w-[22px] md:h-[22px] text-white/60 dark:text-black/60 group-hover:text-[#b91c1c] dark:group-hover:text-[#b91c1c] transition-colors" />
            <span className="text-white/80 dark:text-black/80 group-hover:text-white dark:group-hover:text-black transition-colors">Call +92 090078601</span>
          </a>

        </div>

        {/* 2. UPDATED COPYRIGHT & LEGAL LINKS */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-[10px] md:text-xs text-white/40 dark:text-black/40 tracking-widest uppercase text-center mt-4 md:mt-0">
          <p>2026 All Rights Reserved. Design by First bite</p>
          <span className="hidden md:block">|</span>
          <Link to="/privacy-policy" className="hover:text-[#b91c1c] dark:hover:text-[#b91c1c] transition-colors">
            Privacy Policy
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;