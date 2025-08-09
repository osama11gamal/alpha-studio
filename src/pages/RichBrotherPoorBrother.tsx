import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const arDesc = `

بعد سنوات من حريقٍ مأساوي مزّق عائلتهما، تجمع الأقدار بين شقيقين متباعدين عند بيت طفولتهما المُدمّر.
أحدهما رجلُ أعمالٍ ثريّ يتطلّع للمضيّ قدمًا؛ والآخر نجّارٌ فقير عالقٌ في الماضي.

صراعهما المرير على الميراث ينبش سرًّا مظلمًا، ويجبرهما على مواجهة حقيقةٍ قاسية:
أنّ أكثر الأشباح رعبًا… هي تلك التي نحملها في داخلنا.`;

const enDesc = `

Years after a tragic fire tore their family apart, two estranged brothers are drawn back to the ruins of their childhood home.
One is a wealthy businessman desperate to move on; the other is a poor carpenter trapped in the past.

Their bitter fight over the inheritance unearths a dark secret, forcing them to face the truth:
the most haunting ghosts are the ones we carry within.`;

const RichBrotherPoorBrother = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={cn("min-h-screen flex flex-col bg-gradient-to-b from-alpha-darker to-black", language === 'ar' && "lang-ar")} lang={language}>
      <Helmet>
        <title>{language === 'ar' ? ' الأخ الغني والأخ الفقير| قصص ألفا ستوديو' : 'Rich Brother & Poor Brother | Alpha Studio Stories'}</title>
        <meta
          name="description"
          content={
            language === 'ar'
              ? 'إثارة نفسية عن شقيقين متباعدين يجمعهما بيت طفولتهما المدمّر وصراع على الميراث يكشف سرًّا مظلمًا.'
              : 'A psychological thriller about two estranged brothers, a ruined childhood home, and a dark secret unearthed by an inheritance dispute.'
          }
        />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-20 bg-gradient-to-b from-alpha-darker to-black">
        <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-10 items-start animate-fade-in">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {language === 'ar' ? ' الأخ الغني والأخ الفقير' : 'Rich Brother & Poor Brother'}
            </h1>
            <p className="text-xl text-[#D4AF37] mb-6 font-medium">
              {language === 'ar' ? 'لغة عربية – إثارة نفسية' : 'Arabic Language – Psychological Thriller'}
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
