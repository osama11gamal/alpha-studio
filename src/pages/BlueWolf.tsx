import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const blueImages = [
  '/alpha-studio/blue/first.png',
  '/alpha-studio/blue/second.png',
  '/alpha-studio/blue/third.png',
  '/alpha-studio/blue/fourth.png',
  '/alpha-studio/blue/fifth.png',
];

const productDesc = `In a time where fear blurs the lines between what we know and what we dread, The Blue Wolf awakens.
He doesn’t know who he is.
He doesn’t understand the chaos within.
As reality bends and illusions crumble, one truth remains: there’s no turning back.\n\nThe Blue Wolf is a thrilling journey into the unknown—a reality-defying narrative where rules collapse and logic fails.\nGet ready for an unforgettable experience.`;

const arDesc = `*2040... عام خرج فيه كل شيء عن السيطرة!*\nبين ما نعرفه وما نخشاه،\nتستيقظ قوى لم يكن يُفترض لها أن تعود.\nصوت الدم يعلو، والسماء تشهد على ما لا يُقال.\n\nهو لا يعرف من يكون... ولا ما الذي يجري بداخله.\nالأسئلة تطارده، والحدود بين الحقيقة والخيال تذوب.\n\nحين يتغيّر كل شيء، لا يبقى أمامك سوى المواجهة.\n\nقريبًا... رواية ستأخذك إلى حدود جديدة من الخيال،\nحيث لا قانون يحكم، ولا منطق يفسّر.\n\nاستعد... لما هو أبعد من الواقع.`;
const enDesc = `*2040... The year everything spiraled out of control!*\nBetween what we know and what we fear,\npowers that should never have returned awaken.\nThe sound of blood rises, and the sky bears witness to the unspoken.\n\nHe doesn't know who he is... nor what is happening inside him.\nQuestions haunt him, and the boundaries between reality and fantasy dissolve.\n\nWhen everything changes, you have no choice but to face it.\n\nComing soon... a novel that will take you to new frontiers of imagination,\nwhere no law rules, and no logic explains.\n\nGet ready... for what is beyond reality.`;

const BlueWolf = () => {
  const { language } = useLanguage();
  const [mainImg, setMainImg] = useState(blueImages[0]);
  const [edition, setEdition] = useState<'digital' | 'printed'>('digital');

  return (
    <>
      <Helmet>
        <title>{language === 'ar' ? 'الذئب الأزرق | روايات ألفا ستوديو' : 'The Blue Wolf | Alpha Studio Novels'}</title>
        <meta name="description" content={language === 'ar' ? 'اطلب رواية الذئب الأزرق – رواية خيال علمي قوية بقلم عمر دحيم. متوفرة رقمياً مجاناً أو بنسخة مطبوعة فاخرة.' : 'Order The Blue Wolf – a powerful sci-fi novel by Omar Duhaim. Available digitally for free or in a premium printed edition.'} />
      </Helmet>
      <div className={cn("min-h-screen flex flex-col bg-gradient-to-b from-alpha-darker to-black", language === 'ar' && "lang-ar")} lang={language}>
        <Navbar />
        <main className="flex-grow pt-20 bg-gradient-to-b from-alpha-darker to-black">
          <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-10 items-start animate-fade-in">
            {/* Left: Product Image */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <div className="border rounded-lg overflow-hidden bg-white mb-4 w-full max-w-md aspect-[3/4] flex items-center justify-center shadow-2xl">
                <motion.img 
                  src={mainImg} 
                  alt={language === 'ar' ? 'الذئب الأزرق' : 'The Blue Wolf'} 
                  className="object-contain w-full h-full"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{ cursor: 'zoom-in' }}
                />
              </div>
              <div className="flex gap-2 justify-center">
                {blueImages.map((img, idx) => (
                  <motion.button 
                    key={img} 
                    onClick={() => setMainImg(img)} 
                    className={`border rounded p-1 bg-white ${mainImg === img ? 'ring-2 ring-yellow-400' : ''}`}
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    style={{ cursor: 'pointer' }}
                  > 
                    <img src={img} alt={`${language === 'ar' ? 'الذئب الأزرق' : 'Blue Wolf'} ${idx+1}`} className="w-14 h-16 object-contain" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="w-full md:w-1/2 bg-alpha-charcoal/60 rounded-xl p-8 shadow-2xl border border-alpha-gold/20 backdrop-blur-md animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-2">
                {language === 'ar' ? 'الذئب الأزرق – رواية تتجاوز الواقع' : '🌌 The Blue Wolf – A Novel Beyond Reality'}
              </h1>
              <div className="text-lg text-gray-300 mb-1 font-semibold">{language === 'ar' ? 'بقلم عمر دحيم' : 'By Omar Duhaim'}</div>
              <div className="italic text-alpha-gold mb-2">{language === 'ar' ? '2040... عام خرج فيه كل شيء عن السيطرة!' : '2040... The year everything spiraled out of control.'}</div>
              {/* Star Rating */}
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 text-xl mr-2 font-bold">4.8</span>
                <span className="flex text-yellow-400 text-lg">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < 4 ? 'fill-yellow-400' : 'fill-yellow-200'}`} viewBox="0 0 20 20"><polygon points="9.9,1.1 7.6,6.6 1.6,7.6 6,11.9 4.9,17.8 9.9,14.8 14.9,17.8 13.8,11.9 18.2,7.6 12.2,6.6 "/></svg>
                  ))}
                </span>
                <span className="text-gray-400 text-sm ml-2">{language === 'ar' ? '(١٬٢٠٠ تقييم)' : '(1,200 ratings)'}</span>
              </div>
              <div className="italic text-gray-400 mb-4">{language === 'ar' ? 'رحلة تتحدى الواقع... هل تجرؤ على الدخول؟' : 'A reality-defying journey. Will you dare to enter?'}</div>
              {/* Description */}
              <div className="text-gray-300 mb-4">
                <p className="mb-2">{language === 'ar' ? arDesc : productDesc}</p>
              </div>
              {/* Edition Selector */}
              <div className="flex gap-4 mb-4">
                <button onClick={() => setEdition('digital')} className={`px-4 py-2 rounded-lg border font-bold transition ${edition === 'digital' ? 'bg-green-600 text-white border-green-700' : 'bg-gray-800 text-gray-200 border-gray-700 hover:bg-green-900'}`}>{language === 'ar' ? 'النسخة الرقمية' : 'Digital Edition'}</button>
                <button onClick={() => setEdition('printed')} className={`px-4 py-2 rounded-lg border font-bold transition ${edition === 'printed' ? 'bg-yellow-600 text-white border-yellow-700' : 'bg-gray-800 text-gray-200 border-gray-700 hover:bg-yellow-900'}`}>{language === 'ar' ? 'النسخة المطبوعة الفاخرة' : 'Printed Collector’s Edition'}</button>
              </div>
              {/* Price & Purchase */}
              {edition === 'digital' ? (
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-green-500">{language === 'ar' ? 'مجانية' : 'FREE'}</span>
                    <span className="text-gray-400 line-through text-lg">{language === 'ar' ? '١٠٠ جنيه' : '100 EGP'}</span>
                  </div>
                  <Link to="/purchase/digital" className="btn-primary w-full text-center py-3 rounded-lg block mb-2">{language === 'ar' ? 'احصل على النسخة الرقمية' : '📥 Get Digital Copy'}</Link>
                  <div className="text-xs text-gray-400 mt-1">{language === 'ar' ? 'هذه النسخة مرخصة للمشتري فقط. لا يجوز طباعتها أو إعادة توزيعها تحت أي ظرف.' : 'This copy is uniquely licensed to the buyer. It must not be printed or redistributed under any circumstances.'}</div>
                </div>
              ) : (
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-alpha-gold">{language === 'ar' ? '١٤٩ جنيه' : '149 EGP'}</span>
                  </div>
                  <Link to="/purchase/printed" className="btn-primary w-full text-center py-3 rounded-lg block mb-2">{language === 'ar' ? 'احجز النسخة المطبوعة' : '📦 Pre-order Printed Edition'}</Link>
                  <div className="text-xs text-gray-400 mt-1">{language === 'ar' ? 'التوصيل خلال ٢-٤ أسابيع. نسخ موقعة محدودة!' : 'Estimated delivery in 2-4 weeks. Limited signed copies available!'}</div>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default BlueWolf;