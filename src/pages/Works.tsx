import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { Link, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';

const categories = [
  {
    id: 'novels',
    name: 'Novels',
    nameAr: 'الروايات',
    description: 'Dive into our collection of thought-provoking and captivating novels',
    descriptionAr: 'انغمس في مجموعتنا من الروايات المثيرة للتفكير والآسرة',
    image: '/alpha-studio/Home/Novels.png',
    link: '/novels'
  },
  {
    id: 'plays',
    name: 'Plays',
    nameAr: 'المسرحيات',
    description: 'Experience our dramatic works meant for stage performance',
    descriptionAr: 'اختبر أعمالنا الدرامية المخصصة للعروض المسرحية',
    image: '/alpha-studio/Home/Plays.png',
  },
  {
    id: 'comics',
    name: 'Comic Books',
    nameAr: 'القصص المصورة',
    description: 'Explore our visual storytelling through stunning artwork and compelling narratives',
    descriptionAr: 'استكشف سرد قصصنا المرئي من خلال أعمال فنية مذهلة وروايات مقنعة',
    image: '/alpha-studio/Home/Comic Books.png',
  },
  {
    id: 'short-stories',
    name: 'Short Stories',
    nameAr: 'القصص القصيرة',
    description: 'Brief but impactful tales that will leave you thinking',
    descriptionAr: 'قصص موجزة ولكنها مؤثرة ستتركك تفكر',
    image: '/alpha-studio/Home/Short Stories .png',
  },
  {
    id: 'cinematic',
    name: 'Cinematic Work',
    nameAr: 'الأعمال السينمائية',
    description: 'Our visual storytelling brought to life through film and animation',
    descriptionAr: 'سرد قصصنا المرئي يأتي إلى الحياة من خلال الأفلام والرسوم المتحركة',
    image: '/alpha-studio/Home/Cinematics.png',
  }
];

const WorksOverview = () => {
  const { language } = useLanguage();
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    textRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      textRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }
        .fade-up.delay-200 {
          transition-delay: 200ms;
        }
        .fade-up.delay-300 {
          transition-delay: 300ms;
        }
        .fade-up.delay-400 {
          transition-delay: 400ms;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover object-center scale-110 animate-ken-burns"
          >
            <source src="/alpha-studio/assets/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-alpha-darker via-alpha-darker/60 to-transparent"></div>
          <div className="absolute inset-0 bg-alpha-darker/30 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-alpha-blue/20 via-transparent to-transparent animate-pulse"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(0,0,0,0.3)_25%,_transparent_25%,_transparent_50%,_rgba(0,0,0,0.3)_50%,_rgba(0,0,0,0.3)_75%,_transparent_75%,_transparent)] bg-[length:20px_20px] animate-shimmer"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center relative z-10">
            <h1 className="alpha-title mb-4 text-5xl md:text-6xl text-white drop-shadow-lg">
              <span className="inline-block fade-up show">
                {language === 'en' ? 'Welcome to' : 'مرحباً بك في'}
              </span>
              <span className="inline-block text-alpha-blue fade-up delay-200 show">
                {' '}{language === 'en' ? 'Alpha' : 'ألفا'}
              </span>
              <span className="inline-block fade-up delay-400 show">
                {' '}{language === 'en' ? 'Studio' : 'ستوديو'}
              </span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto px-4">
              <span className="inline-block fade-up delay-300 show">
                {language === 'en' 
                  ? 'Where imagination meets reality' 
                  : 'حيث يلتقي الخيال بالواقع'}
              </span>
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-alpha-darker to-transparent"></div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-alpha-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-alpha-blue/10 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(0,0,0,0.1)_25%,_transparent_25%,_transparent_50%,_rgba(0,0,0,0.1)_50%,_rgba(0,0,0,0.1)_75%,_transparent_75%,_transparent)] bg-[length:20px_20px] animate-shimmer"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 
              ref={(el) => (textRefs.current[0] = el)}
              className="alpha-title mb-8 text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg fade-up"
            >
              <span className="inline-block">
                {language === 'en' ? 'Our' : 'أعمال'}
              </span>
              <span className="inline-block text-alpha-blue">
                {' '}{language === 'en' ? 'Works' : 'نا'}
              </span>
            </h2>
            <p 
              ref={(el) => (textRefs.current[1] = el)}
              className="text-gray-300 max-w-2xl mx-auto text-lg fade-up delay-200"
            >
              {language === 'en' 
                ? 'Explore the diverse creative output of Alpha Studio, from immersive novels to visual storytelling.' 
                : 'استكشف الإنتاج الإبداعي المتنوع لألفا ستوديو، من الروايات الغامرة إلى السرد المرئي.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link 
                to={category.link} 
                key={category.id}
                className="group block transform transition-all duration-500 hover:scale-105"
              >
                <div 
                  ref={(el) => (textRefs.current[index + 2] = el)}
                  className="relative overflow-hidden rounded-xl bg-alpha-charcoal shadow-2xl h-96 fade-up"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-alpha-blue/20 to-alpha-indigo/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={category.image} 
                    alt={language === 'en' ? category.name : category.nameAr} 
                    className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-alpha-darker/90 via-alpha-darker/50 to-transparent flex flex-col justify-end p-8 transition-all duration-500 group-hover:bg-gradient-to-t from-alpha-darker/95 via-alpha-darker/70 to-transparent">
                    <h3 className="text-3xl font-display font-bold mb-3 text-white transform transition-all duration-500 group-hover:translate-y-[-8px] group-hover:text-alpha-blue">
                      {language === 'en' ? category.name : category.nameAr}
                    </h3>
                    <p className="text-gray-200 text-base leading-relaxed transform transition-all duration-500 group-hover:translate-y-[-8px] group-hover:text-alpha-gold">
                      {language === 'en' ? category.description : category.descriptionAr}
                    </p>
                    <p className={`mt-4 text-lg font-semibold ${category.id === 'novels' ? 'text-green-500' : 'text-red-500'}`}>
                      {language === 'en' 
                        ? (category.id === 'novels' ? 'Available' : 'Coming Soon')
                        : (category.id === 'novels' ? 'متاح' : 'متاح قريباً')}
                    </p>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-alpha-blue/50 transition-colors duration-500 rounded-xl"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const Works = () => {
  const { language } = useLanguage();
  
  return (
    <div className={cn("min-h-screen flex flex-col", language === 'ar' && "lang-ar")} lang={language}>
      <Navbar />
      
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<WorksOverview />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default Works;