import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { characters as allCharacters } from './Novels';

const CharacterPage: React.FC = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const characterId = Number(id);
  const character = allCharacters.find((c) => c.id === characterId);

  if (!character) {
    return (
      <div className={cn('min-h-screen flex flex-col bg-gradient-to-b from-alpha-darker to-black', language === 'ar' && 'lang-ar')} lang={language}>
        <Navbar />
        <main className="flex-grow pt-24 container mx-auto px-4 text-center text-white">
          <h1 className="alpha-title mb-6">{language === 'en' ? 'Character not found' : 'الشخصية غير موجودة'}</h1>
          <Link to="/novels#characters" className="text-[#FFD700] underline">{language === 'en' ? 'Back to Characters' : 'العودة إلى الشخصيات'}</Link>
        </main>
      </div>
    );
  }

  return (
    <div className={cn('character-page min-h-screen flex flex-col bg-gradient-to-b from-alpha-darker to-black', language === 'ar' && 'lang-ar')} lang={language}>
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero/Image: half screen on mobile, taller on desktop */}
        <section className="character-hero relative h-[50vh] md:h-[70vh] overflow-hidden">
          <div className="absolute inset-0">
            <img src={character.image} alt={language === 'en' ? character.name : character.nameAr} className="character-hero-img w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>
          {/* Title overlay removed to avoid duplication; title is rendered below image */}
        </section>

        <section className="container mx-auto px-4 py-8 md:py-12 text-white">
          {/* Title under image on mobile */}
          <div className="character-title-mobile mb-4">
            <h1 className="alpha-title text-3xl mb-2">{language === 'en' ? character.name : character.nameAr}</h1>
            <p className="text-alpha-gold">{language === 'en' ? character.novel : character.novelAr}</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-8 text-gray-200 whitespace-pre-line">
              {language === 'en' ? character.description : character.descriptionAr}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CharacterPage;


