import React from 'react';
import { styled } from 'styled-components';
import { Container } from '../styles/Styles';
import Title from './Title';

const About = () => {
  return (
    <Wrap>
      <Container>
        <Content>
          <Title title='Know Me More' subTitle='About Me' />
          <Layer>
            <LeftContent>
              <p>
                Hello! My name is Brittany and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes — turns
                out hacking together a custom reblog button taught me a lot
                about HTML & CSS!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                quidem? Commodi repellendus at similique nostrum ipsum quasi
                nobis ipsam? Nihil, sapiente omnis! Fast-forward to today, and
                sing agency, a start-up, a huge corporation, and a student-led
                design studio. My main focus these days is building accessible,
                inclusive products and digital experiences at Upstatement for a
                variety of clients.
              </p>
              <p>
                I also recently launched a course that covers everything you
                need to build a web app with the Spotify API using Node & React.
              </p>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
              <Skills>
                <Skillset>
                  <Lists>Javascript (Es6)</Lists>
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
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 10vh 0;
`;
const Layer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
`;
const LeftContent = styled.div`
  p {
    font-size: 18px;
    line-height: 1.4;
    padding-bottom: 14px;
    text-justify: inter-word;
  }
`;
const Skills = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Skillset = styled.div``;
const Lists = styled.li``;
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
