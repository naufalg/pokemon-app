import styled from "@emotion/styled";
import pokeballTrans from "../../assets/pokeball-trans.png";

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px 5px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  -webkit-animation: scaledown 250ms linear;
  -moz-animation: scaledown 250ms linear;
  animation: scaledown 250ms linear;
  transform-origin: 50% 50%;
  animation-fill-mode: forwards;

  &:hover {
    z-index: 100;
    -webkit-animation: scale 150ms linear;
    -moz-animation: scale 150ms linear;
    animation: scale 150ms linear;
    transform-origin: 50% 50%;
    animation-fill-mode: forwards;
    cursor: pointer;
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.08);
      -webkit-box-shadow: 10px 10px 60px 10px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 10px 10px 60px 10px rgba(0, 0, 0, 0.1);
      box-shadow: 10px 10px 60px 10px rgba(0, 0, 0, 0.1);
    }
  }

  @keyframes scaledown {
    0% {
      transform: scale(1.08);
    }
    100% {
      transform: scale(1);
    }
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
    background-size: 25px 25px;
    background-repeat: no-repeat;
    position: absolute;
    top: 80%;
    right: 0%;
    bottom: 0%;
    left: 3%;
    opacity: 0.3;
  }
`;

const Image = styled.img`
  margin: auto;
`;

const Title = styled.p``;

const Desc = styled.p``;

export { CardWrapper, InfoWrapper, ImageWrapper, Image, Title, Desc };
