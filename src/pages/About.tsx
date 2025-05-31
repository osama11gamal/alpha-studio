import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const About = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  return (
    <div className={cn("min-h-screen flex flex-col bg-gradient-to-b from-alpha-darker to-black", language === 'ar' && "lang-ar")} lang={language}>
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[90vh] overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            <img 
              src="/alpha-studio/osos/vocc.png" 
              alt="Alpha Studio" 
              className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-alpha-darker via-alpha-darker/60 to-transparent"></div>
          </motion.div>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <h1 className="alpha-title text-5xl md:text-7xl mb-6 font-bold tracking-tight">
                {language === 'en' ? 'About Alpha Studio' : ' عن ألـفا سـتوديو'}
              </h1>
              <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto px-4 leading-relaxed">
                {language === 'en' 
                  ? 'Our story, vision, and creative mission' 
                  : 'قصتنا ورؤيتنا ومهمتنا الإبداعية'}
              </p>
            </div>
          </motion.div>
        </section>
        
        <section className="py-24 bg-alpha-darker relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-alpha-gold/5 via-transparent to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20 bg-alpha-darker/50 p-8 rounded-xl backdrop-blur-sm border border-alpha-gold/20 hover:border-alpha-gold/40 transition-colors duration-300"
              >
                <h2 className="alpha-subtitle text-3xl md:text-4xl mb-6">
                  {language === 'en' ? 'Our Mission' : 'مهمتنا'}
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {language === 'en' 
                    ? 'At Alpha Studio, we believe in crafting narratives that transcend boundaries, combining the rich heritage of storytelling with cutting-edge visual expression. Our mission is to create immersive worlds that captivate, challenge, and inspire our audience.' 
                    : 'في ألفا ستوديو، نؤمن بصياغة روايات تتجاوز الحدود، من خلال الجمع بين التراث الغني للسرد والتعبير البصري المتطور. مهمتنا هي خلق عوالم غامرة تأسر وتتحدى وتلهم جمهورنا.'}
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {language === 'en' 
                    ? 'We are dedicated to bringing together traditional narrative techniques with innovative digital technologies to create stories that resonate across cultures and generations.' 
                    : 'نحن ملتزمون بالجمع بين تقنيات السرد التقليدية والتقنيات الرقمية المبتكرة لإنشاء قصص تتردد أصداؤها عبر الثقافات والأجيال.'}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-20 bg-alpha-darker/50 p-8 rounded-xl backdrop-blur-sm border border-alpha-gold/20 hover:border-alpha-gold/40 transition-colors duration-300"
              >
                <h2 className="alpha-subtitle text-3xl md:text-4xl mb-6">
                  {language === 'en' ? 'Our Vision' : 'رؤيتنا'}
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {language === 'en' 
                    ? 'To become a leading creative studio that bridges the gap between traditional storytelling and immersive digital experiences. We envision a world where stories can be experienced in multiple dimensions, engaging all senses and connecting people through shared narratives.' 
                    : 'لأن نصبح استديو إبداعي رائد يسد الفجوة بين السرد التقليدي والتجارب الرقمية الغامرة. نحن نتصور عالمًا يمكن فيه تجربة القصص في أبعاد متعددة، وإشراك جميع الحواس وربط الناس من خلال سرد مشترك.'}
                </p>
                <motion.blockquote 
                  whileHover={{ scale: 1.02 }}
                  className="border-l-4 border-alpha-gold pl-6 italic text-xl text-alpha-gold my-8"
                >
                  {language === 'en' 
                    ? 'Live the past and future in the present...' 
                    : 'عيش الماضي والمستقبل في الحاضر...'}
                </motion.blockquote>
              </motion.div>
              
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-20 bg-alpha-darker/50 p-8 rounded-xl backdrop-blur-sm border border-alpha-gold/20 hover:border-alpha-gold/40 transition-colors duration-300"
              >
                <h2 className="alpha-subtitle text-3xl md:text-4xl mb-6">
                  {language === 'en' ? 'Our Story' : 'قصتنا'}
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {language === 'en' 
                    ? 'Founded by a team of passionate storytellers, artists, and technologists, Alpha Studio was born from a shared desire to push the boundaries of narrative art. What began as a small collective of creative minds has grown into a vibrant studio producing novels, comics, plays, and cinematic experiences.' 
                    : 'تأسس ألفا ستوديو من قبل فريق من رواة القصص والفنانين والتقنيين المتحمسين، وُلد من رغبة مشتركة لدفع حدود فن السرد. ما بدأ كمجموعة صغيرة من العقول الإبداعية نما ليصبح استوديو نابض بالحياة ينتج الروايات والقصص المصورة والمسرحيات والتجارب السينمائية.'}
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {language === 'en' 
                    ? 'Our journey is just beginning, with our flagship projects set to launch in 2025. We invite you to join us as we explore new worlds, characters, and stories that will challenge your imagination and touch your heart.' 
                    : 'رحلتنا قد بدأت للتو، مع مشاريعنا الرائدة المقرر إطلاقها في عام 2025. ندعوك للانضمام إلينا ونحن نستكشف عوالم وشخصيات وقصص جديدة ستتحدى خيالك وتلمس قلبك.'}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex justify-center mt-12"
              >
                <img 
                  src="/osos/63741b0b-e5a2-4932-94bc-89b85eb0d54f.png" 
                  alt="Where History Meets Fiction" 
                  className="max-w-full h-auto rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
