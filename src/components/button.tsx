/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

interface IButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  text: string;
  onClick?: any;
  style?: any;
}

const global = css`
  padding: 5px 10px;
`;

const Button = ({ type = "button", text, onClick, style }: IButtonProps) => (
  <button css={[global, style]} type={type} onClick={onClick}>
    {text}
  </button>
);

export default Button;
