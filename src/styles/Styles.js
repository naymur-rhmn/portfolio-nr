import { styled } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 6rem;
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;

export const Lists = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  z-index: 555;
`;
export const ListItem = styled.li`
  list-style: none;
  font-family: var(--firaCode);
  color: var(--secondary-text);
  & a {
    color: var(--secondary-text);
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
  }
  & a:hover {
    color: var(--lightGreen);
  }
  & span {
    font-size: 18px;
    padding-right: 3px;
    letter-spacing: 2px;
  }
`;
