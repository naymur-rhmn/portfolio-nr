import React from 'react';
import { styled } from 'styled-components';
import { ListItem, Lists } from '../styles/Styles';

const Navbar = () => {
  return (
    <Header>
      <Wraper>
        <Logo src='/images/logo.png' />
        <Nav>
          <Lists>
            <ListItem>oen</ListItem>
            <ListItem>oen</ListItem>
            <ListItem>oen</ListItem>
          </Lists>
        </Nav>
      </Wraper>
    </Header>
  );
};

export default Navbar;
const Header = styled.header`
  height: 100px;
  width: 100%;
  background-color: var(--bg-five);
`;
const Wraper = styled.div`
  max-width: 1280px;
  background-color: #aaaace;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

const Logo = styled.img`
  height: 70px;
  width: 70px;
  border: 2px solid black;
`;

const Nav = styled.nav`
  display: flex;
`;
