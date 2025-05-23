import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import images
const bossHeistImage = '/alpha-studio/Novels/Boss Heist.png';
const novelsImage = '/alpha-studio/Home/Novels.png';
const shortStoriesImage = '/alpha-studio/Home/Short Stories .png';
const comicBooksImage = '/alpha-studio/Home/Comic Books.png';
const kingSamagarImage = '/alpha-studio/Novels/The Curse of King Samagar .png';
const midnightCircusImage = '/alpha-studio/osos/Dropped Image (10).png';
const guardianImage = '/alpha-studio/assets/guardian.png';

const works = [
  {
    id: 1,
    title: 'Novels',
    titleAr: 'روايات',
    description: 'Immerse yourself in our captivating novels that transport you to new worlds and dimensions.',
    descriptionAr: 'انغمس في رواياتنا الساحرة التي تنقلك إلى عوالم وأبعاد جديدة.',
    image: novelsImage,
    link: '/novels'
  },
  {
    id: 2,
    title: 'Short Stories',
    titleAr: 'قصص قصيرة',
    description: 'Discover our collection of short stories that pack powerful narratives into concise tales.',
    descriptionAr: 'اكتشف مجموعتنا من القصص القصيرة التي تحمل سردًا قويًا في حكايات موجزة.',
    image: shortStoriesImage,
    link: '/short-stories'
  },
  {
    id: 3,
    title: 'Comic Books',
    titleAr: 'كتب مصورة',
    description: 'Experience our stories through stunning visual narratives in our comic book series.',
    descriptionAr: 'عيش قصصنا من خلال السرد البصري المذهل في سلسلة الكتب المصورة.',
    image: comicBooksImage,
    link: '/comics'
  },
  {
    id: 4,
    title: 'Plays',
    titleAr: 'مسرحيات',
    description: 'Witness our stories come to life on stage through our theatrical productions.',
    descriptionAr: 'شاهد قصصنا تنبض بالحياة على المسرح من خلال أعمالنا المسرحية.',
    image: shortStoriesImage,
    link: '/plays'
  },
  {
    id: 5,
    title: 'Cinematics',
    titleAr: 'سينمائيات',
    description: 'Watch our stories unfold through cinematic experiences that blend art and technology.',
    descriptionAr: 'شاهد قصصنا تتكشف من خلال تجارب سينمائية تدمج الفن والتكنولوجيا.',
    image: shortStoriesImage,
    link: '/cinematics'
  }
];

const OurWorks = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Smooth scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  const categories = [
    {
      title: language === 'en' ? 'Novels' : 'روايات',
      image: novelsImage,
      description: language === 'en' 
        ? 'Explore our collection of captivating novels' 
        : 'اكتشف مجموعتنا من الروايات الجذابة'
    },
    {
      title: language === 'en' ? 'Short Stories' : 'قصص قصيرة',
      image: shortStoriesImage,
      description: language === 'en'
        ? 'Discover our anthology of short stories'
        : 'اكتشف مجموعتنا من القصص القصيرة'
    },
    {
      title: language === 'en' ? 'Comic Books' : 'قصص مصورة',
      image: comicBooksImage,
      description: language === 'en'
        ? 'Immerse yourself in our visual storytelling'
        : 'انغمس في قصصنا المرئية'
    }
  ];

  const featuredWorks = [
    {
      title: language === 'en' ? 'Boss Heist' : 'سرقة البوس',
      image: bossHeistImage,
      description: language === 'en'
        ? 'An epic tale of power and redemption'
        : 'قصة ملحمية عن القوة والخلاص'
    },
    {
      title: language === 'en' ? 'Curse of King Samagar' : 'لعنة الملك ساماغار',
      image: kingSamagarImage,
      description: language === 'en'
        ? 'A mystical journey through ancient realms'
        : 'رحلة غامضة عبر العوالم القديمة'
    },
    {
      title: language === 'en' ? 'A Midnight Circus' : 'سيرك منتصف الليل',
      image: midnightCircusImage,
      description: language === 'en'
        ? 'Where reality meets fantasy under the stars'
        : 'حيث يلتقي الواقع بالخيال تحت النجوم'
    },
    {
      title: language === 'en' ? 'The Last Guardian' : 'الحارس الأخير',
      image: guardianImage,
      description: language === 'en'
        ? 'A tale of courage and sacrifice'
        : 'قصة عن الشجاعة والتضحية'
    }
  ];

  return (
    <div className={cn("min-h-screen flex flex-col bg-gradient-to-b from-alpha-darker to-black", language === 'ar' && "lang-ar")} lang={language}>
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0">
            <img 
              src={bossHeistImage} 
              alt="Boss Heist" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-alpha-darker via-alpha-darker/60 to-transparent"></div>
          </div>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative z-10 text-center px-4"
          >
            <h1 className="alpha-title text-6xl md:text-8xl mb-6 font-bold tracking-tight">
              {language === 'en' ? 'Our Works' : 'أعمالنا'}
            </h1>
            <p className="text-3xl md:text-5xl font-display mb-8 text-alpha-gold">
              {language === 'en' ? 'Where Stories Come Alive' : 'حيث تنبض القصص بالحياة'}
            </p>
          </motion.div>
        </motion.section>

        {/* Featured Works Section */}
        <section className="py-24 bg-alpha-darker relative">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16"
            >
              {language === 'en' ? 'Featured Works' : 'أعمال مميزة'}
            </motion.h2>

            {/* Trailer Video */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <video 
                className="w-full rounded-xl shadow-2xl"
                controls
                poster={bossHeistImage}
              >
                <source src="/assets/hero-video.mp4" type="video/mp4" />
                {language === 'en' ? 'Your browser does not support the video tag.' : 'متصفحك لا يدعم تشغيل الفيديو.'}
              </video>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredWorks.map((work, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative h-[400px] rounded-xl overflow-hidden"
                >
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-alpha-darker via-alpha-darker/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-bold text-white mb-2">{work.title}</h3>
                      <p className="text-gray-300">{work.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16"
            >
              {language === 'en' ? 'Explore Our Categories' : 'استكشف تصنيفاتنا'}
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative h-[400px] rounded-xl overflow-hidden"
                >
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-alpha-darker via-alpha-darker/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-gray-300">{category.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OurWorks; 