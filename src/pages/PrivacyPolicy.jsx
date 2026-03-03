import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen pt-32 md:pt-48 pb-20 px-6 md:px-10 relative overflow-hidden transition-colors duration-500">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#b91c1c] rounded-full blur-[150px] md:blur-[200px] opacity-10 dark:opacity-5 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20 border-b border-black/10 dark:border-white/10 pb-10"
        >
          <div className="flex items-center gap-3 mb-6 text-[#b91c1c]">
            <ShieldCheck size={24} />
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Legal Directory</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif tracking-tighter uppercase mb-6 leading-[0.9]">
            Privacy <span className="italic text-black/40 dark:text-white/40">Policy</span>
          </h1>
          <p className="text-[10px] md:text-xs uppercase tracking-widest text-black/50 dark:text-gray-500">
            Last Updated: March 2026
          </p>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12 text-sm md:text-base leading-relaxed text-black/80 dark:text-white/80 font-light"
        >
          <section>
            <h2 className="text-xl md:text-2xl font-serif uppercase tracking-widest mb-4 text-black dark:text-white font-bold">1. Introduction</h2>
            <p>
              Global Footy ("we," "our," or "us") respects your privacy and is committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, use our Custom Design Lab, or purchase our professional-grade sporting equipment.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-serif uppercase tracking-widest mb-4 text-black dark:text-white font-bold">2. Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2 opacity-80">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and shipping address.</li>
              <li><strong>Order Details:</strong> Order history, custom design files (e.g., logos, concept art), and club affiliations.</li>
              <li><strong>Payment Information:</strong> Processed securely via our third-party payment gateways (e.g., Stripe). We do not store full credit card details on our servers.</li>
              <li><strong>Automated Data:</strong> IP addresses, browser types, and interaction data via cookies to optimize the 3D viewing experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-serif uppercase tracking-widest mb-4 text-black dark:text-white font-bold">3. How We Use Your Data</h2>
            <p className="mb-4">Your information is used strictly to enhance your experience and fulfill your orders:</p>
            <ul className="list-disc pl-6 space-y-2 opacity-80">
              <li>To manufacture and deliver your custom and batch football orders.</li>
              <li>To communicate production updates, shipping details, and workshop queries.</li>
              <li>To map custom concepts to our 3D Customizer Lab accurately.</li>
              <li>To comply with international trade and shipping regulations out of our Dubai headquarters.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-serif uppercase tracking-widest mb-4 text-black dark:text-white font-bold">4. Data Sharing & Security</h2>
            <p>
              We do not sell your personal data. We only share information with trusted third-party partners necessary to fulfill your order (e.g., global logistics providers, payment processors, and our manufacturing workshops). We use industry-standard encryption and secure server hosting to protect your intellectual property (including custom club designs) and personal data from unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-serif uppercase tracking-widest mb-4 text-black dark:text-white font-bold">5. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you have the right to request access to, correction of, or deletion of your personal data. If you wish to have your custom design files purged from our workshop database after production, please contact your dedicated account manager.
            </p>
          </section>

          <section className="p-8 bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl">
            <h2 className="text-lg md:text-xl font-serif uppercase tracking-widest mb-4 text-black dark:text-white font-bold">Contact the Data Team</h2>
            <p className="text-sm opacity-80 mb-4">
              For any privacy-related questions or to exercise your data rights, please contact our legal and support team:
            </p>
            <p className="font-mono text-sm text-[#b91c1c]">hello@globalfootytrade.com</p>
            <p className="text-xs uppercase tracking-widest mt-4 opacity-60">Global Footy Headquarters | Deira, Dubai, UAE</p>
          </section>
        </motion.div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;