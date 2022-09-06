/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import colors from "../../utils/colors";
import useBuyPlant from "./use-buy-plant";

interface IProps {
  name: string;
  image: string;
  cost: number;
  id: string;
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

const Plant = ({ id, name, image, cost }: IProps) => {
  const buyPlant = useBuyPlant();

  return (
    <div css={style} onClick={buyPlant({ name, id })}>
      <p>{name}</p>
      <p>{cost} units</p>
      <img src={image} alt={`${name} plant`} />
    </div>
  );
};

export default Plant;
