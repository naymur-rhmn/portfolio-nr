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
          <p
            className='intro'
            data-aos='fade'
            data-aos-easing='ease-in-out'
            data-aos-delay='100'
            data-aos-offset='50'
            data-aos-once='true'
          >
            Hi, my name is
          </p>
          <h1
            className='name'
            data-aos='fade'
            data-aos-easing='ease-in-out'
            data-aos-delay='200'
            data-aos-offset='50'
            data-aos-once='true'
          >
            Naymur Rahman,
          </h1>
          <h1
            data-aos='fade'
            data-aos-easing='ease-in-out'
            data-aos-delay='300'
            data-aos-offset='50'
            data-aos-once='true'
          >
            A Frontend web developer
          </h1>
          <p
            className='paragraph'
            data-aos='fade'
            data-aos-easing='ease-in-out'
            data-aos-delay='400'
            data-aos-offset='50'
            data-aos-once='true'
          >
            I’m a front-end web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
          </p>
          <ContactMe
            className='contact-me'
            data-aos='fade'
            data-aos-easing='ease-in-out'
            data-aos-delay='500'
            data-aos-offset='50'
            data-aos-once='true'
          >
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
                    {/* <svg
                      className='envelope'
                      fill='#000000'
                      height='40px'
                      width='40px'
                      version='1.1'
                      id='Capa_1'
                      viewBox='0 0 382.117 382.117'
                    >
                      <path
                        d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z'
                        id='mainIconPathAttribute'
                        fill='#ffffff'
                        stroke-width='1'
                        stroke='#565656'
                      ></path>
                    </svg> */}
                    <svg
                      className='envelope'
                      fill='#ecf3e9'
                      height='40px'
                      width='40px'
                      version='1.1'
                      id='Capa_1'
                      viewBox='0 0 382.117 382.117'
                    >
                      <path d='M336.764,45.945H45.354C20.346,45.945,0,65.484,0,89.5v203.117c0,24.016,20.346,43.555,45.354,43.555h291.41  c25.008,0,45.353-19.539,45.353-43.555V89.5C382.117,65.484,361.772,45.945,336.764,45.945z M336.764,297.72H45.354  c-3.676,0-6.9-2.384-6.9-5.103V116.359l131.797,111.27c2.702,2.282,6.138,3.538,9.676,3.538l22.259,0.001  c3.536,0,6.974-1.257,9.677-3.539l131.803-111.274v176.264C343.664,295.336,340.439,297.72,336.764,297.72z M191.059,192.987  L62.87,84.397h256.378L191.059,192.987z' />
                    </svg>
                    {/* <svg
                      className='envelope'
                      xmlns='http://www.w3.org/2000/svg'
                      width='40px'
                      height='40px'
                      fill='currentColor'
                      class='bi bi-envelope'
                      viewBox='0 0 16 16'
                    >
                      <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z' />{' '}
                    </svg> */}
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
