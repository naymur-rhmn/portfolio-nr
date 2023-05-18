import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Container } from '../styles/Styles';
import Title from './Title';
import Project from './Project';

const Projects = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);

  return (
    <Wrap id='portfolio'>
      <Container>
        <ProjectElements>
          <Title title='My Work' subTitle='Portfolio' />
          {projectData.map((data) => (
            <Project key={data.id} data={data} />
          ))}
        </ProjectElements>
      </Container>
    </Wrap>
  );
};

export default Projects;

const Wrap = styled.section`
  background-color: var(--bg-second);
`;
const ProjectElements = styled.div`
  padding: 10vh 0;
`;
