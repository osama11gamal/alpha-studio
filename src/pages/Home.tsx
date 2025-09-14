import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Custom SVG Icons for menu items
const MenuIcons = {
  novels: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  about: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  ),
  contact: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  buy: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
  )
};

const MainMenu = () => {
  const { language } = useLanguage();

  const menuItems = [
    {
      id: 'novels',
      titleEn: 'Novels',
      titleAr: 'الروايات',
      subtitleEn: 'Explore our stories',
      subtitleAr: 'استكشف رواياتنا',
      icon: MenuIcons.novels,
      path: '/novels',
      isButton: false
    },
    {
      id: 'about',
      titleEn: 'About Alpha',
      titleAr: 'عن ألفا',
      subtitleEn: 'Our journey',
      subtitleAr: 'رحلتنا',
      icon: MenuIcons.about,
      path: '/about',
      isButton: false
    },
    {
      id: 'contact',
      titleEn: 'Contact Us',
      titleAr: 'تواصل معنا',
      subtitleEn: 'Let\'s talk',
      subtitleAr: 'دعنا نتحدث',
      icon: MenuIcons.contact,
      path: '/contact',
      isButton: false
    },
    {
      id: 'works',
      titleEn: 'Our Works',
      titleAr: 'أعمالنا',
      subtitleEn: 'Explore our works',
      subtitleAr: 'استكشف أعمالنا',
      icon: MenuIcons.novels,
      onClick: () => {
        document.getElementById('our-works')?.scrollIntoView({ behavior: 'smooth' });
      },
      isButton: true
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-6xl mx-auto px-4 py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`group relative ${
              item.isButton 
                ? 'bg-gradient-to-r from-[#FFD700] to-[#FFA500]' 
                : 'bg-[#0a0a0a] border border-[#FFD700]/10'
            } rounded-2xl overflow-hidden backdrop-blur-md`}
          >
            {item.onClick ? (
              <button 
                onClick={item.onClick}
                className={`block w-full p-6 ${
                  item.isButton ? 'text-[#0a0a0a]' : 'text-[#cccccc]'
                }`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <motion.div
                    className={`${
                      item.isButton ? 'text-[#0a0a0a]' : 'text-[#FFD700]'
                    }`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold font-montserrat">
                    {language === 'en' ? item.titleEn : item.titleAr}
                  </h3>
                </div>
                <p className={`text-sm ${
                  item.isButton ? 'text-[#0a0a0a]/80' : 'text-[#cccccc]/70'
                }`}>
                  {language === 'en' ? item.subtitleEn : item.subtitleAr}
                </p>
                
                {/* Hover Effects */}
                <motion.div
                  className="absolute inset-0 bg-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  whileHover={{ scale: 1.1 }}
                />
                
                {/* Active Indicator */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  initial={false}
                />
              </button>
            ) : (
              <Link 
                to={item.path}
                className={`block p-6 ${
                  item.isButton ? 'text-[#0a0a0a]' : 'text-[#cccccc]'
                }`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <motion.div
                    className={`${
                      item.isButton ? 'text-[#0a0a0a]' : 'text-[#FFD700]'
                    }`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold font-montserrat">
                    {language === 'en' ? item.titleEn : item.titleAr}
                  </h3>
                </div>
                <p className={`text-sm ${
                  item.isButton ? 'text-[#0a0a0a]/80' : 'text-[#cccccc]/70'
                }`}>
                  {language === 'en' ? item.subtitleEn : item.subtitleAr}
                </p>
                
                {/* Hover Effects */}
                <motion.div
                  className="absolute inset-0 bg-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  whileHover={{ scale: 1.1 }}
                />
                
                {/* Active Indicator */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  initial={false}
                />
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Home = () => {
  const { language } = useLanguage();
  const { scrollY } = useScroll();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Parallax effects
  const parallax1 = useTransform(scrollY, [0, 600], [0, -40]);
  const parallax2 = useTransform(scrollY, [0, 600], [0, -60]);
  const parallax3 = useTransform(scrollY, [0, 600], [0, -30]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] relative overflow-x-hidden font-montserrat">
      <Navbar />
      
      <main className="flex-grow text-white">
        {/* Hero Section */}
        <section className="relative h-screen flex items-end justify-end overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0">
            <video 
              src="/assets/hero-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 p-12 text-right">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#FFD700]">
                {language === 'en' ? 'Alpha Studio' : 'ألفا ستوديو'}
              </h1>
            
            <h2 className="text-xl md:text-2xl mb-4 text-white/90">
              {language === 'en' 
                ? 'Where History Meets Fiction' 
                : 'حيث يلتقي التاريخ بالخيال'}
              </h2>
            
            <p className="text-lg mb-8 text-white/80 max-w-md ml-auto">
                {language === 'en' 
                ? 'We tell stories... in an unconventional way' 
                : 'نحن نحكي القصص... بطريقة غير مألوفة'}
            </p>

            <div className="flex gap-4 justify-end">
              <button 
                onClick={() => {
                  document.getElementById('our-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-[#FFD700] text-black rounded-full font-medium hover:bg-[#FFD700]/90 transition-colors"
              >
                {language === 'en' ? 'Explore Our Worlds' : 'استكشف عوالمنا'}
              </button>

              <Link
                to="/about" 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/20 transition-colors"
              >
                {language === 'en' ? 'Join the Family' : 'انضم إلى العائلة'}
              </Link>
            </div>
          </div>
        </section>

        {/* Main Menu Section */}
        <MainMenu />

{/* أعمال الستوديو (دمج القصص والروايات) */}
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/20 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
      <motion.h2 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
        {language === 'en' ? 'Studio Works' : 'أعمال الستوديو'}
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* MasterMind Story Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl transition-all duration-500 border border-[#FFD700]/20 max-w-md w-full mx-auto"
          style={{ boxShadow: '0 0 25px rgba(255, 215, 0, 0.15)' }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 0 50px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 165, 0, 0.2)'
          }}
        >
          <Link to="/stories/mastermind" className="block">
            <div className="relative h-64 overflow-hidden cursor-pointer">
              <motion.img 
                src="/osos/master2.jpeg"
                alt={language === 'en' ? 'MasterMind' : 'ماستر مايند'}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.png';
                }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                  {language === 'en' ? 'Available' : 'متوفرة'}
                </span>
              </div>
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#FFD700]/20 text-[#FFD700] rounded-full text-sm font-medium">
                  {language === 'en' ? 'Sci-Fi Story' : 'خيال علمي'}
                </span>
              </div>
            </div>
          </Link>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-[#FFD700] mb-2 text-center">
              {language === 'en' ? 'MasterMind' : 'ماستر مايند'}
            </h3>
            <p className="text-gray-300 mb-4 text-center">
              {language === 'en'
                ? 'A genius rises from the ashes to turn imagination into reality.'
                : 'عبقري ينهض من بين الركام ليحوّل الخيال إلى واقع.'}
            </p>
            {/* Action Button */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <Link to="/stories/mastermind" className="flex items-center text-[#FFD700] group-hover:translate-x-2 transition-transform duration-300 font-semibold">
                <span className="mr-2">
                  {language === 'en' ? 'Read' : 'اقرأ'}
                </span>
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </Link>
              <a href="https://online.fliphtml5.com/ynqhh/rsyk/" target="_blank" rel="noopener noreferrer">
                <button className="px-4 py-2 bg-green-500/90 text-white rounded-full font-semibold shadow-md hover:bg-green-600 transition-colors duration-300">
                  {language === 'en' ? 'Read Now' : 'اقرأ الآن'}
                </button>
              </a>
            </div>
          </div>
          {/* Hover Effect Line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            initial={false}
          />
        </motion.div>
        {/* Awda Play Card */}
        <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="group relative bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl transition-all duration-500 border border-[#FFD700]/20 max-w-md w-full mx-auto"
        style={{ boxShadow: '0 0 25px rgba(255, 215, 0, 0.15)' }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: '0 0 50px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 165, 0, 0.2)'
        }}
        >
        <Link to="/plays/awda" className="block">
          <div className="relative h-64 overflow-hidden cursor-pointer">
          <motion.img 
            src="/osos/52.jpeg"
            alt={language === 'en' ? 'Awda' : 'عودة'}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
            e.currentTarget.src = '/placeholder.png';
            }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
            {language === 'en' ? 'Available' : 'متوفرة'}
            </span>
          </div>
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-[#FFD700]/20 text-[#FFD700] rounded-full text-sm font-medium">
            {language === 'en' ? 'Play' : 'مسرحية'}
            </span>
          </div>
          </div>
        </Link>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-[#FFD700] mb-2 text-center">
          {language === 'en' ? 'Awda' : 'عودة'}
          </h3>
          <p className="text-gray-300 mb-4 text-center">
          {language === 'en' ? 'A new play about return, hope, and transformation.' : 'مسرحية جديدة عن العودة والأمل والتحول.'}
          </p>
          {/* Action Button */}
          <div className="flex items-center justify-center gap-4 mt-4">
          <Link to="/plays/awda" className="flex items-center text-[#FFD700] group-hover:translate-x-2 transition-transform duration-300 font-semibold">
            <span className="mr-2">
            {language === 'en' ? 'Read' : 'اقرأ'}
            </span>
            <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
            </svg>
          </Link>
          <Link to="/plays/awda">
            <button className="px-4 py-2 bg-green-500/90 text-white rounded-full font-semibold shadow-md hover:bg-green-600 transition-colors duration-300">
            {language === 'en' ? 'Read Now' : 'اقرأ الآن'}
            </button>
          </Link>
          </div>
        </div>
        {/* Hover Effect Line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          initial={false}
        />
        </motion.div>
        {/* Rich Brother Poor Brother Card */}
        <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="group relative bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl transition-all duration-500 border border-[#FFD700]/20 max-w-md w-full mx-auto"
        style={{ boxShadow: '0 0 25px rgba(255, 215, 0, 0.15)' }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: '0 0 50px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 165, 0, 0.2)'
        }}
        >
        <Link to="/stories/rich-brother-poor-brother" className="block">
          <div className="relative h-64 overflow-hidden cursor-pointer">
          <motion.img 
            src="/osos/bro2.jpeg"
            alt={language === 'en' ? 'Rich Brother Poor Brother' : 'الأخ الغني والأخ الفقير'}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
            e.currentTarget.src = '/placeholder.png';
            }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
            {language === 'en' ? 'Available' : 'متوفرة'}
            </span>
          </div>
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-[#FFD700]/20 text-[#FFD700] rounded-full text-sm font-medium">
            {language === 'en' ? 'Psychological Thriller' : 'إثارة نفسية'}
            </span>
          </div>
          </div>
        </Link>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-[#FFD700] mb-2 text-center">
          {language === 'en' ? 'Rich Brother Poor Brother' : 'الأخ الغني والأخ الفقير'}
          </h3>
          <p className="text-gray-300 mb-4 text-center">
          {language === 'en'
            ? 'Years after a tragic fire, two brothers return to a ruined home. An inheritance dispute reveals a dark secret.'
            : 'بعد حريق مأساوي بسنوات، يعود شقيقان إلى بيتٍ مدمّر. صراع الميراث يكشف سرًّا مظلمًا.'}
          </p>
          {/* Action Button */}
          <div className="flex items-center justify-center gap-4 mt-4">
          <Link to="/stories/rich-brother-poor-brother" className="flex items-center text-[#FFD700] group-hover:translate-x-2 transition-transform duration-300 font-semibold">
            <span className="mr-2">
            {language === 'en' ? 'Read' : 'اقرأ'}
            </span>
            <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
            </svg>
          </Link>
          <a href="https://online.fliphtml5.com/ynqhh/wiie/" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 bg-green-500/90 text-white rounded-full font-semibold shadow-md hover:bg-green-600 transition-colors duration-300">
            {language === 'en' ? 'Read Now' : 'اقرأ الآن'}
            </button>
          </a>
          </div>
        </div>
        {/* Hover Effect Line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          initial={false}
        />
        </motion.div>
        {/* Khidaa Altahror Card */}
        <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="group relative bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl transition-all duration-500 border border-[#FFD700]/20 max-w-md w-full mx-auto"
        style={{ boxShadow: '0 0 25px rgba(255, 215, 0, 0.15)' }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: '0 0 50px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 165, 0, 0.2)'
        }}
        >
        <Link to="/stories/khidaa-altahror" className="block">
          <div className="relative h-64 overflow-hidden cursor-pointer">
          <motion.img 
            src="/osos/khedaa2.jpeg"
            alt={language === 'en' ? 'Khidaa Altahror' : 'خداع التحرر'}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
            e.currentTarget.src = '/placeholder.png';
            }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
            {language === 'en' ? 'Available' : 'متوفرة'}
            </span>
          </div>
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-[#FFD700]/20 text-[#FFD700] rounded-full text-sm font-medium">
            {language === 'en' ? 'Psychological Drama' : 'دراما نفسية'}
            </span>
          </div>
          </div>
        </Link>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-[#FFD700] mb-2 text-center">
          {language === 'en' ? 'Khidaa Altahror' : 'خداع التحرر'}
          </h3>
          <p className="text-gray-300 mb-4 text-center">
          {language === 'en' ? 'A psychological drama novel.' : 'رواية دراما نفسية'}
          </p>
          {/* Action Button */}
          <div className="flex items-center justify-center gap-4 mt-4">
          <Link to="/stories/khidaa-altahror" className="flex items-center text-[#FFD700] group-hover:translate-x-2 transition-transform duration-300 font-semibold">
            <span className="mr-2">
            {language === 'en' ? 'Read' : 'اقرأ'}
            </span>
            <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
            </svg>
          </Link>
          <Link to="/stories/khidaa-altahror">
            <button className="px-4 py-2 bg-green-500/90 text-white rounded-full font-semibold shadow-md hover:bg-green-600 transition-colors duration-300">
            {language === 'en' ? 'Read Now' : 'اقرأ الآن'}
            </button>
          </Link>
          </div>
        </div>
        {/* Hover Effect Line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          initial={false}
        />
        </motion.div>
        {/* Serk Nos El Leil Card */}
        <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="group relative bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl transition-all duration-500 border border-[#FFD700]/20 max-w-md w-full mx-auto"
        style={{ boxShadow: '0 0 25px rgba(255, 215, 0, 0.15)' }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: '0 0 50px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 165, 0, 0.2)'
        }}
        >
        <Link to="/stories/serk-nos-el-leil" className="block">
          <div className="relative h-64 overflow-hidden cursor-pointer">
          <motion.img 
            src="/osos/serk.jpeg"
            alt={language === 'en' ? 'Serk Nos El Leil' : 'سرك نص الليل'}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
            e.currentTarget.src = '/placeholder.png';
            }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
            {language === 'en' ? 'Available' : 'متوفرة'}
            </span>
          </div>
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-[#FFD700]/20 text-[#FFD700] rounded-full text-sm font-medium">
            {language === 'en' ? 'Dialog Story' : 'قصة حوارية'}
            </span>
          </div>
          </div>
        </Link>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-[#FFD700] mb-2 text-center">
          {language === 'en' ? 'Serk Nos El Leil' : 'سرك نص الليل'}
          </h3>
          <p className="text-gray-300 mb-4 text-center">
          {language === 'en' ? 'A dialog story by Omar Duhaim & Mohamed Seddik.' : 'قصة حوارية تأليف: عمر دهيم، محمد صديق'}
          </p>
          {/* Action Button */}
          <div className="flex items-center justify-center gap-4 mt-4">
          <Link to="/stories/serk-nos-el-leil" className="flex items-center text-[#FFD700] group-hover:translate-x-2 transition-transform duration-300 font-semibold">
            <span className="mr-2">
            {language === 'en' ? 'Read' : 'اقرأ'}
            </span>
            <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
            </svg>
          </Link>
          <Link to="/stories/serk-nos-el-leil">
            <button className="px-4 py-2 bg-green-500/90 text-white rounded-full font-semibold shadow-md hover:bg-green-600 transition-colors duration-300">
            {language === 'en' ? 'Read Now' : 'اقرأ الآن'}
            </button>
          </Link>
          </div>
        </div>
        {/* Hover Effect Line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          initial={false}
        />
        </motion.div>

              {/* Novels Cards */}
              {[
                {
                  img: '/Novels/The Blue Wolf .jpg',
                  titleEn: 'The Blue Wolf',
                  titleAr: 'الذئب الأزرق',
                  descEn: 'A hero seeking justice in a world of chaos.',
                  descAr: 'بطل يبحث عن العدالة في عالم من الفوضى.',
                  category: 'Novel',
                  link: '/blue-wolf',
                  status: 'available'
                },
                

              ].map((novel, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group relative bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#FFD700]/10"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 0 30px rgba(255, 215, 0, 0.1)'
                  }}
                >
                  <Link to={novel.link} className="block">
                    <div className="relative h-64 overflow-hidden">
                      <motion.img 
                        src={novel.img}
                        alt={language === 'en' ? novel.titleEn : novel.titleAr}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.png';
                        }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        {novel.status === 'available' ? (
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                            {language === 'en' ? 'Available' : 'متوفر'}
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">
                            {language === 'en' ? `Coming ${novel.date}` : `قريباً ${novel.date}`}
                          </span>
                        )}
                      </div>
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#FFD700]/20 text-[#FFD700] rounded-full text-sm font-medium">
                          {novel.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-[#FFD700] mb-2">
                        {language === 'en' ? novel.titleEn : novel.titleAr}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {language === 'en' ? novel.descEn : novel.descAr}
                      </p>
                      {/* Action Button */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-[#FFD700] group-hover:translate-x-2 transition-transform duration-300">
                          <span className="mr-2">
                            {language === 'en' ? 'Read More' : 'اقرأ المزيد'}
                          </span>
                          <svg 
                            className="w-4 h-4" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M9 5l7 7-7 7" 
                            />
                          </svg>
                        </div>
                        {novel.status === 'available' ? (
                          <button className="px-4 py-2 bg-green-500/90 text-white rounded-full font-semibold shadow-md hover:bg-green-600 transition-colors duration-300">
                            {language === 'en' ? 'Read Now' : 'أقرأ الآن'}
                          </button>
                        ) : (
                          <button className="px-4 py-2 bg-red-600 text-white rounded-full font-semibold shadow-md hover:bg-red-700 transition-colors duration-300">
                            {language === 'en' ? 'Stay Tuned' : 'انتظرونا'}
                          </button>
                        )}
                      </div>
                    </div>
                    {/* Hover Effect Line */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      initial={false}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/novels"
                className="group relative inline-block px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#0a0a0a] rounded-full font-semibold overflow-hidden"
              >
                <span className="relative z-10">
                  {language === 'en' ? 'View All Novels' : 'عرض كل الروايات'}
                </span>
                <motion.div 
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Our Works Section */}
        <section id="our-works" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/20 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
                {language === 'en' ? 'Our Works' : 'أعمالنا'}
              </span>
            </motion.h2>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  id: 'novels',
                  name: 'Novels',
                  nameAr: 'الروايات',
                  description: 'Dive into our collection of thought-provoking and captivating novels',
                  descriptionAr: 'انغمس في مجموعتنا من الروايات المثيرة للتفكير والآسرة',
                  image: '/Home/Novels.png',
                  link: '/novels',
                  status: 'available'
                },
 
                {
                  id: 'comics',
                  name: 'Comic Books',
                  nameAr: 'القصص المصورة',
                  description: 'Explore our visual storytelling through stunning artwork and compelling narratives',
                  descriptionAr: 'استكشف سرد قصصنا المرئي من خلال أعمال فنية مذهلة وروايات مقنعة',
                  image: '/Home/Comic Books.png',
                  status: 'available'
                },
                {
                  id: 'short-stories',
                  name: 'Short Stories',
                  nameAr: 'القصص القصيرة',
                  description: 'Brief but impactful tales that will leave you thinking',
                  descriptionAr: 'قصص موجزة ولكنها مؤثرة ستتركك تفكر',
                  image: '/Home/Short Stories .png',
                  status: 'available'
                },
                {
                  id: 'cinematic',
                  name: 'Cinematic Work',
                  nameAr: 'الأعمال السينمائية',
                  description: 'Our visual storytelling brought to life through film and animation',
                  descriptionAr: 'سرد قصصنا المرئي يأتي إلى الحياة من خلال الأفلام والرسوم المتحركة',
                  image: '/Home/Cinematics.png',
                  status: 'coming-soon'
                },
                { 
                  id: 'plays',
                  name: 'Plays',
                  nameAr: 'المسرحيات',
                  description: 'Experience our dramatic works meant for stage performance',
                  descriptionAr: 'اختبر أعمالنا الدرامية المخصصة للعروض المسرحية',
                  image: '/Home/Plays.png',
                  status: 'available'
                },
              ].map((category, index) => (
              <motion.div
                  key={category.id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group relative bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#FFD700]/10"
                whileHover={{
                    scale: 1.02,
                    boxShadow: '0 0 30px rgba(255, 215, 0, 0.1)'
                  }}
                >
                  <Link to={category.link} className="block">
                    <div className="relative h-64 overflow-hidden">
                <motion.img
                        src={`${category.image}`}
                        alt={language === 'en' ? category.name : category.nameAr}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.png';
                        }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        {category.status === 'available' ? (
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                            {language === 'en' ? 'Available' : 'متوفر'}
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">
                            {language === 'en' ? 'Coming Soon' : 'قريباً'}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-[#FFD700] mb-2">
                        {language === 'en' ? category.name : category.nameAr}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {language === 'en' ? category.description : category.descriptionAr}
                      </p>
                      
                      {/* Action Button */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-[#FFD700] group-hover:translate-x-2 transition-transform duration-300">
                          <span className="mr-2">
                            {language === 'en' ? 'Explore' : 'استكشف'}
                          </span>
                          <svg 
                            className="w-4 h-4" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M9 5l7 7-7 7" 
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Line */}
              <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      initial={false}
                    />
                  </Link>
              </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/novels"
                className="group relative inline-block px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#0a0a0a] rounded-full font-semibold overflow-hidden"
              >
                <span className="relative z-10">
                  {language === 'en' ? 'View All Novels' : 'عرض كل الروايات'}
                </span>
                <motion.div 
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/20 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
                {language === 'en' ? 'Contact Us' : 'تواصل معنا'}
              </span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                </h3>
                <p className="text-gray-300">
                  {language === 'en' ? 'alphaduhaim@gmail.com' : 'alphaduhaim@gmail.com'}
                </p>
                  </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'en' ? 'Phone' : 'الهاتف'}
                </h3>
                <p className="text-gray-300">
                  {language === 'en' ? '🇪🇬 +20 10 1678 5566' : '🇪🇬 +20 10 1678 5566'}
                </p>
            </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
