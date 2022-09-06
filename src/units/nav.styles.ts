import { css } from "@emotion/react";
import colors from "../utils/colors";

const styles = {
  container: css`
    grid-area: nav;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    > a {
      font-family: "Noto Serif Balinese", serif;
      font-size: 28px;
      color: ${colors.black};
      cursor: pointer;
    }
  `,

  link: css`
    color: ${colors.black};
    padding: 10px;
    border: 1px solid ${colors.greenSage};
    border-radius: 3px;
    margin-right: 5px;
    font-size: 16px;
  `,
};

export default styles;
