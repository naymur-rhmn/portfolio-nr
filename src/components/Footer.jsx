import React from 'react';
// styled components
import { Container } from '../styles/Styles';
import { styled } from 'styled-components';
// react icons
import {
  BsFacebook,
  BsGithub,
  BsTwitter,
  BsFillTelephoneFill,
} from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { TfiLinkedin } from 'react-icons/tfi';

const Footer = () => {
  return (
    <Wrap>
      <Container>
        <Content>
          <ContentWraper>
            <ContactInfo>
              {/* social links */}
              <SocialLinks>
                <Link href='#'>
                  <BsGithub />
                </Link>

                <Link href='#'>
                  <BsTwitter />
                </Link>
                <Link href='#'>
                  <TfiLinkedin />
                </Link>

                <Link href='#'>
                  <BsFacebook />
                </Link>
              </SocialLinks>

              {/* phone and email */}
              <ContactWraper>
                <Telephone>
                  <BsFillTelephoneFill />
                  {/* <a href='tel:+8801762750191'>+880-1762750191</a> */}
                  +880-1762750191
                </Telephone>

                <Email>
                  <MdEmail />
                  {/* <a href='mailto: naymurmn@gmail.com'>naymurmn@gmail.com</a> */}
                  naymurmn@gmail.com
                </Email>
              </ContactWraper>
            </ContactInfo>
          </ContentWraper>

          <Wraper>
            <Copyright>Copyright &copy; Naymur. All Rights Reserved.</Copyright>
          </Wraper>
        </Content>
      </Container>
    </Wrap>
  );
};

export default Footer;

// footer style
const Wrap = styled.footer`
  height: 100%;
  min-height: 100px;
  background-color: var(--bg-second);
`;

const Content = styled.div`
  height: 100%;
  min-height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  @media (max-width: 768px) {
    /* display: grid;
    grid-template-columns: 2fr 3fr;
    align-items: center; */
    flex-direction: column;
  }
  @media (max-width: 400px) {
    align-items: flex-start;
    padding: 0 5px;
    padding: 25px 0;
  }
`;

// content wraper
const Link = styled.a`
  transition: all.3s;
  display: inline-block;
  color: var(--primary-text);
  font-size: 18px;
  font-weight: bold;
  &:hover {
    color: var(--lightGreen);
  }
`;
const ContentWraper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  @media (max-width: 400px) {
    align-items: flex-start;
  }
`;
// links
const Telephone = styled.div`
  display: flex;
  align-items: center;
  color: var(--primary-text);
  gap: 2.5px;
  padding-bottom: 3px;
  font-size: 14px;
`;
const Email = styled(Telephone)`
  padding-top: 2.5px;
`;
const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
const Wraper = styled.div``;
const ContactWraper = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 5px;
  flex-wrap: wrap;
  @media (max-width: 376px) {
    gap: 2px;
  }
`;

// copyright
const Copyright = styled.p`
  font-size: 16px;
  @media (max-width: 768px) {
    /* text-align: center; */
    font-size: 14px;
  }
  @media (max-width: 400px) {
    text-align: left;
  }
`;
