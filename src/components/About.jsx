import React from 'react';
import { styled } from 'styled-components';
import { Container } from '../styles/Styles';
import Title from './Title';
import { VscTriangleRight } from 'react-icons/vsc';

const About = () => {
  return (
    <Wrap id='about'>
      <Container>
        <Content>
          <Title title='Know Me More' subTitle='About Me' />
          <Layer>
            <LeftContent>
              <p>
                Hello there! I'm Naymur Rahman, a passionate frontend web
                developer with a strong focus on creating visually appealing and
                user-friendly websites.
                <br /> As a junior developer, I am constantly learning and
                expanding my skill set.{' '}
                <span>
                  {' '}
                  I have a solid foundation in HTML, CSS, and JavaScript, and I
                  am eager to dive deeper into frontend frameworks and
                  libraries.
                </span>
                <br />I find immense joy in crafting <span>
                  pixel-perfect
                </span>{' '}
                , <span>responsive</span> interfaces that not only look great
                but also provide seamless user experiences.
              </p>
              <p>
                Beyond technical skills, I bring a positive and proactive
                mindset to every project. I am resourceful, solution-oriented,
                and eager to tackle challenges head-on. I understand the
                importance of time management and meeting deadlines, and I am
                committed to delivering high-quality work on schedule.
              </p>
              <p>
                I am excited about the opportunity to contribute my skills and
                learn from <span>experienced professionals</span> in a
                collaborative and dynamic environment. I am eager to make a
                meaningful impact and grow as a frontend web developer.
              </p>
              <p className='skills'>
                Here are a few technologies I’ve been working with recently:
              </p>
              <Skills>
                <Skillset>
                  <Lists>
                    <VscTriangleRight />
                    Javascript (Es6)
                  </Lists>
                  <Lists>React</Lists>
                  <Lists>Tailwind</Lists>
                  <Lists>Css3</Lists>
                </Skillset>
                <Skillset>
                  <Lists>Html5</Lists>
                  <Lists>React</Lists>
                  <Lists>Tailwind</Lists>
                  <Lists>Reacaaaaaaat</Lists>
                </Skillset>
              </Skills>
            </LeftContent>
            <RightContent>
              <PhotoWraper>
                <Photo src='./images/nr.jpg' alt='image' />
              </PhotoWraper>
            </RightContent>
          </Layer>
        </Content>
      </Container>
    </Wrap>
  );
};

export default About;

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
const Layer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
`;
const LeftContent = styled.div`
  & p {
    font-size: 18px;
    line-height: 1.4;
    padding-bottom: 14px;
    & span {
      font-weight: bold;
    }
  }
  & p.skills {
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
    color: var();
  }
`;
const Skills = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Skillset = styled.ul`
  list-style: none;
`;
const Lists = styled.li`
  color: var(--secondary-text);
  font-size: 20px;
  padding: 4px 0;
`;
const RightContent = styled.div`
  &::after {
    position: relative;
    top: 0;
    left: 0;
    content: '';
    height: 100%;
    width: 100%;
    background-color: red;
  }
`;
const PhotoWraper = styled.div`
  max-width: 500px;
  max-height: 500px;
  position: relative;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: '';
    background-color: #ffff;
  }
`;
const Photo = styled.img`
  display: block;
  height: 260px;
  width: 100%;
  position: relative;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    height: 100%;
    width: 100%;
    background-color: red;
  }
`;
