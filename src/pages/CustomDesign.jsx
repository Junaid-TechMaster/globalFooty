import { useState } from 'react';
import Customizer from '../sections/Customizer';
import { Upload, X, CheckCircle2 } from 'lucide-react';

const CustomDesign = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setUploadedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white dark:bg-black transition-colors duration-500 pt-20 md:pt-32 pb-20 min-h-screen">
      
      {/* 1. The Interactive 3D Customizer Section - Passing the image prop */}
      <Customizer externalImage={uploadedImage} />

      {/* 2. Upload Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mt-12 md:mt-20">
        <div className="border-t border-black/10 dark:border-white/10 pt-12 md:pt-20 transition-colors duration-500">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            
            <div className="w-full lg:w-1/3 text-center lg:text-left">
              <span className="text-[#b91c1c] text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-bold mb-3 md:mb-4 block">
                External Concept
              </span>
              <h2 className="text-3xl md:text-4xl font-serif italic mb-4 md:mb-6 text-black dark:text-white">
                Upload Your <br className="hidden md:block"/> Own Concept
              </h2>
              <p className="text-black/60 dark:text-gray-400 text-[10px] md:text-xs leading-relaxed uppercase tracking-widest max-w-md mx-auto lg:mx-0">
                Already have a mockup or a team logo? Upload it here. Our engineers will review your file and map it to our professional 3D templates for a perfect fit.
              </p>
            </div>

            <div className="w-full lg:w-2/3">
              {!uploadedImage ? (
                <label className="group relative flex flex-col items-center justify-center w-full h-48 md:h-64 border-2 border-dashed border-black/20 dark:border-white/10 rounded-2xl cursor-pointer hover:border-[#b91c1c]/50 dark:hover:border-[#b91c1c]/50 hover:bg-[#b91c1c]/5 transition-all">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="text-black/40 dark:text-gray-400 group-hover:text-[#b91c1c] mb-3 md:mb-4 transition-colors w-6 h-6 md:w-8 md:h-8" />
                    <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-black/50 dark:text-gray-400 text-center px-4">Click to upload JPG, PNG or AI files</p>
                  </div>
                  <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
                </label>
              ) : (
                <div className="relative w-full rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-4 transition-colors duration-500 shadow-md">
                  <div className="flex justify-between items-center mb-4 px-2">
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-500">
                      <CheckCircle2 size={16} className="md:w-5 md:h-5" />
                      <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold">File Ready for Workshop</span>
                    </div>
                    <button onClick={() => setUploadedImage(null)} className="text-black/40 dark:text-white/40 hover:text-[#b91c1c] dark:hover:text-[#b91c1c] transition-colors p-1">
                      <X size={18} className="md:w-5 md:h-5" />
                    </button>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left">
                    <img src={uploadedImage} alt="Preview" className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg border border-black/10 dark:border-white/20 bg-white" />
                    <div className="flex flex-col items-center sm:items-start">
                        <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest mb-1 md:mb-2 text-black dark:text-white">Design Concept Received</h4>
                        <p className="text-[9px] md:text-[10px] text-black/50 dark:text-gray-500 uppercase tracking-widest mb-4">You can now see this image on the ball above.</p>
                        <button 
                          className="bg-black text-white dark:bg-white dark:text-black text-[8px] md:text-[9px] font-bold py-2.5 px-6 uppercase tracking-widest hover:bg-[#b91c1c] dark:hover:bg-[#b91c1c] hover:text-white dark:hover:text-white transition-colors rounded-md shadow-md"
                          onClick={() => window.open(`https://wa.me/YOUR_NUMBER?text=Hey! I just uploaded a custom concept to the lab. Can we discuss the production?`)}
                        >
                          Confirm & Message
                        </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomDesign;