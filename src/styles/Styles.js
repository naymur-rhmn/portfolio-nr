import { styled } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  max-width: 1200px;
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
  gap: 15px;
`;
export const ListItem = styled.li`
  list-style: none;
`;
