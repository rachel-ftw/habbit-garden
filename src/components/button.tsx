/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import colors from "../colors";

interface IButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  text: string;
  onClick?: any;
  style?: any;
}

const global = css`
  padding: 5px 10px;
  background-color: ${colors.greenSage};
  color: ${colors.white};
  border-radius: 2px;
  border: 0;
  height: 30px;

  &:hover {
    background-color: ${colors.greenSageDark};
  }
`;

const Button = ({ type = "button", text, onClick, style }: IButtonProps) => (
  <button css={[global, style]} type={type} onClick={onClick}>
    {text}
  </button>
);

export default Button;
