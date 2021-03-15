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

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const PageButton = styled.button`
  margin: 0 15px;
  height: 40px;
  width: 95px;
  font-family: "VT323", monospace;
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  display: absolute;
  border: none;
  border-radius: 50px;
  color: black;
  transition: 200ms;

  &:hover {
    transform: translateX(20px);

    &.left {
      transform: translateX(-20px);
    }
  }
`;

const FormInput = styled.form`
  display: flex;
  flex-direction: row;
  &:focus {
    outline: none;
  }
`;

const PageInput = styled.input`
  font-family: "VT323", monospace;
  border-radius: 10px 0 0 10px;
  font-size: 18px;
  text-align: center;
  height: 35px;
  width: 50px;
  border: none;
  transition: 200ms;
  &:focus {
    outline: none;
    border: 2.5px solid #f08030;
  }
`;

const GoToPage = styled.button`
  font-family: "VT323", monospace;
  font-size: 24px;
  border-radius: 0 10px 10px 0;
  padding: 0 5px;
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
`;

const APILogo = styled.img`
  position: absolute;
  left: 87%;
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

export {
  Wrapper,
  PaginationWrapper,
  NavButton,
  TitleSection,
  PageButton,
  ListWrapper,
  APILogo,
  FormInput,
  PageInput,
  GoToPage,
};
