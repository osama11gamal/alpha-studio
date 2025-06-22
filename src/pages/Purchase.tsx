import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet';

const Purchase = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    quantity: '1'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xkgraeer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          product: 'The Blue Wolf - Printed Copy',
          quantity: formData.quantity
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          country: '',
          quantity: '1'
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={cn("min-h-screen flex flex-col bg-gradient-to-b from-alpha-darker to-black", language === 'ar' && "lang-ar")} lang={language}>
      <Helmet>
        <title>{language === 'ar' ? 'طلب نسخة مطبوعة | روايات ألفا ستوديو' : 'Order Printed Copy | Alpha Studio Novels'}</title>
        <meta name="description" content={language === 'ar' ? 'اطلب نسخة مطبوعة من رواية الذئب الأزرق' : 'Order a printed copy of The Blue Wolf'} />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-20 bg-gradient-to-b from-alpha-darker to-black">
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-alpha-charcoal/60 rounded-xl p-8 shadow-2xl border border-alpha-gold/20 backdrop-blur-md">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              {language === 'ar' ? 'طلب نسخة مطبوعة' : 'Order Printed Copy'}
            </h1>

            {submitStatus === 'success' ? (
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 text-center">
                <h2 className="text-2xl font-bold text-green-400 mb-2">
                  {language === 'ar' ? 'تم استلام طلبك بنجاح!' : 'Order Received Successfully!'}
                </h2>
                <p className="text-gray-300">
                  {language === 'ar' 
                    ? 'سنقوم بالتواصل معك قريباً لتأكيد الطلب وتفاصيل الشحن.'
                    : 'We will contact you soon to confirm your order and shipping details.'}
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex flex-col items-center">
                  <img 
                    src="/alpha-studio/blue/first.png" 
                    alt={language === 'ar' ? 'غلاف الذئب الأزرق' : 'The Blue Wolf Cover'} 
                    className="w-48 h-auto rounded-lg shadow-xl mb-4"
                  />
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-yellow-500 mb-2">
                      {language === 'ar' ? '١٩٩ جنيه' : '199 EGP'}
                    </h2>
                    <p className="text-gray-400">
                      {language === 'ar' ? 'شامل الشحن' : 'Including shipping'}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {language === 'ar' ? 'مميزات النسخة المطبوعة' : 'Printed Edition Features'}
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">✓</span>
                      {language === 'ar' ? 'نسخة موقعة من المؤلف' : 'Signed by the author'}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">✓</span>
                      {language === 'ar' ? 'غلاف فاخر' : 'Premium cover'}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">✓</span>
                      {language === 'ar' ? 'ورق عالي الجودة' : 'High-quality paper'}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">✓</span>
                      {language === 'ar' ? 'شحن سريع' : 'Fast shipping'}
                    </li>
                  </ul>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2" htmlFor="name">
                        {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-[#FFD700] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2" htmlFor="email">
                        {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-[#FFD700] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2" htmlFor="phone">
                        {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-[#FFD700] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2" htmlFor="quantity">
                        {language === 'ar' ? 'الكمية' : 'Quantity'}
                      </label>
                      <select
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-[#FFD700] focus:outline-none"
                      >
                        {[1, 2, 3, 4, 5].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-gray-300 mb-2" htmlFor="address">
                        {language === 'ar' ? 'العنوان' : 'Address'}
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-[#FFD700] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2" htmlFor="city">
                        {language === 'ar' ? 'المدينة' : 'City'}
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-[#FFD700] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2" htmlFor="country">
                        {language === 'ar' ? 'الدولة' : 'Country'}
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-[#FFD700] focus:outline-none"
                      />
                    </div>
                  </div>

                  {submitStatus === 'error' && (
                    <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 text-center text-red-400">
                      {language === 'ar' 
                        ? 'حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.'
                        : 'An error occurred while submitting your order. Please try again.'}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-full font-bold text-lg transition-all duration-200 ${
                      isSubmitting
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-[#FFD700] hover:bg-[#e6c200] text-black'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {language === 'ar' ? 'جاري الإرسال...' : 'Submitting...'}
                      </span>
                    ) : (
                      language === 'ar' ? 'تأكيد الطلب' : 'Confirm Order'
                    )}
                  </button>
                </form>

                <p className="text-sm text-gray-400 text-center">
                  {language === 'ar' 
                    ? 'التوصيل خلال ٢-٤ أيام عمل. نسخ موقعة محدودة!'
                    : 'Estimated delivery in 2-4 weeks. Limited signed copies available!'}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Purchase; 