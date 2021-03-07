import styled from "@emotion/styled";
import { Container } from "../../globalStyles";
import wallpaper from "../../assets/pokeball-wallpaper.jpg";

const Wrapper = styled(Container)`
  background: url(${wallpaper});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const InnerWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const NavButton = styled.button`
  &:last-child {
    margin-top: 1em;
  }
  @font-face {
    font-family: "Press Start 2p";
  }
  font-family: "Press Start 2p";
  text-align: center;
  font-size: 30pt;
  display: inline-block;
  margin: 5px;
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

export { NavButton, Wrapper, InnerWrapper };
