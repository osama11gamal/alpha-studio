import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  
  return (
    <footer className="bg-alpha-darker/95 pt-16 pb-8 rounded-t-3xl shadow-2xl backdrop-blur-md mx-2 mt-12 relative overflow-hidden">
      {/* نقش هندسي خفيف في الخلفية */}
      <div className="subtle-geometric-overlay opacity-10 absolute inset-0 pointer-events-none z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* شعار وبيان الاستوديو */}
          <div className="flex flex-col gap-4">
            <div className="alpha-logo mb-2 text-3xl font-bold select-none flex items-center gap-2">
              <span className="text-alpha-blue drop-shadow-lg font-display tracking-widest">ALPHA</span>
              <span className="text-white font-display tracking-wider">STUDIO</span>
            </div>
            <p className="text-gray-300 mb-2 max-w-md text-lg font-arabic-body leading-relaxed">
              {language === 'en'
                ? 'Where history meets imagination. Alpha Studio crafts immersive stories and creative worlds that inspire and captivate.'
                : 'حيث يلتقي التاريخ بالخيال. ألفا ستوديو يصنع عوالم وقصصًا غامرة تلهم وتبهر.'}
            </p>
            {/* اقتباس قصير */}
            <div className="italic text-alpha-gold text-base font-display mb-2">
              {language === 'en'
                ? '“Every story is a new world.”'
                : '"كل قصة عالم جديد."'}
            </div>
            {/* أيقونات التواصل الاجتماعي */}
            <div className="flex gap-4 mt-2">
              <a href="#" className="group text-gray-400 hover:text-alpha-gold transition-colors" aria-label="X (Twitter)">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 6.47a.75.75 0 0 1 1.06 1.06l-4.72 4.72 4.72 4.72a.75.75 0 1 1-1.06 1.06l-4.72-4.72-4.72 4.72a.75.75 0 1 1-1.06-1.06l4.72-4.72-4.72-4.72A.75.75 0 1 1 7.09 6.47l4.72 4.72 4.72-4.72z"/></svg>
              </a>
              <a href="#" className="group text-gray-400 hover:text-alpha-gold transition-colors" aria-label="Instagram">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"/><path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm16.24-4.24a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/></svg>
              </a>
              <a href="#" className="group text-gray-400 hover:text-alpha-gold transition-colors" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
            </div>
          </div>

          {/* روابط التنقل */}
          <div>
            <h3 className="text-white font-display text-xl mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-alpha-gold" fill="currentColor" viewBox="0 0 20 20"><polygon points="10,2 18,10 10,18 2,10"/></svg>
              {language === 'en' ? 'Navigation' : 'التنقل'}
            </h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-alpha-gold transition-colors font-sans border-b-2 border-transparent hover:border-alpha-gold pb-1 focus:outline-none focus:text-alpha-gold focus:border-alpha-gold">{language === 'en' ? 'Home' : 'الرئيسية'}</Link></li>
              <li><Link to="/novels" className="text-gray-400 hover:text-alpha-gold transition-colors font-sans border-b-2 border-transparent hover:border-alpha-gold pb-1 focus:outline-none focus:text-alpha-gold focus:border-alpha-gold">{language === 'en' ? 'Novels' : 'الروايات'}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-alpha-gold transition-colors font-sans border-b-2 border-transparent hover:border-alpha-gold pb-1 focus:outline-none focus:text-alpha-gold focus:border-alpha-gold">{language === 'en' ? 'About Us' : 'من نحن'}</Link></li>
              <li><Link to="/join-our-family" className="text-gray-400 hover:text-alpha-gold transition-colors font-sans border-b-2 border-transparent hover:border-alpha-gold pb-1 focus:outline-none focus:text-alpha-gold focus:border-alpha-gold">{language === 'en' ? 'Careers' : 'انضم إلينا'}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-alpha-gold transition-colors font-sans border-b-2 border-transparent hover:border-alpha-gold pb-1 focus:outline-none focus:text-alpha-gold focus:border-alpha-gold">{language === 'en' ? 'Contact' : 'اتصل بنا'}</Link></li>
            </ul>
          </div>

          {/* النشرة الإخبارية */}
          <div>
            <h3 className="text-white font-display text-xl mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-alpha-blue" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
              {language === 'en' ? 'Join Our Newsletter' : 'انضم إلى نشرتنا الإخبارية'}
            </h3>
            <p className="text-gray-400 mb-4 text-base font-arabic-body">
              {language === 'en' ? 'Stay updated with our latest releases and news.' : 'ابق على اطلاع بأحدث إصداراتنا وأخبارنا.'}
            </p>
            <form className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
              <input 
                type="email" 
                placeholder={language === 'en' ? 'Your email address' : 'عنوان بريدك الإلكتروني'} 
                className="bg-alpha-charcoal border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-alpha-blue shadow flex-1 font-sans"
                required
                aria-label={language === 'en' ? 'Email address' : 'البريد الإلكتروني'}
              />
              <button type="submit" className="btn-arabic-primary flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.94 10.94a1.5 1.5 0 0 1 0-2.12l6.36-6.36a1.5 1.5 0 0 1 2.12 0l6.36 6.36a1.5 1.5 0 0 1 0 2.12l-6.36 6.36a1.5 1.5 0 0 1-2.12 0l-6.36-6.36z"/></svg>
                {language === 'en' ? 'Subscribe' : 'اشترك'}
              </button>
            </form>
            {/* رسائل نجاح/خطأ الاشتراك (توضيحية فقط) */}
            {/* <div className="mt-2 text-green-400 text-sm">تم الاشتراك بنجاح!</div> */}
          </div>
        </div>
        {/* شريط سفلي أنيق */}
        <div className="border-t border-alpha-gold/30 pt-8 mt-8 text-gray-400 text-base flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-sans">© 2025 Alpha Studio. {language === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}</div>
          <div className="flex gap-8 mt-2 md:mt-0">
            <a href="#" className="hover:text-alpha-gold transition-colors font-sans underline-offset-4 hover:underline focus:outline-none focus:text-alpha-gold">{language === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}</a>
            <a href="#" className="hover:text-alpha-gold transition-colors font-sans underline-offset-4 hover:underline focus:outline-none focus:text-alpha-gold">{language === 'en' ? 'Terms of Service' : 'شروط الخدمة'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
