import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

const Contact = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
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
    <div className={cn("min-h-screen flex flex-col bg-gradient-to-b from-alpha-darker to-black", language === 'ar' && "lang-ar")} lang={language}>
      <Navbar />
      <main className="flex-grow pt-20">
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[90vh] overflow-hidden"
        >
          <img 
            src="/alpha-studio/osos/covv.png" 
            alt="Contact Alpha Studio" 
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-alpha-darker via-alpha-darker/60 to-transparent"></div>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <h1 className="alpha-title text-5xl md:text-7xl mb-6 font-bold tracking-tight">
                {language === 'en' ? 'Contact Us' : 'تواصل معنا'}
              </h1>
              <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto px-4 leading-relaxed">
                {language === 'en' 
                  ? 'We\'d love to hear from you ❤️' 
                  : 'يسعدنا سماع رأيك❤️'}
              </p>
            </div>
          </motion.div>
        </motion.section>
        
        <section className="py-24 bg-alpha-darker relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-alpha-gold/5 via-transparent to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-alpha-darker/50 p-8 rounded-xl backdrop-blur-sm border border-alpha-gold/20 hover:border-alpha-gold/40 transition-colors duration-300"
                >
                  <h2 className="text-3xl font-display mb-8 text-alpha-gold">
                    {language === 'en' ? 'Get in Touch' : 'تواصل معنا'}
                  </h2>
                  
                  <div className="space-y-8">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-alpha-gold/10 flex items-center justify-center">
                        <FaEnvelope className="text-2xl text-alpha-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display mb-2 text-white">
                          {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                        </h3>
                        <a 
                          href="mailto:alphaduhaim@gmail.com" 
                          className="text-alpha-blue hover:text-alpha-blue-light transition-colors"
                        >
                          alphaduhaim@gmail.com
                        </a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-alpha-gold/10 flex items-center justify-center">
                        <FaPhone className="text-2xl text-alpha-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display mb-2 text-white">
                          {language === 'en' ? 'Phone' : 'الهاتف'}
                        </h3>
                        <a 
                          href="tel:+201016785566" 
                          className="text-alpha-blue hover:text-alpha-blue-light transition-colors"
                        >
                          +20 10 1678 5566
                        </a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-alpha-gold/10 flex items-center justify-center">
                        <FaFacebook className="text-2xl text-alpha-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display mb-2 text-white">
                          {language === 'en' ? 'Social Media' : 'وسائل التواصل الاجتماعي'}
                        </h3>
                        <a 
                          href="https://www.facebook.com/profile.php?id=61576116293161" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-alpha-blue hover:text-alpha-blue-light transition-colors"
                        >
                          Facebook
                        </a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-alpha-gold/10 flex items-center justify-center">
                        <FaClock className="text-2xl text-alpha-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display mb-2 text-white">
                          {language === 'en' ? 'Office Hours' : 'ساعات العمل'}
                        </h3>
                        <p className="text-gray-300">
                          {language === 'en' ? 'Monday - Friday' : 'الاثنين - الجمعة'}<br />
                          {language === 'en' ? '9:00 AM - 5:00 PM (GMT+2)' : '9:00 صباحًا - 5:00 مساءً (GMT+2)'}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Contact Form */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-alpha-darker/50 p-8 rounded-xl backdrop-blur-sm border border-alpha-gold/20 hover:border-alpha-gold/40 transition-colors duration-300"
                >
                  <h2 className="text-3xl font-display mb-8 text-alpha-gold">
                    {language === 'en' ? 'Send us a Message' : 'أرسل لنا رسالة'}
                  </h2>

                  <form 
                    className="space-y-6" 
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                          {language === 'en' ? 'Name' : 'الاسم'}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 bg-alpha-charcoal/50 border border-alpha-gold/20 rounded-lg focus:ring-2 focus:ring-alpha-gold focus:border-transparent text-white transition-colors duration-300"
                        />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                          {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-alpha-charcoal/50 border border-alpha-gold/20 rounded-lg focus:ring-2 focus:ring-alpha-gold focus:border-transparent text-white transition-colors duration-300"
                        />
                      </motion.div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">
                        {language === 'en' ? 'Subject' : 'الموضوع'}
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 bg-alpha-charcoal/50 border border-alpha-gold/20 rounded-lg focus:ring-2 focus:ring-alpha-gold focus:border-transparent text-white transition-colors duration-300"
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                        {language === 'en' ? 'Message' : 'الرسالة'}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="w-full px-4 py-3 bg-alpha-charcoal/50 border border-alpha-gold/20 rounded-lg focus:ring-2 focus:ring-alpha-gold focus:border-transparent text-white resize-none transition-colors duration-300"
                      ></textarea>
                    </motion.div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-alpha-gold text-alpha-darker font-bold rounded-lg hover:bg-alpha-gold/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting 
                        ? (language === 'en' ? 'Sending...' : 'جاري الإرسال...')
                        : (language === 'en' ? 'Send Message' : 'إرسال الرسالة')
                      }
                    </motion.button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
