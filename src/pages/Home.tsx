import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import images
import heroImage from '/alpha-studio/Home/hero-bg.jpg';
import novelsImage from '/alpha-studio/Home/Novels.png';
import shortStoriesImage from '/alpha-studio/Home/Short Stories .png';
import comicBooksImage from '/alpha-studio/Home/Comic Books.png';

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
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Alpha Studio" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-alpha-darker via-alpha-darker/60 to-transparent"></div>
          </div>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative z-10 text-center px-4"
          >
            <h1 className="alpha-title text-6xl md:text-8xl mb-6 font-bold tracking-tight">
              {language === 'en' ? 'Alpha Studio' : 'ألفا ستوديو'}
            </h1>
            <h2 className="text-3xl md:text-5xl font-display mb-8 text-alpha-gold">
              {language === 'en' ? 'Where History Meets Fiction' : 'حيث يلتقي التاريخ بالخيال'}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Discover our world of creative storytelling and immersive experiences'
                : 'اكتشف عالمنا من القصص الإبداعية والتجارب الغامرة'}
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/works" 
                className="inline-block bg-alpha-gold text-alpha-darker px-8 py-4 rounded-full text-xl font-bold hover:bg-alpha-gold/90 transition-colors duration-300"
              >
                {language === 'en' ? 'Explore Our Works' : 'استكشف أعمالنا'}
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Available Novels Section */}
        <section className="py-20 bg-alpha-darker/90 relative z-20" style={{marginTop: 0}}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-gold mb-10 text-center">
              {language === 'ar' ? 'الروايات المتاحة' : 'Available Novels'}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <div className="w-full md:w-1/4 flex-shrink-0">
                <img 
                  src={require('../../public/Novels/The Blue Wolf .jpg')} 
                  alt={language === 'ar' ? 'الذئب الأزرق' : 'The Blue Wolf'} 
                  className="rounded-xl shadow-xl w-full object-cover aspect-[3/4] border border-alpha-gold/30"
                  loading="lazy"
                  onError={e => e.currentTarget.src = '/placeholder.png'}
                />
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {language === 'ar' ? 'الذئب الأزرق' : 'The Blue Wolf'}
                </h3>
                <p className="text-gray-300 mb-3">
                  {language === 'ar' 
                    ? 'رواية خيال علمي مشوقة بقلم عمر دحيم. متاحة الآن مجاناً رقمياً أو بنسخة مطبوعة.'
                    : 'A thrilling sci-fi novel by Omar Duhaim. Available now for free (digital) or as a premium print.'}
                </p>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-green-500 font-bold text-lg">{language === 'ar' ? 'متاح الآن' : 'Available Now'}</span>
                  <span className="text-blue-400 font-bold text-lg">{language === 'ar' ? 'مجاناً' : 'FREE'}</span>
                </div>
                <Link 
                  to="/blue-wolf"
                  className="btn-primary px-6 py-2 rounded-lg text-base font-bold hover:scale-105 transition-transform duration-300 inline-block mt-1"
                >
                  {language === 'ar' ? 'تفاصيل الرواية' : 'View Details'}
                </Link>
              </div>
            </div>
          </div>
        </section>

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
                  className="bg-alpha-darker/50 p-8 rounded-xl backdrop-blur-sm border border-alpha-gold/20 hover:border-alpha-gold/40 transition-colors duration-300"
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
              {[novelsImage, shortStoriesImage, comicBooksImage].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative h-[400px] rounded-xl overflow-hidden"
                >
                  <img 
                    src={image} 
                    alt="Featured Work" 
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-alpha-darker via-alpha-darker/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;