import React from 'react';
import { styled } from 'styled-components';

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Content>
          <p>Hi, my name is</p>
          <h1 className='name'>Naymur Rahman.</h1>
          <h1>I build things for the web.</h1>
          <p>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Upstatement.
          </p>
        </Content>
      </Container>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.section`
  height: 100vh;
  background-color: var(--bg-navy);
`;
const Container = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 6rem;
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--primary-text);
  height: 100vh;
  & > p:first-child {
    font-size: 16px;
    font-family: var(--firaCode);
    color: var(--lightGreen);
    margin-bottom: 10px;
  }
  & > p {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    max-width: 570px;
    margin-top: 20px;
  }
  & > h1.name {
    color: var(--secondary-text);
  }
  & > h1 {
    font-size: clamp(40px, 5vw, 70px);
    padding: 5px 0;
  }
`;
