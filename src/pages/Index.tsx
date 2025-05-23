import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Index = () => {
  const { language } = useLanguage();
  
  return (
    <div className={cn("min-h-screen flex flex-col", language === 'ar' && "lang-ar")} lang={language}>
      <Navbar />
      
      <main className="flex-grow">
        <HeroSlider />
        
        <div className="section-divider"></div>
        
        {/* Short Introduction Section */}
        <section className="py-16 bg-alpha-charcoal/80 rounded-3xl shadow-xl backdrop-blur-md mx-2 my-8">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="alpha-subtitle text-2xl md:text-3xl font-bold mb-2 text-alpha-blue drop-shadow-lg">
                {language === 'en' ? 'Welcome to Alpha Studio' : 'مرحباً بكم في ألفا ستوديو'}
              </h2>
              <h3 className="alpha-title mb-8 text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
                {language === 'en' ? 'Turning imagination into reality' : 'نحول الخيال إلى واقع'}
              </h3>
              <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
                {language === 'en' 
                  ? 'Alpha Studio is a creative powerhouse that blends traditional storytelling with cutting-edge visual expression. We craft narratives that transcend boundaries, taking you on journeys through worlds both familiar and fantastical.' 
                  : 'ألفا ستوديو هو مركز إبداعي يمزج بين السرد التقليدي والتعبير البصري المتطور. نحن نصنع روايات تتجاوز الحدود، آخذينك في رحلات عبر عوالم مألوفة وخيالية.'}
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-6">
                <Link to="/works" className="btn-primary rounded-xl shadow-lg text-lg px-8 py-3 transition-all duration-300 hover:scale-105">
                  {language === 'en' ? 'Explore Our Worlds' : 'استكشف عوالمنا'}
                </Link>
                <Link to="/about" className="btn-secondary rounded-xl shadow-lg text-lg px-8 py-3 transition-all duration-300 hover:scale-105">
                  {language === 'en' ? 'Join the Family' : 'انضم إلى العائلة'}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="section-divider"></div>
      </main>
    </div>
  );
};

export default Index;
