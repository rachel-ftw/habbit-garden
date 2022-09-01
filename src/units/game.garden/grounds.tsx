/** @jsxImportSource @emotion/react */

import { sceneStyles as styles } from "./styles";

export const Grid = ({ children }: any) => (
  <div css={styles.grid}>{children}</div>
);

export const Row = ({ children }: any) => (
  <div css={styles.row}>{children}</div>
);

export const Tile = ({ plant, onClick = () => {} }: any) => (
  <button css={styles.tile} onClick={onClick}>
    {plant && <div css={styles.plant}>🍄</div>}
  </button>
);
