import { styled } from 'styled-components';
import { ListItem, Lists } from '../styles/Styles';
import { useState, useEffect } from 'react';
import { scroll } from '../scrollEffects/scroll';

const Navbar = () => {
  const { show } = scroll();

  return (
    <Header style={show ? style.active : style.hidden}>
      <Wraper>
        <a href='/'>
          <LogoWraper>
            <LogoRound>
              <Logo src='/images/logo.png' />
            </LogoRound>
          </LogoWraper>
        </a>
        <Nav>
          <Lists>
            <ListItem>
              <a href='#about'>
                <span>01.</span>About
              </a>
            </ListItem>
            <ListItem>
              <a href='#portfolio'>
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
                <div></div>
                <a
                  href='https://drive.google.com/file/d/176A8g7FTQVPQR9EyDOQdyo1jdX1AvFWB/view?usp=share_link'
                  target='_blank'
                >
                  Resume
                </a>
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
  position: fixed;
  top: 0;
  transition: all 0.5s ease-out;
  z-index: 100000;
  box-shadow: 0px -5px 10px green;
`;
const Wraper = styled.div`
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
  position: relative;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: '';
    background-color: var(--lightGreen);
    z-index: -1;
    border-radius: 5px;
  }
  & a {
    font-family: var(--firaCode);
    display: inline-block;
    border: 2px solid var(--lightGreen);
    background-color: var(--bg-first);
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
    color: var(--lightGreen);
    z-index: 999;
    cursor: pointer;
  }
  & a:hover {
    transform: translateX(-5px) translateY(-4px);
    color: var(--lightGreen);
  }
`;
