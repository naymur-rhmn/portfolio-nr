import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Container } from '../styles/Styles';
import { scroll } from '../scrollEffects/scroll.js';

const Hero = () => {
  const { scrollPos } = scroll();

  return (
    <HeroSection>
      <Container>
        <Content>
          <p>Hi, my name is</p>
          <h1 className='name'>Naymur Rahman,</h1>
          <h1>A Frontend web developer</h1>
          <p>
            I’m a front-end web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
          </p>
          <div>
            <ContactMe className='contact-me'>
              <ButtonWraper className='btn-wraper'>
                <Button
                  className={`${
                    scrollPos.scrollY < -500
                      ? 'sticky btn-contact'
                      : 'btn-contact'
                  } `}
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
                  <span>Contact me</span>
                </Button>
              </ButtonWraper>
            </ContactMe>
          </div>
        </Content>
      </Container>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.section`
  height: 100vh;
  background-color: var(--bg-second);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--primary-text);
  height: 100vh;
  margin: auto 0;
  align-items: center;
  text-align: center;
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
    /* max-width: 670px; */
    padding: 0 5rem;
    margin-top: 20px;
  }
  & > h1.name {
    color: var(--secondary-text);
  }
  & > h1 {
    font-size: clamp(40px, 6vw, 80px);
    padding: 5px 0;
    text-align: center;
  }
`;

// contact me
const ContactMe = styled.div``;
const ButtonWraper = styled.div``;
const Button = styled.button``;
