import React from 'react';
import styled from 'styled-components';

interface Novel {
  title: string;
  saga: string;
  description: string;
  releaseDate: string;
  imagePath: string;
}

const novels: Novel[] = [
  {
    title: "The Blue Wolf",
    saga: "A Vague Future",
    description: "Follow the journey of a hero seeking justice in a world of chaos and deception.",
    releaseDate: "Coming June 2025",
    imagePath: "/Novels/The Blue Wolf .jpg"
  },
  {
    title: "The Curse of King Samagar",
    saga: "Mirrors of Civilizations",
    description: "How does the war between Adam and Satan unfold when a cursed king battles against the devil?",
    releaseDate: "Coming October 2025",
    imagePath: "/Novels/The Curse of King Samagar .png"
  },
  {
    title: "Boss Heist",
    saga: "Daggers and Destinies",
    description: "Out of the fog emerges a man determined to unveil his destiny and reveal his hidden truth.",
    releaseDate: "Coming 2026",
    imagePath: "/Novels/Boss Heist .png"
  },
  {
    title: "غابة الإنسان",
    saga: "",
    description: "",
    releaseDate: "",
    imagePath: "/Novels/The Forest of Humans .png"
  },
  {
    title: "Alpha Studio",
    saga: "A Vague Future",
    description: "",
    releaseDate: "Coming 2026",
    imagePath: ""
  },
  {
    title: "Throne of the Seas",
    saga: "Armand Duval",
    description: "Armand Duval is a daring pirate with a heart of gold, feared by the wicked and revered by the oppressed. Once a nobleman betrayed by the crown, he now sails the seas in search of ancient treasures—not for wealth, but to aid the poor and forgotten. With sharp wit, unmatched swordsmanship, and a loyal crew, he wages a rebellious war against the tyrannical King Poseidon, whose greed and cruelty plague the realm. Armand's legend grows with every battle won and every village saved—a rogue hero who defies empires and inspires hope wherever his black sails rise on the horizon.",
    releaseDate: "",
    imagePath: ""
  }
];

const Section = styled.section`
  padding: 4rem 2rem;
  margin: 2rem 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95));
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(74, 158, 255, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;
  font-family: 'Playfair Display', serif;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #e0e0e0;
  text-align: center;
  margin-bottom: 3rem;
  font-style: italic;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const NovelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  padding: 1rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const NovelCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1.5rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(74, 158, 255, 0.3);
  }
`;

const NovelImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const NovelTitle = styled.h3`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const NovelSaga = styled.h4`
  font-size: 1.2rem;
  color: #4a9eff;
  margin-bottom: 1rem;
  font-style: italic;
`;

const NovelDescription = styled.p`
  color: #b0b0b0;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
`;

const NovelAuthor = styled.p`
  color: #e0e0e0;
  font-style: italic;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
`;

const NovelRelease = styled.p`
  color: #4a9eff;
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const NovelsSection: React.FC = () => {
  return (
    <Section>
      <Title>Alpha Studio Novels</Title>
      <Subtitle>Immersive stories that transport you to new worlds and dimensions</Subtitle>
      <NovelGrid>
        {novels.map((novel, index) => (
          <NovelCard key={index}>
            {novel.imagePath && <NovelImage src={novel.imagePath} alt={novel.title} />}
            <NovelTitle>{novel.title}</NovelTitle>
            {novel.saga && <NovelSaga>{novel.saga}</NovelSaga>}
            {novel.description && <NovelDescription>{novel.description}</NovelDescription>}
            {novel.title !== "غابة الإنسان" && novel.title !== "Alpha Studio" && (
              <NovelAuthor>By: Omar Duhaim</NovelAuthor>
            )}
            {novel.releaseDate && <NovelRelease>{novel.releaseDate}</NovelRelease>}
          </NovelCard>
        ))}
      </NovelGrid>
    </Section>
  );
};

export default NovelsSection;
