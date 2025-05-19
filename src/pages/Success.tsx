import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
      
      <main className="flex-grow pt-20">
        <section className="relative h-80 overflow-hidden">
          <img 
            src="/osos/a8c965b5-cf48-4089-b1e4-49654271521c.png" 
            alt="Success" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-alpha-darker via-alpha-darker/60 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="alpha-title mb-4">
                {title}
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto px-4">
                {message}
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-alpha-darker">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <svg 
                  className="w-24 h-24 mx-auto text-alpha-gold" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>
              
              <div className="space-y-6">
                <p className="text-xl text-gray-300">
                  {language === 'en' 
                    ? 'We appreciate your interest in Alpha Studio. Our team will review your message and get back to you as soon as possible.'
                    : 'نحن نقدر اهتمامك بـ Alpha Studio. سيقوم فريقنا بمراجعة رسالتك والرد عليك في أقرب وقت ممكن.'}
                </p>
                
                <div className="flex justify-center space-x-4">
                  <Button
                    onClick={() => navigate('/')}
                    className="px-8 py-4 bg-alpha-gold text-alpha-darker font-bold rounded-lg hover:bg-alpha-gold/90 transition-colors duration-300"
                  >
                    {language === 'en' ? 'Back to Home' : 'العودة للرئيسية'}
                  </Button>
                  
                  <Button
                    onClick={() => navigate('/contact')}
                    className="px-8 py-4 bg-alpha-blue text-white font-bold rounded-lg hover:bg-alpha-blue-light transition-colors duration-300"
                  >
                    {language === 'en' ? 'Send Another Message' : 'إرسال رسالة أخرى'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Success; 