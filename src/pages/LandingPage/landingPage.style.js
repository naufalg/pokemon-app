import styled from "@emotion/styled";
import { Container, mediaQuery } from "../../globalStyles";
import wallpaper from "../../assets/pokeball-wallpaper.jpg";
import mobile from "../../assets/pokeball-mobile.jpg";

const Wrapper = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url(${mobile});
  background-repeat: no-repeat;
  background-size: cover;
  ${mediaQuery[1]} {
    background: url(${wallpaper});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const InnerWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const NavButton = styled.button`
  margin-bottom: 1em;

  @font-face {
    font-family: "Press Start 2p";
  }
  font-family: "Press Start 2p";
  text-align: center;
  font-size: 20pt;
  display: inline-block;
  font-weight: bold;
  padding: 10px 0 10px 10px;
  background-color: lightgray;
  text-shadow: -1px -1px black, 1px 1px white;
  color: gray;
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  -o-border-radius: 7px;
  border-radius: 7px;
  box-shadow: 0 0.2em gray;
  cursor: pointer;
  &:hover {
    box-shadow: none;
    position: relative;
    top: 0.2em;
  }
`;

const WM = styled.div`
  color: black;
  position: absolute;
  display: block;
  font-size: 7px;
  bottom: 0;
  text-align: center;
`;

const SocialIcon = styled.p`
  position: absolute;
  display: block;
  font-size: 25px;
  left: 50%;
  bottom: 5%;
  transition: 500ms;
  filter: drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.6));
  &:hover {
    cursor: pointer;
    filter: drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.9));
  }
`;

export { NavButton, Wrapper, InnerWrapper, WM, SocialIcon };
