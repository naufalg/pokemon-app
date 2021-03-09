import React, { useEffect, useState, useRef } from "react";
import { BsCaretUpFill } from "react-icons/bs";
import { ScrollTopWrap } from "./scrollTop.style";

const ScrollTop = () => {
  const [YPosition, setYPosition] = useState(window.scrollY);
  const btnRef = useRef();

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const scrollHandler = () => {
    setYPosition(window.scrollY);
  };

  useEffect(() => {
    window.onscroll = () => scrollHandler();

    return window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <ScrollTopWrap
      ref={btnRef}
      className={`scroll-to-top ${
        YPosition > 300 ? "scroll-show" : "scroll-hide"
      }`}
      onClick={scrollToTop}
    >
      <BsCaretUpFill />
    </ScrollTopWrap>
  );
};

export default ScrollTop;
