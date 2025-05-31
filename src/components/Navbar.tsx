// ... (imports and other parts of the component)
import React, { useState } from 'react'; // لاستخدام React و useState و React.memo
import { Link } from 'react-router-dom';  // لاستخدام مكون Link للتنقل
import { cn } from '@/lib/utils';         // لاستخدام الدالة cn لدمج الـ classes
import { Globe } from 'lucide-react';    // لاستخدام أيقونة Globe
import { useLanguage } from '../contexts/LanguageContext'; // لاستخدام context اللغة الخاص بك

// ... باقي كود مكون Navbar يبدأ هنا
// const Navbar = () => { ... }

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const mobileMenuId = 'mobile-menu-content'; // Define an ID for the mobile menu

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-alpha-darker/90 backdrop-blur-xl border-b border-alpha-gold/10 shadow-[0_2px_16px_0_rgba(0,0,0,0.12)]">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* ... Logo ... */}
        <div className="alpha-logo font-extrabold text-2xl md:text-3xl tracking-widest select-none">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-white group-hover:text-alpha-gold transition-colors duration-300" style={{letterSpacing: '0.13em', fontFamily: 'var(--font-sans, Inter, sans-serif)', textShadow: '0 1px 8px rgba(255,255,255,0.07)'}}>
              ALPHA
            </span>
            <span className="text-white transition-colors duration-300" style={{letterSpacing: '0.08em', fontFamily: 'var(--font-sans, Inter, sans-serif)'}}>
              STUDIO
            </span>
          </Link>
        </div>
        {/* ... Desktop Navigation ... */}
        <div className={cn(
          'hidden md:flex items-center gap-2 lg:gap-6',
          language === 'ar' && 'rtl-space-x-6' // See note below about this
        )}>
          {/* ... NavLinks and Language Button ... */}
          <NavLink to="/" label={language === 'en' ? 'Home' : 'الصفحة الرئيسية'} />
          <NavLink to="/works" label={language === 'en' ? 'Our Works' : 'أعمالنا'} />
          <NavLink to="/novels" label={language === 'en' ? 'Novels' : 'الروايات'} />
          <NavLink to="/about" label={language === 'en' ? 'About Us' : 'من نحن'} />
          <NavLink to="/join" label={language === 'en' ? 'Join the Family' : 'انضم إلينا'} />
          <NavLink to="/contact" label={language === 'en' ? 'Contact' : 'تواصل معنا'} />
          <button
            onClick={toggleLanguage}
            className="ml-4 flex items-center gap-1 px-3 py-1.5 rounded-full border border-alpha-gold/30 bg-alpha-charcoal/80 text-alpha-gold font-semibold shadow-sm hover:bg-alpha-gold/90 hover:text-alpha-darker transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-alpha-gold/40"
            aria-label={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
            style={{fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 700, letterSpacing: '0.04em'}}
          >
            <Globe className="w-4 h-4 mr-1 opacity-80" />
            <span className="text-sm font-bold tracking-wide">
              {language === 'en' ? 'العربية' : 'English'}
            </span>
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-alpha-gold hover:text-white transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-alpha-gold/40"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen} // <-- ADDED
          aria-controls={mobileMenuId} // <-- ADDED
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id={mobileMenuId} // <-- ADDED
            className="absolute top-full left-0 right-0 bg-alpha-darker/98 backdrop-blur-xl p-6 rounded-b-2xl shadow-2xl md:hidden border-b border-alpha-gold/10 animate-fade-in"
            role="menu" // <-- Optional: Enhances semantics
          >
            <div className="flex flex-col items-center space-y-6 w-full">
              {/* Add role="menuitem" to NavLinks if role="menu" is on parent */}
              <NavLink to="/" label={language === 'en' ? 'Home' : 'الصفحة الرئيسية'} onClick={() => setIsMenuOpen(false)} role="menuitem" />
              <NavLink to="/works" label={language === 'en' ? 'Our Works' : 'أعمالنا'} onClick={() => setIsMenuOpen(false)} role="menuitem" />
              <NavLink to="/novels" label={language === 'en' ? 'Novels' : 'الروايات'} onClick={() => setIsMenuOpen(false)} role="menuitem" />
              <NavLink to="/about" label={language === 'en' ? 'About Us' : 'من نحن'} onClick={() => setIsMenuOpen(false)} role="menuitem" />
              <NavLink to="/join" label={language === 'en' ? 'Join the Family' : 'انضم إلينا'} onClick={() => setIsMenuOpen(false)} role="menuitem" />
              <NavLink to="/contact" label={language === 'en' ? 'Contact' : 'تواصل معنا'} onClick={() => setIsMenuOpen(false)} role="menuitem" />
              <div role="menuitem"> {/* Wrap button for correct role if menu has roles */}
                <button
                  onClick={() => { toggleLanguage(); setIsMenuOpen(false); }}
                  className="flex items-center gap-1 px-4 py-2 rounded-full border border-alpha-gold/30 bg-alpha-charcoal/80 text-alpha-gold font-semibold shadow-sm hover:bg-alpha-gold/90 hover:text-alpha-darker transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-alpha-gold/40"
                  aria-label={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
                  style={{fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 700, letterSpacing: '0.04em'}}
                >
                  <Globe className="w-4 h-4 mr-2 opacity-80" />
                  <span className="text-sm font-bold tracking-wide">
                    {language === 'en' ? 'العربية' : 'English'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* ... Subtle Divider ... */}
      <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-alpha-gold/30 to-transparent mt-2 opacity-80" />
    </nav>
  );
};

// Custom NavLink for consistent style and active/hover effects
// Consider wrapping with React.memo if performance profiling shows it's beneficial
const NavLink = React.memo(({ to, label, onClick, role }: { to: string; label: string; onClick?: () => void; role?: string }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="relative px-3 py-1.5 text-base font-semibold tracking-wide text-white transition-all duration-200 hover:text-alpha-gold focus:text-alpha-gold focus:outline-none group"
      style={{fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 600, letterSpacing: '0.04em'}}
      role={role} // <-- ADDED
    >
      <span className="z-10 relative">{label}</span>
      <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 group-hover:w-4/5 group-focus:w-4/5 h-[2px] bg-alpha-gold transition-all duration-300 rounded-full" />
    </Link>
  );
});
// Ensure to import React if not already: import React from 'react';

export default Navbar;