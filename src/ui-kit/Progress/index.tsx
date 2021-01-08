import React from "react";
import styled from "styled-components";

interface ProgressProps {
  current: number;
  max: number;
  onClick?: () => void;
  text?: string;
}

interface StyledProgressProps {
  isCursorPointer: boolean;
}
const StyledProgress = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 4px;
  padding: 6px;
  background-color: #422a62;
  box-sizing: border-box;
  position: relative;
  cursor: ${({ isCursorPointer }: StyledProgressProps) =>
    isCursorPointer ? "pointer" : "auto"};
`;

const ProgressHighlight = styled.div`
  height: 100%;
  width: ${({ current, max }: ProgressProps) =>
    Math.floor((current * 100) / max)}%;
  background-color: ${({ current, max }: ProgressProps) =>
    current === max ? "#18d288" : "#6f6bee"};
`;

const ProgressText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #241d4b;
  font-weight: bold;
`;

export default function Progress({
  text,
  current,
  max,
  onClick,
}: ProgressProps) {
  return (
    <StyledProgress isCursorPointer={!!onClick}>
      <ProgressHighlight
        current={current}
        max={max}
        onClick={() => onClick && onClick()}
      ></ProgressHighlight>
      {text && <ProgressText>{text}</ProgressText>}
    </StyledProgress>
  );
}
