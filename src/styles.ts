import { css } from "@emotion/react";

const determineRows = (a: boolean) =>
  a ? "65px 45px calc(100vh - 110px)" : "65px 0 calc(100vh - 65px)";

const styles = {
  layout: (isFullScreen: boolean) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: ${determineRows(isFullScreen)}
    height: 100%;
    grid-template-areas:
      "nav       nav"
      "game-nav  game-nav"
      "dailies   garden";
  `,
};

export default styles;
