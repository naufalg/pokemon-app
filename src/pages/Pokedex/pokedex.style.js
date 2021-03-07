import styled from "@emotion/styled";
import { Container, mediaQuery } from "../../globalStyles";

const Wrapper = styled(Container)`
  justify-content: center;
  background: #7f7fd5;
  background: -webkit-linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  min-height: 100vh;
`;

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: flex-col;
  justify-content: center;
`;

const NavButton = styled.button`
  padding: 10px;
`;

const TitleSection = styled.div`
  padding: 20px;
  text-align: center;
`;

const PageButton = styled.button`
  margin: 20px 10px;
  padding: 10px;
`;

const ListWrapper = styled.div`
  display: grid;
  grid-gap: 0.8em;
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

export {
  Wrapper,
  PaginationWrapper,
  NavButton,
  TitleSection,
  PageButton,
  ListWrapper,
};
