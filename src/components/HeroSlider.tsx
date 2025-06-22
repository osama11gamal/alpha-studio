import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '../contexts/LanguageContext';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { type CarouselApi } from "@/components/ui/carousel";

const slides = [
  {
    id: 0,
    type: 'video',
    video: '/alpha-studio/assets/hero-video.mp4',
    title: 'Alpha Studio',
    titleAr: 'ألفا ستوديو',
    subtitle: 'Where stories come to life',
    subtitleAr: 'حيث تولد الحكايات',
    description: 'Watch our cinematic vision in motion.',
    descriptionAr: 'شاهد رؤيتنا السينمائية في الحركة.',
    releaseDate: '',
    releaseDateAr: '',
    link: '/alpha-studio/works',
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const { language } = useLanguage();
  const [isHovering, setIsHovering] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="relative w-screen max-w-full h-screen overflow-hidden sm:rounded-3xl rounded-none shadow-2xl">
      <Carousel 
        className="w-full h-full" 
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true,
          dragFree: true,
        }}
        onTouchStart={() => setIsHovering(true)}
        onTouchEnd={() => setIsHovering(false)}
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="h-full">
              <Link 
                to={slide.link} 
                className="block h-full"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="hero-slide relative h-full sm:rounded-3xl rounded-none overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.01]">
                  {slide.type === 'video' ? (
                    <>
                      <video
                        ref={videoRef}
                        src={slide.video}
                        className="w-full h-full object-cover object-center rounded-none sm:rounded-3xl border-0 sm:border-2 sm:border-alpha-charcoal/60 shadow-none sm:shadow-2xl aspect-[9/16] sm:aspect-[16/9]"
                        loop
                        playsInline
                        muted={videoMuted}
                        style={{ 
                          zIndex: 1,
                          maxHeight: '100vh'
                        }}
                        preload="auto"
                        onLoadedData={handleVideoLoaded}
                      />
                      {!isVideoLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20">
                          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-alpha-blue"></div>
                        </div>
                      )}
                      <div className="absolute inset-0 pointer-events-none z-[11000]">
                        <button
                          type="button"
                          onClick={e => { e.preventDefault(); setVideoMuted(m => !m); }}
                          className="absolute bottom-6 left-6 bg-black/60 text-white rounded-full p-3 shadow-lg hover:bg-alpha-blue transition-colors pointer-events-auto"
                          aria-label={videoMuted ? 'Unmute video' : 'Mute video'}
                          style={{ zIndex: 11001 }}
                        >
                          {videoMuted ? (
                            <span role="img" aria-label="Muted">🔇</span>
                          ) : (
                            <span role="img" aria-label="Unmuted">🕩</span>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={e => { e.preventDefault(); setShowVideoModal(true); }}
                          className="absolute bottom-6 right-6 bg-black/60 text-white rounded-full p-3 shadow-lg hover:bg-alpha-blue transition-colors pointer-events-auto"
                          aria-label="تكبير الفيديو"
                          style={{ zIndex: 11001 }}
                        >
                          <span role="img" aria-label="تكبير">🔍</span>
                        </button>
                      </div>
                      {showVideoModal && (
                        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-xl" onClick={() => setShowVideoModal(false)}>
                          <div className="relative w-full max-w-4xl aspect-video flex items-center justify-center" onClick={e => e.stopPropagation()}>
                            <video
                              src={slide.video}
                              className="w-full h-full object-cover object-center rounded-2xl border-2 border-alpha-blue shadow-2xl"
                              autoPlay
                              loop
                              playsInline
                              muted={videoMuted}
                              controls
                              style={{ background: 'black' }}
                            />
                            <button
                              type="button"
                              onClick={() => setShowVideoModal(false)}
                              className="absolute top-4 right-4 z-50 bg-black/70 text-white rounded-full p-2 text-2xl hover:bg-alpha-blue transition-colors"
                              aria-label="Close video"
                            >
                              ×
                            </button>
                            <button
                              type="button"
                              onClick={() => setVideoMuted(m => !m)}
                              className="absolute bottom-4 left-4 z-50 bg-black/60 text-white rounded-full p-3 shadow-lg hover:bg-alpha-blue transition-colors"
                              aria-label={videoMuted ? 'Unmute video' : 'Mute video'}
                            >
                              {videoMuted ? (
                                <span role="img" aria-label="Muted">🔇</span>
                              ) : (
                                <span role="img" aria-label="Unmuted">🕩</span>
                              )}
                            </button>
                          </div>
                        </div>
                      )}
                    </>
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 pointer-events-none sm:rounded-3xl rounded-none" />
                  <div className="soft-bloom scale-125"></div>
                  <div className="hero-overlay"></div>
                  <div className="ink-wash-overlay"></div>
                  
                  <div className="container mx-auto px-4 absolute z-30 flex flex-col justify-center h-full top-0 left-0 right-0 pt-16">
                    <div className="max-w-2xl bg-black/40 rounded-2xl p-4 sm:p-8 shadow-lg backdrop-blur-md">
                      <h2 className="text-alpha-gold text-xl md:text-2xl mb-2 opacity-0 animate-slide-up animate-delay-300" 
                          style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
                        {language === 'en' ? slide.subtitle : slide.subtitleAr}
                      </h2>
                      <h1 className="alpha-title mb-4 opacity-0 animate-slide-up" 
                          style={{animationDelay: '0ms', animationFillMode: 'forwards'}}>
                        {language === 'en' ? slide.title : slide.titleAr}
                      </h1>
                      <p className="text-gray-300 text-lg mb-8 max-w-lg opacity-0 animate-slide-up animate-delay-600" 
                         style={{animationDelay: '600ms', animationFillMode: 'forwards'}}>
                        {language === 'en' ? slide.description : slide.descriptionAr}
                      </p>
                      {slide.releaseDate && (
                        <div className="text-alpha-gold mb-6 opacity-0 animate-slide-up animate-delay-600" 
                             style={{animationDelay: '600ms', animationFillMode: 'forwards'}}>
                          {language === 'en' ? slide.releaseDate : slide.releaseDateAr}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-4 opacity-0 animate-slide-up animate-delay-900" 
                           style={{animationDelay: '900ms', animationFillMode: 'forwards'}}>
                        <button className="btn-primary hover:shadow-blue-glow transition-all duration-500">
                          {language === 'en' ? 'Explore Our Worlds' : 'استكشف عوالمنا'}
                        </button>
                        <button className="btn-secondary hover:border-alpha-blue hover:text-alpha-blue transition-all duration-500">
                          {language === 'en' ? 'Join the Family' : 'انضم إلى العائلة'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HeroSlider;
