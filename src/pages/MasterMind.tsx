import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const arDesc = `كما عانى كريم طوال حياته من الفقر والفشل، كان يحمل في داخله حلمًا أكبر بكثير من واقعه. لم يتخلَّ يومًا عن شغفه بالاختراعات، وظل يسعى وراء فكرة تغيّر العالم. وفي لحظة غضب، انفجر المعمل الذي كان يعمل به، ليترك وراءه تركيبة غامضة أصبحت مطمعًا لعلماء أرادوا تحويلها إلى سلاح نووي مدمر.
لكن كريم لم يكن مجرد ضحية، بل خرج من بين الركام شخصًا جديدًا… أصبح "ماستر مايند"، العقل القادر على تحويل الخيال إلى واقع، وصناعة معجزات بيديه وعقله وحده.`;

const enDesc = `Though Karim suffered a life filled with poverty and failure, he always carried a vision far greater than his circumstances. His passion for inventions never faded, driving him to chase an idea that could change the world. In a moment of rage, the lab he worked in exploded, leaving behind a mysterious formula that many scientists sought to exploit for their nuclear weapons.
But Karim was not just a victim—he emerged as someone new… He became “MasterMind”, a genius capable of binding imagination to reality, creating extraordinary wonders with nothing but his hands and his mind.`;

const MasterMind = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={cn("min-h-screen flex flex-col bg-gradient-to-b from-alpha-darker to-black", language === 'ar' && "lang-ar")} lang={language}>
      <Helmet>
        <title>{language === 'ar' ? 'ماستر مايند | قصص ألفا ستوديو' : 'MasterMind | Alpha Studio Stories'}</title>
        <meta name="description" content={language === 'ar' ? 'قصة جديدة من ألفا ستوديو: ماستر مايند. رحلة عبقرية كريم من الفشل إلى المعجزة.' : 'A new story from Alpha Studio: MasterMind. The genius journey of Karim from failure to miracle.'} />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-20 bg-gradient-to-b from-alpha-darker to-black">
        <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-10 items-start animate-fade-in">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {language === 'ar' ? 'ماستر مايند' : 'MasterMind'}
            </h1>
            <p className="text-xl text-[#D4AF37] mb-6 font-medium">
              {language === 'ar' ? 'لغة عربية - قصة خيال علمي' : 'Arabic Language - Sci-Fi Story'}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
              {language === 'ar' ? arDesc : enDesc}
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="https://online.fliphtml5.com/ynqhh/rsyk/"
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
                  src="/osos/master.jpeg" 
                  alt={language === 'ar' ? 'غلاف ماستر مايند' : 'MasterMind Cover'} 
                  className="w-full h-full object-cover"
                />
              </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MasterMind;
