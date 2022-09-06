/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import colors from "../../utils/colors";
import useBuyPlant from "./use-buy-plant";
import plantImg from "./lil-plant.jpg";

interface IProps {
  name: string;
  image: string;
  cost: number;
  id: string;
}

const style = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${colors.black};
  border-radius: 3px;
  margin: 3px;
  padding: 5px;

  &:hover {
    background-color: ${colors.grey};
  }

  img {
    width: 50px;
  }

  p:first-of-type {
    font-weight: 600;
  }
`;

const Plant = ({ id, name, image, cost }: IProps) => {
  const buyPlant = useBuyPlant();

  return (
    <div css={style} onClick={buyPlant({ name, id })}>
      <img src={plantImg} alt={`${name} plant`} />
      <p>{name}</p>
      <p>{cost} units</p>
    </div>
  );
};

export default Plant;
