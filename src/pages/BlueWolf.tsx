import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlueWolf = () => {
  const { language } = useLanguage();

  return (
    <div className={cn("min-h-screen flex flex-col bg-gradient-to-b from-alpha-darker to-black", language === 'ar' && "lang-ar")} lang={language}>
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-alpha-blue/20 via-transparent to-transparent animate-pulse"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(0,0,0,0.1)_25%,_transparent_25%,_transparent_50%,_rgba(0,0,0,0.1)_50%,_rgba(0,0,0,0.1)_75%,_transparent_75%,_transparent)] bg-[length:20px_20px] animate-shimmer"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="alpha-title text-4xl md:text-6xl mb-6 font-bold tracking-tight">
                {language === 'en' ? 'The Blue Wolf' : 'الذئب الأزرق'}
              </h1>
              <p className="text-2xl md:text-3xl text-alpha-gold mb-8 font-display">
                {language === 'en' ? 'A Novel Beyond Reality' : 'رواية تتجاوز الواقع'}
              </p>
              <div className="text-xl text-gray-300 mb-12 leading-relaxed">
                <p className="mb-4">
                  {language === 'en' 
                    ? '2040... The year everything spiraled out of control.'
                    : '2040... عام خرج فيه كل شيء عن السيطرة!'}
                </p>
                <p className="mb-4">
                  {language === 'en'
                    ? 'In a time where fear blurs the lines between what we know and what we dread, The Blue Wolf awakens.'
                    : 'بين ما نعرفه وما نخشاه، تستيقظ قوى لم يكن يُفترض لها أن تعود.'}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-alpha-darker/50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  {language === 'en'
                    ? 'Ancient forces rise. The sky bears witness to secrets that should never be spoken.'
                    : 'صوت الدم يعلو، والسماء تشهد على ما لا يُقال.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'He doesn\'t know who he is. He doesn\'t understand the chaos within.'
                    : 'هو لا يعرف من يكون... ولا ما الذي يجري بداخله.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'As reality bends and illusions crumble, one truth remains: there\'s no turning back.'
                    : 'حين يتغيّر كل شيء، لا يبقى أمامك سوى المواجهة.'}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Offer Section */}
        <section className="py-24 bg-alpha-dark relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-alpha-gold/5 via-transparent to-transparent animate-pulse"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="alpha-title mb-16 text-center text-4xl md:text-5xl"
            >
              {language === 'en' ? 'Special Launch Offers' : 'عروض الإطلاق الخاصة'}
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Digital Edition */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-alpha-charcoal/50 rounded-xl p-8 shadow-xl backdrop-blur-sm border border-alpha-gold/20 hover:border-alpha-gold/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-display font-bold mb-4 text-white">
                  {language === 'en' ? 'Digital Edition' : 'النسخة الرقمية'}
                </h3>
                <div className="mb-6 flex items-center">
                  <span className="text-3xl font-bold text-green-500">FREE</span>
                  <span className="text-gray-400 ml-2 line-through text-xl">100 LE</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-alpha-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {language === 'en' ? 'Instant PDF download' : 'تحميل PDF فوري'}
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-alpha-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {language === 'en' ? 'Compatible with all devices' : 'متوافق مع جميع الأجهزة'}
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-alpha-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {language === 'en' ? 'Free updates' : 'تحديثات مجانية'}
                  </li>
                </ul>
                <Link 
                  to="/purchase/digital"
                  className="btn-primary w-full text-center py-3 rounded-lg hover:scale-105 transition-transform duration-300"
                >
                  {language === 'en' ? 'Get Digital Edition' : 'احصل على النسخة الرقمية'}
                </Link>
              </motion.div>

              {/* Printed Edition */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-alpha-charcoal/50 rounded-xl p-8 shadow-xl backdrop-blur-sm border border-alpha-gold/20 hover:border-alpha-gold/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-display font-bold mb-4 text-white">
                  {language === 'en' ? 'Printed Edition' : 'النسخة المطبوعة'}
                </h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-alpha-gold">149 LE</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-alpha-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {language === 'en' ? 'Premium hardcover' : 'غلاف فاخر'}
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-alpha-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {language === 'en' ? 'Free shipping' : 'شحن مجاني'}
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-alpha-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {language === 'en' ? 'Signed by the author' : 'موقعة من المؤلف'}
                  </li>
                </ul>
                <Link 
                  to="/purchase/printed"
                  className="btn-primary w-full text-center py-3 rounded-lg hover:scale-105 transition-transform duration-300"
                >
                  {language === 'en' ? 'Get Printed Edition' : 'احصل على النسخة المطبوعة'}
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final Call Section */}
        <section className="py-20 bg-alpha-darker/50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="alpha-title text-3xl md:text-4xl mb-8">
                {language === 'en' ? 'Are You Ready?' : 'هل أنت مستعد؟'}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {language === 'en'
                  ? 'The Blue Wolf isn\'t just a story—it\'s an invitation to a new world. A world where only the brave dare enter.'
                  : 'الذئب الأزرق ليس مجرد قصة - إنها دعوة لعالم جديد. عالم لا يجرؤ على دخوله سوى الشجعان.'}
              </p>
              <p className="text-xl text-alpha-gold font-bold">
                {language === 'en'
                  ? 'Are you ready to face what lies beyond reality?'
                  : 'هل أنت مستعد لمواجهة ما يكمن وراء الواقع؟'}
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlueWolf; 