import styled from "@emotion/styled";
import { Container, mediaQuery } from "../../globalStyles";

const Wrapper = styled(Container)`
  justify-content: center;
  background: #7f7fd5;
  background: -webkit-linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  min-height: 100vh;
`;

const NavButton = styled.button`
  padding: 10px;
`;

const TitleSection = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
`;

const APILogo = styled.img`
  position: absolute;
  left: 88%;
  height: 50px;
  filter: drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.6));
  transition: 300ms;
  &:hover {
    cursor: pointer;
    filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 1));
  }
`;


const ListWrapper = styled.div`
  display: grid;
  grid-gap: 0.8em;
  padding: 15px 0;
  overflow: hidden;
  grid-template-columns: repeat(2, 1fr);
  ${mediaQuery[0]} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mediaQuery[1]} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${mediaQuery[2]} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export { APILogo, Wrapper, NavButton, TitleSection, ListWrapper };
