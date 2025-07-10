import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet';

const arDesc = `

متى كانت الحرية حقيقية… ومتى كانت مجرّد خدعة؟
"خداع التحرر" ليست فقط رواية، بل مواجهة صريحة مع الأسئلة التي نخاف حتى من طرحها على أنفسنا.
بين القيود غير المرئية، والخوف المتنكر في شكل اختيار، تبدأ الرحلة... رحلة بحث عن ذات غُيبت، وواقع تم تزييفه ببراعة.

رواية تهزّ القناعة، وتتركك في حيرة:
هل ما تظنه تحررًا… هو في حقيقته أقسى أنواع السجن؟`;

const enDesc = `

What if your freedom… was the biggest lie you believed?

“The Deception of Liberation” isn’t just a novel — it’s a bold introspection into the illusions we live by, and the silent battles we never speak of.
Between hidden restraints and choices that aren’t truly ours, the story unravels a haunting question:

Are we truly free… or elegantly trapped?`;

const KhidaaAltahror = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={cn("min-h-screen flex flex-col bg-gradient-to-b from-alpha-darker to-black", language === 'ar' && "lang-ar")} lang={language}>
      <Helmet>
        <title>{language === 'ar' ? 'خداع التحرر | قصص ألفا ستوديو' : 'The Deception of Liberation | Alpha Studio Stories'}</title>
        <meta name="description" content={language === 'ar' ? 'رواية دراما نفسية جديدة من ألفا ستوديو: خداع التحرر. رحلة في أعماق الحرية والوهم.' : 'A new psychological drama novel from Alpha Studio: The Deception of Liberation. A journey into the depths of freedom and illusion.'} />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-20 bg-gradient-to-b from-alpha-darker to-black">
        <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-10 items-start animate-fade-in">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {language === 'ar' ? 'خداع التحرر' : 'The Deception of Liberation'}
            </h1>
            <p className="text-xl text-[#D4AF37] mb-6 font-medium">
              {language === 'ar' ? 'لغة عربية - دراما نفسية' : 'Arabic Language - Psychological Drama'}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
              {language === 'ar' ? arDesc : enDesc}
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="https://online.fliphtml5.com/ynqhh/bpsk/"
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
                  src="/osos/khedaa.jpeg" 
                  alt={language === 'ar' ? 'غلاف خداع التحرر' : 'The Deception of Liberation Cover'} 
                  className="w-full h-full object-cover"
                />
              </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default KhidaaAltahror;
