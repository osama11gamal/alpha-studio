import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const works = [
  {
    id: 1,
    title: 'Novels',
    titleAr: 'روايات',
    description: 'Immerse yourself in our captivating novels that transport you to new worlds and dimensions.',
    descriptionAr: 'انغمس في رواياتنا الساحرة التي تنقلك إلى عوالم وأبعاد جديدة.',
    image: '/osos/Novels.png',
    link: '/novels'
  },
  {
    id: 2,
    title: 'Short Stories',
    titleAr: 'قصص قصيرة',
    description: 'Discover our collection of short stories that pack powerful narratives into concise tales.',
    descriptionAr: 'اكتشف مجموعتنا من القصص القصيرة التي تحمل سردًا قويًا في حكايات موجزة.',
    image: '/osos/Short Stories .png',
    link: '/short-stories'
  },
  {
    id: 3,
    title: 'Comic Books',
    titleAr: 'كتب مصورة',
    description: 'Experience our stories through stunning visual narratives in our comic book series.',
    descriptionAr: 'عيش قصصنا من خلال السرد البصري المذهل في سلسلة الكتب المصورة.',
    image: '/osos/Comic Books.png',
    link: '/comics'
  },
  {
    id: 4,
    title: 'Plays',
    titleAr: 'مسرحيات',
    description: 'Witness our stories come to life on stage through our theatrical productions.',
    descriptionAr: 'شاهد قصصنا تنبض بالحياة على المسرح من خلال أعمالنا المسرحية.',
    image: '/osos/Plays.png',
    link: '/plays'
  },
  {
    id: 5,
    title: 'Cinematics',
    titleAr: 'سينمائيات',
    description: 'Watch our stories unfold through cinematic experiences that blend art and technology.',
    descriptionAr: 'شاهد قصصنا تتكشف من خلال تجارب سينمائية تدمج الفن والتكنولوجيا.',
    image: '/osos/Cinematics.png',
    link: '/cinematics'
  }
];

const OurWorks = () => {
  const { language } = useLanguage();
  
  return (
    <div className={cn("min-h-screen flex flex-col", language === 'ar' && "lang-ar")} lang={language}>
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-80 overflow-hidden">
          <img 
            src="/osos/Comic Books.png" 
            alt="Alpha Studio Works" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-alpha-darker via-alpha-darker/60 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="alpha-title mb-4">{language === 'en' ? 'Our Works' : 'أعمالنا'}</h1>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto px-4">
                {language === 'en' 
                  ? 'Explore our diverse collection of creative works' 
                  : 'اكتشف مجموعتنا المتنوعة من الأعمال الإبداعية'}
              </p>
            </div>
          </div>
        </section>
        
        {/* Works Grid */}
        <section className="py-16 bg-alpha-darker relative">
          <div className="absolute inset-0">
            <img 
              src="/osos/Short Stories .png" 
              alt="Background" 
              className="w-full h-full object-cover object-center opacity-10"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="alpha-title mb-12 text-center">
              {language === 'en' ? 'Explore Our Works' : 'اكتشف أعمالنا'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {works.map(work => (
                <Link 
                  key={work.id} 
                  to={work.link}
                  className="group"
                >
                  <div className="relative h-96 rounded-lg overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-105">
                    <img 
                      src={work.image} 
                      alt={language === 'en' ? work.title : work.titleAr} 
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-alpha-darker via-alpha-darker/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-display font-bold text-white mb-2">
                          {language === 'en' ? work.title : work.titleAr}
                        </h3>
                        <p className="text-gray-300">
                          {language === 'en' ? work.description : work.descriptionAr}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Quote Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/osos/Short Stories .png" 
              alt="Background" 
              className="w-full h-full object-cover object-center opacity-20"
            />
            <div className="absolute inset-0 bg-alpha-darker/80"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <blockquote className="max-w-4xl mx-auto text-center">
              <p className="text-2xl md:text-4xl font-display text-white mb-6 leading-relaxed">
                {language === 'en' 
                  ? '"Steps into darkness… Lots of sacrifices for one goal…"' 
                  : '"خطوات في الظلام... تضحيات كثيرة من أجل هدف واحد..."'}
              </p>
              <footer className="text-alpha-gold">
                <cite>— Alpha Studio</cite>
              </footer>
            </blockquote>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OurWorks; 