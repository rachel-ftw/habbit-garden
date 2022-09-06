/** @jsxImportSource @emotion/react */

import { keys, prop } from "ramda";
import userGameData from "../../utils/mocks-plants";
import Plant from "./library.plant-card";
import { libraryStyles } from "./styles";

const { rowContainer, row } = libraryStyles;

const Library = () => {
  const { available } = userGameData;
  const plantKeys = keys(available);

  const makePlants = ({ id, name, image, cost }: any) => (
    <Plant key={id} name={name} image={image} cost={cost} />
  );

  return (
    <>
      <h2>library</h2>
      {plantKeys.map((type: any) => (
        <div css={rowContainer}>
          <h3>{type}</h3>
          <div css={row}>{prop(type, available).map(makePlants)}</div>
        </div>
      ))}
    </>
  );
};

export default Library;
