const PurchaseBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-md border-t border-black/10 dark:border-white/10 px-4 md:px-10 py-3 md:py-4 flex justify-between items-center z-[50] transition-colors duration-500">
      
      <div className="flex items-center gap-4 md:gap-6">
        <div>
          <h4 className="text-[9px] md:text-xs uppercase opacity-60 dark:opacity-50 text-black dark:text-white">Match Pro Football</h4>
          {/* Updated orange-500 to brand red #b91c1c */}
          <p className="text-[#b91c1c] font-bold text-sm md:text-base">$159.00</p>
        </div>
        <div className="hidden md:flex gap-4 text-xs uppercase tracking-tighter text-black dark:text-white">
          <span className="text-[#b91c1c] underline">Standard</span>
          <span className="opacity-40 hover:opacity-100 transition-opacity cursor-pointer">Premium</span>
          <span className="opacity-40 hover:opacity-100 transition-opacity cursor-pointer">Elite</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4 text-black dark:text-white">
        <div className="flex items-center border border-black/20 dark:border-white/20 rounded-md overflow-hidden transition-colors duration-500">
          <button className="px-2 md:px-3 py-1 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">-</button>
          <span className="px-2 md:px-4 text-xs md:text-sm font-bold">1</span>
          <button className="px-2 md:px-3 py-1 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">+</button>
        </div>
        <button className="bg-black text-white dark:bg-white dark:text-black px-4 md:px-8 py-2 md:py-2.5 rounded-md text-[9px] md:text-sm font-bold hover:bg-[#b91c1c] hover:text-white dark:hover:bg-[#b91c1c] dark:hover:text-white transition-all shadow-md">
          ADD TO CART
        </button>
      </div>

    </div>
  );
};

export default PurchaseBar;