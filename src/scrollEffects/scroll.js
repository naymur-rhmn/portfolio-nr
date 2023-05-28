import { useEffect, useState } from 'react';

export const scroll = () => {
  const [show, setShow] = useState(true);
  const [scrollPos, setScrollPos] = useState({ scrollY: 0, prevScrollY: 0 });
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      // clean up the event listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleScroll = () => {
    const currentScrollPos = document.body.getBoundingClientRect().top;
    setScrollPos((prevPos) => {
      return { scrollY: currentScrollPos, prevScrollY: prevPos.scrollY };
    });

    // get contact section by contact id from Contact me component
    const contactFormSection = document.getElementById('contact');

    // get contact section offsetTop value
    const contactFormPosition = contactFormSection.offsetTop;
    // set condition for show Button
    if (window.pageYOffset >= contactFormPosition - 500) {
      setShowButton(false); // Hide the button
    } else {
      setShowButton(true); // Show the button
    }
  };

  useEffect(() => {
    // set condition to sticky hero button
    if (
      scrollPos.scrollY > scrollPos.prevScrollY ||
      scrollPos.scrollY >= -100
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [scrollPos]);

  return { show, scrollPos, showButton };
};
