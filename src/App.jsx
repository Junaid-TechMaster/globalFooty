import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; 
import ScrollToTop from './components/ScrollToTop'; 
import BackToTop from './components/BackToTop'; 
import Navbar from './components/Navbar';
import Cart from './components/Cart'; 

// Sections for Home Page
import Hero from './sections/Hero';
import Collection from './sections/Collection'; 
import Highlights from './sections/Highlights';
import Services from './sections/Services'; 
import VideoGallery from './sections/VideoGallery';
import Pricing from './sections/Pricing'; 
import Customizer from './sections/Customizer'; 
import HomeContact from './sections/HomeContact';
import Footer from './sections/Footer';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';

// Full Pages
import CollectionPage from './pages/CollectionPage';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import About from './pages/About'; 
import CustomDesign from './pages/CustomDesign'; 
import Checkout from './pages/Checkout';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop /> 
        
        {/* ADDED THEME CLASSES HERE for smooth background transitions */}
        <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen flex flex-col relative overflow-hidden transition-colors duration-500">
          <Navbar />
          <Cart /> 
          <BackToTop />

          <main className="flex-grow">
            <Routes>
              {/* HOME ROUTE */}
              <Route path="/" element={
                <>
                  <Hero />
                  <div id="collection"><Collection /></div> 
                  <Highlights />
                  <Services /> 
                  <VideoGallery />
                  <Pricing />       
                  <Customizer />
                  <Testimonials />
                  <FAQ />
                  <HomeContact />
                </>
              } />

              {/* INTERIOR ROUTES */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/custom-design" element={<CustomDesign />} />
              <Route path="/collection" element={<CollectionPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;