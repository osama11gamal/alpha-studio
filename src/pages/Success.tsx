import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import Navbar from '../components/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Success = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const { title, message } = location.state || {
    title: language === 'en' ? 'Success!' : 'تم بنجاح!',
    message: language === 'en' 
      ? 'Your request has been received successfully.'
      : 'تم استلام طلبك بنجاح.'
  };

  return (
    <div className={cn("min-h-screen flex flex-col", language === 'ar' && "lang-ar")} lang={language}>
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-alpha-blue/20 via-transparent to-transparent animate-pulse"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(0,0,0,0.1)_25%,_transparent_25%,_transparent_50%,_rgba(0,0,0,0.1)_50%,_rgba(0,0,0,0.1)_75%,_transparent_75%,_transparent)] bg-[length:20px_20px] animate-shimmer"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-green-500 rounded-full mx-auto flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <h1 className="alpha-title mb-4 text-4xl md:text-5xl text-white">
                {title}
              </h1>
              <p className="text-gray-300 text-xl mb-8">
                {message}
              </p>
              <Button 
                onClick={() => navigate('/')}
                className="btn-primary"
              >
                {language === 'en' ? 'Return Home' : 'العودة للرئيسية'}
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Success; 