import { css } from "@emotion/react";
import colors from "../../utils/colors";
import { MAX_COLUMN, TILE_SIZE } from "../../utils/constants";

const styles = {
  container: (onSmallView: boolean) => css`
    grid-area: garden;
    ${onSmallView ? "grid-column: 1/-1;" : ""}
    background-color: ${colors.greenSageDark};
    height: 100%;
    border-radius: 3px;
    padding: 0 20px;
    overflow: scroll;
  `,
};

export const sceneStyles = {
  container: css`
    width: 100%;
    height: 100%;

    button {
      background: transparent;
    }
  `,
  grid: css`
    border: solid 1px rgba(34, 34, 34, 0.6);
    box-shadow: -3px 3px 12px rgba(34, 34, 34, 0.4);
    transform-style: preserve-3d;
    transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg);
    width: ${MAX_COLUMN * TILE_SIZE}px;
  `,
  row: css`
    height: ${TILE_SIZE}px;
    display: flex;
    pointer-events: none;
  `,
  tile: css`
    border: solid 1px rgba(34, 34, 34, 0.4);
    border-style: inset;
    height: ${TILE_SIZE}px;
    width: ${TILE_SIZE}px;
    pointer-events: auto;
    cursor: pointer;
    outline: none;

    &:hover {
      background-color: rgba(34, 34, 34, 0.2);
    }
  `,
  plant: css`
    height: ${TILE_SIZE}px;
    width: ${TILE_SIZE}px;
    background: rgba(34, 34, 34, 0.8);
    border: 1px solid rgba(34, 34, 34, 0.8);
    text-align: center;
  `,
};

export const libraryStyles = {
  titleContainer: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  rowContainer: css`
    background-color: ${colors.white};
    margin: 3px 0;
    border-radius: 3px;
    padding: 5px;
  `,

  row: css`
    display: flex;
    flex-direction: row;
    padding: 5px 0;
  `,
};

export default styles;
