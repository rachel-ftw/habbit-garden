import { css } from "@emotion/react";
import colors from "../../utils/colors";

const style = {
  container: css`
    grid-area: game-nav;
    grid-column: 1 / -1;
    display: flex;
    flex-direction: row;
  `,
  button: (selected: boolean) => css`
    ${!selected &&
    `
      color: ${colors.black};
      background-color: ${colors.white}
    `}
  `,
};

export default style;
