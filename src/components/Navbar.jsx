import { styled } from 'styled-components';
import { ListItem, Lists } from '../styles/Styles';
import { useState } from 'react';
import { scroll } from '../scrollEffects/scroll';

const Navbar = () => {
  const { show } = scroll();
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
    console.log(toggle);
  };

  return (
    <Header className={`${show ? 'active' : 'hidden'}`}>
      <Wraper>
        <a href='/'>
          <Logo src='/images/nn-2.png' />
        </a>
        <Nav>
          <Lists className='lists'>
            <ListItem>
              <a
                href='#about'
                className='contact-me'
                data-aos='fade'
                data-aos-easing='ease-in-out'
                data-aos-delay='100'
                data-aos-offset='50'
                data-aos-once='true'
              >
                About
              </a>
            </ListItem>
            <ListItem>
              <a
                href='#portfolio'
                className='contact-me'
                data-aos='fade'
                data-aos-easing='ease-in-out'
                data-aos-delay='300'
                data-aos-offset='50'
                data-aos-once='true'
              >
                Portfolio
              </a>
            </ListItem>
            <ListItem>
              <a
                href='#contact'
                className='contact-me'
                data-aos='fade'
                data-aos-easing='ease-in-out'
                data-aos-delay='450'
                data-aos-offset='50'
                data-aos-once='true'
              >
                Contact
              </a>
            </ListItem>
            <ListItem>
              <div
                data-aos='fade'
                data-aos-easing='ease-in-out'
                data-aos-delay='500'
                data-aos-offset='50'
                data-aos-once='true'
              >
                <Button>
                  <a
                    href='https://drive.google.com/file/d/176A8g7FTQVPQR9EyDOQdyo1jdX1AvFWB/view?usp=share_link'
                    target='_blank'
                  >
                    Resume
                  </a>
                </Button>
              </div>
            </ListItem>
          </Lists>
          {/* hamburger icon */}
          <BurgerIcon onClick={handleClick} className={`${toggle && 'active'}`}>
            <span className='first'></span>
            <span className='second'></span>
            <span className='third'></span>
          </BurgerIcon>
          {/* hamburger menu */}
          <BurgerMenu className={`${toggle && 'showburger'}`}>
            <BurgerContainer>
              <BurgerRest
                onClick={() => setToggle((prev) => !prev)}
              ></BurgerRest>
              <BurgerItems>
                <ListItem>
                  <a href='#about' onClick={() => setToggle((prev) => !prev)}>
                    About
                  </a>
                </ListItem>
                <ListItem>
                  <a
                    href='#portfolio'
                    onClick={() => setToggle((prev) => !prev)}
                  >
                    Portfolio
                  </a>
                </ListItem>
                <ListItem>
                  <a href='#contact' onClick={() => setToggle((prev) => !prev)}>
                    Contact
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
              </BurgerItems>
            </BurgerContainer>
          </BurgerMenu>
        </Nav>
      </Wraper>
    </Header>
  );
};

export default Navbar;

const Header = styled.header`
  height: 90px;
  width: 100%;
  background-color: var(--bg-first);
  position: fixed;
  top: 0;
  transition: all 0.5s ease-out;
  z-index: 100000;
  box-shadow: 0px -5px 10px green;
  &.active {
    transform: translateY(0);
  }
  &.hidden {
    transform: translateY(-110px);
  }
  /* responsive style */
  @media (max-width: 768px) {
    height: 70px;
    &.hidden {
      transform: translateY(0);
    }
  }
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

const Logo = styled.img`
  height: 45px;
  width: 60px;
  padding-top: 5px;
  transform: rotate(1deg);
`;

// nav items
const Nav = styled.nav`
  display: flex;

  @media (max-width: 768px) {
    & .lists {
      display: none;
    }
  }
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

// hamburger menu button
const BurgerIcon = styled.button`
  display: none;
  margin-top: 8px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: all 0.25s;
  position: relative;
  background-color: transparent;
  border: none;
  z-index: 99;
  & span {
    position: absolute;
    top: 0;
    left: 0;
    width: 32px;
    height: 2px;
    background: var(--secondary-text);
    transform: rotate(0);
    transition: all 0.5s;
  }
  & span.second {
    transform: translateY(9px);
  }
  & span.third {
    transform: translateY(18px);
  }
  &.active {
    transform: rotate(90deg);
    transform: translateY(0px);
  }
  &.active span.first {
    transform: rotate(45deg) translateY(7px) translate(7px);
  }
  &.active span.second {
    display: none;
  }
  &.active span.third {
    transform: rotate(-45deg) translateY(7px) translate(-7px);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

// burger menu items
const BurgerMenu = styled.div`
  z-index: 1;
  position: fixed;
  right: 0;
  top: 0px;
  bottom: 0;
  height: 100vh;
  /* width: 100%; */
  /* background-color: var(--bg-first); */
  display: none;
  /* text-align: left; */
  transform: translateX(100%);
  visibility: hidden;
  transition: all.3s ease-in;

  @media (max-width: 768px) {
    display: block;
    &.showburger {
      transform: translateX(0);
      visibility: visible;
    }
  }
`;
const BurgerContainer = styled.div`
  /* display: flex; */
`;
const BurgerRest = styled.div`
  /* width: calc(100vw - 260px);
  background: rgba(0, 0, 0, 0.3);
  opacity: 1;
  opacity: 1;
  transition: opacity 0.3s ease 0s;
  height: 100vh;
  filter: blur(8px);
  -webkit-filter: blur(8px); */
`;
const BurgerItems = styled.div`
  width: min(75vw, 380px);
  background-color: var(--bg-first);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  box-shadow: -10px 0px 30px -15px var(--bg-card);

  filter: blur(0px);
  -webkit-filter: blur(0px);
  & > a {
    padding: 5px 50px;
  }
`;
