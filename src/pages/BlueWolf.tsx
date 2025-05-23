import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blueImages = [
  '/blue/first.png',
  '/blue/second.png',
  '/blue/third.png',
  '/blue/fourth.png',
  '/blue/fifth.png',
];

const arDesc = `*2040... عام خرج فيه كل شيء عن السيطرة!*\nبين ما نعرفه وما نخشاه،\nتستيقظ قوى لم يكن يُفترض لها أن تعود.\nصوت الدم يعلو، والسماء تشهد على ما لا يُقال.\n\nهو لا يعرف من يكون... ولا ما الذي يجري بداخله.\nالأسئلة تطارده، والحدود بين الحقيقة والخيال تذوب.\n\nحين يتغيّر كل شيء، لا يبقى أمامك سوى المواجهة.\n\nقريبًا... رواية ستأخذك إلى حدود جديدة من الخيال،\nحيث لا قانون يحكم، ولا منطق يفسّر.\n\nاستعد... لما هو أبعد من الواقع.`;
const enDesc = `*2040... The year everything spiraled out of control!*\nBetween what we know and what we fear,\npowers that should never have returned awaken.\nThe sound of blood rises, and the sky bears witness to the unspoken.\n\nHe doesn't know who he is... nor what is happening inside him.\nQuestions haunt him, and the boundaries between reality and fantasy dissolve.\n\nWhen everything changes, you have no choice but to face it.\n\nComing soon... a novel that will take you to new frontiers of imagination,\nwhere no law rules, and no logic explains.\n\nGet ready... for what is beyond reality.`;

const BlueWolf = () => {
  const { language } = useLanguage();
  const [mainImg, setMainImg] = useState(blueImages[0]);

  return (
    <div className={cn("min-h-screen flex flex-col bg-gradient-to-b from-alpha-darker to-black", language === 'ar' && "lang-ar")} lang={language}>
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-10 items-start">
          {/* Image Gallery */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="border rounded-lg overflow-hidden bg-white mb-4 w-full max-w-md aspect-[3/4] flex items-center justify-center">
              <img src={mainImg} alt="Blue Wolf" className="object-contain w-full h-full" />
            </div>
            <div className="flex gap-2 justify-center">
              {blueImages.map((img, idx) => (
                <button key={img} onClick={() => setMainImg(img)} className={`border rounded p-1 bg-white ${mainImg === img ? 'ring-2 ring-yellow-400' : ''}`}> 
                  <img src={img} alt={`Blue Wolf ${idx+1}`} className="w-14 h-16 object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 bg-alpha-charcoal/60 rounded-xl p-6 shadow-xl border border-alpha-gold/20">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{language === 'en' ? 'The Blue Wolf' : 'الذئب الأزرق'}</h1>
            {/* Rating */}
            <div className="flex items-center mb-3">
              <span className="text-yellow-400 text-xl mr-2">4.8</span>
              <span className="flex text-yellow-400 text-lg">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < 4 ? 'fill-yellow-400' : 'fill-yellow-200'}`} viewBox="0 0 20 20"><polygon points="9.9,1.1 7.6,6.6 1.6,7.6 6,11.9 4.9,17.8 9.9,14.8 14.9,17.8 13.8,11.9 18.2,7.6 12.2,6.6 "/></svg>
                ))}
              </span>
              <span className="text-gray-400 text-sm ml-2">({language === 'en' ? '1,200 ratings' : '١٬٢٠٠ تقييم'})</span>
            </div>
            {/* Description */}
            <div className="whitespace-pre-line text-lg text-gray-200 mb-6">
              {language === 'en' ? enDesc : arDesc}
            </div>
            {/* Purchase Options (unchanged) */}
            <div className="space-y-6">
              {/* Digital Edition */}
              <div className="bg-alpha-dark rounded-lg p-4 border border-alpha-gold/20">
                <h3 className="text-xl font-bold mb-2">{language === 'en' ? 'Digital Edition' : 'النسخة الرقمية'}</h3>
                <div className="mb-2 flex items-center">
                  <span className="text-2xl font-bold text-green-500">FREE</span>
                  <span className="text-gray-400 ml-2 line-through text-lg">100 LE</span>
                </div>
                <ul className="text-gray-300 text-base mb-3 list-disc list-inside">
                  <li>{language === 'en' ? 'Instant PDF download' : 'تحميل PDF فوري'}</li>
                  <li>{language === 'en' ? 'Compatible with all devices' : 'متوافق مع جميع الأجهزة'}</li>
                  <li>{language === 'en' ? 'Free updates' : 'تحديثات مجانية'}</li>
                </ul>
                <Link to="/purchase/digital" className="btn-primary w-full text-center py-2 rounded-lg block">{language === 'en' ? 'Get Digital Edition' : 'احصل على النسخة الرقمية'}</Link>
              </div>
              {/* Printed Edition */}
              <div className="bg-alpha-dark rounded-lg p-4 border border-alpha-gold/20">
                <h3 className="text-xl font-bold mb-2">{language === 'en' ? 'Printed Edition' : 'النسخة المطبوعة'}</h3>
                <div className="mb-2">
                  <span className="text-2xl font-bold text-alpha-gold">149 LE</span>
                </div>
                <ul className="text-gray-300 text-base mb-3 list-disc list-inside">
                  <li>{language === 'en' ? 'Premium hardcover' : 'غلاف فاخر'}</li>
                  <li>{language === 'en' ? 'Free shipping' : 'شحن مجاني'}</li>
                  <li>{language === 'en' ? 'Signed by the author' : 'موقعة من المؤلف'}</li>
                </ul>
                <Link to="/purchase/printed" className="btn-primary w-full text-center py-2 rounded-lg block">{language === 'en' ? 'Get Printed Edition' : 'احصل على النسخة المطبوعة'}</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlueWolf;