import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xrbqjdnw', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        navigate('/success', { 
          state: { 
            message: language === 'en' 
              ? 'Thank you for joining Alpha Studio family. We will review your application and get back to you soon.'
              : 'شكراً لانضمامك لعائلة Alpha Studio. سنقوم بمراجعة طلبك والرد عليك قريباً.',
            title: language === 'en'
              ? 'Application Submitted Successfully!'
              : 'تم تقديم الطلب بنجاح!'
          }
        });
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      toast({
        title: language === 'en' ? 'Error!' : 'خطأ!',
        description: language === 'en' 
          ? 'Failed to submit application. Please try again later.' 
          : 'فشل في تقديم الطلب. يرجى المحاولة مرة أخرى لاحقاً.',
        variant: 'destructive',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn("min-h-screen flex flex-col", language === 'ar' && "lang-ar")} lang={language}>
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="relative h-80 overflow-hidden">
          <img 
            src="/alpha-studio/osos/Untitled design.png" 
            alt="Join Alpha Studio" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-alpha-darker via-alpha-darker/60 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="alpha-title mb-4">
                {language === 'en' ? 'Join Our Family' : 'انضم لعائلتنا'}
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto px-4">
                {language === 'en' 
                  ? 'Be part of our creative journey' 
                  : 'كن جزءاً من رحلتنا الإبداعية'}
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-alpha-darker">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-alpha-charcoal rounded-lg p-8">
                <h2 className="text-2xl font-display mb-6">
                  {language === 'en' ? 'Application Form' : 'نموذج التقديم'}
                </h2>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                        {language === 'en' ? 'Full Name' : 'الاسم الكامل'}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-alpha-charcoal border border-gray-700 rounded-lg focus:ring-2 focus:ring-alpha-gold focus:border-transparent text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                        {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-alpha-charcoal border border-gray-700 rounded-lg focus:ring-2 focus:ring-alpha-gold focus:border-transparent text-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-200 mb-2">
                      {language === 'en' ? 'Role' : 'الدور'}
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      className="w-full px-4 py-3 bg-alpha-charcoal border border-gray-700 rounded-lg focus:ring-2 focus:ring-alpha-gold focus:border-transparent text-white"
                    >
                      <option value="">{language === 'en' ? 'Select a role' : 'اختر دوراً'}</option>
                      <option value="writer">{language === 'en' ? 'Writer' : 'كاتب'}</option>
                      <option value="artist">{language === 'en' ? 'Artist' : 'فنان'}</option>
                      <option value="editor">{language === 'en' ? 'Editor' : 'محرر'}</option>
                      <option value="translator">{language === 'en' ? 'Translator' : 'مترجم'}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-200 mb-2">
                      {language === 'en' ? 'Experience' : 'الخبرة'}
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-alpha-charcoal border border-gray-700 rounded-lg focus:ring-2 focus:ring-alpha-gold focus:border-transparent text-white resize-none"
                      placeholder={language === 'en' ? 'Tell us about your experience...' : 'أخبرنا عن خبراتك...'}
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="portfolio" className="block text-sm font-medium text-gray-200 mb-2">
                      {language === 'en' ? 'Portfolio Link' : 'رابط الأعمال السابقة'}
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      className="w-full px-4 py-3 bg-alpha-charcoal border border-gray-700 rounded-lg focus:ring-2 focus:ring-alpha-gold focus:border-transparent text-white"
                      placeholder={language === 'en' ? 'https://your-portfolio.com' : 'https://your-portfolio.com'}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-alpha-gold text-alpha-darker font-bold rounded-lg hover:bg-alpha-gold/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting 
                      ? (language === 'en' ? 'Submitting...' : 'جاري التقديم...')
                      : (language === 'en' ? 'Submit Application' : 'تقديم الطلب')
                    }
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Join;
