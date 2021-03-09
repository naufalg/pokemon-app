import styled from "@emotion/styled";
import pokeballTrans from "../../assets/pokeball-trans.png";

const CardWrapper = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  min-height: 70px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.27);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;

  &:hover {
    transform: translate(0, -10px);
    transition: 200ms;
    cursor: pointer;
    box-shadow: 4px 10px 20px 6px rgba(31, 38, 135, 0.37);
  }
`;

const InfoWrapper = styled.div``;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    content: "";
    background-image: url(${pokeballTrans});
    background-size: 20px 20px;
    background-repeat: no-repeat;
    position: absolute;
    top: 4%;
    right: 0%;
    bottom: 0%;
    left: 3%;
    opacity: 0.3;
  }
`;

const Image = styled.img`
  margin: auto;
`;

const Title = styled.p`
  padding: 5px;
  font-family: "VT323", monospace;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px 10px 0 0;
  color: white;
`;

const Desc = styled.p`
  text-align: center;
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-text: center;
  margin-bottom: 10px;
`;

export {
  LabelWrapper,
  Desc,
  Title,
  Image,
  ImageWrapper,
  InfoWrapper,
  CardWrapper,
};
