import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  margin: 2rem 0;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #e0e0e0;
  margin-bottom: 1rem;
`;

const AboutSection: React.FC = () => {
  return (
    <AboutContainer>
      <Title>Our Story</Title>
      <Text>
        Founded by Omar Duhaim, an Egyptian writer, actor and content creator who wanted to make something special to turn imagination into reality and make a difference in the world of novels.
      </Text>
      <Text>
        Our vision is brought to life through the collaborative efforts of a diverse team of writers, artists, technologists, and creative contributors. Together, we're building a world where stories transcend boundaries and inspire generations.
      </Text>
    </AboutContainer>
  );
};

export default AboutSection;
