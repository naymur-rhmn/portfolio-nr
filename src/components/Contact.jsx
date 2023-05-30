import React, { useRef, useState } from 'react';
//emailjs
import emailjs from '@emailjs/browser';
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
import { GiCheckMark } from 'react-icons/gi';
import { TfiLinkedin } from 'react-icons/tfi';

const Contact = () => {
  const [result, setResult] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_coj52h3',
        'template_s310f8v',
        form.current,
        'fwUsdkE743MoDcsFn'
      )
      .then(
        (result) => {
          form.current.reset();
          setResult(true);
        },
        (error) => {
          setResult(false);
          setError(true);
        }
      );
    setTimeout(() => {
      setResult(false);
      setError(false);
    }, 3000);
  };

  return (
    <Wrap id='contact'>
      <Container>
        <ContactBody
          data-aos='fade'
          data-aos-easing='ease-in-out'
          data-aos-delay='300'
          data-aos-offset='50'
          data-aos-once='true'
        >
          <ContactForm
            ref={form}
            onSubmit={sendEmail}
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
            data-aos-delay='300'
            data-aos-offset='100'
            data-aos-once='true'
          >
            <input
              type='text'
              name='user_name'
              placeholder='Your Name'
              required
            />
            <input
              type='email'
              name='user_email'
              placeholder='Your Email'
              required
            />
            <textarea
              name='message'
              placeholder='Your Message'
              required
            ></textarea>
            <button type='submit' value='Send'>
              Send Message
            </button>
            <ReturnMessage>
              {result && (
                <p>
                  <GiCheckMark /> Message Sent Successfully!
                </p>
              )}
              {error && <p className='error'>Ops, Message not Sent!</p>}
            </ReturnMessage>
          </ContactForm>

          <ContactContent
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
            data-aos-delay='300'
            data-aos-offset='100'
            data-aos-once='true'
          >
            <ContactTitle>Contact</ContactTitle>
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
                    <BsTwitter />
                  </Link>
                  <Link href='#'>
                    <TfiLinkedin />
                  </Link>
                  <Link href='#'>
                    <BsGithub />
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
    padding-top: 3px;
    transition: all 0.3s ease-in-out;
  }
  & button:hover {
    background: #27e3c4f1;
    transition: all 0.3s ease-in-out;
    box-shadow: inset 9.55em 0 0 0 rgb(5, 251, 235);
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
    & button:hover {
      box-shadow: inset 8.19em 0 0 0 rgb(5, 251, 235);
      transition: all 0.3s ease-in-out;
    }
  }
`;
const ReturnMessage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 30px;
  margin-top: 10px;
  & p {
    /* background: #b6ebcb; */
    display: inline-block;
    border-radius: 5px;
    padding: 2px 14px;
    color: #1aab62;
    font-size: 14px;
    font-weight: 600;
  }
  & p.error {
    color: #f78787e7;
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
