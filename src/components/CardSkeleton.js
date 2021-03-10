import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styled from "@emotion/styled";
import { mediaQuery } from "../globalStyles";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 0.8em;
  padding-top: 20px;
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

export default function CardSkeleton() {
  return (
    <SkeletonTheme color="#949494" highlightColor="#cccccc">
      <Wrapper>
        <Skeleton height={150} width={250} />
        <Skeleton height={150} width={250} />
        <Skeleton height={150} width={250} />
        <Skeleton height={150} width={250} />
      </Wrapper>
    </SkeletonTheme>
  );
}
