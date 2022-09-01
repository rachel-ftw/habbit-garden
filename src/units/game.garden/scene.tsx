/** @jsxImportSource @emotion/react */

import { MAX_COLUMN, MAX_ROW } from "../../utils/constants";
import { createSlots } from "../../utils/grid-helpers";
import { Grid, Row, Tile } from "./grounds";
import { sceneStyles as styles } from "./styles";
import useGrid from "./use-grid";

const Scene = () => {
  const { row, col, handleClick } = useGrid();

  return (
    <div css={styles.container}>
      <Grid>
        {createSlots(MAX_ROW).map((_: any, rIndex: number) => (
          <Row key={rIndex}>
            {createSlots(MAX_COLUMN).map((_: any, tIndex: number) => (
              <Tile
                key={tIndex}
                onClick={handleClick(rIndex, tIndex)}
                plant={rIndex === row && tIndex === col}
              />
            ))}
          </Row>
        ))}
      </Grid>
    </div>
  );
};

export default Scene;
