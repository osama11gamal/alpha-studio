import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const arDesc = `

رؤية مختلفة تمامًا للمال، النجاح، والحرية المالية...
رواية تصدمك بالمفاهيم التي تعتقد أنك تعرفها، وتدفعك لإعادة النظر في كل ما تعلمته عن الوظيفة، التعليم، والاستقرار.

بأسلوب بصري جذّاب، تنقلك الرواية إلى عالم من الأفكار التي لا تُقال في المدارس، وتضعك أمام سؤال مصيري:
هل أنت على الطريق الذي يقودك للحرية؟ أم أنك تمشي في دائرة مغلقة رسمها لك الآخرون؟

ليست مجرد قصة… بل رحلة لفك قيود الفكر التقليدي وبناء عقلية مالية مستقلة.`;

const enDesc = `

A sharp shift in how we perceive money, success, and freedom.
This visual story challenges everything you think you know about careers, education, and financial growth.

With powerful illustrations and bold insights, it dares you to question the path you’re on and opens the door to a new kind of mindset—one that schools never teach.

Not just a book… but a wake-up call for anyone ready to break free from the limits of conventional thinking.`;

const RichBrotherPoorBrother = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={cn("min-h-screen flex flex-col bg-gradient-to-b from-alpha-darker to-black", language === 'ar' && "lang-ar")} lang={language}>
      <Helmet>
        <title>{language === 'ar' ? ' الأخ الغني والأخ الفقير| قصص ألفا ستوديو' : 'Rich Brother & Poor Brother | Alpha Studio Stories'}</title>
        <meta name="description" content={language === 'ar' ? 'قصة حوارية جديدة من ألفا ستوديو: الأخ الغني والأخ الفقير. مغامرة في عالم المايسترو بين المبادئ والأحلام.' : 'A new dialog story from Alpha Studio: Midnight Circus. An adventure in The Maestro\'s world between principles and dreams.'} />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-20 bg-gradient-to-b from-alpha-darker to-black">
        <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-10 items-start animate-fade-in">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {language === 'ar' ? ' الأخ الغني والأخ الفقير' : 'Rich Brother & Poor Brother'}
            </h1>
            <p className="text-xl text-[#D4AF37] mb-6 font-medium">
              {language === 'ar' ? 'لغة عربية – تطوير ذاتي ' : 'Arabic Language – Self-Development'}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
              {language === 'ar' ? arDesc : enDesc}
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="https://online.fliphtml5.com/ynqhh/wiie/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg transition-all duration-200 text-center"
                style={{ pointerEvents: 'auto', opacity: 1 }}
              >
                {language === 'ar' ? 'اقرأ الآن' : 'Read Now'}
              </a>
            </div>
          </div>
          <div className="flex-1">
              <div className="aspect-[3/4] bg-alpha-charcoal rounded-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src="/osos/bro.jpeg" 
                  alt={language === 'ar' ? 'غلاف الأخ الغني والأخ الفقير' : 'Rich Brother & Poor Brother Cover'} 
                  className="w-full h-full object-cover"
                />
              </div>
          </div>
        </section>
      </main>
    </div>
  );
};


export default RichBrotherPoorBrother;
