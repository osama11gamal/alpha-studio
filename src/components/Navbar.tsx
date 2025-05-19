import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-alpha-darker/80 backdrop-blur-md rounded-b-2xl shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        <div className="alpha-logo font-bold text-2xl text-white drop-shadow-lg">
          <Link to="/">
            <span className="text-alpha-blue transition-colors duration-300">ALPHA</span> STUDIO
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center space-x-6 ${language === 'ar' ? 'rtl-space-x-6' : ''}`}>
          <Link to="/" className="text-white hover:text-alpha-blue transition-colors">
            {language === 'en' ? 'Home' : 'الصفحة الرئيسية'}
          </Link>
          <Link to="/works" className={`text-white hover:text-alpha-blue transition-colors ${language === 'ar' ? 'mr-6' : ''}`}>
            {language === 'en' ? 'Our Works' : 'أعمالنا'}
          </Link>
          <Link to="/novels" className={`text-white hover:text-alpha-blue transition-colors ${language === 'ar' ? 'mr-6' : ''}`}>
            {language === 'en' ? 'Novels' : 'الروايات'}
          </Link>
          <Link to="/about" className={`text-white hover:text-alpha-blue transition-colors ${language === 'ar' ? 'mr-6' : ''}`}>
            {language === 'en' ? 'About Us' : 'من نحن'}
          </Link>
          <Link to="/join" className={`text-white hover:text-alpha-blue transition-colors ${language === 'ar' ? 'mr-6' : ''}`}>
            {language === 'en' ? 'Join the Family' : 'انضم إلينا'}
          </Link>
          <Link to="/contact" className={`text-white hover:text-alpha-blue transition-colors ${language === 'ar' ? 'mr-6' : ''}`}>
            {language === 'en' ? 'Contact' : 'تواصل معنا'}
          </Link>
          <button 
            onClick={toggleLanguage}
            className="bg-alpha-charcoal text-alpha-gold px-3 py-1 rounded-lg shadow-md hover:bg-alpha-indigo transition-all duration-300 flex items-center border border-alpha-gold/30 hover:scale-105"
          >
            <Globe className="w-4 h-4 mr-1" />
            {language === 'en' ? 'العربية' : 'English'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleLanguage}
            className="bg-alpha-charcoal text-alpha-gold px-2 py-1 rounded-lg shadow-md hover:bg-alpha-indigo transition-all duration-300 flex items-center mr-3 border border-alpha-gold/30"
          >
            <Globe className="w-4 h-4" />
            <span className="sr-only">{language === 'en' ? 'العربية' : 'English'}</span>
          </button>
          <button 
            className="text-white p-2 rounded-lg hover:bg-alpha-blue/20 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-white mb-1.5 rounded-full"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5 rounded-full"></div>
            <div className="w-6 h-0.5 bg-white rounded-full"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* طبقة تعتيم وضباب */}
          <div className="fixed inset-0 bg-black/60 z-[9999]" onClick={() => setIsMenuOpen(false)} />
          {/* عناصر القائمة تظهر بشكل overlay في منتصف الشاشة */}
          <div className="absolute top-0 left-0 w-full min-h-screen flex flex-col justify-center items-center">
            <div className="bg-alpha-charcoal/90 rounded-2xl shadow-2xl px-8 py-10 w-80 max-w-xs flex flex-col items-center space-y-6">
              <button 
                className="absolute top-6 right-6 text-white text-3xl hover:text-alpha-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ×
              </button>
              <div className="flex flex-col items-center space-y-6 w-full">
                <Link 
                  to="/" 
                  className="text-xl text-white hover:text-alpha-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'en' ? 'Home' : 'الصفحة الرئيسية'}
                </Link>
                <Link 
                  to="/works" 
                  className="text-xl text-white hover:text-alpha-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'en' ? 'Our Works' : 'أعمالنا'}
                </Link>
                <Link 
                  to="/novels" 
                  className="text-xl text-white hover:text-alpha-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'en' ? 'Novels' : 'الروايات'}
                </Link>
                <Link 
                  to="/about" 
                  className="text-xl text-white hover:text-alpha-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'en' ? 'About Us' : 'من نحن'}
                </Link>
                <Link 
                  to="/join" 
                  className="text-xl text-white hover:text-alpha-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'en' ? 'Join the Family' : 'انضم إلينا'}
                </Link>
                <Link 
                  to="/contact" 
                  className="text-xl text-white hover:text-alpha-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'en' ? 'Contact' : 'تواصل معنا'}
                </Link>
                <button 
                  onClick={() => {
                    toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="mt-6 bg-alpha-charcoal text-alpha-gold px-4 py-2 rounded-lg shadow-md hover:bg-alpha-indigo transition-all duration-300 flex items-center border border-alpha-gold/30 hover:scale-105"
                >
                  <Globe className="w-4 h-4 mr-1" />
                  {language === 'en' ? 'العربية' : 'English'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
