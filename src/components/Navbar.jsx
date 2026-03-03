import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, ShoppingBag, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext'; 
import logoImg from '../assets/logo.png'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // THEME STATE LOGIC
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, setIsCartOpen } = useCart();
  
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Apply Theme to HTML element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsSearchOpen(false);
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const isActive = (path) => location.pathname === path;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/collection?search=${searchQuery.trim()}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const navLinks = [
    { name: 'Home', path: '/', type: 'route' },
    { name: 'About', path: '/about', type: 'route' },
    { name: 'Collection', path: '/collection', type: 'route' }, 
    { name: 'Custom Design', path: '/custom-design', type: 'route' },
    { name: 'Contact Us', path: '/contact', type: 'route' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-500">
      
      {/* SEARCH OVERLAY PANEL (Inverted) */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            // INVERTED: Black by default, White in dark mode
            className="absolute top-0 left-0 w-full bg-black dark:bg-white border-b border-[#b91c1c]/50 p-6 z-[110] shadow-2xl transition-colors duration-500"
          >
            <form onSubmit={handleSearchSubmit} className="max-w-4xl mx-auto flex items-center gap-4">
              <Search className="text-[#b91c1c]" size={24} />
              <input 
                autoFocus
                type="text" 
                placeholder="Search for 'Match', 'Training'..."
                // INVERTED TEXT
                className="bg-transparent border-none outline-none text-xl md:text-3xl font-serif italic text-white dark:text-black w-full placeholder:text-white/20 dark:placeholder:text-black/20 uppercase tracking-tighter"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="button" onClick={() => setIsSearchOpen(false)} className="hover:rotate-90 transition-transform">
                <X className="text-white/40 dark:text-black/40 hover:text-[#b91c1c] dark:hover:text-[#b91c1c]" size={28} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div 
        // INVERTED BACKGROUNDS
        className={`w-full flex justify-center transition-all duration-500 ${
          isScrolled 
            ? 'py-3 bg-black/90 dark:bg-white/90 backdrop-blur-xl border-b border-white/10 dark:border-black/10' 
            : 'pt-4 pb-6 bg-black dark:bg-white'
        }`}
        style={{ 
          clipPath: (isScrolled || isOpen) 
            ? 'none' 
            : 'polygon(0 0, 100% 0, 100% 80%, 75% 100%, 25% 100%, 0 80%)' 
        }}
      >
        <div className="w-full max-w-7xl px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
            <img 
              src={logoImg} 
              alt="Logo" 
              // INVERTED LOGO: Invert normally (since bg is black), revert to normal in dark mode (since bg is white)
              className="w-10 md:w-12 h-auto object-contain transition-all invert dark:invert-0" 
            />
            {/* INVERTED TEXT */}
            <div className="text-xl md:text-2xl font-black tracking-tighter uppercase transition-colors duration-500 text-white dark:text-black">
              Global Footy
            </div>
          </Link>

          {/* DESKTOP NAV (Inverted Text) */}
          <nav className="hidden lg:flex items-center gap-8 font-bold text-xs uppercase tracking-widest transition-colors duration-500 text-white dark:text-black">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`relative py-1 transition-colors hover:text-[#b91c1c] ${active ? 'text-[#b91c1c]' : ''}`}
                >
                  {link.name}
                  {active && (
                    <motion.div 
                      layoutId="navUnderline"
                      className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#b91c1c]"
                    />
                  )}
                </Link>
              );
            })}
            
            {/* Desktop Icons: Search, Cart, Theme Toggle (Inverted Borders) */}
            <div className="flex items-center gap-4 ml-2 border-l border-white/20 dark:border-black/20 pl-6 opacity-80">
              <button onClick={() => setIsSearchOpen(true)} className="hover:text-[#b91c1c] transition-colors">
                <Search size={16} strokeWidth={2.5} />
              </button>
              
              <button onClick={() => setIsCartOpen(true)} className="hover:text-[#b91c1c] transition-colors relative">
                <ShoppingBag size={16} strokeWidth={2.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#b91c1c] text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>

              <button onClick={toggleTheme} className="hover:text-[#b91c1c] transition-colors">
                {theme === 'dark' ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
              </button>
            </div>
          </nav>

          {/* MOBILE TOGGLE & ICONS (Inverted Text) */}
          <div className="flex lg:hidden items-center gap-3 md:gap-5 text-white dark:text-black">
            <button onClick={() => setIsSearchOpen(true)}>
              <Search size={18} />
            </button>
            
            <button onClick={() => setIsCartOpen(true)} className="relative">
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#b91c1c] text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            <button onClick={toggleTheme}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button onClick={toggleMenu} className="ml-1 transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY (Inverted) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            // INVERTED: Black in light mode, White in dark mode
            className="fixed inset-0 bg-black/95 dark:bg-white/95 backdrop-blur-2xl z-[90] flex flex-col items-center justify-center lg:hidden transition-colors duration-500"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={link.path} 
                    onClick={toggleMenu}
                    // INVERTED TEXT
                    className={`text-2xl font-serif italic transition-colors tracking-tighter ${
                      isActive(link.path) ? 'text-[#b91c1c]' : 'text-white dark:text-black'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;