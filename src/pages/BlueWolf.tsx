import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const productDesc = `In a time where fear blurs the lines between what we know and what we dread, The Blue Wolf awakens.
He doesn't know who he is.
He doesn't understand the chaos within.
As reality bends and illusions crumble, one truth remains: there's no turning back.\n\nThe Blue Wolf is a thrilling journey into the unknown—a reality-defying narrative where rules collapse and logic fails.\nGet ready for an unforgettable experience.`;

const arDesc = `في عالمٍ يملؤه الغموض وتتشابك فيه الخيوط بين الواقع والخيال،
تظهر أسطورة "الذئب الأزرق" — كائن لا يُهزم، لا ينتمي إلى البشر ولا إلى الوحوش.
الرواية تدور حول شاب يبحث عن الحقيقة وسط عالمٍ يمتلئ بالأسرار والمؤامرات،
ويجد نفسه متورطًا في صراعٍ قد يغيّر مصير البشرية.

رحلة ملحمية تبدأ من الأزقة المظلمة وتنتهي عند بوابة الأساطير…
فهل الحقيقة أقوى من الخيال؟ أم أن الخيال هو الحقيقة التي نخشى الاعتراف بها؟

"الذئب الأزرق" ليست مجرد رواية... بل تجربة تغوص بك في أعماق النفس، وتعيد تشكيل نظرتك للواقع.`;
const enDesc = `In a world shrouded in mystery, where the threads of reality and fantasy intertwine,
emerges the legend of "The Blue Wolf" — an undefeatable being, belonging neither to humans nor beasts.
The novel follows a young man's quest for truth in a world filled with secrets and conspiracies,
finding himself entangled in a conflict that could change the fate of humanity.

An epic journey that begins in dark alleys and ends at the gates of legends...
Is truth stronger than imagination? Or is imagination the truth we fear to acknowledge?

"The Blue Wolf" is not just a novel... it's an experience that plunges you into the depths of the soul, reshaping your perception of reality.`;

const BlueWolf = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={cn("min-h-screen flex flex-col bg-gradient-to-b from-alpha-darker to-black", language === 'ar' && "lang-ar")} lang={language}>
      <Helmet>
        <title>{language === 'ar' ? 'الذئب الأزرق | روايات ألفا ستوديو' : 'The Blue Wolf | Alpha Studio Novels'}</title>
        <meta name="description" content={language === 'ar' ? 'اطلب رواية الذئب الأزرق – رواية خيال علمي قوية بقلم عمر دهيم. متوفرة رقمياً مجاناً أو بنسخة مطبوعة فاخرة.' : 'Order The Blue Wolf – a powerful sci-fi novel by Omar Duhaim. Available digitally for free or in a premium printed edition.'} />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-20 bg-gradient-to-b from-alpha-darker to-black">
        <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-10 items-start animate-fade-in">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {language === 'ar' ? 'الذئب الأزرق' : 'The Blue Wolf'}
            </h1>
            <p className="text-xl text-[#D4AF37] mb-6 font-medium">
              {language === 'ar' ? 'لغة عربية - خيال علمي' : 'Arabic Language - Science Fiction'}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
              {language === 'ar' ? arDesc : enDesc}
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="https://online.fliphtml5.com/ynqhh/vumh/#p=1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg transition-all duration-200 text-center"
              >
                اقرأ الآن
              </a>
              <Link
                to="/purchase/blue-wolf"
                className="px-8 py-3 bg-[#FFD700] hover:bg-[#e6c200] text-black font-bold rounded-full shadow-lg transition-all duration-200 text-center"
              >
                اطلب نسخة مطبوعة
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="aspect-[3/4] bg-alpha-charcoal rounded-lg overflow-hidden">
              <img 
                src="/alpha-studio/blue/first.png" 
                alt={language === 'ar' ? 'غلاف الذئب الأزرق' : 'The Blue Wolf Cover'} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlueWolf;