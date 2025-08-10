import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const arDesc = 
 `في زمنٍ يموج بالأسئلة الوجودية والتحولات النفسية، تأتي "عودة" كصرخة هادئة تعيد فتح أبواب الماضي، وتضعنا أمام مرايا أنفسنا بلا رحمة.

رحلة مسرحية عميقة داخل النفس البشرية، حيث تتقاطع الذكريات مع الندم، وتتصادم الحقيقة مع الأمل.
"عودة" ليست مجرد عودة جسدية، بل هي مواجهة مصيرية مع الذات… مع ما تركناه خلفنا، ومع ما تمنّينا أن نكونه.

هذه المسرحية تطرح تساؤلات أكبر من إجاباتها، وتُحفّز المشاهد لاكتشاف أبعاد خفية في علاقته بالزمن، والمكان، والروح.

"عودة" ليست مجرد نص مسرحي، بل هي لحظة تأمل حيّة… صوت داخلي نابع من أعماق الصمت.`;

const enDesc =

  `In a time fraught with existential questions and emotional shifts, "Awda" (Return) emerges as a quiet cry that reopens the doors of the past and confronts us with a mirror of our truest selves.

A theatrical journey through the human soul—where memory collides with regret, and truth intertwines with hope.
"Awda" is not just a physical return, but a turning point… a reckoning with what was left behind and what might have been.

This play does not hand you answers—it stirs you to search for them in the silence between the lines.

“Awda” is more than a script; it's a living moment of reflection… a voice echoing from within.`;
 



const Awda = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={cn("min-h-screen flex flex-col bg-gradient-to-b from-alpha-darker to-black", language === 'ar' && "lang-ar")} lang={language}>
      <Helmet>
        <title>{language === 'ar' ? 'عودة | مسرحيات ألفا ستوديو' : 'Awda | Alpha Studio Plays'}</title>
        <meta name="description" content={language === 'ar' ? 'مسرحية دراما فكرية جديدة من ألفا ستوديو: عودة. رحلة داخل النفس البشرية.' : 'A new psychological drama play from Alpha Studio: Awda. A journey through the human soul.'} />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-20 bg-gradient-to-b from-alpha-darker to-black">
        <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-10 items-start animate-fade-in">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {language === 'ar' ? 'عودة' : 'Awda'}
            </h1>
            <p className="text-xl text-[#D4AF37] mb-6 font-medium">
              {language === 'ar' ? 'مسرحية عربية - دراما فكرية' : 'Arabic Play – Psychological Drama'}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
              {language === 'ar' ? arDesc : enDesc}
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="https://online.fliphtml5.com/ynqhh/kxdk/"
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
                  src="/osos/awda.jpeg" 
                  alt={language === 'ar' ? 'غلاف عودة' : 'Awda Cover'} 
                  className="w-full h-full object-cover"
                />
              </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Awda;
