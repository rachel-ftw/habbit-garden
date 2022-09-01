/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import colors from "../utils/colors";
interface IErrorTextProps {
  msg?: string;
}

const style = {
  container: css`
    padding: 5px 0;
    height: 20px;
  `,
  msg: css`
    color: ${colors.richRose};
    size: 10px;
  `,
};

const TextError = ({ msg }: IErrorTextProps) => {
  const hasMessage = msg !== undefined && msg?.length > 0;

  return (
    <div css={style.container}>
      {hasMessage && <span css={style.msg}>{msg}</span>}
    </div>
  );
};

export default TextError;
