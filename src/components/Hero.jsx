import React from 'react';
// styled components
import { styled } from 'styled-components';
import { Container } from '../styles/Styles';
// import scroll function
import { scroll } from '../scrollEffects/scroll.js';

const Hero = () => {
  const { scrollPos, showButton } = scroll();

  return (
    <HeroSection>
      <Container>
        <Content>
          <p className='intro'>Hi, my name is</p>
          <h1 className='name'>Naymur Rahman,</h1>
          <h1>A Frontend web developer</h1>
          <p className='paragraph'>
            I’m a front-end web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
          </p>
          <ContactMe className='contact-me'>
            <ButtonWraper className='btn-wraper'>
              {showButton && (
                <a href='#contact'>
                  <Button
                    className={`${
                      scrollPos.scrollY < -500
                        ? 'sticky btn-contact'
                        : 'btn-contact'
                    }`}
                  >
                    <svg
                      className='envelope'
                      xmlns='http://www.w3.org/2000/svg'
                      xmlns:xlink='http://www.w3.org/1999/xlink'
                      fill='#000000'
                      height='40px'
                      width='40px'
                      version='1.1'
                      id='Capa_1'
                      viewBox='0 0 382.117 382.117'
                      xml:space='preserve'
                    >
                      <path d='M336.764,45.945H45.354C20.346,45.945,0,65.484,0,89.5v203.117c0,24.016,20.346,43.555,45.354,43.555h291.41  c25.008,0,45.353-19.539,45.353-43.555V89.5C382.117,65.484,361.772,45.945,336.764,45.945z M336.764,297.72H45.354  c-3.676,0-6.9-2.384-6.9-5.103V116.359l131.797,111.27c2.702,2.282,6.138,3.538,9.676,3.538l22.259,0.001  c3.536,0,6.974-1.257,9.677-3.539l131.803-111.274v176.264C343.664,295.336,340.439,297.72,336.764,297.72z M191.059,192.987  L62.87,84.397h256.378L191.059,192.987z' />
                    </svg>
                    <span>Contact Me</span>
                  </Button>
                </a>
              )}
            </ButtonWraper>
          </ContactMe>
        </Content>
      </Container>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.section`
  min-height: 100vh;
  background-color: var(--bg-second);
  @media (max-width: 450px) {
    padding: 70px 0;
  }
`;

// content
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 0;
  color: var(--primary-text);
  height: 100vh;
  margin: auto 0;
  align-items: center;
  text-align: center;
  & > p:first-child {
    font-size: 18px;
    font-family: var(--firaCode);
    color: var(--lightGreen);
    margin-bottom: 10px;
  }
  & > p {
    font-size: 18px;
    font-weight: 400;
    padding: 0 5rem;
    margin-top: 20px;
    letter-spacing: 0.5px;
    @media (max-width: 992px) {
      padding: 0 1rem;
      font-size: 16px;
    }
  }
  & > h1.name {
    color: var(--secondary-text);
  }
  & > h1 {
    font-size: clamp(32px, 6vw, 70px);
    padding: 2px 0;
    text-align: center;
  }
`;

// contact me
const ContactMe = styled.div``;
const ButtonWraper = styled.div``;
const Button = styled.button``;
