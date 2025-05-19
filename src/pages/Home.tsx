import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { language } = useLanguage();
  return (
    <>
      <h1 className="alpha-title mb-6">
        {language === 'en' ? 'Alpha Studio' : 'ألفا ستوديو'}
      </h1>
      <h2
        className={`text-2xl md:text-3xl font-display mb-8 text-alpha-gold${language === 'ar' ? ' tracking-wider' : ''}`}
      >
        {language === 'en' ? 'Where History Meets Fiction' : 'أعمالنا'}
      </h2>
    </>
  );
};

export default Home; 