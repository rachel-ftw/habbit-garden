/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import colors from "../../utils/colors";

interface IProps {
  name: string;
  image: string;
  cost: number;
}

const style = css`
  border: 1px solid ${colors.black};
  border-radius: 3px;
  margin: 3px;
  padding: 5px;

  &:hover {
    background-color: ${colors.grey};
  }
`;

const Plant = ({ name, image, cost }: IProps) => (
  <div css={style}>
    <p>{name}</p>
    <p>{cost} units</p>
    <img src={image} alt={`${name} plant`} />
  </div>
);

export default Plant;
