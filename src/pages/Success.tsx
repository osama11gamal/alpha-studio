import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
    <div
      className={cn(
        'min-h-screen flex flex-col bg-[#101014]',
        language === 'ar' && 'lang-ar'
      )}
      lang={language}
    >
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <section className="w-full max-w-2xl mx-auto px-4 py-20 md:py-32 relative flex flex-col items-center justify-center">
          {/* Glassmorphism Card */}
          <div className="relative z-10 w-full bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-10 flex flex-col items-center animate-fade-in-up">
            {/* Success Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg animate-bounce-in">
                <svg className="w-14 h-14 text-white animate-success-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l5 5L19 7" />
                </svg>
              </div>
            </div>
            <h1 className="mb-4 text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-tight animate-fade-in">
              {title}
            </h1>
            <p className="text-gray-300 text-lg mb-6 text-center">
              {message}
            </p>
            <Button
              onClick={() => navigate('/')}
              className="px-6 py-2 rounded-full bg-green-600 text-white font-bold shadow hover:bg-green-700 transition-all duration-200 text-base"
            >
              {language === 'en' ? 'Return Home' : 'العودة للرئيسية'}
            </Button>
          </div>
          {/* Background shapes */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-br from-green-400/30 to-blue-500/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-gradient-to-tr from-emerald-400/20 to-indigo-500/10 rounded-full blur-3xl animate-float-slow2" />
        </section>
      </main>
      {/* Animations CSS */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.7s cubic-bezier(.4,0,.2,1) both; }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.8s both; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        @keyframes bounce-in {
          0% { transform: scale(0.7); opacity: 0; }
          60% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); }
        }
        .animate-bounce-in { animation: bounce-in 0.7s cubic-bezier(.4,0,.2,1) both; }
        @keyframes success-check {
          0% { stroke-dasharray: 0, 24; }
          100% { stroke-dasharray: 24, 0; }
        }
        .animate-success-check path {
          stroke-dasharray: 24, 0;
          stroke-dashoffset: 0;
          animation: success-check 0.7s 0.3s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
        @keyframes float-slow2 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(20px) scale(1.08); }
        }
        .animate-float-slow2 { animation: float-slow2 8s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Success;
