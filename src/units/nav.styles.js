import { css } from "@emotion/react";

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
    }
  `,
};

export default styles;
