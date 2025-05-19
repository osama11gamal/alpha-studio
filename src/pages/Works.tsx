import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
    image: '/osos/Novels.png',
    link: '/novels'
  },
  {
    id: 'plays',
    name: 'Plays',
    nameAr: 'المسرحيات',
    description: 'Experience our dramatic works meant for stage performance',
    descriptionAr: 'اختبر أعمالنا الدرامية المخصصة للعروض المسرحية',
    image: '/osos/Plays.png',
    link: '/works/plays'
  },
  {
    id: 'comics',
    name: 'Comic Books',
    nameAr: 'القصص المصورة',
    description: 'Explore our visual storytelling through stunning artwork and compelling narratives',
    descriptionAr: 'استكشف سرد قصصنا المرئي من خلال أعمال فنية مذهلة وروايات مقنعة',
    image: '/osos/Comic Books.png',
    link: '/works/comics'
  },
  {
    id: 'short-stories',
    name: 'Short Stories',
    nameAr: 'القصص القصيرة',
    description: 'Brief but impactful tales that will leave you thinking',
    descriptionAr: 'قصص موجزة ولكنها مؤثرة ستتركك تفكر',
    image: '/osos/Short Stories .png',
    link: '/works/short-stories'
  },
  {
    id: 'cinematic',
    name: 'Cinematic Work',
    nameAr: 'الأعمال السينمائية',
    description: 'Our visual storytelling brought to life through film and animation',
    descriptionAr: 'سرد قصصنا المرئي يأتي إلى الحياة من خلال الأفلام والرسوم المتحركة',
    image: '/osos/Cinematics.png',
    link: '/works/cinematic'
  }
];

const WorksOverview = () => {
  const { language } = useLanguage();
  
  const galleryItems = [
    {
      id: 1,
      type: 'video',
      title: 'Alpha Studio Trailer',
      titleAr: 'إعلان ألفا ستوديو',
      description: 'Watch our cinematic vision in motion',
      descriptionAr: 'شاهد رؤيتنا السينمائية في الحركة',
      url: '/osos/hero-video.mp4',
      thumbnail: '/osos/Novels.png'
    },
    {
      id: 2,
      type: 'image',
      title: 'The Bluewolf',
      titleAr: 'الذئب الأزرق',
      description: 'A tale of revenge and redemption',
      descriptionAr: 'قصة انتقام وخلاص',
      url: '/osos/Comic Books.png'
    },
    {
      id: 3,
      type: 'image',
      title: 'Curse of King Samagar',
      titleAr: 'لعنة الملك ساماغار',
      description: 'The legend awakens',
      descriptionAr: 'الأسطورة تستيقظ',
      url: '/osos/Novels.png'
    },
    {
      id: 4,
      type: 'image',
      title: 'A Midnight Circus',
      titleAr: 'سيرك منتصف الليل',
      description: 'Where dreams and nightmares collide',
      descriptionAr: 'حيث تلتقي الأحلام والكوابيس',
      url: '/osos/Plays.png'
    },
    {
      id: 5,
      type: 'image',
      title: 'The Last Guardian',
      titleAr: 'الحارس الأخير',
      description: 'A tale of courage and sacrifice',
      descriptionAr: 'قصة شجاعة وتضحية',
      url: '/osos/Short Stories .png'
    }
  ];

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery-section');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/osos/Novels.png" 
            alt="Alpha Studio Background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-alpha-darker via-alpha-darker/60 to-transparent"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="alpha-title mb-4 text-5xl md:text-6xl">{language === 'en' ? 'Welcome to Alpha Studio' : 'مرحباً بك في ألفا ستوديو'}</h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto px-4">
              {language === 'en' 
                ? 'Where imagination meets reality' 
                : 'حيث يلتقي الخيال بالواقع'}
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-alpha-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="alpha-title mb-8 text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
              {language === 'en' ? 'Our Works' : 'أعمالنا'}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              {language === 'en' 
                ? 'Explore the diverse creative output of Alpha Studio, from immersive novels to visual storytelling.' 
                : 'استكشف الإنتاج الإبداعي المتنوع لألفا ستوديو، من الروايات الغامرة إلى السرد المرئي.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link 
                to={category.link} 
                key={category.id}
                className="group block transform transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden rounded-xl bg-alpha-charcoal shadow-2xl h-96">
                  <img 
                    src={category.image} 
                    alt={language === 'en' ? category.name : category.nameAr} 
                    className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-alpha-darker/90 via-alpha-darker/50 to-transparent flex flex-col justify-end p-8 transition-all duration-300 group-hover:bg-gradient-to-t from-alpha-darker/95 via-alpha-darker/70 to-transparent">
                    <h3 className="text-3xl font-display font-bold mb-3 text-white transform transition-all duration-300 group-hover:translate-y-[-8px]">
                      {language === 'en' ? category.name : category.nameAr}
                    </h3>
                    <p className="text-gray-200 text-base leading-relaxed transform transition-all duration-300 group-hover:translate-y-[-8px]">
                      {language === 'en' ? category.description : category.descriptionAr}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery-section" className="py-24 bg-alpha-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="alpha-title mb-8 text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
              {language === 'en' ? 'Featured Works' : 'أعمال مميزة'}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              {language === 'en' 
                ? 'A visual journey through our creative universe' 
                : 'رحلة بصرية عبر عالمنا الإبداعي'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div 
                key={item.id}
                className="group relative overflow-hidden rounded-xl bg-alpha-darker shadow-2xl h-96 cursor-pointer"
                onClick={() => item.type === 'video' ? scrollToGallery() : null}
              >
                {item.type === 'video' ? (
                  <>
                    <video 
                      src={item.url}
                      poster={item.thumbnail}
                      className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                      muted
                      loop
                      playsInline
                      controls
                      preload="none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-alpha-darker/90 via-alpha-darker/50 to-transparent flex flex-col justify-end p-8 transition-all duration-300 group-hover:bg-gradient-to-t from-alpha-darker/95 via-alpha-darker/70 to-transparent">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-alpha-blue/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </>
                ) : (
                  <img 
                    src={item.url}
                    alt={language === 'en' ? item.title : item.titleAr}
                    className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-alpha-darker/90 via-alpha-darker/50 to-transparent flex flex-col justify-end p-8 transition-all duration-300 group-hover:bg-gradient-to-t from-alpha-darker/95 via-alpha-darker/70 to-transparent">
                  <h3 className="text-2xl font-display font-bold mb-2 text-white transform transition-all duration-300 group-hover:translate-y-[-8px]">
                    {language === 'en' ? item.title : item.titleAr}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed transform transition-all duration-300 group-hover:translate-y-[-8px]">
                    {language === 'en' ? item.description : item.descriptionAr}
                  </p>
                </div>
              </div>
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
      
      <Footer />
    </div>
  );
};

export default Works;
