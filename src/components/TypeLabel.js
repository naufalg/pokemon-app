import React from "react";
import styled from "@emotion/styled";

import { typeColor, mediaQuery } from "../globalStyles";

const LabelWrapper = styled.span`
  font-family: "VT323", monospace;
  text-transform: uppercase;
  display: flex;
  padding: 2px 5px;
  border-radius: 5px;
  margin-right: 3px;
  align-item: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  &:last-child {
    margin-right: 0px;
  }
`;

export default function TypeLabel({ typeName }) {
  console.log(typeName);
  return (
    <LabelWrapper
      style={{ color: "white", backgroundColor: typeColor[`${typeName}`] }}
    >
      {typeName}
    </LabelWrapper>
  );
}
