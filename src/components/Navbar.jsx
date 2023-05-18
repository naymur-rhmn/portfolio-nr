import { styled } from 'styled-components';
import { ListItem, Lists } from '../styles/Styles';
import { useState, useEffect } from 'react';
import { scroll } from '../scrollEffects/scroll';

const Navbar = () => {
  const { show } = scroll();

  return (
    <Header style={show ? style.active : style.hidden}>
      <Wraper>
        <LogoWraper>
          <LogoRound>
            <Logo src='/images/logo.png' />
          </LogoRound>
        </LogoWraper>
        <Nav>
          <Lists>
            <ListItem>
              <a href='#about'>
                <span>01.</span>About
              </a>
            </ListItem>
            <ListItem>
              <a href=''>
                <span>02.</span>Experience
              </a>
            </ListItem>
            <ListItem>
              <a href=''>
                <span>03.</span>Work
              </a>
            </ListItem>
            <ListItem>
              <a href=''>
                <span>04.</span>Contact
              </a>
            </ListItem>
            <ListItem>
              <Button>
                <a href=''>Resume</a>
              </Button>
            </ListItem>
          </Lists>
        </Nav>
      </Wraper>
    </Header>
  );
};

export default Navbar;

const style = {
  active: { transform: 'translateY(0)' },
  hidden: { transform: 'translateY(-110px)' },
};

const Header = styled.header`
  height: 100px;
  width: 100%;
  background-color: var(--bg-first);
  /* background-color: transparent; */
  position: fixed;
  top: 0;
  transition: all 0.5s ease-out;
  z-index: 100000;
  box-shadow: 0px -5px 10px green;
`;
const Wraper = styled.div`
  /* max-width: 1480px; */
  /* background-color: #aaaace; */
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5vw;
`;

// logo style
const LogoWraper = styled.div`
  height: 55px;
  width: 55px;
  border: 2px dashed green;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(45deg);
  background-color: green;
  padding: 2px;
  border-radius: 10px;
`;
const LogoRound = styled.div`
  height: 45px;
  width: 45px;
  border: 1px dashed white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(45deg);
  background-color: #5ab34b;
`;
const Logo = styled.img`
  height: 50px;
  width: 50px;
  transform: rotate(-126deg) translateX(2px);
`;

// nav items
const Nav = styled.nav`
  display: flex;
`;
const Button = styled.div`
  & a {
    font-family: var(--firaCode);
    display: inline-block;
    border: 1px solid black;
    padding: 7px 13px;
    border-radius: 4px;
  }
`;
