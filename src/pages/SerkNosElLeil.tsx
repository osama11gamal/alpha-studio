import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const arDesc = `في قلب الصحراء، حيث تتلاشى حدود الواقع، تُكشف قصة "سيرك نص الليل". تبدأ أحداث هذه القصة مع خمسة أصدقاء من الجامعة يقررون استكشاف سيرك غامض يظهر في منتصف الليل. يكتشفون أن هذا ليس سيركًا عاديًا، بل عالم المايسترو الذي يعرف كل شيء ويستغل طموحات الناس لتحقيق أهدافه.

تدور القصة حول الكاتب "حليم" , الذي يجد نفسه وأصدقاءه في مواجهة مع المايسترو، الذي يقدم لهم خيارًا بين المال أو الشهرة العالمية. يختار أربعة منهم الشهرة ويصبحون نجومًا ، لكن تصرفاتهم الغريبة تثير الشكوك. يقرر حليم كشف الحقيقة من خلال كتاب يضم رسائل سرية لأصدقائه ، ليكشف لهم عن خطة المايسترو وشروره.

"سيرك نص الليل" ليست مجرد قصة، بل رحلة تكشف عن قيمة المبادئ والصداقة في عالم تتقاطع فيه الأحلام مع الأخطار. فهل سينجح الأصدقاء في التغلب على المايسترو واستعادة حريتهم، أم سيغرقون في عالمه الجنوني؟`;

const enDesc = `In the heart of the desert, where the boundaries of reality blur, unfolds the story of "Midnight Circus". The events of this narrative begin with five university friends who decide to explore a mysterious circus that appears in the middle of the night. They discover that this is no ordinary circus, but the world of "The Maestro" , who knows everything and exploits people's ambitions to achieve his own goals.

The story revolves around the writer "Haleem" , who finds himself and his friends confronting The Maestro, who offers them a choice between vast wealth or global fame. Four of them choose fame and become stars , but their strange behaviors raise suspicions. Haleem decides to uncover the truth through a book containing secret messages for his friends , revealing The Maestro's plan and evils.

"Midnight Circus" is not just a story, but a journey that reveals the value of principles and friendship in a world where dreams intersect with dangers. Will the friends succeed in overcoming The Maestro and reclaiming their freedom, or will they drown in his insane world?`;

const SerkNosElLeil = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={cn("min-h-screen flex flex-col bg-gradient-to-b from-alpha-darker to-black", language === 'ar' && "lang-ar")} lang={language}>
      <Helmet>
        <title>{language === 'ar' ? 'سيرك نص الليل | قصص ألفا ستوديو' : 'Midnight Circus | Alpha Studio Stories'}</title>
        <meta name="description" content={language === 'ar' ? 'قصة حوارية جديدة من ألفا ستوديو: سيرك نص الليل. مغامرة في عالم المايسترو بين المبادئ والأحلام.' : 'A new dialog story from Alpha Studio: Midnight Circus. An adventure in The Maestro\'s world between principles and dreams.'} />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-20 bg-gradient-to-b from-alpha-darker to-black">
        <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-10 items-start animate-fade-in">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {language === 'ar' ? 'سيرك نص الليل' : 'Midnight Circus'}
            </h1>
            <p className="text-xl text-[#D4AF37] mb-6 font-medium">
              {language === 'ar' ? 'لغة عربية - قصة حوارية' : 'Arabic Language - Dialog Story'}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
              {language === 'ar' ? arDesc : enDesc}
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="https://online.fliphtml5.com/ynqhh/dqtk/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg transition-all duration-200 text-center"
                style={{ pointerEvents: 'auto', opacity: 1 }}
              >
                (النسخه العربية) اقرأ الآن 
              </a>
              <a
                href="https://online.fliphtml5.com/Nofoora/xrdi/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#FFD700] hover:bg-[#e6c200] text-black font-bold rounded-full shadow-lg transition-all duration-200 text-center"
              >
                (English version) Read now
              </a>
            </div>
          </div>
          <div className="flex-1">
              <div className="aspect-[3/4] bg-alpha-charcoal rounded-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src="/osos/serk2.jpeg" 
                  alt={language === 'ar' ? 'غلاف سيرك نص الليل' : 'Midnight Circus Cover'} 
                  className="w-full h-full object-cover"
                />
              </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SerkNosElLeil;
