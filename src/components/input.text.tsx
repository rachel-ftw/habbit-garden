/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import colors from "../utils/colors";
import { textInputInvalid } from "../utils/text-input-invalid";
import TextError from "./error.text";

const style = css`
  margin: 0 5px;
  padding: 7px;
  border: 1px solid ${colors.grey};
  border-radius: 3px;
`;

interface IProps {
  error?: string;
  labelText?: string;
  id: string;
  onChange?: any;
  value?: string;
}

const TextInput = ({ error, labelText, id, ...props }: IProps) => (
  <>
    {textInputInvalid(labelText) && <label htmlFor={id}>{labelText}</label>}
    <input css={style} type="input" id={id} {...props} />
    <TextError msg={error} />
  </>
);

export default TextInput;
