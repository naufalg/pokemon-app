import styled from "@emotion/styled";
import { Container, mediaQuery } from "../../globalStyles";

const Wrapper = styled(Container)`
  overflow: hidden;
  min-height: 100vh;
  background-image: linear-gradient(
    135deg,
    rgba(255, 255, 255, 1) 3%,
    rgba(235, 158, 98, 1) 34.6%,
    rgba(177, 10, 10, 1) 63.7%,
    rgba(0, 0, 0, 1) 102%
  );
  z-index: 1000;
`;

const Title = styled.p`
  text-align: center;
  color: black;
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
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1); 
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

const ClearButton = styled.button`
  text-align: right;
  margin: 10px;
  border-radius: 40px;
  font-family: "VT323", monospace;
  font-size: 22px;
  padding: 10px 20px;
  border: none;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
  background-color: #f8d030;
  color: black;
  transition: 300ms;
  &:hover {
    background-color: #cc0000;
    box-shadow: 0px 0px 0px 3px #000 inset;
    cursor: pointer;
    color: white;
  }
`;

export { Wrapper, ListWrapper, Title, CatchPokemon, CatchWrapper, ClearButton };
