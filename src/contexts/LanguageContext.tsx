import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type LanguageContextType = {
  language: 'en' | 'ar';
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // اللغة الافتراضية: العربية
  const [language, setLanguage] = useState<'en' | 'ar'>('ar');

  // Initialize document direction on component mount
  useEffect(() => {
    updateDocumentDirection(language);
  }, [language]);

  const updateDocumentDirection = (lang: 'en' | 'ar') => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    updateDocumentDirection(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
