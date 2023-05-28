import { styled } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 6rem;
  @media (max-width: 768px) {
    padding: 0 2.5rem;
  }
  @media (max-width: 481px) {
    padding: 0 1.5rem;
  }
`;

export const Lists = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${(props) => (props.gap ? props.gap + 'px' : '40px')};
  z-index: 555;
  @media (max-width: 992px) {
    gap: ${(props) => (props.gap ? props.gap + 'px' : '35px')};
  }
  @media (max-width: 852px) {
    gap: ${(props) => (props.gap ? props.gap + 'px' : '20px')};
  }
`;
export const ListItem = styled.li`
  list-style: none;
  font-family: var(--firaCode);
  color: var(--secondary-text);
  & a {
    color: var(--secondary-text);
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 2px;
  }
  & a:hover {
    color: var(--lightGreen);
  }
  & span {
    font-size: 16px;
    padding-right: 3px;
    letter-spacing: 2px;
  }
  @media (max-width: 992px) {
    & a {
      font-size: 17px;
    }
    & span {
      font-size: 16px;
    }
  }
`;
