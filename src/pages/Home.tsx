import React, { useEffect, useMemo } from 'react'; // تم إضافة useMemo
import { useLanguage } from '../contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion'; // إضافة useScroll/useTransform
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// أيقونة هندسية (كما هي)
const GeometricMotif = () => (
  <svg width="1em" height="1em" viewBox="0 0 100 100" fill="currentColor" className="inline-block opacity-70 mx-1">
    <polygon points="50,5 59.7,30.5 85.2,40.3 69.5,59.7 72.4,85.2 50,76.4 27.6,85.2 30.5,59.7 14.8,40.3 40.3,30.5" />
  </svg>
);

const Home = () => {
  // اللغة الافتراضية: العربية
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // حركة أيقونات novels-section مع السكرول
    const novelsSection = document.querySelector('.novels-section') as HTMLElement | null;
    if (!novelsSection) return;
    const handleScroll = () => {
      const rect = novelsSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // نسبة ظهور القسم في الشاشة (0 = خارج الشاشة للأعلى، 1 = منتصف الشاشة)
      const visible = Math.max(0, Math.min(1, 1 - Math.abs(rect.top) / windowHeight));
      // حرك الخلفية أفقياً وعمودياً بناءً على scroll
      const x = 30 * (1 - visible); // من 0px إلى 30px
      const y = 60 * (1 - visible); // من 0px إلى 60px
      novelsSection.style.setProperty('--novels-icons-x', `${x}px`);
      novelsSection.style.setProperty('--novels-icons-y', `${y}px`);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // أول مرة
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // إجبار اللغة الافتراضية على العربية إذا لم يتم اختيارها
  React.useEffect(() => {
    if (language !== 'ar') {
      const langBtn = document.querySelector('[data-lang-btn]');
      if (langBtn) (langBtn as HTMLElement).click();
    }
  }, []);

  const features = [
    {
      title: language === 'en' ? 'Creative Writing' : 'كتابة إبداعية',
      description: language === 'en'
        ? 'Craft compelling narratives that captivate readers'
        : 'صياغة قصص جذابة تأسر القراء',
      icon: <GeometricMotif />
    },
    {
      title: language === 'en' ? 'Visual Storytelling' : 'سرد بصري',
      description: language === 'en'
        ? 'Bring stories to life through stunning visuals'
        : 'إحياء القصص من خلال الصور المذهلة',
      icon: <GeometricMotif />
    },
    {
      title: language === 'en' ? 'Digital Publishing' : 'نشر رقمي',
      description: language === 'en'
        ? 'Share your stories with the world digitally'
        : 'مشاركة قصصك مع العالم رقمياً',
      icon: <GeometricMotif />
    }
  ];

  // تعريف متغيرات RGB للألوان إذا لم تكن معرفة في CSS لاستخدامها في الظلال
  // يمكنك وضعها في ملف CSS :root إذا كان أفضل
  // const alphaGoldRgb = "212, 175, 55"; // --alpha-gold: #D4AF37

  // إضافة perspective لل sections التي ستحتوي على عناصر 3D
  const sectionPerspectiveStyle = { perspective: '1200px' };

  // --- إضافة hook للسكرول لقسم الروايات ---
  const { scrollY } = useScroll();
  // parallax لكل بطاقة: تتحرك لأعلى/أسفل حسب scrollY
  // القيم هنا افتراضية ويمكن تعديلها حسب التجربة
  const parallax1 = useTransform(scrollY, [0, 600], [0, -40]);
  const parallax2 = useTransform(scrollY, [0, 600], [0, -60]);
  const parallax3 = useTransform(scrollY, [0, 600], [0, -30]);

  return (
    <div className="min-h-screen flex flex-col bg-alpha-darker relative overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow text-white">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-screen flex items-center justify-center overflow-hidden scroll-section" 
          id="hero"
          style={sectionPerspectiveStyle} // تطبيق Perspective هنا
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-alpha-blue/10 via-transparent to-transparent opacity-50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-alpha-gold/10 via-transparent to-transparent opacity-50"></div>

          <div className="absolute inset-0 will-change-transform">
            <motion.video 
              src="/alpha-studio/assets/hero-video.mp4"
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover object-center scale-105"
              poster="/alpha-studio/Home/hero-bg.jpg"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: 'easeOut' }}
            />
            <div className="absolute inset-0 bg-hero-overlay-gradient"></div>
          </div>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring', bounce: 0.4 }}
            className="absolute left-2 bottom-20 sm:left-12 sm:bottom-12 z-10 w-[95vw] max-w-xl px-2 sm:w-full sm:px-0"
            // --- إضافة تأثير 3D خفيف عند الـ hover ---
            whileHover={{ 
              scale: 1.03, 
              rotateX: 3, // ميلان خفيف للأعلى/الأسفل
              rotateY: -3, // ميلان خفيف لليسار/اليمين
              boxShadow: '0 10px 35px 0 rgba(var(--alpha-gold-rgb, 212, 175, 55), 0.3)' // استخدام متغير RGB للظل, مع قيمة افتراضية
            }}
          >
            <div className="bg-alpha-darker/50 backdrop-blur-xl border border-alpha-gold/60 shadow-[0_8px_32px_0_rgba(var(--alpha-gold-rgb,212,175,55),0.35)] p-4 sm:p-10 text-right md:text-left glassmorphism-glow"
                 style={{ borderRadius: '22px 6px 22px 6px' }}
            >
              <h1 className="alpha-title text-3xl sm:text-5xl md:text-7xl mb-2 sm:mb-4 font-bold tracking-tight text-white">
                {language === 'en' ? 'Alpha Studio' : 'ألفا ستوديو'}
              </h1>
              <h2 className="text-lg sm:text-2xl md:text-4xl font-display mb-2 sm:mb-4 text-alpha-gold">
                {language === 'en' ? 'Where History Meets Fiction' : 'حيث يلتقي التاريخ بالخيال'}
              </h2>
              <p className="text-base sm:text-lg md:text-2xl text-gray-200 mb-4 sm:mb-8 max-w-2xl">
                {language === 'en' 
                  ? 'Discover our world of creative storytelling and immersive experiences' 
                  : 'اكتشف عالمنا من القصص الإبداعية والتجارب الغامرة'}
              </p>
              <Link
                to="/novels#novels"
                className="btn-arabic-primary animate__animated animate__pulse animate__delay-3s" 
              >
                {language === 'en' ? 'Explore Our Works' : 'استكشف أعمالنا'}
              </Link>
            </div>
          </motion.div>
           <motion.button
            type="button"
            onClick={() => {
              const novelsSection = document.getElementById('novels');
              if (novelsSection) {
                novelsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-alpha-darker/70 hover:bg-alpha-gold text-alpha-gold hover:text-alpha-darker rounded-full p-2 shadow-lg transition-colors duration-300 animate-bounce border-2 border-alpha-gold/50"
            aria-label="Scroll to novels section"
            whileHover={{ scale: 1.15, y: -5, boxShadow: "0 0 15px rgba(var(--alpha-gold-rgb, 212, 175, 55), 0.7)" }}
            whileTap={{ scale: 0.95 }}
            style={{ borderRadius: '50%' }}
          >
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 16.5c-.28 0-.53-.11-.71-.29l-6-6a1.003 1.003 0 011.42-1.42L12 13.59l5.29-5.3a1.003 1.003 0 011.42 1.42l-6 6c-.18.18-.43.29-.71-.29z"/>
            </svg>
          </motion.button>
        </motion.section>

        {/* قسم عرض الروايات */}
        <section id="novels" className="novels-section py-24 bg-alpha-charcoal/50 relative overflow-hidden backdrop-blur-md" style={sectionPerspectiveStyle}>
          <div className="subtle-geometric-overlay opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-alpha-gold font-arabic-heading tracking-widest drop-shadow-lg"
              style={{ letterSpacing: '0.12em' }}
            >
              <span className="inline-block border-b-4 border-alpha-gold/60 pb-2 px-4 rounded-md bg-alpha-darker/30 shadow-md backdrop-blur-sm">
                {language === 'en' ? 'Alpha Studio Novels' : 'روايات ألفا ستوديو'}
              </span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
              {/* بطاقة الذئب الأزرق */}
              <motion.div
                initial={{ y: 80, opacity: 0, scale: 0.92, rotate: -3 }}
                whileInView={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: 'spring', bounce: 0.22 }}
                className="relative group card-arabic-theme bg-gradient-to-br from-alpha-darker/80 to-alpha-charcoal/60 border border-alpha-gold/30 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                style={{ y: parallax1 }}
                whileHover={{ 
                  scale: 1.06, 
                  y: -16,
                  rotateX: 8, 
                  rotateY: 10, 
                  boxShadow: "0 16px 40px 0 rgba(212,175,55,0.22), 0 2px 8px rgba(0,0,0,0.13)",
                  filter: 'brightness(1.08) saturate(1.15)'
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 0.18, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="absolute -top-6 -left-6 w-24 h-24 bg-alpha-gold/10 rounded-full blur-2xl z-0"
                />
                <motion.img 
                  src="/alpha-studio/Novels/The Blue Wolf .jpg" 
                  alt={language === 'en' ? 'The Blue Wolf' : 'الذئب الأزرق'} 
                  className="w-full h-60 object-cover rounded-t-2xl border-b-2 border-alpha-gold/20 shadow-md"
                  initial={{ scale: 1.08, filter: 'grayscale(0.18) blur(1.5px)' }}
                  whileHover={{ scale: 1.13, filter: 'grayscale(0) blur(0)' }}
                  transition={{ duration: 0.7, type: 'spring' }}
                />
                <div className="p-5 flex flex-col flex-1 justify-between relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 text-alpha-gold font-arabic-heading tracking-wide drop-shadow-sm">{language === 'en' ? 'The Blue Wolf' : 'الذئب الأزرق'}</h3>
                    <p className="text-alpha-gold/80 text-xs mb-1 font-arabic-body">{language === 'en' ? 'Omar Duhaim' : 'عمر دهيم'}</p>
                    <p className="text-gray-200 text-base mb-2 font-arabic-body leading-relaxed">{language === 'en' ? 'A hero seeking justice in a world of chaos.' : 'بطل يبحث عن العدالة في عالم من الفوضى.'}</p>
                  </div>
                  <div className="mt-3 flex flex-col gap-1">
                    <span className="inline-block text-green-400 font-bold text-base tracking-wider">{language === 'en' ? 'Available Now' : 'متوفرة الآن'}</span>
                    <span className="inline-block text-blue-400 font-bold text-xs">{language === 'en' ? 'FREE' : 'مجاناً'}</span>
                    <Link to="/blue-wolf" className="btn-arabic-primary text-xs py-2 w-full text-center mt-2 rounded-lg shadow-md">
                      {language === 'en' ? 'Get Novel' : 'احصل على الرواية'}
                    </Link>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
                  animate={{ opacity: 0.28, scale: 1, rotate: 0 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="absolute bottom-2 right-2"
                >
                  <svg width="38" height="38" viewBox="0 0 100 100" fill="none"><polygon points="50,5 61,35 95,35 67,57 78,91 50,70 22,91 33,57 5,35 39,35" fill="hsl(42, 85%, 44%)" opacity="0.18"/></svg>
                </motion.div>
              </motion.div>
              {/* بطاقات الروايات القادمة */}
              {[{ id: 'samagar', titleEn: 'The Curse of King Samagar', titleAr: 'لعنة الملك ساماغار', descEn: 'A cursed king battles the devil.', descAr: 'ملك ملعون يحارب الشيطان.', dateEn: 'October 2025', dateAr: 'أكتوبر 2025', img: '/alpha-studio/Novels/The Curse of King Samagar .png', delay: 0.1 },{ id: 'bossheist', titleEn: 'Boss Heist', titleAr: 'سرقة البوس', descEn: 'A man emerges from the fog to unveil his destiny.', descAr: 'رجل يخرج من الضباب ليكشف مصيره.', dateEn: '2026', dateAr: '2026', img: '/alpha-studio/Novels/Boss Heist .png', delay: 0.2 }].map((novel, idx) => (
                <motion.div 
                  key={novel.id} 
                  initial={{ y: 80, opacity: 0, scale: 0.92, rotate: 3 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: novel.delay, type: 'spring', bounce: 0.22 }}
                  className="relative group card-arabic-theme bg-gradient-to-br from-alpha-darker/80 to-alpha-charcoal/60 border border-alpha-gold/30 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                  style={{ y: idx === 0 ? parallax2 : parallax3 }}
                  whileHover={{ 
                    scale: 1.06, 
                    y: -16,
                    rotateX: 8, 
                    rotateY: (novel.id === 'samagar' ? -10 : 10),
                    boxShadow: "0 16px 40px 0 rgba(212,175,55,0.22), 0 2px 8px rgba(0,0,0,0.13)",
                    filter: 'brightness(1.08) saturate(1.15)'
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 0.18, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="absolute -top-6 -left-6 w-24 h-24 bg-alpha-gold/10 rounded-full blur-2xl z-0"
                  />
                  <motion.img 
                    src={novel.img} 
                    alt={language === 'en' ? novel.titleEn : novel.titleAr} 
                    className="w-full h-60 object-cover rounded-t-2xl border-b-2 border-alpha-gold/20 shadow-md"
                    initial={{ scale: 1.08, filter: 'grayscale(0.18) blur(1.5px)' }}
                    whileHover={{ scale: 1.13, filter: 'grayscale(0) blur(0)' }}
                    transition={{ duration: 0.7, type: 'spring' }}
                  />
                  <div className="p-5 flex flex-col flex-1 justify-between relative z-10">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 text-alpha-gold font-arabic-heading tracking-wide drop-shadow-sm">{language === 'en' ? novel.titleEn : novel.titleAr}</h3>
                      <p className="text-alpha-gold/80 text-xs mb-1 font-arabic-body">{language === 'en' ? 'Omar Duhaim' : 'عمر دهيم'}</p>
                      <p className="text-gray-200 text-base mb-2 font-arabic-body leading-relaxed">{language === 'en' ? novel.descEn : novel.descAr}</p>
                    </div>
                    <div className="mt-3 flex flex-col gap-1">
                      <span className="inline-block text-red-400 font-bold text-base tracking-wider">{language === 'en' ? 'Coming Soon' : 'قريبًا'}</span>
                      <span className="inline-block text-alpha-gold font-semibold text-xs">{language === 'en' ? novel.dateEn : novel.dateAr}</span>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, rotate: 15 }}
                    animate={{ opacity: 0.28, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="absolute bottom-2 right-2"
                  >
                    <svg width="28" height="28" viewBox="0 0 100 100" fill="none"><polygon points="50,5 61,35 95,35 67,57 78,91 50,70 22,91 33,57 5,35 39,35" fill="hsl(42, 85%, 44%)" opacity="0.18"/></svg>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Link to="/novels" className="btn-arabic-secondary rounded-lg px-8 py-2 text-base font-arabic-heading tracking-widest shadow-md border border-alpha-gold/40 bg-alpha-darker/40 hover:bg-alpha-gold hover:text-alpha-darker transition-colors duration-300">
                {language === 'en' ? 'Browse All Novels' : 'استعراض كل الروايات'}
              </Link>
            </div>
          </div>
        </section>

        {/* قسم الميزات */}
        <section className="py-24 bg-alpha-darker relative" style={sectionPerspectiveStyle}>
           <div className="subtle-geometric-overlay opacity-3"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-alpha-gold font-arabic-heading tracking-widest drop-shadow-lg"
              style={{ letterSpacing: '0.12em' }}
            >
              <span className="inline-block border-b-4 border-alpha-gold/60 pb-2 px-4 rounded-md bg-alpha-darker/30 shadow-md backdrop-blur-sm">
                {language === 'en' ? 'What We Offer' : 'ما نقدمه'}
              </span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Creative Writing */}
              <motion.div
                initial={{ y: 60, opacity: 0, scale: 0.93 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, type: 'spring', bounce: 0.18 }}
                className="relative group bg-gradient-to-br from-alpha-darker/80 to-alpha-charcoal/60 border border-alpha-gold/30 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 p-8 flex flex-col items-center text-center"
                whileHover={{
                  scale: 1.045,
                  y: -10,
                  boxShadow: '0 10px 32px 0 rgba(212,175,55,0.18), 0 2px 8px rgba(0,0,0,0.13)',
                  filter: 'brightness(1.08) saturate(1.12)'
                }}
              >
                <motion.img
                  src="/alpha-studio/offer/3.png"
                  alt="Creative Writing"
                  className="w-20 h-20 mb-4 rounded-full shadow-md border-2 border-alpha-gold/30 bg-white/10 object-contain"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.1, type: 'spring' }}
                />
                <h3 className="text-2xl font-bold mb-3 text-alpha-gold font-arabic-heading tracking-wide drop-shadow-sm">{language === 'en' ? 'Creative Writing' : 'كتابة إبداعية'}</h3>
                <p className="text-gray-200 font-arabic-body mb-2 text-base leading-relaxed">{language === 'en' ? 'Craft compelling narratives that captivate readers' : 'صياغة قصص جذابة تأسر القراء'}</p>
              </motion.div>
              {/* Visual Storytelling */}
              <motion.div
                initial={{ y: 60, opacity: 0, scale: 0.93 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, type: 'spring', bounce: 0.18 }}
                className="relative group bg-gradient-to-br from-alpha-darker/80 to-alpha-charcoal/60 border border-alpha-gold/30 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 p-8 flex flex-col items-center text-center"
                whileHover={{
                  scale: 1.045,
                  y: -10,
                  boxShadow: '0 10px 32px 0 rgba(212,175,55,0.18), 0 2px 8px rgba(0,0,0,0.13)',
                  filter: 'brightness(1.08) saturate(1.12)'
                }}
              >
                <motion.img
                  src="/alpha-studio/offer/1.png"
                  alt="Visual Storytelling"
                  className="w-20 h-20 mb-4 rounded-full shadow-md border-2 border-alpha-gold/30 bg-white/10 object-contain"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2, type: 'spring' }}
                />
                <h3 className="text-2xl font-bold mb-3 text-alpha-gold font-arabic-heading tracking-wide drop-shadow-sm">{language === 'en' ? 'Visual Storytelling' : 'سرد بصري'}</h3>
                <p className="text-gray-200 font-arabic-body mb-2 text-base leading-relaxed">{language === 'en' ? 'Bring stories to life through stunning visuals' : 'إحياء القصص من خلال الصور المذهلة'}</p>
              </motion.div>
              {/* Digital Publishing */}
              <motion.div
                initial={{ y: 60, opacity: 0, scale: 0.93 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, type: 'spring', bounce: 0.18 }}
                className="relative group bg-gradient-to-br from-alpha-darker/80 to-alpha-charcoal/60 border border-alpha-gold/30 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 p-8 flex flex-col items-center text-center"
                whileHover={{
                  scale: 1.045,
                  y: -10,
                  boxShadow: '0 10px 32px 0 rgba(212,175,55,0.18), 0 2px 8px rgba(0,0,0,0.13)',
                  filter: 'brightness(1.08) saturate(1.12)'
                }}
              >
                <motion.img
                  src="/alpha-studio/offer/2.png"
                  alt="Digital Publishing"
                  className="w-20 h-20 mb-4 rounded-full shadow-md border-2 border-alpha-gold/30 bg-white/10 object-contain"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3, type: 'spring' }}
                />
                <h3 className="text-2xl font-bold mb-3 text-alpha-gold font-arabic-heading tracking-wide drop-shadow-sm">{language === 'en' ? 'Digital Publishing' : 'نشر رقمي'}</h3>
                <p className="text-gray-200 font-arabic-body mb-2 text-base leading-relaxed">{language === 'en' ? 'Share your stories with the world digitally' : 'مشاركة قصصك مع العالم رقمياً'}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* قسم الأعمال المميزة */}
        <section className="py-24 relative overflow-hidden bg-alpha-darker/70" style={sectionPerspectiveStyle}>
           <div className="subtle-geometric-overlay opacity-5 mix-blend-luminosity"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-white font-arabic-heading"
            >
              {language === 'en' ? 'Featured Works' : 'أعمال مميزة'}
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {img: '/alpha-studio/Home/Novels.png', titleEn: 'Novels & Epics', titleAr: 'روايات وملاحم', descEn: 'Explore worlds of imagination.', descAr: 'استكشف عوالم الخيال.'}, 
                {img: '/alpha-studio/Home/Short Stories .png', titleEn: 'Short Stories', titleAr: 'قصص قصيرة', descEn: 'Bite-sized narratives, full of impact.', descAr: 'حكايات موجزة، مليئة بالتأثير.'},
                {img: '/alpha-studio/Home/Comic Books.png', titleEn: 'Illustrated Tales', titleAr: 'حكايات مصورة', descEn: 'Visual journeys into storytelling.', descAr: 'رحلات بصرية في عالم القصص.'}
              ].map((work, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative h-[400px] rounded-xl overflow-hidden shadow-xl transition-all duration-500 card-arabic-theme"
                  // --- إضافة تأثير 3D عند الـ hover ---
                  whileHover={{ 
                    scale: 1.05, // تم تقليل الـ scale قليلاً ليتناسب مع الدوران
                    rotateY: (index % 2 === 0 ? 7 : -7), // دوران متبادل
                    rotateX: 3,
                    boxShadow: '0 10px 30px rgba(var(--alpha-gold-rgb, 212, 175, 55), 0.25)' 
                  }}
                >
                  <motion.img 
                    src={work.img}
                    alt={language === 'en' ? work.titleEn : work.titleAr}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110 will-change-transform"
                    style={{ filter: 'brightness(0.9) contrast(1.1)' }}
                    // whileHover={{ scale: 1.13 }} // يمكن إزالة هذا إذا كان التأثير مبالغ فيه مع دوران البطاقة
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 z-10">
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md font-arabic-heading">{language === 'en' ? work.titleEn : work.titleAr}</h3>
                    <p className="text-gray-200 text-sm drop-shadow-sm font-arabic-body">{language === 'en' ? work.descEn : work.descAr}</p>
                  </div>
                </motion.div>
              ))}
            </div>
             <div className="flex justify-center mt-12">
              <Link
                to="/works"
                className="btn-arabic-secondary"
              >
                {language === 'en' ? 'See All Works' : 'مشاهدة كل الأعمال'}
              </Link>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;