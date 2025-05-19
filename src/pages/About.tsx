import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const { language } = useLanguage();
  
  return (
    <div className={cn("min-h-screen flex flex-col", language === 'ar' && "lang-ar")} lang={language}>
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="relative h-80 overflow-hidden">
          <img 
            src="/osos/911f1d9f-f81b-4704-a4c4-e8b355d68276.png" 
            alt="Alpha Studio" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-alpha-darker via-alpha-darker/60 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="alpha-title mb-4">{language === 'en' ? 'About Alpha Studio' : 'عن ألفا ستوديو'}</h1>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto px-4">
                {language === 'en' 
                  ? 'Our story, vision, and creative mission' 
                  : 'قصتنا ورؤيتنا ومهمتنا الإبداعية'}
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-alpha-darker">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="mb-16">
                <h2 className="alpha-subtitle">
                  {language === 'en' ? 'Our Mission' : 'مهمتنا'}
                </h2>
                <p className="text-gray-300 mb-6">
                  {language === 'en' 
                    ? 'At Alpha Studio, we believe in crafting narratives that transcend boundaries, combining the rich heritage of storytelling with cutting-edge visual expression. Our mission is to create immersive worlds that captivate, challenge, and inspire our audience.' 
                    : 'في ألفا ستوديو، نؤمن بصياغة روايات تتجاوز الحدود، من خلال الجمع بين التراث الغني للسرد والتعبير البصري المتطور. مهمتنا هي خلق عوالم غامرة تأسر وتتحدى وتلهم جمهورنا.'}
                </p>
                <p className="text-gray-300">
                  {language === 'en' 
                    ? 'We are dedicated to bringing together traditional narrative techniques with innovative digital technologies to create stories that resonate across cultures and generations.' 
                    : 'نحن ملتزمون بالجمع بين تقنيات السرد التقليدية والتقنيات الرقمية المبتكرة لإنشاء قصص تتردد أصداؤها عبر الثقافات والأجيال.'}
                </p>
              </div>
              
              <div className="mb-16">
                <h2 className="alpha-subtitle">
                  {language === 'en' ? 'Our Vision' : 'رؤيتنا'}
                </h2>
                <p className="text-gray-300 mb-6">
                  {language === 'en' 
                    ? 'To become a leading creative studio that bridges the gap between traditional storytelling and immersive digital experiences. We envision a world where stories can be experienced in multiple dimensions, engaging all senses and connecting people through shared narratives.' 
                    : 'لأن نصبح استديو إبداعي رائد يسد الفجوة بين السرد التقليدي والتجارب الرقمية الغامرة. نحن نتصور عالمًا يمكن فيه تجربة القصص في أبعاد متعددة، وإشراك جميع الحواس وربط الناس من خلال سرد مشترك.'}
                </p>
                <blockquote className="border-l-4 border-alpha-blue pl-4 italic text-gray-300 my-8">
                  {language === 'en' 
                    ? 'Live the past and future in the present...' 
                    : 'عيش الماضي والمستقبل في الحاضر...'}
                </blockquote>
              </div>
              
              <div className="mb-16">
                <h2 className="alpha-subtitle">
                  {language === 'en' ? 'Our Story' : 'قصتنا'}
                </h2>
                <p className="text-gray-300 mb-6">
                  {language === 'en' 
                    ? 'Founded by a team of passionate storytellers, artists, and technologists, Alpha Studio was born from a shared desire to push the boundaries of narrative art. What began as a small collective of creative minds has grown into a vibrant studio producing novels, comics, plays, and cinematic experiences.' 
                    : 'تأسس ألفا ستوديو من قبل فريق من رواة القصص والفنانين والتقنيين المتحمسين، وُلد من رغبة مشتركة لدفع حدود فن السرد. ما بدأ كمجموعة صغيرة من العقول الإبداعية نما ليصبح استوديو نابض بالحياة ينتج الروايات والقصص المصورة والمسرحيات والتجارب السينمائية.'}
                </p>
                <p className="text-gray-300">
                  {language === 'en' 
                    ? 'Our journey is just beginning, with our flagship projects set to launch in 2025. We invite you to join us as we explore new worlds, characters, and stories that will challenge your imagination and touch your heart.' 
                    : 'رحلتنا قد بدأت للتو، مع مشاريعنا الرائدة المقرر إطلاقها في عام 2025. ندعوك للانضمام إلينا ونحن نستكشف عوالم وشخصيات وقصص جديدة ستتحدى خيالك وتلمس قلبك.'}
                </p>
              </div>
              
              <div className="flex justify-center mt-12">
                <img 
                  src="/osos/63741b0b-e5a2-4932-94bc-89b85eb0d54f.png" 
                  alt="Where History Meets Fiction" 
                  className="max-w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
