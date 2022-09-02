import { css } from "@emotion/react";

const styles = {
  layout: css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 100px min-content 1f;
    grid-template-areas:
      "nav       nav"
      "game-nav  game-nav"
      "dailies   garden";
  `,
};

export default styles;
