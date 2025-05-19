import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
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
              ? 'Thank you for contacting us. We will get back to you as soon as possible.'
              : 'شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.',
            title: language === 'en'
              ? 'Message Sent Successfully!'
              : 'تم إرسال الرسالة بنجاح!'
          }
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: language === 'en' ? 'Error!' : 'خطأ!',
        description: language === 'en' 
          ? 'Failed to send message. Please try again later.' 
          : 'فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى لاحقاً.',
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
            src="/osos/a8c965b5-cf48-4089-b1e4-49654271521c.png" 
            alt="Contact Alpha Studio" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-alpha-darker via-alpha-darker/60 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="alpha-title mb-4">
                {language === 'en' ? 'Contact Us' : 'تواصل معنا'}
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto px-4">
                {language === 'en' 
                  ? 'We\'d love to hear from you' 
                  : 'يسعدنا سماع رأيك'}
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-alpha-darker">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-display mb-6 text-alpha-gold">
                    {language === 'en' ? 'Get in Touch' : 'تواصل معنا'}
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-display mb-2 text-white">
                        {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                      </h3>
                      <a href="mailto:osama.gamal.elfakhrany@gmail.com" className="text-alpha-blue hover:text-alpha-blue-light transition-colors">
                        osama.gamal.elfakhrany@gmail.com
                      </a>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-display mb-2 text-white">
                        {language === 'en' ? 'Phone' : 'الهاتف'}
                      </h3>
                      <a href="tel:+201016785566" className="text-alpha-blue hover:text-alpha-blue-light transition-colors">
                        +20 10 1678 5566
                      </a>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-display mb-2 text-white">
                        {language === 'en' ? 'Social Media' : 'وسائل التواصل الاجتماعي'}
                      </h3>
                      <div className="flex space-x-4">
                        <a 
                          href="https://www.facebook.com/profile.php?id=61576116293161" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-alpha-blue hover:text-alpha-blue-light transition-colors"
                        >
                          Facebook
                        </a>
                      </div>
                    </div>
                    
                    <div className="pt-6">
                      <h3 className="text-xl font-display mb-4 text-white">
                        {language === 'en' ? 'Office Hours' : 'ساعات العمل'}
                      </h3>
                      <p className="text-gray-300">
                        {language === 'en' ? 'Monday - Friday' : 'الاثنين - الجمعة'}<br />
                        {language === 'en' ? '9:00 AM - 5:00 PM (GMT+2)' : '9:00 صباحًا - 5:00 مساءً (GMT+2)'}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div className="bg-alpha-charcoal rounded-lg p-8">
                  <h2 className="text-2xl font-display mb-6">
                    {language === 'en' ? 'Send us a Message' : 'أرسل لنا رسالة'}
                  </h2>
                  
                  <button
                    type="button"
                    onClick={() => {
                      toast({
                        title: language === 'en' ? 'Test Toast' : 'اختبار الإشعار',
                        description: language === 'en' ? 'This is a test message' : 'هذه رسالة اختبار',
                        duration: 5000,
                      });
                    }}
                    className="mb-4 px-4 py-2 bg-alpha-blue text-white rounded-lg hover:bg-alpha-blue-light transition-colors"
                  >
                    {language === 'en' ? 'Test Toast' : 'اختبار الإشعار'}
                  </button>

                  <form 
                    className="space-y-6" 
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                          {language === 'en' ? 'Name' : 'الاسم'}
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
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">
                        {language === 'en' ? 'Subject' : 'الموضوع'}
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 bg-alpha-charcoal border border-gray-700 rounded-lg focus:ring-2 focus:ring-alpha-gold focus:border-transparent text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                        {language === 'en' ? 'Message' : 'الرسالة'}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="w-full px-4 py-3 bg-alpha-charcoal border border-gray-700 rounded-lg focus:ring-2 focus:ring-alpha-gold focus:border-transparent text-white resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-alpha-gold text-alpha-darker font-bold rounded-lg hover:bg-alpha-gold/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting 
                        ? (language === 'en' ? 'Sending...' : 'جاري الإرسال...')
                        : (language === 'en' ? 'Send Message' : 'إرسال الرسالة')
                      }
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
