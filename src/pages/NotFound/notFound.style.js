import styled from "@emotion/styled";
import { mediaQuery } from "../../globalStyles";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 0;
  min-height: 100vh;
`;

const Picture = styled.img`
  margin: 2vh auto 4vh;
  max-width: 1400px;
  width: 70%;
  ${mediaQuery[1]} {
    width: 50%;
  }
`;

const Caption = styled.p`
  font-size: clamp(1rem, 0.3333rem + 2.963vw, 3rem);
`;

const BackButton = styled.button`
  margin-top: 20px;
  margin-bottom: 100px;
  padding: 15px 20px;
  border-radius: 40px;
  font-family: "VT323", monospace;
  font-size: clamp(1rem, 0.6667rem + 1.4815vw, 2rem);
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #000;
  border: 4px solid #000;
  box-shadow: 0px 0px 0px 1px #000 inset;
  background-color: #78c850;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out;
  z-index: 2;

  &:hover {
    border: 4px solid #000;
    background-color: #98d8d8;
    box-shadow: 0px 0px 0px 3px #666 inset;
    cursor: pointer;
    letter-spacing: 0.15em;
    color: black;
  }
`;

export { Wrapper, Picture, Caption, BackButton };
