import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { ListItem, Lists } from '../styles/Styles';

const Project = ({ data }) => {
  const { id, title, img, desc, refs, links } = data;
  const [isodd, setIsOdd] = useState(true);

  const evenOrOdd = (n) => {
    if (parseInt(n) % 2 !== 0) {
      setIsOdd(true);
    } else {
      setIsOdd(false);
    }
  };
  useEffect(() => evenOrOdd(id), []);
  return (
    <Layer>
      <SliceOne>
        {/* conditional rendering */}
        {isodd ? (
          <Link href='' traget='_blank'>
            <Image src={img} alt={title + 'Thumbnail'} />
          </Link>
        ) : (
          <Content isodd={isodd ? 1 : 0}>
            <p>Featured Project</p>
            <ProjectTitle>{title}</ProjectTitle>
            <Card>
              <Paragraph>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit quae
              </Paragraph>
            </Card>
            <Materials isodd={isodd ? 1 : 0}>
              <Lists>
                {refs.map((ref, i) => (
                  <ListItem key={i}>{ref}</ListItem>
                ))}
              </Lists>
            </Materials>
          </Content>
        )}
      </SliceOne>

      <SliceTwo>
        {/* conditional rendering */}
        {isodd ? (
          <Content isodd={isodd ? 1 : 0}>
            <p>Featured Project</p>
            <ProjectTitle>{title}</ProjectTitle>
            <Card>
              <Paragraph>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit quae
              </Paragraph>
            </Card>
            <Materials isodd={isodd ? 1 : 0}>
              <Lists>
                {refs.map((ref, i) => (
                  <ListItem key={i}>{ref}</ListItem>
                ))}
              </Lists>
            </Materials>
          </Content>
        ) : (
          <Link href='' traget='_blank'>
            <Image src='./images/nr.jpg' alt={title + 'Thumbnail'} />
          </Link>
        )}
      </SliceTwo>
    </Layer>
  );
};

export default Project;

const Layer = styled.div`
  position: relative;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-content: center;
  align-items: center;
  margin-bottom: 50px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const SliceOne = styled.div`
  position: relative;
  grid-column: 1 / 8;
  grid-row: 1 / 1;
`;
const SliceTwo = styled.div`
  position: relative;
  grid-column: 5 / -1;
  grid-row: 1 / 1;
  text-align: right;
`;
const Link = styled.a`
  display: block;
`;
const Image = styled.img`
  width: 100%;
  display: block;
  background-color: gray;
  min-height: 200px;
  max-height: 400px;
  border-radius: 5px;
  position: relative;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: '';
    background-color: #fff;
    z-index: 55;
  }
`;
const Content = styled.div``;
const ProjectTitle = styled.h3`
  margin-top: 10px;
`;
const Card = styled.div``;
const Paragraph = styled.p`
  z-index: 999;
  position: relative;
  background-color: #282020c3;
  color: #cabebede;
  border-radius: 4px;
  padding: 24px;
  margin: 30px 0;
`;
const Materials = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isodd ? 'flex-end' : 'flex-start')};
`;
