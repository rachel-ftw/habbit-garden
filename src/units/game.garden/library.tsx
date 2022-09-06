/** @jsxImportSource @emotion/react */

import { keys, prop } from "ramda";
import formatUnits from "../../utils/format-units";
import userGameData from "../../utils/mocks-plants";
import Plant from "./library.plant-card";
import { libraryStyles } from "./styles";

const { rowContainer, row, titleContainer } = libraryStyles;

const Library = () => {
  const { available, units } = userGameData;
  const plantKeys = keys(available);

  const makePlants = (props: any) => <Plant key={props.id} {...props} />;

  return (
    <>
      <div css={titleContainer}>
        <h2>library</h2>
        <p>available units: {formatUnits(units)}</p>
      </div>

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
