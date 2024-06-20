import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/images/icons8-scroll-up-48.png";
export default function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false);
  const toTop = () => {
    window.scrollTo({ top: 0 });
  };
  window.addEventListener("scroll", () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  });
  return (
    <ToTop onClick={toTop} scrollState={scrollState}>
      <img src={logo} alt="Go Top" />
    {/*   <p>Go Top</p> */}
    </ToTop>
  );
}

const ToTop = styled.div`
  display: ${({ scrollState }) => (scrollState ? "block" : "none")};
  position: fixed;
  cursor: pointer;
  z-index: 10;
  bottom: 1rem;
  right: 2rem;
  img {
    height: 3rem;
  }
  border-radius: 2rem;
 /*  background-color: #1900ff39; */
  padding: 1rem;
`;
