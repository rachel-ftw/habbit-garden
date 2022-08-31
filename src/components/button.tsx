/** @jsxImportSource @emotion/react */

interface IButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  text: string;
  onClick?: any;
  style?: any;
}

const Button = ({ type = "button", text, onClick, style }: IButtonProps) => (
  <button css={style} type={type} onClick={onClick}>
    {text}
  </button>
);

export default Button;
