import { css } from "@emotion/react";
import colors from "../../colors";

const styles = {
  container: css`
    grid-area: garden;
    background-color: ${colors.greenSageDark};
    height: calc(100vh - 100px);
    border-radius: 3px;
    padding: 0 20px;
  `,
};

export default styles;
