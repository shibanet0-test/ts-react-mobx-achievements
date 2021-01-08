import React from "react";
import styled from "styled-components";

type ButtonType = "green" | "text";

interface ButtonProps {
  type?: ButtonType;
}

const dictionaryBackgroundColor = {
  default: "transparent",
  green: "#6ad389",
  text: "transparent",
};

function getBackgroundColor(type: ButtonType | undefined) {
  return dictionaryBackgroundColor[type || "default"];
}

const dictionaryColor = {
  default: "#846e99",
  green: "#1f1d3a",
  text: "#846e99",
};

function getColor(type: ButtonType | undefined) {
  return dictionaryColor[type || "default"];
}

const Button = styled.div`
  display: inline-block;
  cursor: pointer;
  font-weight: bold;
  padding: 20px;
  border-radius: 6px;
  background-color: ${({ type }: ButtonProps) => getBackgroundColor(type)};
  color: ${({ type }: ButtonProps) => getColor(type)};
`;

export default React.memo(Button);
