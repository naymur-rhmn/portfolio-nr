import React, { useEffect, useState } from 'react';
// styled components
import { styled } from 'styled-components';
import { Container } from '../styles/Styles';
// import components
import Title from './Title';
import Project from './Project';

const Projects = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    // get data
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);

  return (
    <Wrap id='portfolio'>
      <Container>
        <ProjectElements
          data-aos='fade-up'
          data-aos-easing='ease-in-out'
          data-aos-delay='100'
          data-aos-offset='50'
          data-aos-once='true'
        >
          <Title title='My Work' subTitle='Portfolio' />
          {/* map projectData to access every single item data  */}
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
  padding: 100px 0;
`;
