import React, { useEffect, useState } from 'react';
// import styled components
import { styled } from 'styled-components';
import { ListItem, Lists } from '../styles/Styles';
// react icons
import { BsGithub } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';

const Project = ({ data }) => {
  const { id, title, img, desc, refs, links } = data;
  const [isodd, setIsOdd] = useState(true);

  // even or odd calculate function
  const evenOrOdd = (n) => {
    if (parseInt(n) % 2 !== 0) {
      setIsOdd(true);
    } else {
      setIsOdd(false);
    }
  };
  // hook
  useEffect(() => evenOrOdd(id), []);

  return (
    <Layer
      data-aos='fade-up'
      data-aos-easing='ease-in-out'
      data-aos-delay='120'
      data-aos-offset='120'
      data-aos-once='true'
    >
      <SliceOne>
        {/* conditional rendering */}
        {isodd ? (
          <ImgLink href={links.liveUrl} target='_blank'>
            <Image src={img} alt={title + 'Thumbnail'} />
          </ImgLink>
        ) : (
          <Content>
            <p>Featured Project</p>

            <ProjectTitle>
              <Link href={links.liveUrl} target='_blank'>
                {title}
              </Link>
            </ProjectTitle>

            <Card>
              <Paragraph>{desc}</Paragraph>
            </Card>

            <Materials isodd={isodd ? 1 : 0}>
              <Lists gap='15'>
                {refs.map((ref, i) => (
                  <ListItem key={i}>{ref}</ListItem>
                ))}
              </Lists>
            </Materials>

            <SiteLinks>
              <GithubLink href={links.github} target='_blank'>
                <BsGithub />
              </GithubLink>

              <ExternalLink href={links.liveUrl} target='_blank'>
                <BiLinkExternal />
              </ExternalLink>
            </SiteLinks>
          </Content>
        )}
      </SliceOne>

      <SliceTwo>
        {/* conditional rendering */}
        {isodd ? (
          <Content>
            <p>Featured Project</p>

            <ProjectTitle>
              <Link href={links.liveUrl} target='_blank'>
                {title}
              </Link>
            </ProjectTitle>

            <Card>
              <Paragraph>{desc}</Paragraph>
            </Card>

            <Materials isodd={isodd ? 1 : 0}>
              <Lists gap='15'>
                {refs.map((ref, i) => (
                  <ListItem key={i}>{ref}</ListItem>
                ))}
              </Lists>
            </Materials>

            <SiteLinks>
              <GithubLink href={links.github} target='_blank'>
                <BsGithub />
              </GithubLink>

              <ExternalLink href={links.liveUrl} target='_blank'>
                <BiLinkExternal />
              </ExternalLink>
            </SiteLinks>
          </Content>
        ) : (
          <ImgLink href={links.liveUrl} target='_blank'>
            <Image src={img} alt={title + 'Thumbnail'} />
          </ImgLink>
        )}
      </SliceTwo>
    </Layer>
  );
};

export default Project;

// layer style
const Layer = styled.div`
  position: relative;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-content: center;
  align-items: center;
  margin-bottom: 90px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
  @media (max-width: 672px) {
    margin-bottom: 40px;
  }
`;

// slice style
const SliceOne = styled.div`
  position: relative;
  grid-column: 1 / 8;
  grid-row: 1 / 1;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`;
const SliceTwo = styled(SliceOne)`
  grid-column: 5 / -1;
  grid-row: 1 / 1;
  text-align: right;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`;

// link style
const Link = styled.a`
  transition: all.3s;
  display: inline-block;
  color: var(--secondary-text);
  font-size: 24px;
  font-weight: bold;
  &:hover {
    color: var(--lightGreen);
  }
`;
const ImgLink = styled.a`
  transition: all 0.9s ease-in-out;
  display: block;
  background: var(--lightGreen);
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
    opacity: 0.7;
    mix-blend-mode: darken;
  }
  &:hover:after {
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }
`;
const SiteLinks = styled.div`
  padding-top: 15px;
  z-index: 9;
`;
const GithubLink = styled(Link)`
  cursor: pointer;
  font-size: 25px;
`;
const ExternalLink = styled(GithubLink)`
  margin-left: 15px;
`;

// image style
const Image = styled.img`
  width: 100%;
  display: block;
  background-color: gray;
  min-height: 200px;
  max-height: 400px;
  border-radius: 5px;
  position: relative;
`;

// content style
const Content = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 9999;
  & p {
    font-size: 16px;
    color: var(--lightGreen);
    z-index: 9999;
  }
`;
const ProjectTitle = styled.div`
  padding: 6px 0 20px;
  z-index: 9;
`;
const Card = styled.div`
  background-color: var(--bg-card);
  border-radius: 4px;
  padding: 24px;
  z-index: 9;
  position: relative;
`;
const Paragraph = styled.p`
  color: var(--primary-text) !important;
`;

// materials style
const Materials = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: ${(props) => (props.isodd ? 'flex-end' : 'flex-start')};
  z-index: 9;
`;
