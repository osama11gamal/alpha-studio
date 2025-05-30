import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const features = [
    {
      title: language === 'en' ? 'Creative Writing' : 'كتابة إبداعية',
      description: language === 'en' 
        ? 'Craft compelling narratives that captivate readers' 
        : 'صياغة قصص جذابة تأسر القراء',
      icon: '✍️'
    },
    {
      title: language === 'en' ? 'Visual Storytelling' : 'سرد بصري',
      description: language === 'en'
        ? 'Bring stories to life through stunning visuals'
        : 'إحياء القصص من خلال الصور المذهلة',
      icon: '🎨'
    },
    {
      title: language === 'en' ? 'Digital Publishing' : 'نشر رقمي',
      description: language === 'en'
        ? 'Share your stories with the world digitally'
        : 'مشاركة قصصك مع العالم رقمياً',
      icon: '📱'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-alpha-darker to-black">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-screen flex items-center justify-center overflow-hidden scroll-section" id="hero"
        >
          <div className="absolute inset-0 will-change-transform" style={{ perspective: '1200px' }}>
            <motion.video 
              src="/alpha-studio/assets/hero-video.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover object-center scale-105" // slight zoom for parallax
              poster="/alpha-studio/Home/hero-bg.jpg"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: 'easeOut' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-alpha-darker via-alpha-darker/60 to-transparent"></div>
          </div>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring', bounce: 0.4 }}
            className="absolute left-2 bottom-20 sm:left-12 sm:bottom-12 z-10 w-[95vw] max-w-xl px-2 sm:w-full sm:px-0"
            whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
          >
            <div className="bg-white/10 backdrop-blur-2xl border border-alpha-gold/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-2xl p-4 sm:p-10 text-right md:text-left animate__animated animate__fadeInLeft glassmorphism-glow">
              <h1 className="alpha-title text-3xl sm:text-5xl md:text-7xl mb-2 sm:mb-4 font-bold tracking-tight animate__animated animate__fadeInDown">
                {language === 'en' ? 'Alpha Studio' : 'ألفا ستوديو'}
              </h1>
              <h2 className="text-lg sm:text-2xl md:text-4xl font-display mb-2 sm:mb-4 text-alpha-gold animate__animated animate__fadeInUp animate__delay-1s">
                {language === 'en' ? 'Where History Meets Fiction' : 'حيث يلتقي التاريخ بالخيال'}
              </h2>
              <p className="text-base sm:text-lg md:text-2xl text-gray-200 mb-4 sm:mb-8 max-w-2xl animate__animated animate__fadeIn animate__delay-2s">
                {language === 'en' 
                  ? 'Discover our world of creative storytelling and immersive experiences'
                  : 'اكتشف عالمنا من القصص الإبداعية والتجارب الغامرة'}
              </p>
              <a 
                href="#novels" 
                className="inline-block bg-alpha-gold text-alpha-darker px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-xl font-bold hover:bg-alpha-gold/90 transition-colors duration-300 shadow-lg animate__animated animate__pulse animate__delay-3s hover:scale-105 active:scale-95 focus:ring-4 focus:ring-alpha-gold/40"
              >
                {language === 'en' ? 'Explore Our Works' : 'استكشف أعمالنا'}
              </a>
            </div>
          </motion.div>
          {/* Scroll Arrow + Indicator */}
          <motion.button
            type="button"
            onClick={() => document.getElementById('novels').scrollIntoView({ behavior: 'smooth' })}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-black/60 hover:bg-alpha-gold text-alpha-gold hover:text-alpha-darker rounded-full p-3 shadow-lg transition-colors duration-300 animate-bounce border-2 border-alpha-gold/40 hover:scale-110 active:rotate-12"
            aria-label="Scroll to novels section"
            whileHover={{ scale: 1.15, rotate: 12 }}
            whileTap={{ scale: 0.95, rotate: -12 }}
          >
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 16.5c-.28 0-.53-.11-.71-.29l-6-6a1.003 1.003 0 011.42-1.42L12 13.59l5.29-5.3a1.003 1.003 0 011.42 1.42l-6 6c-.18.18-.43.29-.71.29z"/>
            </svg>
            {/* Scroll indicator lines */}
            <span className="block w-1 h-6 mx-auto mt-1 bg-alpha-gold/60 rounded-full animate-pulse"></span>
          </motion.button>
        </motion.section>

        {/* Features Section */}
        <section className="py-24 bg-alpha-darker relative">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16"
            >
              {language === 'en' ? 'What We Offer' : 'ما نقدمه'}
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-alpha-darker/50 p-8 rounded-xl backdrop-blur-sm border border-alpha-gold/20 hover:border-alpha-gold/40 transition-colors duration-300 shadow-lg hover:scale-105 hover:shadow-alpha-gold/20"
                  whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(255, 215, 0, 0.10)' }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-alpha-gold">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Works Preview */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16"
            >
              {language === 'en' ? 'Featured Works' : 'أعمال مميزة'}
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                '/alpha-studio/Home/Novels.png', 
                '/alpha-studio/Home/Short Stories .png', 
                '/alpha-studio/Home/Comic Books.png'
              ].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative h-[400px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500"
                  whileHover={{ scale: 1.07, rotate: (index - 1) * 2 }}
                >
                  <motion.img 
                    src={image} 
                    alt="Featured Work" 
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110 will-change-transform"
                    style={{ filter: 'brightness(0.97) contrast(1.08)' }}
                    whileHover={{ scale: 1.13 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-alpha-darker via-alpha-darker/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-full h-1/3 pointer-events-none" style={{background: 'linear-gradient(120deg,rgba(255,255,255,0.13) 0%,rgba(255,255,255,0.01) 100%)', mixBlendMode: 'screen'}}></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {language === 'en' ? 'Featured Work' : 'عمل مميز'}
                    </h3>
                    <p className="text-gray-300">
                      {language === 'en' 
                        ? 'Discover more about this work' 
                        : 'اكتشف المزيد عن هذا العمل'}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;