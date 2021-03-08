import styled from "@emotion/styled";
import { Container, mediaQuery } from "../../globalStyles";

const Wrapper = styled(Container)`
  min-height: 100vh;
  background: #e52d27;
  background: -webkit-linear-gradient(to top, #b31217, #e52d27);
  background: linear-gradient(to top, #b31217, #e52d27);
`;

const Title = styled.p`
  text-align: center;
  color: white;
  font-weigh: bold;
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

export { Wrapper, ListWrapper, Title };
