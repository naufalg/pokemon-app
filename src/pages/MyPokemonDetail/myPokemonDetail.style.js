import styled from "@emotion/styled";
import { Container, mediaQuery } from "../../globalStyles";
import pokeballTrans from "../../assets/pokeball-trans.png";

const Wrapper = styled(Container)`
  background: rgb(221, 24, 24);
  background: linear-gradient(
    315deg,
    rgba(221, 24, 24, 1) 0%,
    rgba(59, 0, 0, 1) 70%,
    rgba(22, 0, 0, 1) 100%
  );
  min-height: 100vh;
  max-width: 100vw;
`;

const BackButton = styled.button`
  width: 50px;
  height: 30px;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`;

const NavButton = styled.button`
  padding: 10px 15px;
  font-family: "VT323", monospace;
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  cursor: pointer;
  display: absolute;
  border-radius: 50px;
  color: black;
  transition: 200ms;

  &:hover {
    transform: translateX(20px);

    &.left {
      transform: translateX(-20px);
    }
  }

  ${mediaQuery[1]} {
    display: flex;
  }
`;

const DetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${mediaQuery[1]} {
    flex-direction: row;
  }
`;

const Name = styled.p`
  align-text: center;
  color: white;
  font-family: "VT323", monospace;
  font-size: 1.5em;
`;

const InfoWrapper = styled.div`
  display: block;
  margin-right: 30px;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 200px;
  width: 200px;
  z-index: 2;
  ${mediaQuery[1]} {
    height: 300px;
    width: 300px;
  }
  margin: 20px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: 200ms;
  :hover {
    box-shadow: 0 8px 40px 2px rgba(31, 38, 135, 0.47);
  }
`;

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 15px;
  margin-top: 15px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: 200ms;
  :hover {
    box-shadow: 0 8px 40px 2px rgba(31, 38, 135, 0.47);
  }
  ${mediaQuery[2]} {
    width: 210px;
  }
`;

const Spacer = styled.div`
  padding-top: 10em;
`;

const Desc = styled.p`
  margin-top: 10px;
  &:first-child {
    margin-top: 0px;
  }
`;

const TypeWrapper = styled.div`
  margin-top: 10px;
  display: inline;
`;

const ULists = styled.ul`
  margin-top: 10px;
  list-style-position: inside;
  list-style-type: circle;
  text-transform: capitalize;
`;

const ReleaseButton = styled.button`
  padding: 10px 40px;
  border-radius: 40px;
  font-family: "VT323", monospace;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #000;
  border: 4px solid #000;
  box-shadow: 0px 0px 0px 1px #000 inset;
  background-color: #f8d030;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 4px solid #000;
    background-color: #f08030;
    box-shadow: 0px 0px 0px 3px #666 inset;
    cursor: pointer;
    letter-spacing: 0.15em;
  }

  span {
    transition: all 0.2s ease-out;
    z-index: 2;
  }
  &:hover span {
    letter-spacing: 0.13em;
    color: #000;
  }
  &:after {
    background: #fff;
    border: 0px solid #000;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.8;
    position: absolute;
    top: -50px;
    -webkit-transform: rotate(35deg);
    transform: rotate(35deg);
    width: 50px;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1); /*easeOutCirc*/
    z-index: 1;
  }
  &:hover:after {
    background: #fff;
    border: 20px solid #000;
    opacity: 0;
    left: 120%;
    -webkit-transform: rotate(40deg);
    transform: rotate(40deg);
  }
`;

const Title = styled.p``;

export {
  ReleaseButton,
  Desc,
  Image,
  InfoWrapper,
  DetailWrapper,
  NavButton,
  InnerWrapper,
  BackButton,
  Wrapper,
  Title,
  Name,
  DescWrapper,
  ImageWrapper,
  ULists,
  TypeWrapper,
  Spacer,
};
