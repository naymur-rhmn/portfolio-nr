import React from 'react';
import { styled } from 'styled-components';

const Title = () => {
  return (
    <TitleDiv>
      <h2>
        <span>01.</span>About Me
      </h2>
    </TitleDiv>
  );
};

export default Title;
const TitleDiv = styled.div`
  h2 {
    margin-bottom: 50px;
    font-size: clamp(26px, 4vw, 32px);
    position: relative;
  }
  h2::after {
    position: absolute;
    top: 50%;
    left: 220px;
    content: '';
    height: 1px;
    width: 32%;
    background-color: black;
  }
  h2 span {
    font-size: 26px;
    margin-right: 10px;
    font-family: var(--firaCode);
  }
`;
