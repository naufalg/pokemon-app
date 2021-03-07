import styled from "@emotion/styled";
import { Container } from "../../globalStyles";

const Wrapper = styled(Container)`
  padding-bottom: 20px;
  background: #4ca1af;
  background: -webkit-linear-gradient(to top, #4ca1af, #c4e0e5);
  background: linear-gradient(to top, #4ca1af, #c4e0e5);
  min-height: 100vh;
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
  height: 20px;
  width: 50px;
`;

const DetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const Name = styled.p`
  align-text: center;
`;

const Image = styled.img`
  height: 300px;
  width: 300px;
`;

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Desc = styled.p``;

const CatchButton = styled.button`
  height: 40px;
  width: 60px;
`;

const SkeletonWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export {
  CatchButton,
  Desc,
  Image,
  InfoWrapper,
  DetailWrapper,
  ImageWrapper,
  NavButton,
  InnerWrapper,
  BackButton,
  Wrapper,
  DescWrapper,
  Name,
  SkeletonWrap
};
