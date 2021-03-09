import styled from "@emotion/styled";

const NavbarWrapper = styled.nav`
  width: 100%;
  mask-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 5%,
    #ffffff 95%,
    rgba(255, 255, 255, 0) 100%
  );
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  z-index: 1000;
  margin-bottom: 15px;
`;

const ULists = styled.ul`
  text-align: center;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0) 100%
  );

  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1),
    inset 0 0 1px rgba(255, 255, 255, 0.6);

  &:hover {
    transition: 200ms;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.4) 25%,
      rgba(255, 255, 255, 0.4) 75%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

const List = styled.li`
  position: relative;
  display: inline-block;
`;

const Anchor = styled.a`
  padding: 18px;
  font-family: "Open Sans";
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
  font-size: 18px;
  font-weight: 600;

  text-decoration: none;
  display: block;
  transition: 200ms;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1),
      inset 0 0 1px rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.1);
    color: rgba(0, 0, 0, 1);
    cursor: pointer;
    font-weight: 800;
    letter-spacing: 0.1em;
  }
`;

const Badge = styled.span`
  position: absolute;
  top: 0px;
  font-size: 14px;
  right: -10px;
  padding: 1px 4px;
  border-radius: 50%;
  background: #cc0000;
  color: white;
  opacity: 1;
`;

export { NavbarWrapper, ULists, List, Anchor, Badge };
