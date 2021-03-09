import styled from "@emotion/styled";
import { Container, mediaQuery } from "../../globalStyles";

const Wrapper = styled(Container)`
  min-height: 100vh;
  background: -webkit-linear-gradient(to bottom, #b31217, #e64a45);
  background: linear-gradient(to bottom, #b31217, #e64a45);
`;

const Title = styled.p`
  text-align: center;
  color: white;
  font-weigh: bold;
  font-family: "VT323", monospace;
`;

const CatchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CatchPokemon = styled.div`
  width: 75%;
  text-align: center;
  margin: auto;
  padding: 10px 40px;
  border-radius: 40px;
  font-family: "Nunito", sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #000;
  border: 4px solid #000;
  box-shadow: 0px 0px 0px 1px #000 inset;
  background-color: #fff;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out;
  ${mediaQuery[1]} {
    width: 30%;
  }

  &:hover {
    border: 4px solid #000;
    background-color: #cc0000;
    box-shadow: 0px 0px 0px 3px #666 inset;
    cursor: pointer;
    color: white;
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
  font-family: "VT323", monospace;
`;

const ListWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  ${mediaQuery[1]} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${mediaQuery[2]} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export { Wrapper, ListWrapper, Title, CatchPokemon, CatchWrapper };
