import React from 'react';
import { styled } from 'styled-components';

const Title = ({ title, subTitle }) => {
  return (
    <TitleDiv>
      <p>{subTitle}</p>
      <h2>{title}</h2>
      <div className='border'></div>
    </TitleDiv>
  );
};

export default Title;
const TitleDiv = styled.div`
  height: 120px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  justify-items: center;
  margin-bottom: 120px;
  & h2 {
    font-size: 36px;
    letter-spacing: 4px;
    text-transform: uppercase;
    position: relative;
    text-align: center;
    color: var(--color-first);
    grid-column: 1 / -1;
    grid-row: 1 / 1;
  }
  & p {
    /* font-size: 120px; */
    font-size: 120px;
    font-weight: 600;
    text-transform: uppercase;
    grid-column: 1 / -1;
    grid-row: 1 / 1;
    opacity: 0.2;
    letter-spacing: px;
    color: var(--primary-text);
  }
  & .border {
    height: 4px;
    width: 100px;
    background-color: green;
    grid-column: 1 / -1;
    grid-row: 1 / 1;
    transform: translateY(30px);
    transition: all 0.5s ease-in;
  }
`;
