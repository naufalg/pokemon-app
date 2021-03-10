import styled from "@emotion/styled";

const ScrollTopWrap = styled.div`
  width: 50px;
  height: 50px;
  background: #fff;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: -150px;
  bottom: 40px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 999;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3);

  &.scroll-show {
    right: 40px;
    transition: 0.8s cubic-bezier(0.86, 0, 0.07, 1);
    transform: translateX(0);
    &:hover {
      transform: translateY(-25px);
      box-shadow: 4px 3px 8px rgba(0, 0, 0, 0.4);
    }
  }

  &.scroll-hide {
    right: -150px;
    transition: 0.8s cubic-bezier(0.86, 0, 0.07, 1);
    transform: translateX(-110%);
  }
`;

export { ScrollTopWrap };
