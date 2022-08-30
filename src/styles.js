import { css } from "@emotion/react";

const styles = {
  layout: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 1f;
    grid-template-areas:
      "nav     nav"
      "dailies garden";
  `,

  nav: css`
    grid-area: nav;
  `,

  garden: css`
    grid-area: garden;
  `,

  dailies: css`
    grid-area: dailies;
  `,
};

export default styles;
