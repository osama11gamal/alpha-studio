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
          <Link to="/" className="text-white hover:text-alpha-blue transition-colors" onClick={(e) => {
            e.preventDefault();
            window.location.href = '/alpha-studio/';
          }}>
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
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-alpha-blue transition-colors"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-alpha-darker/95 backdrop-blur-md p-6 rounded-b-2xl shadow-lg md:hidden">
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
                onClick={toggleLanguage}
                className="bg-alpha-charcoal text-alpha-gold px-4 py-2 rounded-lg shadow-md hover:bg-alpha-indigo transition-all duration-300 flex items-center border border-alpha-gold/30"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language === 'en' ? 'العربية' : 'English'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
