/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import colors from "../utils/colors";
import TextError from "./error.text";

const style = css`
  margin: 0 5px;
  padding: 7px;
  border: 1px solid ${colors.grey};
  border-radius: 3px;
`;

const TextInput = ({ error, text, id }: any) => (
  <>
    <label htmlFor={id}>{text}</label>:
    <input css={style} type="input" id={id} />
    <TextError msg={error} />
  </>
);

export default TextInput;
