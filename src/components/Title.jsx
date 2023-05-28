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
  margin-bottom: 80px;

  & h2 {
    font-size: 34px;
    letter-spacing: 3px;
    text-transform: uppercase;
    position: relative;
    text-align: center;
    color: var(--secondary-text);
    grid-column: 1 / -1;
    grid-row: 1 / 1;
    /* responsive style */
    @media (max-width: 992px) {
      font-size: 30px;
      letter-spacing: 2px;
    }
    @media (max-width: 768px) {
      font-size: 26px;
      letter-spacing: 1px;
    }
  }
  & p {
    font-size: 110px;
    font-weight: 600;
    text-transform: uppercase;
    grid-column: 1 / -1;
    grid-row: 1 / 1;
    opacity: 0.2;
    letter-spacing: px;
    color: var(--primary-text);
    /* responsive style */
    @media (max-width: 992px) {
      font-size: clamp(80px, 10vw, 100px);
    }
    @media (max-width: 768px) {
      font-size: clamp(60px, 10vw, 80px);
    }
    @media (max-width: 672px) {
      font-size: clamp(30px, 10vw, 60px);
    }
  }
  & .border {
    height: 4px;
    width: 100px;
    background-color: var(--lightGreen);
    grid-column: 1 / -1;
    grid-row: 1 / 1;
    transform: translateY(30px);
    transition: all 0.5s ease-in;
  }
  /* responsive style */
  @media (max-width: 992px) {
    margin-bottom: 50px;
  }
`;
