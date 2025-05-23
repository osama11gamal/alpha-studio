import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Purchase = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    notes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // هنا يمكنك إضافة منطق معالجة الطلب
    const formEndpoint = type === 'digital' 
      ? 'https://formspree.io/f/xpwdennp'
      : 'https://formspree.io/f/xkgraeer';

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: type === 'digital' ? 'Digital Edition' : 'Printed Edition',
          product: 'The Blue Wolf'
        }),
      });

      if (response.ok) {
        navigate('/success');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // هنا يمكنك إضافة معالجة الأخطاء
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-alpha-darker to-black">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h1 className="alpha-title text-3xl md:text-4xl mb-8 text-center">
              {language === 'en' 
                ? `Purchase ${type === 'digital' ? 'Digital' : 'Printed'} Edition`
                : `شراء النسخة ${type === 'digital' ? 'الرقمية' : 'المطبوعة'}`
              }
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  {language === 'en' ? 'Full Name' : 'الاسم الكامل'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-alpha-charcoal/50 border border-alpha-gold/20 rounded-lg focus:outline-none focus:border-alpha-gold text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-alpha-charcoal/50 border border-alpha-gold/20 rounded-lg focus:outline-none focus:border-alpha-gold text-white"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  {language === 'en' ? 'Phone Number' : 'رقم الهاتف'}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-alpha-charcoal/50 border border-alpha-gold/20 rounded-lg focus:outline-none focus:border-alpha-gold text-white"
                />
              </div>

              {type === 'printed' && (
                <>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-2">
                      {language === 'en' ? 'Address' : 'العنوان'}
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-alpha-charcoal/50 border border-alpha-gold/20 rounded-lg focus:outline-none focus:border-alpha-gold text-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-2">
                        {language === 'en' ? 'City' : 'المدينة'}
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-alpha-charcoal/50 border border-alpha-gold/20 rounded-lg focus:outline-none focus:border-alpha-gold text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-2">
                        {language === 'en' ? 'Country' : 'الدولة'}
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-alpha-charcoal/50 border border-alpha-gold/20 rounded-lg focus:outline-none focus:border-alpha-gold text-white"
                      />
                    </div>
                  </div>
                </>
              )}

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-2">
                  {language === 'en' ? 'Additional Notes' : 'ملاحظات إضافية'}
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-alpha-charcoal/50 border border-alpha-gold/20 rounded-lg focus:outline-none focus:border-alpha-gold text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-3 rounded-lg hover:scale-105 transition-transform duration-300"
              >
                {language === 'en' 
                  ? `Complete ${type === 'digital' ? 'Digital' : 'Printed'} Purchase`
                  : `إكمال شراء النسخة ${type === 'digital' ? 'الرقمية' : 'المطبوعة'}`
                }
              </button>
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Purchase; 