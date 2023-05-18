import { useEffect, useState } from 'react';

export const scroll = () => {
  const [show, setShow] = useState(true);
  const [scrollPos, setScrollPos] = useState({ scrollY: 0, prevScrollY: 0 });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleScroll = () => {
    const currentScrollPos = document.body.getBoundingClientRect().top;
    setScrollPos((prevPos) => {
      return { scrollY: currentScrollPos, prevScrollY: prevPos.scrollY };
    });
  };

  useEffect(() => {
    if (
      scrollPos.scrollY > scrollPos.prevScrollY ||
      scrollPos.scrollY >= -100
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [scrollPos]);

  return { show, scrollPos };
};
