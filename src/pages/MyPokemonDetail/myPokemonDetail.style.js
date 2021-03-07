import styled from "@emotion/styled";
import { Container } from "../../globalStyles";

const Wrapper = styled(Container)`
  background: rgb(221, 24, 24);
  background: linear-gradient(
    315deg,
    rgba(221, 24, 24, 1) 0%,
    rgba(59, 0, 0, 1) 70%,
    rgba(22, 0, 0, 1) 100%
  );
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
  padding: 5px 10px;
`;

const Name = styled.p`
  align-text: center;
  color: white;
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

const Image = styled.img`
  height: 300px;
  width: 300px;
`;

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Desc = styled.p`
  color: white;
`;

const CatchButton = styled.button`
  padding: 20px 10px;
  border-radius: 20px;
`;

const Title = styled.p``;

export {
  CatchButton,
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
};
