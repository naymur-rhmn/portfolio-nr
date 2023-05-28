import React from 'react';
// styled components
import { styled } from 'styled-components';
import { Container } from '../styles/Styles';
// react icons
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsFillTelephoneFill,
} from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <Wrap id='contact'>
      <Container>
        <ContactBody>
          <ContactForm action=''>
            <input type='text' placeholder='Your Name' />
            <input type='email' placeholder='Your Valid email' />
            <textarea placeholder='Your Message'></textarea>
            <button>Send Message</button>
          </ContactForm>

          <ContactContent>
            =<ContactTitle>Contact</ContactTitle>
            <ContactTitleTwo>Me</ContactTitleTwo>
            {/* content Wraper */}
            <ContentWraper>
              <p>Let's Connect and Bring Your Vision to Life.</p>

              <ContactInfo>
                <Telephone>
                  +880-176-2750191
                  <BsFillTelephoneFill />
                </Telephone>

                <Email>
                  naymurmn@gmail.com
                  <MdEmail />
                </Email>

                <SocialLinks>
                  <Link href='#'>
                    <BsFacebook />
                  </Link>
                  <Link href='#'>
                    <BsGithub />
                  </Link>
                  <Link href='#'>
                    <BsLinkedin />
                  </Link>
                  <Link href='#'>
                    <BsTwitter />
                  </Link>
                </SocialLinks>
              </ContactInfo>
            </ContentWraper>
          </ContactContent>
        </ContactBody>
      </Container>
    </Wrap>
  );
};

export default Contact;

// Wrap style
const Wrap = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--bg-third);
  @media (max-width: 992px) {
    padding: 160px 0;
  }
  @media (max-width: 892px) {
    padding: 100px 0;
  }
  @media (max-width: 672px) {
    padding: 40px 0;
  }
`;

const ContactBody = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 0 40px;
  }
  @media (max-width: 672px) {
    padding: 0 10px;
  }
`;
// contact form
const ContactForm = styled.form`
  flex: 1;
  width: 50%;
  & input {
    width: 100%;
    margin-bottom: 1.5rem;
    font-size: 16px;
    font-family: var(--inter);
    padding: 16px 8px;
    background-color: transparent;
    color: white;
    border: none;
    border-bottom: 1px solid var(--lightGreen);
    outline: none;
  }
  & textarea {
    width: 100%;
    height: 100%;
    min-height: 100px;
    font-family: var(--inter);
    padding: 16px 8px;
    font-size: 16px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--lightGreen);
    outline: none;
    color: white;
  }
  & button {
    border: none;
    background-color: var(--lightGreen);
    color: var(--bg-card);
    font-size: 17px;
    font-weight: 600;
    margin-top: 1.8rem;
    cursor: pointer;
    border-radius: 50px;
    height: 60px;
    width: 220px;
    text-transform: uppercase;
    display: block;
  }
  @media (max-width: 992px) {
    & button {
      font-size: 16px;
      height: 55px;
      width: 200px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    & button {
      font-size: 16px;
      height: 55px;
      width: 180px;
    }
  }
`;

// content area
const ContactContent = styled.div`
  flex: 1;
  text-align: right;
  & p {
    margin-top: 30px;
    padding-left: 160px;
  }
  @media (max-width: 992px) {
    & p {
      padding-left: 20px;
    }
  }
  @media (max-width: 768px) {
    text-align: left;
  }
`;
const ContactTitle = styled.h2`
  font-size: 36px;
  letter-spacing: 4px;
  text-transform: uppercase;
  position: relative;
  color: var(--secondary-text);
  @media (max-width: 992px) {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    font-size: 26px;
  }
`;
const ContactTitleTwo = styled(ContactTitle)`
  position: relative;
  &::before {
    position: absolute;
    right: 75px;
    top: 50%;
    height: 3px;
    width: 125px;
    content: '';
    background-color: var(--lightGreen);
  }
  @media (max-width: 768px) {
    margin-bottom: 35px;
    &::before {
      left: 75px;
      right: 0;
    }
  }
  @media (max-width: 672px) {
    &::before {
      width: 100px;
      left: 50px;
      right: 0;
    }
  }
`;
const ContentWraper = styled.div`
  @media (max-width: 992px) {
    & p {
      padding-left: 40px;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const ContactInfo = styled.div``;
const Telephone = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: var(--secondary-text);
  gap: 10px;
  margin-top: 15px;
`;
const Email = styled(Telephone)``;
// links
const SocialLinks = styled.div`
  display: flex;
  gap: 18px;
  justify-content: flex-end;
  margin-top: 25px;
`;
const Link = styled.a`
  transition: all.3s;
  display: inline-block;
  color: var(--secondary-text);
  font-size: 24px;
  font-weight: bold;
  &:hover {
    color: var(--lightGreen);
  }
`;
