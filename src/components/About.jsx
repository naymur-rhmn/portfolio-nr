import React from 'react';

import { styled } from 'styled-components';

import { Container } from '../styles/Styles';
import Title from './Title';

import { VscTriangleRight } from 'react-icons/vsc';

const About = () => {
  return (
    <Wrap id='about'>
      <Container>
        <Content
          data-aos='fade-up'
          data-aos-easing='ease-in-out'
          data-aos-delay='100'
          data-aos-offset='50'
          data-aos-once='true'
        >
          <Title title='Know Me More' subTitle='About Me' />
          <Layer>
            {/* left content start */}
            <LeftContent
              data-aos='fade-up'
              data-aos-easing='ease-in-out'
              data-aos-delay='100'
              data-aos-offset='50'
              data-aos-once='true'
            >
              <p>
                Hello there! I'm Naymur Rahman, a passionate frontend web
                developer with a strong focus on creating visually appealing and
                user-friendly websites.
              </p>
              <p>
                As a junior developer, I am constantly learning and expanding my
                skill set.{' '}
                <span>
                  {' '}
                  I have a solid foundation in HTML, CSS, and JavaScript, and I
                  am eager to dive deeper into frontend frameworks and libraries
                  like React.js.
                </span>
              </p>
              <p>
                I find immense joy in crafting <span>pixel-perfect</span> ,{' '}
                <span>responsive</span> interfaces that not only look great but
                also provide seamless user experiences.
              </p>
              {/* <p>
                Beyond technical skills, I bring a positive and proactive
                mindset to every project. I am resourceful, solution-oriented,
                and eager to tackle challenges head-on. I understand the
                importance of time management and meeting deadlines, and I am
                committed to delivering high-quality work on schedule.
              </p> */}
              <p>
                I am excited about the opportunity to contribute my skills and
                learn from <span>experienced professionals</span> in a
                collaborative and dynamic environment. I am eager to make a
                meaningful impact and grow as a frontend web developer.
              </p>

              <SkillWraper
                data-aos='fade-up'
                data-aos-easing='ease-in-out'
                data-aos-delay='100'
                data-aos-offset='50'
                data-aos-once='true'
              >
                <p className='skills'>My Skillset:</p>
                <Skills>
                  <Skillset>
                    <Lists>
                      <VscTriangleRight className='angle' />
                      JavaScript (ES6)
                    </Lists>
                    <Lists>
                      <VscTriangleRight className='angle' /> React.js
                    </Lists>
                    <Lists>
                      <VscTriangleRight className='angle' /> Tailwind CSS
                    </Lists>
                    <Lists>
                      <VscTriangleRight className='angle' /> Material UI
                    </Lists>
                    <Lists>
                      <VscTriangleRight className='angle' /> Html5
                    </Lists>
                  </Skillset>

                  <Skillset>
                    <Lists>
                      <VscTriangleRight className='angle' /> Node.js
                    </Lists>
                    <Lists>
                      <VscTriangleRight className='angle' /> Express.js
                    </Lists>
                    <Lists>
                      <VscTriangleRight className='angle' /> MongoDB
                    </Lists>
                    <Lists>
                      <VscTriangleRight className='angle' /> Firebase
                    </Lists>
                    <Lists>
                      <VscTriangleRight className='angle' /> CSS3
                    </Lists>
                  </Skillset>
                </Skills>
              </SkillWraper>
            </LeftContent>

            {/* right Content start */}
            <RightContent>
              <PhotoWraper
                data-aos='fade-up'
                data-aos-easing='ease-in-out'
                data-aos-delay='100'
                data-aos-offset='50'
                data-aos-once='true'
              >
                <ImgOverlay className='testA'>
                  <Photo
                    className='testB'
                    src='./images/nr.jpg'
                    alt='owners photo'
                  />
                </ImgOverlay>
              </PhotoWraper>
            </RightContent>
          </Layer>
        </Content>
      </Container>
    </Wrap>
  );
};

export default About;

//wraper
const Wrap = styled.section`
  background-color: var(--bg-third);
  z-index: 999;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 10vh 0;
  z-index: 999;
`;
// layer
const Layer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
  @media (max-width: 892px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;
// left content
const LeftContent = styled.div`
  position: relative;
  z-index: 99;
  & p {
    font-size: 16px;
    line-height: 1.4;
    padding-bottom: 14px;
    & span {
      font-weight: 600;
    }
  }
  & p.skills {
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
    color: var();
    @media (max-width: 892px) {
      text-align: center;
    }
  }
`;
const SkillWraper = styled.div``;
const Skills = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 892px) {
    display: flex;
    justify-content: space-around;
  }
`;
const Skillset = styled.div``;
const Lists = styled.li`
  color: var(--secondary-text);
  font-size: 16px;
  padding: 4px 0;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  & .angle {
    color: var(--lightGreen);
  }
`;
// right content image section
const RightContent = styled.div`
  position: relative;
  z-index: 99;
`;
const PhotoWraper = styled.div`
  max-width: 360px;
  max-height: 360px;
  position: relative;
  z-index: 1;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: '';
    background-color: var(--lightGreen);
    z-index: -1;
    border-radius: 5px;
  }

  @media (max-width: 892px) {
    margin: 0 auto;
    border-radius: 50%;
    &:before {
      border-radius: 50%;
    }
  }
`;
const ImgOverlay = styled.div`
  transition: all 0.3s ease-in-out;
  display: block;
  border-radius: 5px;
  position: relative;
  z-index: 1;
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: '';
    background-color: var(--bg-card);
    opacity: 0.4;
    mix-blend-mode: darken;
    transition: all 0.3s ease-in-out;
  }
  &:hover:after {
    opacity: 0;
    transition: all 0.3s ease-in-out;
    transform: translateX(-8px) translateY(-8px);
  }
  &:hover > .testB {
    transform: translateX(-8px) translateY(-8px);
  }

  @media (max-width: 892px) {
    border-radius: 50%;
    &:after {
      border-radius: 50%;
    }
    &:hover > .testB {
      transform: scale(0.96) rotate(-6deg);
      box-shadow: 0 0 8px 4px rgba(68, 244, 127, 0.23);
    }
  }
`;
const Photo = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background-color: var(--lightGreen);
  transition: all 0.3s;
  border-radius: 5px;
  box-shadow: 0px 0 8px 1px rgba(14, 147, 14, 0.173);
  position: relative;

  @media (max-width: 892px) {
    margin: 0 auto;
    border-radius: 50%;
  }
`;
